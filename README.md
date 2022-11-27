# gatsby-plugin-valine-comment

[![npm version](https://badge.fury.io/js/gatsby-plugin-valine-comment.svg)](https://badge.fury.io/js/gatsby-plugin-valine-comment)

Yet another Gatsby plugin for [Valine](https://valine.js.org/en/) comment system.

[中文文档](https://github.com/Talaxy009/gatsby-plugin-valine-comment/blob/main/README-zh.md)

## ✨ Features

This plugin help you use Valine comment system more easy in your website.

- Pure wrapping of the latest Valine with React Hooks API
- Support all options of Valine
- Written in TypeScript

## 🚚 Installation

```shell
npm install gatsby-plugin-valine-comment
```

or

```shell
yarn add gatsby-plugin-valine-comment
```

This plugin requires **React v16.8** or above.

## 🔦 Usage

0. If you don't have AppId and AppKey of LeanCloud, check this document [here](https://valine.js.org/en/quickstart.html#Get-APP-ID-and-APP-Key)

1. Enable the plugin in your gatsby-config.js

    ```js
    // In your gatsby-config.js
    plugins: [
        {
            resolve: `gatsby-plugin-valine-comment`,
            options: {
                // plugin options here
                appId: 'LEANCLOUD_APP_ID',
                appKey: 'LEANCLOUD_APP_KEY',
            },
        },
    ];
    ```

2. Use `<Valine />` component in your page code

    ```jsx
    import React from 'react';
    import Valine from 'gatsby-plugin-valine-comment';

    export default function Page({location}) {
        return (
            <Layout>
                <Valine path={location.pathname} /*component options here*/ />
            </Layout>
        );
    }
    ```

    Plugin options and component options are same. You can put common options (e.g. `appId`, `appKey`, `avatar`) in plugin options, some options (e.g. `path`) that you want to set separately for certain pages can be placed in component options. The options will be merged and the options from the component will have higher priority.

After that, you should be able to add and see comments on your website.

## 🔧 Options

| Name           | Type      | Default                            | Description                                            |
| -------------- | --------- | ---------------------------------- | ------------------------------------------------------ |
| appId          | `string`  | `null`                             | Application appId from Leancloud                       |
| appKey         | `string`  | `null`                             | Application appKey from Leancloud                      |
| placeholder    | `string`  | `Just go go`                       | Comment box placeholders                               |
| path           | `string`  | `window.location.pathname`         | Article path(just like duoshuo thread)                 |
| avatar         | `string`  | `mp`                               | Avatar, <https://valine.js.org/en/avatar.html>         |
| meta           | `array`   | `['nick','mail','link']`           | Reviewer attributes                                    |
| pageSize       | `bumber`  | `10`                               | Number of pages per page                               |
| lang           | `string`  | `zh-CN`                            | Multilingual support                                   |
| langMode       | `object`  | `null`                             | Custom language, <https://valine.js.org/en/i18n.html>  |
| visitor        | `boolean` | `false`                            | Article reading statistics                             |
| highlight      | `boolean` | `true`                             | Code highlighting                                      |
| avatarForce    | `boolean` | `false`                            | Each time you access forced pulls the latest avatar    |
| recordIP       | `boolean` | `false`                            | Record reviewer IP                                     |
| serverURLs     | `string`  | `http[s]://[tab/us].avoscloud.com` | For domestic custom domain name users                  |
| emojiCDN       | `string`  |                                    | Emoji Pack CDN, <https://valine.js.org/en/emoji.html>  |
| emojiMaps      | `object`  | `null`                             | Emoji Packet Mapping                                   |
| enableQQ       | `boolean` | `false`                            | Whether to automatically get QQ Nickname and QQ Avatar |
| requiredFields | `array`   | `[]`                               | Set required fields, default anonymous                 |

For more detail, see <https://valine.js.org/en/configuration.html>

## 💡 Why I write this plugin

- Existing plugins are obsolete and no longer maintained
- For fun
