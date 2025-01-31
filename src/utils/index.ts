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
  wait: (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  normalizeString: (str: string) =>
    str
      .normalize('NFD') // Decomposes accents and diacritics
      .replace(/[\u0300-\u036f]/g, '') // Removes the decomposed marks
      .replace(/[^\w]/g, '') // Removes non-alphanumeric characters
      .toLowerCase(), // Ensures case insensitivity
  parseTextWithLinks(text: string): string {
    // Regex to find valid URLs (both http and https)
    const urlRegex = /http:\/\/[^\s/$.?#].[^\s]*|https:\/\/[^\s/$.?#].[^\s]*/g;

    // Replace URLs with <a> tags
    const formattedText = text.replace(
      urlRegex,
      url =>
        `<a class="no-underline hover:underline text-blue-800" href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`,
    );

    // Wrap the formatted text in a <;> tag
    return formattedText;
  },
};
