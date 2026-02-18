const { makeGreeting } = require('../app');

test('名前なしの場合はデフォルト挨拶', () => {
  expect(makeGreeting()).toBe('こんにちは！');
});

test('名前ありの場合は挨拶を返す', () => {
  expect(makeGreeting('太郎')).toBe('こんにちは、太郎さん！');
});
