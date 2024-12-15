import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

function removeDupsAndLowerCase(array: string[]) {
	return [...new Set(array.map((str) => str.toLowerCase()))];
}

const baseSchema = z.object({
	title: z.string().max(60),
});

const post = defineCollection({
	loader: glob({ base: "./src/content/post", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		baseSchema.extend({
			description: z.string(),
			coverImage: z
				.object({
					alt: z.string(),
					src: image(),
				})
				.optional(),
			draft: z.boolean().default(false),
			ogImage: z.string().optional(),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
		}),
});

const note = defineCollection({
	loader: glob({ base: "./src/content/note", pattern: "**/*.{md,mdx}" }),
	schema: baseSchema.extend({
		description: z.string().optional(),
		publishDate: z
			.string()
			// .datetime({ offset: true }) // Ensures ISO 8601 format with offsets allowed (e.g. "2024-01-01T00:00:00Z" and "2024-01-01T00:00:00+02:00")
			// .transform((val) => new Date(val)),
      .refine((val) => {
				// 修改：解析自定义格式的日期字符串
				const datePattern = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
				return datePattern.test(val);
			}, "Invalid date format. Expected YYYY-MM-DD HH:mm")
			.transform((val) => {
				const [datePart, timePart] = val.split(" ");
				if (!datePart || !timePart) {
					throw new Error("Invalid date format. Expected YYYY-MM-DD HH:mm");
				}
				const [year, month, day] = datePart.split("-");
				const [hour, minute] = timePart.split(":");
				if (!year || !month || !day || !hour || !minute) {
					throw new Error("Invalid date format. Expected YYYY-MM-DD HH:mm");
				}
				return new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
			}),
	}),
});

export const collections = { post, note };
