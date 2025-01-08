export const Utils = {
  debounce(fn: () => unknown, delay: number) {
    let timeoutId: number;
    return function (...args: unknown[]) {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        // @ts-expect-error any
        fn.apply(this, args);
      }, delay);
    };
  },
};
