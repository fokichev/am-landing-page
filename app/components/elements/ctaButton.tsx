import styles from "./ctaButton.module.scss";

interface CtaButtonProps {
	children: React.ReactNode;
	href?: string;
	colour: "dark" | "light";
	outline?: boolean;
}

export default function CtaButton({ children, href = "/", colour, outline }: CtaButtonProps) {
	return (
		<a href={href} className={`${styles.ctaButton} ${styles[`ctaButton--${colour}`]} ${outline ? styles[`ctaButton--${colour}--outline`] : ""}`}>
			{children}
		</a>
	);
}
