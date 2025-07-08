import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./apps/**/src/**/*.{vue,ts,tsx,js,jsx,mdx}",
        "./packages/**/src/**/*.{vue,ts,tsx,js,jsx,mdx}"
    ],
    theme: {
    },
    // Monorepo 特殊配置
    presets: [], // 留给子项目继承用
    important: true, // 避免样式优先级冲突
};

export default config;
