export const cutText = (string: string, count: number): string => {
    const text = string.substring(0, count);
    return text + '...';
};

export const formatSalary = (input: string): string => {
    if (input.includes(',')) {
        const [from, to] = input.split(',');
        return `$${from}K - $${to}K / Year`;
    } else if (input.startsWith('<')) {
        const value = input.slice(1);
        return `Under $${value}K / Year`;
    } else if (input.startsWith('>')) {
        const value = input.slice(1);
        return `Over $${value}K / Year`;
    } else {
        return `$${input}K / Year`;
    }
};

export const textToSlug = (text: string): string => {
    const cleanText = text
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9 ]/g, '')
        .trim()
        .replace(/\s+/g, '-');

    return cleanText;
};
