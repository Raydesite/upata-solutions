import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
//import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	vite: {
		ssr: {
			noExternal: ['react-hook-form' /*, 'other-lib-you-need'*/],
		},
	},
});
