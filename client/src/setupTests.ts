/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom'

window.matchMedia =
  window.matchMedia ||
  function a() {
    return {
      matches: false,
      addListener: function b() {},
      removeListener: function b() {},
    }
  }
