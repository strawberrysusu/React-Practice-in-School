// ========================================
// 🟤 0단계: TypeScript 기초
// ========================================
// 실행: npx ts-node step0-typescript.ts

// ----------------------------------------
// 1. 기본 타입
// ----------------------------------------
const userName: string = "홍길동";
const userAge: number = 25;
const isStudent: boolean = true;

console.log(userName, userAge, isStudent);

// ----------------------------------------
// 2. 배열 타입
// ----------------------------------------
const names: string[] = ["철수", "영희", "민수"];
const scores: number[] = [90, 85, 100];

console.log("이름들:", names);
console.log("점수들:", scores);

// ----------------------------------------
// 3. 객체 타입 - type과 interface
// ----------------------------------------

// type으로 정의
type User = {
  name: string;
  age: number;
  hobby: string;
};

// interface로 정의 (거의 같음)
interface Product {
  name: string;
  price: number;
  category: string;
}

// 차이점? 대충 이렇게 이해하면 됨:
// - interface: 객체 모양 정의할 때 주로 씀 (extends로 확장 가능)
// - type: 뭐든 다 됨 (union 타입 등)
// - React에서는 둘 다 씀. 취향 차이. props 타입 정의할 때 많이 씀.

const user: User = { name: "홍길동", age: 25, hobby: "코딩" };
const product: Product = { name: "키보드", price: 50000, category: "전자기기" };

console.log("유저:", user);
console.log("상품:", product);

// ----------------------------------------
// 4. optional 속성 (?)
// ----------------------------------------
type Profile = {
  name: string;
  age: number;
  email?: string; // 있어도 되고 없어도 됨
};

const profile1: Profile = { name: "철수", age: 20 }; // OK - email 없어도 됨
const profile2: Profile = { name: "영희", age: 22, email: "young@test.com" };

console.log("프로필1:", profile1);
console.log("프로필2:", profile2);

// ----------------------------------------
// 5. union 타입 ( | )
// ----------------------------------------
// "이것 또는 저것" 을 표현
type Status = "loading" | "success" | "error";

let currentStatus: Status = "loading";
currentStatus = "success";
// currentStatus = "done";  // ERROR! "done"은 Status에 없음

// 숫자랑 문자 둘 다 받고 싶을 때
type StringOrNumber = string | number;
const value1: StringOrNumber = "안녕";
const value2: StringOrNumber = 42;

console.log("상태:", currentStatus);
console.log("값들:", value1, value2);

// ----------------------------------------
// 6. null / undefined 에러 이해하기
// ----------------------------------------

// 이게 왜 중요하냐면... React에서 서버 데이터를 기다릴 때
// 처음에는 데이터가 null인데, 그걸 모르고 접근하면 터짐!

type ServerData = {
  title: string;
  content: string;
} | null; // 데이터가 아직 안 왔으면 null

const data: ServerData = null; // 서버 응답 전 상태

// ❌ 이렇게 하면 에러!
// console.log(data.title);  // TypeError: Cannot read properties of null

// ✅ 이렇게 먼저 체크해야 함
if (data !== null) {
  console.log(data.title);
} else {
  console.log("아직 데이터 없음 (null)");
}

// optional chaining (?.) - 더 간단한 방법
console.log("제목:", data?.title); // null이면 undefined 반환, 에러 안 남
console.log("제목 기본값:", data?.title ?? "제목 없음"); // ?? 는 null/undefined일 때 기본값

// ----------------------------------------
// 7. 함수에 타입 붙이기
// ----------------------------------------
const add = (a: number, b: number): number => {
  return a + b;
};

// void = 리턴값 없음
const sayHello = (name: string): void => {
  console.log(`안녕 ${name}!`);
};

console.log("더하기:", add(3, 5));
sayHello("세계");

// ----------------------------------------
// 8. 제네릭 맛보기 (useState에서 쓸 거라 미리)
// ----------------------------------------
// 제네릭 = "타입을 나중에 정해줄게"
// useState<number>(0) 이런 식으로 React에서 바로 씀

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const firstNum = getFirst<number>([1, 2, 3]); // number
const firstStr = getFirst<string>(["a", "b", "c"]); // string

console.log("첫번째 숫자:", firstNum);
console.log("첫번째 문자:", firstStr);

// ========================================
// ✅ 0단계 정리
// ========================================
// 이것들이 React 시작 전에 알아야 할 JS/TS 최소 지식!
// 완벽하게 외울 필요 없고, "아 이런 게 있구나" 정도면 충분.
// React 하면서 계속 다시 보게 됩니다.
//
// 다 읽었으면 "1단계 시작!" 이라고 말해주세요.
