import { preparePulitzerData } from './prepare-pulitzer-data';

export const prerender = true;

export const load = async () => {
	return { pulitzerData: preparePulitzerData('2003') };
};
