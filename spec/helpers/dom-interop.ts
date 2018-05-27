// NOTE (jchristie@8thlight.com) In addition to the polyfill
// required in the index.tsx file, this basic implementation
// is required in the test environment to silence React warnings
// when executing tests
(<any> global).requestAnimationFrame = (callback: Function) => {
  setTimeout(callback, 0);
};

// NOTE (jchristie@8thlight.com) Invoking the function
// provided by the jsdom-global package that has done
// the heavy lifting of installing jsdom into a node
// environment so React can render into the document in
// tests
require('jsdom-global')();

// NOTE (jchristie@8thlight.com) Enzyme is now abstracted
// away from React's native implementations and versioned
// APIs that it requires installation and explicit setup
// of a version and platform specific adapter
const Adapter = require('enzyme-adapter-react-16');
require('enzyme').configure({ adapter: new Adapter() });
