import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'DaG ─ developer';
	const description = "Hey 👋 I'm Chris, a developer for Magnimont";

	return {
		title,
		description,
		canonical: `https://dag.killyourself.lol/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'dag',
			url: `https://dag.killyourself.lol/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: './public/favicon.png',
					alt: description,
					// width: 1280,
					// height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@_daglaroglou_',
			site: '@_daglaroglou_',
		},
		...props,
	};
}
