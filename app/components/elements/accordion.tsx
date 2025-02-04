"use client";
import React, { createContext, useContext, useState } from "react";
import styles from "./accordion.module.scss";

interface AccordionProps {
	items: {
		title: string;
		content: string;
	}[];
}

function IconPlus() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
			<path
				d="M8 12H16M12 8V16M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
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
					<div className={styles["accordion__item__trigger"]} onClick={() => toggleActive(index)}>
						{item.title}
						<div className={styles[`accordion__item__trigger__icon${active === index ? "--rotate" : ""}`]}>
							<IconPlus />
						</div>
					</div>
					<div className={styles[`accordion__item__content${active === index ? "--active" : ""}`]}>{item.content}</div>
				</div>
			))}
		</div>
	);
}
