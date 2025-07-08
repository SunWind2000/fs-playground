import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        projects: ["packages/*"],
        environment: "jsdom",
        coverage: {
            provider: "v8",
            reporter: ["text", "json", "html"],
            include: [
                "packages/*/__test__/*.{.spec.ts,.test.ts}",
            ],
            exclude: [
                "**/node_modules/**",
                "**/dist/**",
                "**/dist-ssr/**",
                "**/coverage/**",
                "**/*.d.ts",
            ],
        },
    },
});
