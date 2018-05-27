// NOTE (jchristie@8thlight.com) In addition to the polyfill
// required in the index.tsx file, this basic implementation
// is required in the test environment to silence React errors
// when executing tests
(<any> global).requestAnimationFrame = (callback: Function) => {
  setTimeout(callback, 0);
};
