export interface SiteConfig {
	author: string;
	date: {
		options: Intl.DateTimeFormatOptions;
	};
	description: string;
	lang: string;
  ogLocale: string;
  showLogo: boolean;
	title: string;
	url: string;
}

export interface PaginationLink {
	srLabel?: string;
	text?: string;
	url: string;
}

export interface SiteMeta {
	articleDate?: string | undefined;
	description?: string;
	ogImage?: string | undefined;
	title: string;
	noindex?: boolean | undefined;
}

export type AdmonitionType = "tip" | "note" | "important" | "caution" | "warning";
