/**
 * @file 모든 테스트 코드에서 공통적으로 사용되는 설정이나 Mock 정의
 */
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      value: {},
      init: jest.fn(function () {
        this.value = {};
      }),
      getItem: jest.fn(function (key) {
        return this.value[key];
      }),
      setItem: jest.fn(function (key, value) {
        this.value[key] = value;
      }),
      removeItem: jest.fn(function (key) {
        delete this.value[key];
      }),
    },
  });
  Object.defineProperty(window, 'sessionStorage', {
    value: {
      value: {},
      init: jest.fn(function () {
        this.value = {};
      }),
      getItem: jest.fn(function (key) {
        return this.value[key];
      }),
      setItem: jest.fn(function (key, value) {
        this.value[key] = value;
      }),
      removeItem: jest.fn(function (key) {
        delete this.value[key];
      }),
    },
  });
});

afterEach(() => {
  window.localStorage.init();
  window.sessionStorage.init();
});

afterAll(() => {
  window.fetch.mockClear();
  window.URL.createObjectURL.mockClear();
});
