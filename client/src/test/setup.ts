import {vi, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

const cryptoMock = { randomUUID: vi.fn(() => Math.random()) };
vi.stubGlobal("crypto", cryptoMock);
// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});