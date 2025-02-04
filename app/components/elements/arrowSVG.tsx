import styles from "./arrowSVG.module.scss";

export default function ArrowSVG({ hover }: { hover?: boolean }) {
	return (
		<svg className={styles.arrow} width="24" height="24" viewBox="0 0 24 24" fill="none">
			<path
				d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
				className={styles[`arrow__square${hover ? "--hover" : ""}`]}
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 12H16M16 12L12 16M16 12L12 8"
				className={styles[`arrow__icon${hover ? "--hover" : ""}`]}
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
