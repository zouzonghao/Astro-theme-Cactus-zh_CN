import { readFileSync } from "node:fs";
import { type AstroExpressiveCodeOptions, pluginFramesTexts } from "astro-expressive-code";
import type { SiteConfig } from "@/types";

// 汉化 Expressive Code 代码块的内置文案（复制按钮等）
// 注意：从 astro-expressive-code 导入以保证与 EC 核心使用同一模块实例
pluginFramesTexts.addLocale("zh-CN", {
	terminalWindowFallbackTitle: "终端窗口",
	copyButtonTooltip: "复制代码",
	copyButtonCopied: "已复制！",
});

/**
 * CMS 后台（/admin →「站点设置」）编辑的数据文件 content/settings/site.json，
 * 构建时读取并与下方各默认值合并，字段缺省时回退默认值。
 */
interface SiteSettings {
	url?: string;
	title?: string;
	author?: string;
	description?: string;
	showLogo?: boolean;
	menu?: { path: string; title: string }[];
}

function loadSiteSettings(): SiteSettings {
	try {
		// astro dev/build/preview 与 Vercel 构建的 cwd 均为项目根目录；
		// 不能用 new URL(..., import.meta.url)，Vite 打包时会把它重写到产物目录导致读不到源文件
		return JSON.parse(
			readFileSync(`${process.cwd()}/content/settings/site.json`, "utf8"),
		) as SiteSettings;
	} catch {
		// 文件不存在或格式损坏时使用默认值，保证构建不中断
		return {};
	}
}

const settings = loadSiteSettings();

const defaultConfig: SiteConfig = {
	// 网站地址（后台「站点设置」可修改，不带末尾斜杠也可），用于 astro.config.ts、RSS、sitemap 等
	url: "https://cactus.343700.xyz/",
	/*
		- 用作 <title> 与 og:site_name（src/components/BaseHead.astro）
		- webmanifest 的 name（astro.config.ts）
		- 页头链接文字（src/components/layout/Header.astro）
		- 页脚文字（src/components/layout/Footer.astro）
	*/
	title: "仙人掌博客",
	// 用于页脚版权（Footer.astro）、meta author 与 OG 分享图署名
	author: "仙人掌",
	// 用作默认 meta description 与 webmanifest description
	description: "一个基于 Astro 的个人博客，记录技术与生活",
	// HTML lang 属性（Base.astro），同时决定全站日期格式（utils/date.ts）、
	// webmanifest 语言与 Pagefind 搜索界面语言
	lang: "zh-CN",
	// og:locale meta 属性（BaseHead.astro）
	ogLocale: "zh_CN",
	// 是否在页头显示 Logo 文字（后台「站点设置」可开关）
	showLogo: true,
	// 日期格式化参数（src/utils/date.ts），跟随 lang="zh-CN" 输出如「2026年9月5日」
	date: {
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};

export const siteConfig: SiteConfig = {
	...defaultConfig,
	url: settings.url ?? defaultConfig.url,
	title: settings.title ?? defaultConfig.title,
	author: settings.author ?? defaultConfig.author,
	description: settings.description ?? defaultConfig.description,
	showLogo: settings.showLogo ?? defaultConfig.showLogo,
};

// 用于生成页头与页脚的导航链接（后台「站点设置 → 导航菜单」可覆盖）
const defaultMenuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "首页",
	},
	{
		path: "/about/",
		title: "关于",
	},
	{
		path: "/posts/",
		title: "文章",
	},
	{
		path: "/notes/",
		title: "笔记",
	},
];

export const menuLinks: { path: string; title: string }[] = settings.menu?.length
	? settings.menu
	: defaultMenuLinks;

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// 界面文案语言（配合上方的 pluginFramesTexts 中文文案）
	defaultLocale: "zh-CN",
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		// return default selector
		return `[data-theme="${theme.name}"]`;
	},
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};
