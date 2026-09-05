import type { Config } from "tailwindcss";

export default {
	plugins: [require("@tailwindcss/typography")],
	theme: {
		extend: {
			typography: () => ({
				DEFAULT: {
					css: {
						a: {
							textUnderlineOffset: "2px",
							"&:hover": {
								"@media (hover: hover)": {
									textDecorationColor: "var(--color-link)",
									textDecorationThickness: "2px",
								},
							},
						},
						blockquote: {
							borderLeftWidth: "0",
						},
						code: {
							color: "var(--color-code-text)",
							backgroundColor: "var(--color-code-bg)",
							padding: "2px 4px",
							borderRadius: "4px",
							fontSize: "0.9em",
							fontWeight: "400",
						},
						"code::before": {
							content: "none",
						},
						"code::after": {
							content: "none",
						},
						"a code, h1 code, h2 code, h3 code, h4 code, blockquote code, thead th code": {
							color: "var(--color-code-text)",
						},
						kbd: {
							"&:where([data-theme='dark'], [data-theme='dark'] *)": {
								background: "var(--color-global-text)",
							},
						},
						hr: {
							borderTopStyle: "dashed",
						},
						strong: {
							fontWeight: "700",
						},
						sup: {
							marginInlineStart: "calc(var(--spacing) * 0.5)",
							a: {
								"&:after": {
									content: "']'",
								},
								"&:before": {
									content: "'['",
								},
								"&:hover": {
									"@media (hover: hover)": {
										color: "var(--color-link)",
									},
								},
							},
						},
						/* Table（参考 glog 样式：内容自适应宽度并居中、圆角边框、宽表格可横向滚动） */
						table: {
							display: "block",
							width: "max-content",
							maxWidth: "100%",
							marginInline: "auto",
							marginTop: "1.8em",
							marginBottom: "1.8em",
							overflowX: "auto",
							border: "1px solid var(--color-table-border)",
							borderRadius: "8px",
							fontSize: "0.9rem",
							// 提高优先级以覆盖 typography 对首/末列表头去内边距的默认值及 sm 预设的零散 padding
							"& th, & td": {
								padding: "0.75em 1em",
							},
							// 覆盖 prose-headings:text-accent-2 对表头的染色，贴合 glog 的正文色表头
							"& th": {
								color: "inherit",
							},
						},
						thead: {
							borderBottomWidth: "none",
						},
						"thead th": {
							color: "inherit",
						},
						"tbody tr": {
							borderBottomWidth: "none",
						},
						"th, td": {
							borderBottom: "1px solid var(--color-table-border)",
							borderRight: "1px solid var(--color-table-border)",
							textAlign: "center",
						},
						th: {
							backgroundColor: "var(--color-table-th-bg)",
							borderBottomWidth: "2px",
						},
						"td:last-child, th:last-child": {
							borderRight: "none",
						},
						"tr:last-child td": {
							borderBottom: "none",
						},
						'th[align="center"], td[align="center"]': {
							"text-align": "center",
						},
						'th[align="right"], td[align="right"]': {
							"text-align": "right",
						},
						'th[align="left"], td[align="left"]': {
							"text-align": "left",
						},
						".expressive-code, .admonition, .github-card": {
							marginTop: "calc(var(--spacing)*4)",
							marginBottom: "calc(var(--spacing)*4)",
						},
					},
				},
				sm: {
					css: {
						code: {
							fontSize: "0.9em",
						},
					},
				},
			}),
		},
	},
} satisfies Config;
