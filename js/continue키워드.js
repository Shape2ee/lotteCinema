// continue 키워드
// 이 키워드를 만나면 건너띄고 다시 반복문의 처음으로 돌아감

for(let i = 0; i < 5; i++) {
  console.log(`*`);
  continue; // 반복문을 벗어나는게 아닌, 키워드 다음에 나오는 구문을 건너띄고 반복
  // break 키워드를 만나는 순간 그 즉시 반복문을 벗어남
  console.log(`continue와 break의 차이`);
};