# React Study

Minimal React + TypeScript + Vite workspace for practice.

## Start

```bash
npm install
npm run dev
```

## Structure

- `src/App.tsx`: entry screen for the study tabs
- `src/Step1.tsx` to `src/Step4.tsx`: step-by-step React examples
- `src/homework/`: homework examples
- `step0/`: TypeScript basics notes

## Notes

- `node_modules/` and `dist/` are generated folders, so they are left out to keep the workspace clean.
- React lecture PDFs and study notes were kept. Unrelated OCR, quizlet, log, and unused asset files were removed.

## Study Log

### 2026-04-15 (Week 7)

#### 데이터 전달과 렌더링

이번 주차에는 props로 데이터를 전달하고, 배열 데이터를 원하는 조건으로 걸러서 화면에 렌더링하는 흐름을 정리했다.  
기존에 사용하던 `heroes` 데이터를 조금 더 구조적으로 다루면서 `filter()`와 `map()`을 함께 사용하는 방식이 익숙해지도록 연습했다.

```ts
export const heroes = [
  {
    id: 0,
    casting: "스파이더맨",
    name: "피터 파커",
    power: 4,
  },
  {
    id: 1,
    casting: "아이언맨",
    name: "토니 스타크",
    power: 5,
  },
  {
    id: 2,
    casting: "배트맨",
    name: "브루스 웨인",
    power: 3,
  },
  {
    id: 3,
    casting: "슈퍼맨",
    name: "클라크 켄트",
    power: 5,
  },
  {
    id: 4,
    casting: "헐크",
    name: "로버트 브루스 배너",
    power: 4,
  },
];
```

#### 배열의 항목들을 필터링하기

특정 조건에 맞는 데이터만 골라서 보여줄 때는 `filter()`가 유용하다.  
예를 들어 `"클라크 켄트"`만 찾고 싶다면 아래처럼 작성할 수 있다.

```tsx
import { heroes } from "./HeroesData";

export default function MovieHeroes() {
  const filterTests = heroes.filter((hero) => hero.name === "클라크 켄트");

  const listHeroes = filterTests.map((hero) => (
    <li key={hero.id}>
      <p>
        {hero.name}의 배역은 {hero.casting} 입니다.
      </p>
    </li>
  ));

  return (
    <section>
      <h1>영화 속 영웅들</h1>
      <ul>{listHeroes}</ul>
    </section>
  );
}
```

`power`가 `5`인 hero만 골라서 출력할 때도 같은 방식으로 응용할 수 있다.

```tsx
import { heroes } from "./HeroesData";

export default function MovieHeroes() {
  const filterTests = heroes.filter((hero) => hero.power === 5);

  const listHeroes = filterTests.map((hero) => (
    <li key={hero.id}>
      <p>
        {hero.name}의 배역은 {hero.casting} 입니다.
      </p>
    </li>
  ));

  return (
    <section>
      <h1>영화 속 영웅들</h1>
      <ul>{listHeroes}</ul>
    </section>
  );
}
```

#### `===`와 엄격한 비교

JavaScript에서 `===`는 `==`보다 더 엄격한 비교 연산자다.  
값만 비교하는 것이 아니라 자료형까지 함께 비교하기 때문에, 예기치 않은 형 변환을 줄이고 더 안전하게 조건을 검사할 수 있다.

#### 화살표 함수 정리

화살표 함수는 `=>` 뒤에 식 하나만 바로 오는 경우 그 값을 자동으로 반환한다.  
그래서 짧은 식에는 `return`을 생략할 수 있다.

하지만 `=> {}`처럼 중괄호를 사용하는 block body 형태라면 `return`을 직접 작성해야 한다.  
이 부분을 빼먹으면 아무것도 반환되지 않기 때문에 렌더링 결과가 나오지 않을 수 있다.

그리고 보통 원본 배열은 복수형인 `heroes`, 반복문 안에서 꺼내 쓰는 개별 항목은 단수형인 `hero`처럼 이름을 맞춰두면 코드를 읽기가 훨씬 편해진다.

#### Key prop을 사용하는 이유

React에서 배열을 렌더링할 때는 각 요소에 고유한 `key`가 필요하다.

> Each child in a list should have a unique "key" prop.

이 경고는 목록 안의 각 요소를 React가 구분할 수 없을 때 발생한다.  
항목이 이동되거나, 삽입되거나, 삭제되는 상황에서도 어떤 요소가 어떤 요소인지 정확히 추적하려면 `key`가 꼭 필요하다.

즉석에서 임의의 값을 만드는 것보다, 원래 데이터 안에 들어 있는 `id` 같은 고유값을 `key`로 사용하는 편이 안정적이다.

#### Fragment와 key prop

하나의 항목에서 여러 개의 DOM 노드를 함께 렌더링해야 할 때는 프래그먼트를 사용할 수 있다.  
짧은 문법인 `<>...</>`는 편하지만 `key`를 직접 줄 수 없기 때문에, 목록 렌더링에서는 `Fragment` 컴포넌트를 사용하는 편이 더 적절하다.

```tsx
import { Fragment } from "react";

const listHeroes = filterTests.map((hero) => (
  <Fragment key={hero.id}>
    <h1>{hero.name}</h1>
    <p>{hero.casting}</p>
  </Fragment>
));
```

#### 컴포넌트를 순수하게 유지하기

순수 함수는 같은 입력값이 들어오면 항상 같은 결과를 반환하고, 함수 바깥의 값을 함부로 바꾸지 않는다.  
React 컴포넌트도 이런 방식으로 작성하면 예측 가능한 동작을 유지하기 쉽고, 코드가 커졌을 때도 버그를 줄일 수 있다.

```tsx
export default function OrderUp({ order }: { order: number }) {
  return (
    <section>
      <p>
        치즈버거 {order}개/콜라 {order}개 + (이벤트)프렌치 프라이 {2 * order}개
      </p>
    </section>
  );
}
```

```tsx
import OrderUp from "./OrderUp";

export default function Kiosk() {
  return (
    <section>
      <h2>치즈버거 세트 메뉴를 주문하세요.</h2>
      <p>일반세트 :</p>
      <OrderUp order={1} />
      <p>패밀리 세트 :</p>
      <OrderUp order={2} />
      <p>이용해 주셔서 감사합니다.</p>
    </section>
  );
}
```

#### 의도하지 않은 결과와 사이드 이펙트

렌더링 중에 컴포넌트 바깥의 변수를 바꾸면 의도하지 않은 결과가 생길 수 있다.  
이런 변경은 사이드 이펙트 또는 mutation이라고 부른다.

잘못된 예시는 아래와 같다.

```tsx
let guest = 0;

function Cup() {
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
```

이 코드는 외부 변수 `guest`를 렌더링 도중 계속 바꾸고 있기 때문에 순수한 컴포넌트라고 보기 어렵다.

올바른 방식은 값을 props로 전달하는 것이다.

```tsx
function Cup({ guest }: { guest: number }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

#### 지역 변경(local mutation)

함수 바깥의 값을 바꾸는 것은 문제가 되지만, 함수 내부에서 새로 만든 배열이나 변수에 값을 추가하는 것은 괜찮다.  
예를 들어 렌더링 도중 `cups` 배열을 만들고 `push()`로 JSX를 넣는 방식은 지역 범위 안에서만 일어나는 변경이기 때문에 허용된다.

```tsx
function Cup({ guest }: { guest: number }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  const cups = [];

  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }

  return cups;
}
```

#### UI를 트리 구조로 이해하기

React를 포함한 많은 UI 라이브러리는 화면을 트리 구조로 바라본다.  
컴포넌트들이 어떤 부모-자식 관계를 가지는지 트리처럼 생각하면, 데이터 흐름이나 렌더링 구조를 이해하기 쉬워진다.

브라우저도 HTML은 DOM 트리, CSS는 CSSOM 트리처럼 구조를 관리한다.  
그래서 React의 Render 트리 개념은 앞으로 상태 관리나 성능 최적화를 공부할 때도 계속 중요한 기준이 된다.
