import { globalIgnores } from "eslint/config";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(

    globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),

    pluginVue.configs["flat/essential"],
    vueTsConfigs.recommended,
    
    {
        name: "app/files-to-lint",
        files: ["**/*.{ts,mts,tsx,vue}"],
        rules: {
            // 四空格缩进
            "indent": ["error", 4, { "SwitchCase": 1 }],
            // 结尾分号
            "semi": ["error", "always"],
            // 文件结尾换行
            "eol-last": ["error", "always"],
            // return语句、if语句前空行
            "padding-line-between-statements": [
                "error",
                { blankLine: "always", prev: "*", next: "return" },
                { blankLine: "always", prev: "return", next: "*" },
                { blankLine: "always", prev: "*", next: "if" },
                { blankLine: "always", prev: "if", next: "*" },
            ],
            // 必须双引号
            "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
            // any可以作为类型
            "@typescript-eslint/no-explicit-any": "off",
        }
    }
);
