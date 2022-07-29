import { recordToCSVString } from './recordToCSVString';

describe('recordToCSV', () => {
  test('No Data', () => {
    const data: Record<string, string>[] = [];
    expect(recordToCSVString(data)).toBe('');
  });
  test('Normal Usage', () => {
    const data: Record<string, string>[] = [
      { amount: '-1000', description: 'Food' },
      { amount: '3000', description: 'Income' },
      { amount: '-500', description: 'Shoes' },
    ];
    const expected = `amount,description
-1000,Food
3000,Income
-500,Shoes`;
    expect(recordToCSVString(data)).toBe(expected);
  });
});
