import Valine from "./valine";

export interface ValineOptions {
	el: string | HTMLElement;
	appId: string;
	appKey: string;
	placeholder?: string;
	path?: string;
	avatar?:
		| ''
		| 'mp'
		| 'identicon'
		| 'monsterid'
		| 'wavatar'
		| 'retro'
		| 'robohash'
		| 'hide';
	meta?: ('nick' | 'mail' | 'link')[];
	pageSize?: number;
	lang?: string;
	langMode?: Record<string, string>;
	visitor?: boolean;
	highlight?: boolean;
	avatarForce?: boolean;
	recordIP?: boolean;
	serverURLs?: string;
	emojiCDN?: string;
	emojiMaps?: Record<string, string>;
	enableQQ?: boolean;
	requiredFields?: ['nick'] | ['nick', 'mail'];
}

export default Valine

declare global {
	interface Window {
		valineOptions: Partial<ValineOptions>;
	}
}