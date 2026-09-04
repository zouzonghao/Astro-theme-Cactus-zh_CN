import type { APIRoute } from "astro";

// CMS 登录入口：跳转到 GitHub 授权页（与 astro-decap-cms-oauth 的 /oauth 等价）
export const prerender = false;

export const GET: APIRoute = ({ redirect }) => {
	const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
	if (!clientId) {
		return new Response(
			"缺少环境变量 OAUTH_GITHUB_CLIENT_ID，请在 Vercel 项目设置中配置后重新部署。",
			{ status: 500 },
		);
	}

	const params = new URLSearchParams({
		client_id: clientId,
		scope: "repo,user",
	});

	return redirect(`https://github.com/login/oauth/authorize?${params}`);
};
