import React from 'react';

import type {ValineOptions, ValineProps} from '.';

const valineOptions = [
	'el',
	'appId',
	'appKey',
	'placeholder',
	'path',
	'pure', // For plugin
	'avatar',
	'meta',
	'pageSize',
	'lang',
	'langMode',
	'visitor',
	'highlight',
	'avatarForce',
	'recordIP',
	'serverURLs',
	'emojiCDN',
	'emojiMaps',
	'enableQQ',
	'requiredFields',
];

const buildValine = async (options: Partial<ValineOptions>) => {
	const RealValine = (await import('valine')).default;
	new RealValine(options);
};

const buildPureValine = async (options: Partial<ValineOptions>) => {
	const RealValine = (await import('valine/dist/Valine.Pure.min')).default;
	new RealValine(options);
};

/**
 * Valine component
 * @returns React Element
 */
export default function Valine(props: ValineProps): React.ReactElement {
	const ref = React.useRef(null);
	const others = {};

	for (const key in props) {
		if (!valineOptions.includes(key)) {
			others[key] = props[key];
		}
	}

	React.useEffect(() => {
		const options = {...window.valineOptions, ...props};

		if (ref.current) {
			if (options.pure) {
				buildPureValine({
					...options,
					el: ref.current,
				});
			} else {
				buildValine({
					...options,
					el: ref.current,
				});
			}
		}
	}, [props, ref]);

	// other props will transfer to div
	return <div ref={ref} {...others} />;
}
