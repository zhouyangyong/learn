export default function (len = 32) {
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let chars = '';
  for (var i = 0; i < len; i++) {
    var num = Math.floor(Math.random()*62);
    chars += $chars.charAt(num);
  }
  return chars;
}