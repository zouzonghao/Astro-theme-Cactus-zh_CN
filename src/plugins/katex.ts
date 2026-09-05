import katex from "katex";
// mhchem 扩展：在 katex 实例上注册 \ce（化学方程式）与 \pu（物理单位）宏
import "katex/dist/contrib/mhchem.mjs";
import type { MdastPluginDefinition } from "satteri";

// 公式错误时渲染为红色原文提示，而不是让构建失败
const options = { throwOnError: false } as const;

export function satteriKatexPlugin(): MdastPluginDefinition {
	return {
		name: "cactus-katex",
		math(node) {
			return { rawHtml: katex.renderToString(node.value, { ...options, displayMode: true }) };
		},
		inlineMath(node) {
			return { rawHtml: katex.renderToString(node.value, { ...options, displayMode: false }) };
		},
	};
}
