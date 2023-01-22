
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix&&matrix[0]) {
let res =  matrix.reduce((acc, cur, i) => {
  return acc.concat((!(i % 2) ? cur : cur.reverse()));
}, []); return res
}else{
  return []
}
}