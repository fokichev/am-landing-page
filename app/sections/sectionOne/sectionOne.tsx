import Image from "next/image";
import styles from "./sectionOne.module.scss";

import CtaButton from "@/app/components/elements/ctaButton";
import ArrowSVG from "@/app/components/elements/arrowSVG";

export default function SectionOne() {
	const imgSizes = { width: 81, height: 56 };
	return (
		<section className={styles.sectionOne}>
			<div className="container">
				<div className={styles.content}>
					<h1 className={styles.heading}>
						<div className={`${styles["heading__phrase"]}`}>
							<div className={`${styles["heading__phrase__word"]}`}>
								<span>Modern</span>
								<span className={`${styles["heading__phrase__word--mobile"]}`}>&</span>
								<Image src="/icon-heading-1.svg" alt="Speedometer" {...imgSizes} className={`${styles["heading__phrase__word--desktop"]}`} />
							</div>
							<div className={`${styles["heading__phrase__word"]}`}>
								<Image src="/icon-heading-1.svg" alt="Speedometer" {...imgSizes} className={`${styles["heading__phrase__word--mobile"]}`} />
								<span className={`${styles["heading__phrase__word--desktop"]}`}>&</span>
								<span>versatile</span>
							</div>
						</div>
						<div className={`${styles["heading__phrase"]}`}>
							<div className={`${styles["heading__phrase__word"]} ${styles["heading__phrase__word--reverse"]}`}>
								<Image src="/icon-heading-2.svg" alt="Database" {...imgSizes} />
								<span>HubSpot</span>
							</div>
							<div className={`${styles["heading__phrase__word"]}`}>
								<Image src="/icon-heading-3.svg" alt="Two arrows" {...imgSizes} />
								<span>theme</span>
								<Image src="/icon-heading-4.svg" alt="Looking glass" {...imgSizes} />
							</div>
						</div>
					</h1>
					<h4>Subheading example text</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<div className={styles.ctaButtons}>
						<CtaButton colour="light" outline />
						<CtaButton colour="dark" />
					</div>
				</div>
			</div>
		</section>
	);
}
