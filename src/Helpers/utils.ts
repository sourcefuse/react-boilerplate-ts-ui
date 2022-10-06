import {format} from 'date-fns';

export const convertToTitleCase = (text) => {
  if (!text) return text;
  const result = text.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const convertToDate = (input, inputFormat = 'dd.MM.yyyy') => {
  if (!input) return input;
  const result = format(new Date(input), inputFormat);
  console.log(`convertToDate ${input} => ${result} `);
  return result;
};
