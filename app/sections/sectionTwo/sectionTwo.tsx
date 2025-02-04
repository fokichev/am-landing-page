import styles from "./sectionTwo.module.scss";
import CtaButton from "@/app/components/elements/ctaButton";
import Accordion from "@/app/components/elements/accordion";

function AccordionImage({ className }: { className?: string }) {
	return (
		<div
			className={`${styles["content__image"]} ${className ? styles[`content__image${className}`] : ""}`}
			title="Woman sitting in recliner working on her laptop"
		/>
	);
}

export default function SectionTwo() {
	const accordionItems = new Array(3).fill({
		title: `Question one`,
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.`,
	});

	return (
		<section className={styles.sectionTwo}>
			<div className="container">
				<div className={styles.content}>
					<AccordionImage className="--tablet" />
					<div className={styles["content__column"]}>
						<div className={styles["content__column__text"]}>
							<h3>Modern & versatile HubSpot theme</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
							<CtaButton colour="light" />
						</div>
						<AccordionImage />
						<Accordion items={accordionItems} />
					</div>
				</div>
			</div>
		</section>
	);
}
