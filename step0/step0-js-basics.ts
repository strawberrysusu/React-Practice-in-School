// ========================================
// 🟤 0단계: JavaScript + TypeScript 최소 준비
// ========================================
// 이 파일을 위에서 아래로 읽으면서 직접 수정해보세요.
// 실행: npx ts-node step0-js-basics.ts

// ----------------------------------------
// 1. const / let
// ----------------------------------------
// const = 바뀌지 않는 값, let = 바뀔 수 있는 값
const name = "홍길동";
let age = 25;
age = 26; // OK - let은 변경 가능
// name = "김철수";  // ERROR - const는 변경 불가! (주석 풀면 에러남)

console.log("이름:", name, "나이:", age);

// ----------------------------------------
// 2. 함수 / 화살표 함수
// ----------------------------------------
// 일반 함수
function greet(who: string): string {
  return `안녕, ${who}!`;
}

// 화살표 함수 (React에서 주로 이걸 씀)
const greetArrow = (who: string): string => {
  return `안녕, ${who}!`;
};

// 한 줄이면 중괄호와 return 생략 가능
const greetShort = (who: string): string => `안녕, ${who}!`;

console.log(greet("세계"));
console.log(greetArrow("리액트"));
console.log(greetShort("타입스크립트"));

// ----------------------------------------
// 3. 객체와 배열
// ----------------------------------------
const user = {
  name: "홍길동",
  age: 25,
  hobby: "코딩",
};

const fruits = ["사과", "바나나", "딸기"];

console.log("유저:", user);
console.log("과일:", fruits);

// ----------------------------------------
// 4. 구조분해 (Destructuring)
// ----------------------------------------
// 객체에서 원하는 것만 꺼내기
const { name: userName, age: userAge } = user;
console.log("구조분해:", userName, userAge);

// 배열에서 순서대로 꺼내기
const [first, second] = fruits;
console.log("첫번째:", first, "두번째:", second);

// ----------------------------------------
// 5. Spread (...)
// ----------------------------------------
// 배열 복사 + 추가
const moreFruits = [...fruits, "포도"];
console.log("과일 추가:", moreFruits);

// 객체 복사 + 수정 (React에서 state 업데이트할 때 매우 중요!)
const updatedUser = { ...user, age: 30 };
console.log("나이 변경:", updatedUser);

// ----------------------------------------
// 6. map / filter
// ----------------------------------------
const numbers = [1, 2, 3, 4, 5];

// map: 각 요소를 변환해서 새 배열 만들기
const doubled = numbers.map((n) => n * 2);
console.log("2배:", doubled); // [2, 4, 6, 8, 10]

// filter: 조건에 맞는 것만 골라내기
const evens = numbers.filter((n) => n % 2 === 0);
console.log("짝수:", evens); // [2, 4]

// map은 React에서 리스트 렌더링할 때 엄청 많이 씀!
const names = ["철수", "영희", "민수"];
const greetings = names.map((n) => `안녕 ${n}!`);
console.log("인사:", greetings);

// ----------------------------------------
// 7. import / export (개념 설명)
// ----------------------------------------
// 실제로는 파일을 나눠야 하지만, 개념만 알아두세요:
//
// [math.ts 파일]
// export const add = (a: number, b: number) => a + b;
// export default function multiply(a: number, b: number) { return a * b; }
//
// [main.ts 파일]
// import multiply, { add } from "./math";
//   - default export는 이름 자유롭게
//   - named export는 { } 안에 정확한 이름으로

// ----------------------------------------
// 8. async / await, Promise, fetch
// ----------------------------------------

// Promise = "나중에 결과를 줄게"라는 약속
// 예: 서버에 데이터 요청하면 바로 안 옴 → Promise로 받음

// then/catch 방식 (옛날 방식)
const promiseExample = new Promise<string>((resolve) => {
  setTimeout(() => resolve("1초 후 도착!"), 1000);
});

promiseExample
  .then((result) => console.log("then:", result))
  .catch((error) => console.log("에러:", error))
  .finally(() => console.log("finally: 항상 실행됨"));

// async/await 방식 (현대 방식 - Promise 위에서 동작)
// await는 Promise가 끝날 때까지 "기다려"라는 뜻
const fetchExample = async () => {
  try {
    // 진짜 API 호출 예시 (jsonplaceholder는 연습용 무료 API)
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("서버 응답:", data);
  } catch (error) {
    console.log("요청 실패:", error);
  }
};

fetchExample();

// 핵심: async/await는 Promise를 더 읽기 쉽게 쓰는 문법!
// await fetch(...)는 사실 fetch(...).then(...)과 같은 것

console.log("\n⭐ 이 줄이 fetch보다 먼저 출력됩니다! (비동기니까)");
