
// import '@testing-library/jest-dom';
// import { cleanup } from "@testing-library/vue";
// import matchers from "@testing-library/jest-dom/matchers";
// import { expect, afterEach } from "vitest";

// expect.extend(matchers);

// /**
//   Clean up js-dom after each test
//  */

//  afterEach(() => {
//   cleanup();
//  })

import '@testing-library/jest-dom';
import { cleanup } from "@testing-library/vue";
import { expect, afterEach } from "vitest";
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

/**
  Clean up js-dom after each test
 */

afterEach(() => {
  cleanup();
});