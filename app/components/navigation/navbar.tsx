"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.scss";
import CtaButton from "../elements/ctaButton";
import { useState } from "react";

function BurgerSVG({ open, toggleOpen }: { open?: boolean; toggleOpen: () => void }) {
	const lineClass = `${styles.hamburger__line} ${open === undefined ? "" : open ? styles["hamburger__line--open"] : styles["hamburger__line--closed"]}`;
	return (
		<button onClick={toggleOpen} tabIndex={0} aria-expanded={open} aria-label={`${open ? "Hide" : "Show"} menu`}>
			<svg className={styles.hamburger} width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path className={lineClass} d="M4 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path className={lineClass} d="M4 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</button>
	);
}

function ChevronSVG({ open }: { open: boolean }) {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16 10L12 14L8 10"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className={`${styles.sidebar__content__list__item__chevron} ${open ? styles["sidebar__content__list__item__chevron--open"] : ""}`}
			/>
		</svg>
	);
}
export default function Navbar() {
	const links = [
		{ name: "Home", href: "#" },
		{ name: "Services", href: "#" },
		{ name: "About", href: "#" },
		{ name: "Resources", href: "#" },
	];

	const [open, setOpen] = useState<boolean | undefined>();
	const [openChevron, setOpenChevron] = useState<number | null>(null);
	return (
		<nav className={styles["navbar-container"]}>
			<div className={styles.navbar}>
				<div className={`${styles.navbar__content} container`}>
					<Link href="/" aria-label="Back to home">
						<Image src="/logo.svg" alt="Company logo" width={147} height={40} />
					</Link>
					<ul className={styles.navbar__list}>
						{links.map((link, index) => (
							<li key={index} className={styles.navbar__list__item}>
								<Link href={link.href} aria-label={`Link to ${link.name} page`}>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
					<div className={styles.navbar__cta}>
						<CtaButton colour="dark" />
					</div>

					<div className={styles["navbar__hamburger-wrapper"]}>
						<BurgerSVG open={open} toggleOpen={() => setOpen(!open)} />
					</div>
				</div>
			</div>
			<div className={`${styles.sidebar} ${open ? styles["sidebar--open"] : ""} container`}>
				<div className={`${styles.sidebar__content}`}>
					<ul className={styles.sidebar__content__list}>
						{links.map((link, index) => (
							<li key={index} className={styles.sidebar__content__list__item} onClick={() => setOpenChevron(openChevron === index ? null : index)}>
								<Link href="#" aria-label={`Link to ${link.name} page`} tabIndex={open ? 0 : -1}>
									{link.name}
								</Link>
								<ChevronSVG open={openChevron === index} />
							</li>
						))}
					</ul>
					<div className={styles.sidebar__content__cta}>
						<CtaButton colour="light" tabIndex={open ? 0 : -1} />
					</div>
				</div>
			</div>
		</nav>
	);
}
