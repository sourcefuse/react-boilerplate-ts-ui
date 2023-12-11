import {format} from 'date-fns';

export interface AnyObject {
  [key: string]: any; // NOSONAR
}

export const convertToTitleCase = (text: string) => {
  if (!text) return text;
  const result = text.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const convertToDate = (input: string | number | Date, inputFormat = 'dd.MM.yyyy') => {
  if (!input) return input;
  return format(new Date(input), inputFormat);
};

export const getValue = (obj: AnyObject, key: string) => {
  /*
   * \[([^\]]{1,5})] ==> This regex is capturing the text inbetween [] in a capturing group
   * .$1 ==> This regex is putting .<capturedGroup>
   * Eg. client[12].user[0].name[9].data =====>  client.12.user.0.name.9.data
   */
  const keyAfterReplaceRegex = key.replace(/\[([^\]]{1,5})]/g, '.$1');
  const subKeys = keyAfterReplaceRegex.split('.');
  return subKeys.reduce(function (acc: AnyObject, curr: string | number) {
    return acc?.[curr] || '';
  }, obj);
};
