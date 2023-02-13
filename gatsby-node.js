exports.pluginOptionsSchema = ({Joi}) => {
	return Joi.object({
		el: Joi.string().description(
			'The DOM element to be mounted on initialization. It can be a CSS selector string or an actual HTMLElement.',
		),
		appId: Joi.string().description('Application appId from Leancloud.'),
		appKey: Joi.string().description('Application appKey from Leancloud.'),
		placeholder: Joi.string().description('Comment box placeholders.'),
		path: Joi.string().description(
			'Article path(just like duoshuo thread).',
		),
		pure: Joi.boolean()
			.default(false)
			.description(
				'For custom styles. If true, plugin will build valine without default styles.',
			),
		avatar: Joi.string().valid(
			'',
			'mp',
			'identicon',
			'monsterid',
			'wavatar',
			'retro',
			'robohash',
			'hide',
		),
		meta: Joi.array()
			.items(Joi.string().valid('nick', 'mail', 'link'))
			.description('Reviewer attributes.'),
		pageSize: Joi.number().description('Number of pages per page.'),
		lang: Joi.string().description('Multilingual support.'),
		langMode: Joi.object().description(
			'Custom language, see <https://valine.js.org/en/i18n.html>.',
		),
		visitor: Joi.boolean().description('Article reading statistics.'),
		highlight: Joi.boolean().description(
			"Code highlighting, it's enabled by default, please close it selectively.",
		),
		avatarForce: Joi.boolean().description(
			'Each time you access forced pulls the latest avatar.',
		),
		recordIP: Joi.boolean().description('Record reviewer IP.'),
		serverURLs: Joi.string().description(
			'This configuration is suitable for domestic custom domain name users, overseas version will be automatically detected (no need to manually fill in) v1.3.10+',
		),
		emojiCDN: Joi.string().description(
			'Set Emoji Pack CDN, refer to [Custom Emoji](https://valine.js.org/en/emoji.html)',
		),
		emojiMaps: Joi.object().description(
			'Set Emoji Packet Mapping, refer to [Custom Emoji](https://valine.js.org/en/emoji.html)',
		),
		enableQQ: Joi.boolean().description(
			'Whether to enable the Nickname box to automatically get QQ Nickname and QQ Avatar, the default is off, you need the blogger/webmaster to actively enable.',
		),
		requiredFields: Joi.array()
			.items(Joi.string().valid('nick', 'mail'))
			.description('Set required fields, default anonymous.'),
	});
};
