// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// 输出：true

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// 输出：false

var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  let map = {};

  if (m * n < word.length) return false;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        if (search(i, j, 0)) return true;
      }
    }
  }
  return false;

  function search(i, j, index) {
    // 单词已经遍历万，则表明已经找到了
    if (index === word.length) return true;

    let key = `${i}-${j}`;

    // 数据越界，已经访问过，对应字母不相等时直接返回false
    if (
      i < 0 ||
      j < 0 ||
      i >= m ||
      j >= n ||
      map[key] ||
      board[i][j] !== word[index]
    )
      return false;

    map[key] = true;

    console.log('map', map);

    // 沿四个方向寻找
    let success =
      search(i - 1, j, index + 1) ||
      search(i + 1, j, index + 1) ||
      search(i, j - 1, index + 1) ||
      search(i, j + 1, index + 1);

    map[key] = success; // 失败时要重置位置状态

    return success;
  }
};

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
);
