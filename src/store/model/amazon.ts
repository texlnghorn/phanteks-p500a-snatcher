import {Store} from './store';

export const Amazon: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['add to cart']
		}
	},
	links: [
		{
			brand: 'TEST',
			model: 'CARD',
			series: 'debug',
			url: 'https://www.amazon.com/dp/B07TTDW37F'
		},
		{
			brand: 'phanteks',
			model: 'p500a',
			series: 'black',
			url: 'https://www.amazon.com/dp/B088T3VMKK'
		},
		{
			brand: 'phanteks',
			model: 'p500a',
			series: 'white',
			url: 'https://www.amazon.com/dp/B088T78MJT'
		}
	],
	name: 'amazon'
};
