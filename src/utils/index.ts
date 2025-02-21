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
    // Regex for [text](URL) format and direct URLs
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s/$.?#].[^\s]*)/g;

    // Replace matches with anchor tags
    const formattedText = text.replace(linkRegex, (_, name, urlFromBrackets, directUrl) => {
      const url = urlFromBrackets || directUrl;
      const displayText = name || url;
      return `<a class="no-underline hover:underline text-blue-800" href="${url}" target="_blank" rel="noopener noreferrer">${displayText}</a>`;
    });

    return formattedText;
  },
  parseTextWithPhoneNumber(text: string): string {
    const mobileRegex = /\b3\d{9}\b/g;
    const landlineRegex = /\b60\d\d{7}\b/g;

    const allRegex = [mobileRegex, landlineRegex];

    let modifiedText = text;

    allRegex.forEach(regex => {
      modifiedText = modifiedText.replace(regex, match => {
        return `<a class="no-underline hover:underline text-blue-800" href="tel:${match.replace(/\s/g, '')}">${match}</a>`;
      });
    });

    return modifiedText;
  },
};
