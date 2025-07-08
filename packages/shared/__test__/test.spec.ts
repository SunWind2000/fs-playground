import { describe, it, expect } from "vitest";
import { t } from "../src";

describe("Test", () => {
    it("should return the correct translation", () => {
        expect(t()).toBe("Hello from shared package 122311!");
    });
});
