
import {Amazon} from './amazon';
import {Config} from '../../config';
import {NewEgg} from './newegg';
import {Store} from './store';
import {Phanteks} from './phanteks';

const masterList = new Map([
	[Amazon.name, Amazon],
	[NewEgg.name, NewEgg],
	[Phanteks.name, Phanteks]
]);

const list = new Map();

for (const name of Config.store.stores) {
	list.set(name, masterList.get(name));
}

export const Stores = Array.from(list.values()) as Store[];

export * from './store';
