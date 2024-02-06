import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
	root: resolve(__dirname, 'src'),
	build: {
		outDir: resolve(__dirname, 'dist'),
		emptyOutDir: false,
	},
	plugins: [
		handlebars({
			context: {
				title: 'Веб мессенджер',
				links: [
					{
						href: '/sign-in',
						text: 'Вход',
					},
				],
			},
			partialsDirectory: resolve(__dirname, './src/components'),
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import './src/styles/index.scss'`,
			},
		},
	},
});
