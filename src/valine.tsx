import React from 'react';

import type {ValineOptions} from '.';

const valineOptions = [
	'el',
	'appId',
	'appKey',
	'placeholder',
	'path',
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

export type ValineProps = Partial<
	Omit<ValineOptions, 'el'> &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
>;

export default function Valine(props: ValineProps): React.ReactElement {
	const ref = React.useRef(null);
	const others = {};

	for (const key in props) {
		if (!valineOptions.includes(key)) {
			others[key] = props[key];
		}
	}

	React.useEffect(() => {
		const valineOptions = window.valineOptions;

		if (ref.current) {
			buildValine({
				...valineOptions,
				...props,
				el: ref.current,
			});
		}
	}, [props, ref]);

	return <div ref={ref} {...others} />;
}
