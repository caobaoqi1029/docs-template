// https://vitepress.dev/guide/custom-theme
import {h, toRefs} from 'vue'
import DefaultTheme from 'vitepress/theme'
import {useData, useRoute} from 'vitepress'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import {VPTeamMembers} from "vitepress/theme";

import './style.css'

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({app, router, siteData}) {
        // ...
    },
    setup() {
        const {frontmatter} = toRefs(useData());
        const route = useRoute();

        const members = [
            {
                avatar: 'https://www.github.com/yyx990803.png',
                name: 'Evan You',
                title: 'Creator',
                links: [
                    {icon: 'github', link: 'https://github.com/yyx990803'},
                    {icon: 'twitter', link: 'https://twitter.com/youyuxi'}
                ]
            },
        ]

        giscusTalk({
                repo: 'caobaoqi1029/docs-template',
                repoId: 'R_kgDOL8YP4A',
                category: 'Announcements',
                categoryId: 'DIC_kwDOL8YP4M4CfZwb',
                mapping: 'pathname',
                inputPosition: 'top',
                lang: 'zh-CN',
                theme: 'preferred_color_scheme',
                // ...
            }, {
                frontmatter, route
            },
            true
        );
    },VPTeamMembers,
}
