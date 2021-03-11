export type LinkTarget = "_self" | "_blank" | "normal";

export interface LinkItem {
	id: number;
	name: string;
	href: string;
	target?: LinkTarget;
}

export const links: LinkItem[] = [
	{ id: 1, href: "/", name: "Home" },
	{ id: 2, href: "#", name: "About Us" },
	{ id: 3, href: "#", name: "Services" },
	{ id: 4, href: "#", name: "Pricing" },
	{ id: 5, href: "#", name: "Carees" },
];
