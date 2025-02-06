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
  generateDistinctColorList(count: number): string[] {
    const colors: string[] = [];

    for (let i = 0; i < count; i++) {
      const hue = (i * (360 / count)) % 360; // Evenly distribute hues
      const saturation = 70 + Math.random() * 20; // Keep saturation high
      const lightness = 50 + Math.random() * 10; // Avoid extremes for clarity

      colors.push(`hsla(${hue}, ${saturation}%, ${lightness}%, 0.2)`);
    }

    return colors;
  },
  generateDistinctColor(existingColors: string[]): string {
    let newColor: string = '';
    let isUnique = false;

    while (!isUnique) {
      const hue = Math.floor(Math.random() * 360); // Random hue
      const saturation = 70 + Math.random() * 20; // Keep saturation high
      const lightness = 50 + Math.random() * 10; // Avoid extremes for clarity
      newColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.2)`;

      // Ensure the new color is different from existing ones (ignoring opacity)
      isUnique = !existingColors.some(color => color.startsWith(`hsla(${hue},`));
    }

    return newColor;
  },
};
