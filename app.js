// app.js
// シンプルな関数：渡された名前で挨拶メッセージを返す
function makeGreeting(name) {
  if (!name) return "こんにちは！";
  return `こんにちは、${name}さん！`;
}

module.exports = { makeGreeting };
