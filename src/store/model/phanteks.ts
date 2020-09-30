import {Store} from './store';

export const Phanteks: Store = {
	labels: {
		inStock: {
			container: '#addToCartText-product-template',
			text: ['add to cart']
		}
	},
	links: [
		{
			brand: 'TEST',
			model: 'CARD',
			series: 'debug',
			url: 'https://www.phanteksusa.com/collections/eclipse-series/products/phanteks-eclipse-p400a-digital-atx-mid-tower-mesh-front-panel-tempered-glass-digital-rgb-white'
		},
		{
			brand: 'phanteks',
			model: 'p500a',
			series: 'black',
			url: 'https://www.phanteksusa.com/collections/eclipse-series/products/phanteks-eclipse-p500a-d-rgb-black?variant=32150627483703'
		},
		{
			brand: 'phanteks',
			model: 'p500a',
			series: 'white',
			url: 'https://www.phanteksusa.com/collections/eclipse-series/products/phanteks-eclipse-p500a-d-rgb-white?variant=32150629679159'
		}
	],
	name: 'phanteks'
};
