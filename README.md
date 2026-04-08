# React 수업 정리

<h1>조현동 202430312<h1>

## 4월 8일(6주차)

### 컴포넌트와 리스트


- 컴포넌트는 화면의 일부를 맡는 재사용 가능한 함수이다.
- 같은 UI 구조를 반복해서 써야 할 때 컴포넌트로 분리하면 관리가 쉬워진다.
- 부모 컴포넌트는 자식 컴포넌트를 import 해서 사용하고, 필요한 데이터는 props로 내려준다.
- 배열 데이터를 출력할 때는 `map()`을 이용해 JSX를 반복 생성한다.
- 리스트를 렌더링할 때는 각 항목을 구분할 수 있는 `key`가 필요하다.
- 같은 컴포넌트라도 전달하는 데이터가 다르면 다른 결과를 보여줄 수 있다.

### 간단한 예시

```tsx
type UserProps = {
  name: string
  role: string
}

function UserCard({ name, role }: UserProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  )
}

export default function App() {
  const users = [
    { id: 1, name: "Kim", role: "Frontend" },
    { id: 2, name: "Lee", role: "Backend" },
    { id: 3, name: "Park", role: "Designer" },
  ]

  return (
    <>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          role={user.role}
        />
      ))}
    </>
  )
}
```

### 정리

- 컴포넌트는 화면을 쪼개서 관리하기 위한 기본 단위이다.
- 리스트 출력은 `map()`으로 처리하고, 각 요소에는 `key`를 넣는다.
- 컴포넌트 재사용과 리스트 렌더링은 React에서 가장 자주 쓰는 패턴 중 하나이다.

## 4월 1일(5주차)

### JSX로 마크업 작성하기

태그(Tag)는 HTML 같은 마크업에서 요소를 표시할 때 사용하는 개별 기호를 뜻한다. 예를 들면 `<div>`, `<li>` 같은 것이 있다.

엘리먼트(Element)는 DOM을 이루는 기본 단위로, 여는 태그와 내용, 닫는 태그를 모두 포함한 전체 구조를 의미한다. DOM 노드라고도 볼 수 있다. 예를 들면 `<p>엘리먼트 설명</p>` 같은 형태이다.

어트리뷰트(Attribute, 속성)는 태그의 동작을 조절하거나 추가 정보를 주기 위해 여는 태그 안에 적는 값이다. 예를 들어 `<img>` 태그의 `src` 같은 정적인 속성이 여기에 해당한다.

Property(프로퍼티)는 DOM 객체 내부에 존재하는 동적인 값이다. 프로퍼티는 JavaScript를 통해 바뀔 수 있고, 현재 시점의 상태를 나타낸다.

예를 들어 사용자가 `input` 태그에 문자를 입력하면, 해당 요소의 Property인 `value`는 바뀌지만, HTML에 작성된 Attribute인 `value`는 처음 값으로 남아 있다.

### JSX 안에서 JavaScript 사용하기

JSX에서 JavaScript를 사용하는 대표적인 방법은 다음과 같이 정리할 수 있다.

- 따옴표를 사용해서 문자열을 전달하는 방법
- 중괄호를 사용해 JavaScript 변수를 참조하는 방법
- 중괄호 안에서 JavaScript 함수를 호출하는 방법
- 중괄호 안에서 JavaScript 객체를 적용하는 방법

```tsx
export default function UseJsx() {
  const name = "React"

  return (
    <>
      <h1>Hello, {name}</h1>
    </>
  )
}
```

```tsx
export default function UseJsx() {
  const name = "React"

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date)
  }

  return (
    <>
      <h1>Hello, {name}</h1>
      <p>Today is {formatDate(new Date())}</p>
    </>
  )
}
```

### 데이터 전달과 렌더링

#### 개요

React 컴포넌트는 `props`를 통해 서로 데이터를 주고받는다.

- 부모 컴포넌트는 자식 컴포넌트에게 `props`를 이용해 값을 전달한다.
- `props`는 HTML 속성과 비슷하게 보이지만, 문자열만 전달하는 것이 아니라 객체, 배열, 함수 같은 다양한 JavaScript 값도 넘길 수 있다.

#### Props의 데이터 전달

`props`는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터 묶음이라고 볼 수 있다.

React에서는 JSX 태그에 정보를 넣어서 값을 전달한다.

예를 들어 `<img>` 태그에는 `src`, `alt`, `width`, `height` 같은 속성값을 줄 수 있다.

`<img>`에 전달할 수 있는 `props`는 HTML 표준에서 이미 정의되어 있기 때문에, HTML 문서를 작성할 때와 비슷하게 사용할 수 있다.

### 컴포넌트에 props 전달하기

#### 부모 컴포넌트

- 자식 컴포넌트를 자신의 구조 안에 포함하는 컴포넌트
- 자식 컴포넌트를 import 하고, 필요한 데이터를 `props`로 전달하는 역할을 맡는다

#### 자식 컴포넌트

- 부모로부터 받은 `props`를 기반으로 화면을 구성한다
- 전달받은 데이터를 이용해 구체적인 UI를 만들고 다시 부모 구조 안에서 렌더링된다
- 독립적으로 분리해 재사용할 수 있다

### Props의 특징

- 일방향으로 전달된다
- 읽기 전용이다
- 다양한 타입을 담을 수 있다

### Props의 기본값 지정

부모 컴포넌트로부터 특정 prop이 전달되지 않았을 때는 기본값을 지정할 수 있다.

기본값은 보통 구조 분해 할당 시 `=` 뒤에 적는다.

이 기본값은 prop이 없거나 `undefined`일 때 적용된다.

반면 `{null}` 또는 `{0}`처럼 값이 명시적으로 전달되었다면 기본값은 사용되지 않는다.

### JSX spread 문법으로 props 전달하기

여러 개의 props를 한 번에 전달하고 싶을 때는 JavaScript의 spread 문법을 사용할 수 있다.

객체를 펼쳐서 넘기는 방식이며, 아래 두 코드는 같은 의미이다.

```tsx
<User {...props} />
```

```tsx
<User name={props.name} age={props.age} />
```

이 방식은 보통 다음과 같은 상황에서 많이 사용된다.

- 부모가 전달받은 props를 중간 컴포넌트가 그대로 자식에게 넘길 때
- 버튼처럼 기본 HTML 속성을 한꺼번에 확장해서 전달하고 싶을 때
- 전달해야 하는 props 수가 많아 코드를 줄이고 싶을 때

다만 spread 문법은 편리하다고 해서 무조건 많이 쓰는 것이 좋지는 않다.

#### 주의사항

- 가독성이 떨어질 수 있다. 자식 컴포넌트가 어떤 props를 받는지 한눈에 파악하기 어려워질 수 있다. 이를 흔히 Magic Props 문제라고 부른다.
- 필요하지 않은 데이터까지 함께 넘어갈 수 있다. 이로 인해 성능 저하나 예상하지 못한 버그가 생길 수 있다.
- 작성 순서에 따라 값이 덮어써질 수 있다.

예를 들어 아래 코드에서 `userData` 안에 `age: 20`이 있어도 마지막에 작성한 `age={30}`이 최종 적용된다.

```tsx
<Profile {...userData} age={30} />
```

## 3월 25일(4주차)

### Vite에서 SWC가 사라진 이유

프로젝트 설정은 `vite.config.js` 또는 `vite.config.ts` 파일에서 확인할 수 있다.

#### Oxc(Oxidation Compiler)와 SWC(Speedy Web Compiler)

두 도구 모두 Rust로 작성되었고, 빠른 속도를 강점으로 하는 차세대 JavaScript/TypeScript 도구이다.

- SWC는 Babel을 대체하기 위해 만들어진 컴파일러이자 번들링 도구이다.
- TypeScript를 JavaScript로 변환하는 작업과 번들링에 강점을 가진다.
- Next.js 같은 현대적인 프레임워크에서도 기본 도구로 많이 사용된다.

- Oxc는 ESLint, Prettier, TypeScript 트랜스파일러 등 여러 개발 도구를 고성능으로 대체하려는 방향의 도구 모음이다.
- 특히 파싱 속도와 정적 분석 쪽에서 강점을 가진다.
- 린팅 성능 측면에서도 매우 빠른 편이다.

### 나의 첫 번째 컴포넌트 만들기

#### step 1

```tsx
import reactLogo from "./assets/react.svg"

export default function App() {
  return (
    <>
      <img className="button-icon" src={reactLogo} alt="" />
    </>
  )
}
```

### 컴포넌트의 기본 구조

```tsx
function Profile() {
  return (
    <>
    </>
  )
}
```

### step 2 컴포넌트를 별도의 파일로 분리하기

```tsx
import Profile from "./Profile"

export default function App() {
  return (
    <>
      <Profile />
    </>
  )
}
```

```tsx
import reactLogo from "./assets/react.svg"

export default function Profile() {
  return (
    <>
      <img className="button-icon" src={reactLogo} alt="" />
    </>
  )
}
```

### 컴포넌트의 생성 과정과 사용 방법 정리

#### 컴포넌트 생성

- 컴포넌트 이름과 같은 이름의 파일을 만든다
- `function` 선언 앞에 `export default`를 붙여 외부 파일에서 사용할 수 있도록 한다
- 함수의 중괄호 안에 컴포넌트 로직을 작성한다
- `return`의 소괄호 안에 화면에 보여줄 JSX를 작성한다

#### 컴포넌트 사용

- 사용하려는 컴포넌트를 `import` 한다
- import 한 로컬 변수명을 `<변수명 />` 형태로 원하는 위치에서 사용한다

### 컴포넌트의 중첩(Nesting)

React에서 중첩은 어떤 컴포넌트를 다른 컴포넌트 내부에서 호출하는 것을 의미한다.

중첩은 컴포넌트 안에 또 다른 컴포넌트를 새로 선언하는 의미가 아니라, 이미 만든 컴포넌트를 JSX 안에서 사용한다는 뜻으로 이해하는 것이 맞다.

### 실습 1

```tsx
import Gallery from "./components/Gallery"

export default function App() {
  return (
    <>
      <Gallery />
    </>
  )
}
```

```tsx
import reactLogo from "../assets/react.svg"

export default function Profile() {
  return (
    <>
      <img className="button-icon" src={reactLogo} alt="" />
    </>
  )
}
```

```tsx
import Profile from "./Profile"

export default function Gallery() {
  return (
    <>
      <Profile />
      <Profile />
      <Profile />
    </>
  )
}
```

### 실습 2

```tsx
export default function MyTitle() {
  return (
    <>
      <h1>My Gallery</h1>
    </>
  )
}
```

```tsx
import Profile from "./Profile"
import MyTitle from "./MyTitle"

export default function Gallery() {
  return (
    <>
      <MyTitle />
      <Profile />
      <Profile />
      <Profile />
    </>
  )
}
```

### React가 렌더링 되는 과정

여러 컴포넌트들이 모여 `App.jsx` 또는 `App.tsx` 같은 루트 컴포넌트를 이루고, 이 루트 컴포넌트가 다시 `main.jsx` 또는 `main.tsx`를 통해 `index.html`의 루트 DOM에 연결된다.

정리하면 다음과 같은 흐름으로 생각할 수 있다.

여러 컴포넌트들 -> `App.jsx`라는 루트 컴포넌트 -> `main.jsx` -> `index.html`

### React에서 컴포넌트와 HTML 태그를 어떻게 렌더링하는가

React는 소문자로 시작하는 `<section>` 같은 태그는 일반 HTML 태그로 인식한다.

반면 `<MyTitle>`처럼 대문자로 시작하면 사용자 정의 컴포넌트로 판단한다.

### Default Export와 Named Export의 차이

두 방식의 가장 큰 차이는 `default` 키워드의 사용 여부이다.

두 방식 모두 한 파일에서 함께 사용할 수는 있지만, 하나의 파일에는 `default export`를 하나만 둘 수 있다. 반면 `named export`는 여러 개를 선언할 수 있다.

또한 `default`는 import 할 때 별칭 사용이 자유롭지만, `named export`는 기본적으로 이름을 맞춰서 가져와야 한다.

### Default import의 사용

`import` 다음에 원하는 로컬 변수명을 적어 사용할 수 있다.

예를 들어 `import Banana from "./Button"`처럼 작성하면, 해당 파일 안에서는 `Banana`라는 이름으로 사용할 수 있다.

React 컴포넌트 이름은 대문자로 시작해야 한다.

### named import 사용하기

- export 한 곳과 import 하는 곳에서 컴포넌트 이름이 일치해야 한다
- 한 모듈에 named export가 여러 개 있으면 필요한 것만 골라서 가져올 수 있다

### Named Export의 다양한 사용법

Named export를 사용할 때는 다음과 같은 방식으로 import 할 수 있다.

1. 하나의 컴포넌트만 가져올 때는 중괄호 안에 이름 하나만 적는다.
2. 두 개 이상 가져올 때는 중괄호 안에서 콤마로 구분한다.
3. 이름을 바꾸고 싶다면 `as` 키워드를 사용한다.
4. 전부 가져오고 싶다면 `*`를 이용한 namespace import를 사용한다.

### 실습

```tsx
export function NamedComponent1() {
  return (
    <>
      <h1>네임드 1</h1>
    </>
  )
}

export function NamedComponent2() {
  return (
    <>
      <h1>네임드 2</h1>
    </>
  )
}

export function NamedComponent3() {
  return (
    <>
      <h1>네임드 3</h1>
    </>
  )
}
```

```tsx
// import { NamedComponent1 } from "./NamedComponent"
// import { NamedComponent1, NamedComponent3 } from "./NamedComponent"
// import { NamedComponent1 as Foo, NamedComponent3 as Bar } from "./NamedComponent"
import * as Foo from "./NamedComponent"

export default function NamedComponentTest() {
  return (
    <>
      <h1>Named Component Test</h1>
      <Foo.NamedComponent1 />
      <Foo.NamedComponent2 />
      <Foo.NamedComponent3 />
    </>
  )
}
```

### Named Export를 권장하는 이유

- 일관성이 좋아진다. 팀원 모두가 같은 이름으로 컴포넌트를 부를 수 있다.
- 리팩토링이 편하다. 컴포넌트 이름을 바꿀 때 에디터의 도움을 받기 좋다.
- 트리 쉐이킹(Tree Shaking) 과정에서 유리한 경우가 많다.

어떤 방식을 선택하든, 파일명과 컴포넌트명을 의미 있게 짓는 것이 중요하다.

### JSX로 마크업 작성하기

#### JSX란 무엇인가

JSX는 JavaScript를 확장한 문법으로, JavaScript 파일 안에서 HTML과 비슷한 형태의 마크업을 작성할 수 있게 해준다.

컴포넌트를 만드는 방식은 여러 가지가 있지만, JSX는 표현이 간결하고 읽기 쉬워서 React에서 가장 널리 사용된다.

기존에는 HTML, CSS, JavaScript를 각각 분리된 파일로 다루는 경우가 많았지만, 웹이 점점 더 인터랙티브해지면서 로직이 화면 내용을 직접 결정하는 경우가 많아졌다.

그래서 화면을 담당하는 마크업과 그 화면을 제어하는 로직을 같은 컴포넌트 안에 두는 방식이 오히려 더 자연스러워졌다. React 컴포넌트가 바로 그런 예이다.

예를 들어 버튼의 렌더링 로직과 마크업이 함께 있으면, 상태 변화가 생겼을 때 둘 사이의 동기화를 더 쉽게 유지할 수 있다.

반대로 서로 관련이 없는 마크업은 다른 컴포넌트로 나눠서 관리할 수 있기 때문에 유지보수가 쉬워진다.

즉 React 컴포넌트는 JavaScript 함수로 작성되고, 그 안에서 JSX라는 확장 문법으로 화면 구조를 표현한다. JSX는 HTML과 비슷하지만 더 엄격하고, 동적인 값을 표현하기에 적합하다.

### JSX의 3가지 규칙

- 반드시 하나의 루트 엘리먼트로 반환해야 한다
- 모든 태그를 닫아야 한다
- 속성(attribute)은 camelCase 방식으로 작성한다

#### 용어 정리

- PascalCase: 첫 단어부터 대문자로 시작하는 방식이며, React 컴포넌트 이름에 사용한다
- camelCase: 첫 단어는 소문자로 시작하고, 그다음 단어부터 대문자로 쓰는 방식이며 JSX 속성 이름에 사용한다
