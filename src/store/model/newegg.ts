import {Store} from './store';

export const NewEgg: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['are you a human?']
		},
		inStock: {
			container: '#landingpage-cart .btn-primary span',
			text: ['add to cart']
		}
	},
	links: [
		{
			brand: 'TEST',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16811854087',
			model: 'CARD',
			series: 'debug',
			url: 'https://www.newegg.com/white-phanteks-eclipse-p400a-atx-mid-tower/p/N82E16811854087'
		},
		{
			brand: 'phanteks',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16811854101',
			model: 'p500a',
			series: 'black',
			url: 'https://www.newegg.com/black-phanteks-eclipse-p500a-atx-mid-tower/p/N82E16811854101'
		},
		{
			brand: 'phanteks',
			cartUrl: 'https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=N82E16811854100',
			model: 'p500a',
			series: 'white',
			url: 'https://www.newegg.com/white-phanteks-eclipse-p500a-atx-mid-tower/p/N82E16811854100'
		}
	],
	name: 'newegg'
};
