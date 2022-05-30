import '../infrastracture/numbro';
import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  test('Dynamic language', () => {
    expect(formatCurrency(1, { language: 'en-US' })).toBe('$1.00');
    expect(formatCurrency(2, { language: 'fil-PH' })).toBe('₱2.00');
    expect(formatCurrency(3, { language: 'zh-CN' })).toBe('¥3.00');
  });
});
