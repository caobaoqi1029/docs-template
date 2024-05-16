## docs-template

> [!TIP]
>
> 使用 vite-press 或 vuepress-hope 搭建个人博客，主要用于记录搭建过程

- [VitePress](https://vitepress.dev/guide/getting-started)
- [VuePress Theme Hope](https://theme-hope.vuejs.press/zh/)

## 一、功能

- markdown 拓展支持
- 引入 giscus 实现评论功能
- PicGO + OSS 实现图片上传
- 通过 github workflow 自行搭建部署
- 提供 Docker Image 容器化部署
- 通过 electron 打包分发

## 二、安装

### 2.1 环境安装

> [!CAUTION]
>
> - 运行环境：本项目使用最新的 [node](https://nodejs.org/en/download) 版本 `20.13.0` 其它版本 (vite press 官方要求i node
    版本需要 18+) 请自行测试
> - 包管理工具：使用 `yarn` 进行管理 如果未安装使用 ` npm install --global yarn`

![image-20240516130103516](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516130103516.png)

### 2.2 初始化 VitePress

1. `yarn add -D vitepress`

![image-20240516130828804](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516130828804.png)

2. `yarn vitepress init`

![image-20240516131011334](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516131011334.png)

3. `yarn run docs:dev`

![image-20240516131146093](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516131146093.png)

![image-20240516131201607](https://2024-cbq-1311841992.cos.ap-beijing.myqcloud.com/picgo/image-20240516131201607.png)

### 2.2 开发工具

| 工具       | 版本       | 描述              |
|----------|----------|-----------------|
| WebStorm | 2024.1.2 | 前端开发工具          |
| Node     | 20.13.0  | JavaScript 运行环境 |
| yarn     | 1.22.22  | 包管理工具           |

### 2.3 dev

## 三、使用

