import 'server-only';
import type { Locale } from '@/i18n.config';
import allContent from '@/dictionaries/all-content.json';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  fr: () => import('@/dictionaries/fr.json').then(module => module.default),
  mu: () => import('@/dictionaries/mu.json').then(module => module.default),
};

const mergeDeep = (target: any, source: any) => {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

const isObject = (item: any) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
};


export const getDictionary = async (locale: Locale) => {
  const loader = dictionaries[locale] || dictionaries.en;
  const langSpecificContent = await loader();
  
  // Deep merge the language specific content into the full content structure
  return mergeDeep(allContent, langSpecificContent);
};
