import Link from "next/link";
import styles from "./ctaButton.module.scss";

interface CtaButtonProps {
	children: React.ReactNode;
	href?: string;
	colour: "dark" | "light";
	outline?: boolean;
	tabIndex?: -1 | 0;
}

export default function CtaButton({ children, href = "/", colour, outline, tabIndex }: CtaButtonProps) {
	return (
		<Link
			href={href}
			className={`${styles.ctaButton} ${styles[`ctaButton--${colour}`]} ${outline ? styles[`ctaButton--${colour}--outline`] : ""}`}
			{...(tabIndex ? { tabIndex } : {})}
		>
			{children}
		</Link>
	);
}
