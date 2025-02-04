"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./ctaButton.module.scss";
import ArrowSVG from "./arrowSVG";

interface CtaButtonProps {
	href?: string;
	colour: "dark" | "light";
	outline?: boolean;
	tabIndex?: -1 | 0;
}

export default function CtaButton({ href = "/", colour, outline, tabIndex }: CtaButtonProps) {
	const [hover, setHover] = useState(false);
	return (
		<Link
			href={href}
			onMouseOver={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className={`${styles.ctaButton} ${styles[`ctaButton--${colour}`]} ${outline ? styles[`ctaButton--${colour}--outline`] : ""}`}
			{...(tabIndex ? { tabIndex } : {})}
		>
			<ArrowSVG hover={hover} />
			Call to action
		</Link>
	);
}
