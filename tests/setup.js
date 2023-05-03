import { cleanup } from "@testing-library/vue";
import matchers from "@testing-library/jest-dom/matchers";
import { expect, afterEach } from "vitest";

expect.extend(matchers);

/**
  Clean up js-dom after each test
 */

 afterEach(() => {
  cleanup();
 })