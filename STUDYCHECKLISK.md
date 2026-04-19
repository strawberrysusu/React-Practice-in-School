**리액트 학습 체크리스트 v2**

🟤 0단계: JavaScript + TypeScript 최소 준비

- [ ]  `const` / `let`, 함수, 화살표 함수, 객체/배열, 구조분해, spread, `map` / `filter`
- [ ]  `import` / `export`, `async` / `await`, `try` / `catch`, `fetch`
- [ ]  `Promise` 기본 이해: `then` / `catch` / `finally`, 왜 `async/await`가 Promise 위에서 동작하는지
- [ ]  `type`과 `interface` 차이 대충 이해
- [ ]  `string`, `number`, `boolean`, 배열 타입, 객체 타입, optional `?`, union 타입
- [ ]  `null` / `undefined` 때문에 왜 에러 나는지 이해

🟢 1단계: React 시작

- [ ]  `Vite + React + TypeScript` 프로젝트 생성, 실행, 빌드 가능
- [ ]  TSX 문법: 최상위 태그 1개, `className`, 닫는 태그, `{}` 표현식
- [ ]  함수형 컴포넌트 만들기와 `import` / `export`
- [ ]  화면을 `Header`, `Card`, `Profile`처럼 컴포넌트로 분리
- [ ]  정적 화면 하나를 혼자 조립 가능

🟡 2단계: Props와 렌더링

- [ ]  props로 부모에서 자식에게 데이터 전달
- [ ]  `interface` 또는 `type`으로 props 타입 정의
- [ ]  optional props `?`
- [ ]  `children` props 이해하고 사용할 수 있음
- [ ]  `children: React.ReactNode` 타입을 기본적으로 쓸 수 있음
- [ ]  조건부 렌더링: `if`, 삼항연산자, `&&`
- [ ]  리스트 렌더링: `map()`과 `key`
- [ ]  같은 컴포넌트를 데이터만 바꿔 여러 번 재사용 가능

🟠 3단계: 상태와 입력  

- [ ]  `useState` 기본 사용법
- [ ]  `useState<T>()` 제네릭으로 상태 타입 지정
- [ ]  클릭, 입력, 제출 이벤트 처리
- [ ]  이벤트 타입: `React.ChangeEvent<HTMLInputElement>`, `React.MouseEvent<HTMLButtonElement>`
- [ ]  `event.preventDefault()`를 왜 쓰는지 이해
- [ ]  controlled input 만들기
- [ ]  폼 데이터를 객체 state 하나로 묶어 관리하기
- [ ]  객체/배열 state를 불변하게 업데이트하기

🔵 4단계: 상태 설계 

- [ ]  어떤 값이 state여야 하는지 판단
- [ ]  형제 컴포넌트가 같이 쓰는 값은 부모로 올리기
- [ ]  derived state와 중복 state 피하기
- [ ]  `useReducer`로 복잡한 상태 정리
- [ ]  `Context`로 깊은 props 전달 줄이기

🔴 5단계: Effect, Ref, Hook 감각 잡기

- [ ]  `useEffect` 기본: 의존성 배열, cleanup
- [ ]  `[]`는 “처음 한 번”처럼 보일 수 있지만, 본질은 외부 시스템 동기화라는 점 이해
- [ ]  `useEffect` 남발하지 않기
- [ ]  `useEffect` 내부에서 `fetch`하는 기본 패턴 한 번 연습해보기
- [ ]  로딩 중 언마운트나 중복 요청 같은 문제를 왜 조심해야 하는지 감 잡기
- [ ]  `useRef`로 DOM 접근, focus 처리
- [ ]  custom hook으로 반복 로직 분리
- [ ]  Hook 규칙: 조건문/반복문 안에서 Hook 호출 금지

🟣 6단계: 백엔드 연동

- [ ]  백엔드 JSON 응답에 맞춰 프론트 타입 정의
- [ ]  `fetch` 또는 `axios`로 GET/POST 요청
- [ ]  `async` / `await`로 비동기 처리
- [ ]  `loading / error / empty / success` 4상태 처리
- [ ]  CORS 원인 이해와 Vite proxy, 백엔드 설정 방법 이해
- [ ]  환경 변수: `import.meta.env.VITE_API_URL`
- [ ]  JWT 토큰 저장/사용 흐름 이해
- [ ]  로그인, 목록, 상세, 등록, 수정, 삭제 기본 CRUD 가능

⚪ 7단계: 앱처럼 만들기

- [ ]  `react-router-dom`으로 페이지 이동
- [ ]  URL 파라미터, 쿼리 스트링
- [ ]  공통 레이아웃, 네비게이션
- [ ]  폼 검증, 버튼 `disabled`, 에러 메시지 표시
- [ ]  Protected Route로 로그인 안 한 유저 접근 막기
- [ ]  Error Boundary 개념 이해
- [ ]  실전에서는 `react-error-boundary` 같은 방식도 써볼 수 있음
- [ ]  React DevTools와 브라우저 네트워크 탭으로 디버깅

🟧 8단계: 선택 심화

- [ ]  Zustand는 선택 사항
- [ ]  백엔드 앱이면 나중에 TanStack Query가 더 실전적일 수 있음
- [ ]  배포 기본: `npm run build`, env 분리, API 주소 교체
- [ ]  학교 수업이 구형이면 class component / lifecycle은 개념만 알아두기

**중요한 우선순위**

- `Zustand`보다 `Context/useReducer`
- `axios`보다 비동기 흐름 이해
- 화려한 UI보다 `CRUD + 상태 처리`
- 외우기보다 직접 작은 프로젝트 만들기
- 라이브러리 암기보다 “왜 이 구조가 필요한지” 이해하기

**이 정도 되면 안정권**

- 혼자서 로그인, 게시글 목록, 상세, 등록, 수정, 삭제 화면을 만들 수 있음
- 백엔드 API 응답 타입을 TS로 정의할 수 있음
- 라우팅, 폼, 로딩/에러 처리, 토큰 처리까지 가능
- CORS나 env 때문에 막혀도 이유를 설명할 수 있음
