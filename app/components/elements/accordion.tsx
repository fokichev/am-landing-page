"use client";
import { useState } from "react";
import styles from "./accordion.module.scss";

interface AccordionProps {
	items: {
		title: string;
		content: string;
	}[];
}

function IconPlus({ active }: { active: boolean }) {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles["accordion__item__trigger__icon"]}>
			<path
				d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 12H16M12 8V16"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className={`${styles["accordion__item__trigger__icon__plus"]} ${active ? styles["accordion__item__trigger__icon__plus--rotate"] : ""}`}
			/>
		</svg>
	);
}

export default function Accordion({ items }: AccordionProps) {
	const [active, setActive] = useState<number | null>(null);
	const toggleActive = (index: number) => setActive((prev) => (prev === index ? null : index));
	return (
		<div aria-orientation="vertical" className={styles.accordion}>
			{items.map((item, index) => (
				<div className={styles["accordion__item"]} key={index}>
					<button className={styles["accordion__item__trigger"]} onClick={() => toggleActive(index)} aria-expanded={active === index} type="button">
						{item.title}
						<IconPlus active={active === index} />
					</button>
					<div className={styles[`accordion__item__content${active === index ? "--active" : ""}`]}>{item.content}</div>
				</div>
			))}
		</div>
	);
}
