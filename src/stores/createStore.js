export function createStore(initial) {
  const data = { ...initial };
  const store = {};

  for (const key of Object.keys(data)) {
    Object.defineProperty(store, key, {
      get() {
        return data[key];
      },
      set(value) {
        data[key] = value;
      },
      enumerable: true,
      configurable: true,
    });

    const setterName = `set${key.charAt(0).toUpperCase()}${key.slice(1)}`;
    store[setterName] = (value) => {
      data[key] = value;
    };
  }

  return store;
}
