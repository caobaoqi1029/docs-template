# Vite Press 搭建教程

> [!TIP]
>
> 使用 [VitePress](https://vitepress.dev/guide/getting-started) 搭建个人博客，主要用于记录搭建过程

## 一、概述

### 1.1 VitePress 介绍

[VitePress](https://vitepress.dev/zh/) 是一个基于 Vite 和 Vue 3 的静态网站生成器，专门为构建文档网站而设计。它是 VuePress 的继承者，旨在提供更快的构建速度和更现代的开发体验。VitePress 利用了 Vite 的即时服务器启动和模块热替换（HMR）功能，使得开发文档网站变得更加高效。

以下是 VitePress 的一些关键特性：

1. **快速开发服务器**：VitePress 使用 Vite 作为其开发服务器，这意味着你可以享受到几乎即时的服务器启动和快速的 HMR

2. **基于 Vue 3**：VitePress 完全基于 Vue 3，包括 Composition API、Teleport、Suspense 等新特性

3. **Markdown 扩展**：VitePress 对 Markdown 语法进行了扩展，支持 Vue 组件、代码高亮、目录、自定义容器等功能

4. **主题定制**：你可以通过创建自定义主题来定制网站的外观和感觉，VitePress 的主题系统允许你完全控制网站的样式和布局

5. **静态站点生成**：VitePress 生成的是静态 HTML 文件，这意味着你可以将它们部署到任何静态文件托管服务上，如 GitHub Pages、Netlify、Vercel 等

6. **插件系统**：VitePress 支持插件，你可以通过插件来扩展 VitePress 的功能，比如添加新的 Markdown 扩展、修改构建过程等。

7. **国际化支持**：VitePress 内置了对多语言文档的支持，可以轻松地为不同语言的读者提供翻译

8. **SEO 友好**：由于 VitePress 生成的是静态内容，因此它对搜索引擎优化（SEO）非常友好

![image-20240516174320355](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516174320355.png)

### 1.2 功能

- markdown 拓展支持
- 引入 giscus 实现评论功能
- PicGO + OSS 实现图片上传
- 通过 github workflow 自行搭建部署
- 提供 Docker Image 容器化部署
- 通过 electron 打包分发

## 二、环境安装

### 2.1 node + yarn

> [!CAUTION]
>
> - 案例使用最新的 [node](https://nodejs.org/en/download) 版本 `20.13.0` 其它版本请自行测试 (vite press 官方要求 node 版本需要 18+)

node 的安装推荐使用 nvm 进行安装，nvm 是一款 node 的管理工具，可以切换不同版本的 node ，安装方式：

- 直接到 https://github.com/coreybutler/nvm-windows/releases/tag/1.1.12 进行下载即可

![image-20240516180515773](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516180515773.png)

安装好后可以通过 `nvm -v` 查看 nvm 的版本，其具体使用请参考 https://github.com/coreybutler/nvm-windows

接下来我们先通过 nvm 安装 node + npm，然后通过 npm 安装 yarn

- 执行 `nvm install 20.13.0`
- 安装完毕后执行 `nvm use 20.13.0`
- 安装 yarn `npm install --global yarn`
- 输出下面的命令查看

![image-20240516130103516](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516130103516.png)

### 2.2 git

[Git](https://git-scm.com/) 是一个分布式版本控制系统，它被广泛用于跟踪和管理软件开发项目中的代码变更。Git 由 Linus Torvalds 在2005年创建，最初是为了管理 Linux 内核的开发，但现在它已经成为全球开发者社区中最受欢迎的版本控制工具之一。

![image-20240516175400308](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516175400308.png)

> [!TIP]
>
> 安装好 git 后最后进行下代理配置 （配置文件路径为 用户目录/.gitconfig）如果用户目录下没有该文件，直接手动创建一个就可以

![image-20240516175626830](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516175626830.png)

将下面的内容添加到 `.gitconfig` 中

```ini
[user]
  name = cbq-win
  email = 2024cbq@gmail.com
[http]
  proxy = http://127.0.0.1:7890
  postBuffer = 5M
[https]
  proxy = https://127.0.0.1:7890
```

查看 `git config --list`

![image-20240516175750338](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516175750338.png)

### 2.3 WebStorm

[WebStorm ](https://www.jetbrains.com/webstorm/promo/?msclkid=c817a54659e31aee6ed4c30381237bf5&utm_source=bing&utm_medium=cpc&utm_campaign=APAC_en_JP_WebStorm_Branded&utm_term=webstorm&utm_content=webstorm)是一款由 JetBrains 公司开发的集成开发环境（IDE），专为 JavaScript、TypeScript、HTML 和 CSS 等前端技术栈的开发而设计。它提供了强大的代码编辑、调试、版本控制和自动化工具，旨在提高开发者的工作效率和代码质量。

![image-20240516175914413](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516175914413.png)

> [!TIP]
>
> 我使用的版本为 2024.1.2，推荐对 WebStorm 也进行下代理配置

![image-20240516180127273](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516180127273.png)

![image-20240516180141126](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516180141126.png)

## 三、使用

### 3.1 初始化 VitePress

1. `yarn add -D vitepress`

![image-20240516130828804](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516130828804.png)

2. `yarn vitepress init`

![image-20240516131011334](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516131011334.png)

3. `yarn run docs:dev`

![image-20240516131146093](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516131146093.png)

> [!TIP]
>
> 点击 `localhost:5173` 出现下面页面即为搭建成功

![image-20240516131201607](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516131201607.png)

## 四、项目说明



## 五、部署

```yaml
name: CI|CD 部署文档
permissions:
  contents: write
on:
  push:
    tags:
      - v*

jobs:
  build:
    name: build vite press
    runs-on: ${{ matrix.os }}
    defaults:
      run:
        shell: bash

    if: startsWith(github.ref, 'refs/tags/')
    strategy:
      fail-fast: false
      matrix:
        os: [ ubuntu-latest ]

    steps:
      - name: 读取仓库内容 👓
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: 设置 Node.js 🎶
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: 安装 yarn 🐸
        run: npm install --global yarn

      - name: 构建文档 🔨
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          yarn install
          yarn run docs:build
          > docs/.vitepress/dist/.nojekyll

      - name: 打包 zip 文件 🔨
        run: |
          mkdir -p ./build
          zip -r ./pages.zip ./docs/.vitepress/dist
          echo "pages.zip 打包成功"
          cp ./pages.zip ./build/

      - name: upload artifacts 📦
        uses: actions/upload-artifact@v4
        with:
          name: ${{ matrix.os }}
          path: build

      - name: release 😶‍🌫️
        uses: softprops/action-gh-release@v1
        if: startsWith(github.ref, 'refs/tags/')
        with:
          files: 'build/**'
        env:
          GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}

      - name: 部署文档 👌
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: pages
          folder: docs/.vitepress/dist

```

![image-20240516182545151](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/202405161825256.png)

## 其它
