export default function ArrowSVG({ className }: { className?: string }) {
	return (
		<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
			<path
				d="M8 12H16M16 12L12 16M16 12L12 8M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
