export const Utils = {
  debounce(fn: () => unknown, delay: number) {
    let timeoutId: any;
    return function (...args: unknown[]) {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        // @ts-expect-error any
        fn.apply(this, args);
      }, delay);
    };
  },
  normalizeString: (str: string) =>
    str
      .normalize('NFD') // Decomposes accents and diacritics
      .replace(/[\u0300-\u036f]/g, '') // Removes the decomposed marks
      .replace(/[^\w]/g, '') // Removes non-alphanumeric characters
      .toLowerCase(), // Ensures case insensitivity
};
