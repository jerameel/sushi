import { difference } from 'ramda';
import { TRANSLATIONS } from '.';

describe('translations', () => {
  test('has all required fields', () => {
    // use en-US as source of truth
    const enUSKeys = Object.keys(TRANSLATIONS['en-US']);
    const translationKeys = Object.keys(TRANSLATIONS);
    const invalidTranslations = translationKeys.filter(
      // @ts-ignore
      (key: keyof typeof TRANSLATIONS) => {
        if (key === 'en-US') {
          // skip check
          return false;
        }

        return difference(enUSKeys, Object.keys(TRANSLATIONS[key])).length > 0;
      },
    );
    expect(invalidTranslations).toEqual([]);
  });
});
