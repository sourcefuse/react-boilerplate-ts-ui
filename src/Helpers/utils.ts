import {format} from 'date-fns';

export const convertToTitleCase = (text: string) => {
  if (!text) return text;
  const result = text.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const convertToDate = (input: string | number | Date, inputFormat = 'dd.MM.yyyy') => {
  if (!input) return input;
  return format(new Date(input), inputFormat);
};
