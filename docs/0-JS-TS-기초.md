# 0단계: JavaScript + TypeScript 최소 준비

> React 코드 어디에서든 나오는 기본 문법. 이것만 확실히 알면 React 코드 읽기가 편해진다.

---

## 반드시 알아야 하는 것

### 1. 화살표 함수
```ts
// 기본 함수
function add(a: number, b: number): number {
  return a + b;
}

// 화살표 함수 (React에서 더 자주 씀)
const add = (a: number, b: number): number => a + b;

// 한 줄이면 return 생략 가능
const double = (n: number) => n * 2;
```

### 2. 구조분해 할당 (Destructuring)
React에서 **매번** 쓰는 문법!
```ts
// 객체 구조분해 → props 받을 때 이 패턴
const user = { name: "철수", age: 20 };
const { name, age } = user;

// 배열 구조분해 → useState가 이 패턴!
const arr = [10, 20];
const [first, second] = arr;
// useState 예시: const [count, setCount] = useState(0);
```

### 3. Spread 연산자 (...)
상태 업데이트할 때 **필수**!
```ts
// 객체 복사 + 수정
const obj = { name: "철수", age: 20 };
const newObj = { ...obj, age: 21 }; // { name: "철수", age: 21 }

// 배열 복사 + 추가
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // [1, 2, 3, 4]
```

### 4. map / filter
```ts
const nums = [1, 2, 3, 4, 5];

// map: 각 요소를 변환 → 새 배열
const doubled = nums.map((n) => n * 2); // [2, 4, 6, 8, 10]

// filter: 조건에 맞는 것만 → 새 배열
const evens = nums.filter((n) => n % 2 === 0); // [2, 4]
```

### 5. TypeScript 타입 기초
```ts
// 기본 타입
let name: string = "철수";
let age: number = 20;
let isStudent: boolean = true;

// 배열
let fruits: string[] = ["사과", "바나나"];

// 객체 타입 (interface)
interface User {
  name: string;
  age: number;
  email?: string;  // ? = 있어도 되고 없어도 됨 (optional)
}

// union 타입 (이것 또는 저것)
let status: "loading" | "success" | "error" = "loading";
```

---

## 합격 기준

- `const [value, setValue] = useState<string>("")` → "배열 구조분해 + 제네릭" 이라고 바로 이해되면 OK
- `{ ...obj, name: "새이름" }` → "복사 후 name만 덮어쓰기" 라고 읽히면 OK
- `interface`로 객체 타입 정의할 수 있으면 OK
