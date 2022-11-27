# gatsby-plugin-valine-comment

[![npm version](https://badge.fury.io/js/gatsby-plugin-valine-comment.svg)](https://badge.fury.io/js/gatsby-plugin-valine-comment)

又一个为 Gatsby 站点嵌入 [Valine](https://valine.js.org/en/) 评论系统的插件。

## ✨ 功能

本插件能帮你在你的站点更轻松地使用 Valine 评论。

- 使用 React Hooks API 对最新的 Valine 进行纯粹的封装
- 支持 Valine 的所有配置
- 由 TypeScript 编写

## 🚚 安装

```shell
npm install gatsby-plugin-valine-comment
```

or

```shell
yarn add gatsby-plugin-valine-comment
```

本插件依赖 **React v16.8** 或更高版本。

## 🔦 Usage

0. 如果你还没有 LeanCloud 的 AppId 和 AppKey, 请在[此处](https://valine.js.org/quickstart.html#%E8%8E%B7%E5%8F%96APP-ID-%E5%92%8C-APP-Key)查看如何获取。

1. 修改你的 gatsby-config.js 文件以启用本插件

    ```js
    // 你的 gatsby-config.js
    plugins: [
        {
            resolve: `gatsby-plugin-valine-comment`,
            options: {
                // 插件配置
                appId: 'LEANCLOUD_APP_ID',
                appKey: 'LEANCLOUD_APP_KEY',
            },
        },
    ];
    ```

2. 在你的页面代码中使用 `<Valine />` 组件

    ```jsx
    import React from 'react';
    import Valine from 'gatsby-plugin-valine-comment';

    export default function Page({location}) {
        return (
            <Layout>
                <Valine path={location.pathname} /*组件配置*/ />
            </Layout>
        );
    }
    ```

    插件配置项和组件配置项是一样的。你可以把常用配置 (如 `appId`, `appKey`, `avatar`) 放在插件配置中，把为页面单独配置的选项 (如 `path`) 放在组件配置中。配置会被合并且来自组件的配置有更高的优先级。

在这之后，你应该能够在你的站点添加和查看评论了。

## 🔧 配置项

| 配置名         | 类型      | 默认值                             | 描述                                           |
| -------------- | --------- | ---------------------------------- | ---------------------------------------------- |
| appId          | `string`  | `null`                             | Leancloud 的 appId                             |
| appKey         | `string`  | `null`                             | Leancloud 的 appKey                            |
| placeholder    | `string`  | `Just go go`                       | 评论框占位                                     |
| path           | `string`  | `window.location.pathname`         | 当前文章页路径，用于区分不同的文章页           |
| avatar         | `string`  | `mp`                               | 头像，<https://valine.js.org/avatar.html>      |
| meta           | `array`   | `['nick','mail','link']`           | 评论者相关属性                                 |
| pageSize       | `bumber`  | `10`                               | 评论者相关属性                                 |
| lang           | `string`  | `zh-CN`                            | 多语言支持                                     |
| langMode       | `object`  | `null`                             | 自定义语言，<https://valine.js.org/i18n.html>  |
| visitor        | `boolean` | `false`                            | 文章访问量统计                                 |
| highlight      | `boolean` | `true`                             | 代码高亮，默认开启                             |
| avatarForce    | `boolean` | `false`                            | 每次访问强制拉取最新的评论列表头像             |
| recordIP       | `boolean` | `false`                            | 是否记录评论者 IP                              |
| serverURLs     | `string`  | `http[s]://[tab/us].avoscloud.com` | 适用于国内自定义域名用户                       |
| emojiCDN       | `string`  |                                    | 表情包 CDN, <https://valine.js.org/emoji.html> |
| emojiMaps      | `object`  | `null`                             | 表情包映射                                     |
| enableQQ       | `boolean` | `false`                            | 是否启用昵称框自动获取 QQ 昵称和 QQ 头像       |
| requiredFields | `array`   | `[]`                               | 设置必填项，默认匿名                           |

可在此处查看完整说明：<https://valine.js.org/configuration.html>

## 💡 我为什么要写这个插件

- 已有的插件已经过时且不再维护了
- 有意思
