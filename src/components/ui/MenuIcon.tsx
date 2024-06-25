export default function MenuIcon({
	viewBox = ["9", "0", "24", "24"],
}: {
	viewBox?: [string, string, string, string];
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox={`${viewBox.reduce((acc, value) => acc + " " + value)}`}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4 6h16M4 12h16M4 18h16"
			></path>
		</svg>
	);
}
