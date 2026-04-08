# 2단계: Props와 렌더링

> 컴포넌트 간 데이터 전달, 조건에 따라 다르게 보여주기, 리스트 그리기

---

## 반드시 알아야 하는 것

### 1. Props = 부모 → 자식 데이터 전달

```tsx
// 1) 타입 정의
interface CardProps {
  title: string;
  description: string;
  isNew?: boolean;       // optional
}

// 2) 자식: props 받기 (구조분해로!)
function Card({ title, description, isNew }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {isNew && <span>NEW!</span>}
    </div>
  );
}

// 3) 부모: props 넘기기
<Card title="리액트" description="재밌다" isNew={true} />
<Card title="타입스크립트" description="유용하다" />  {/* isNew 생략 가능 */}
```

**흐름: 부모가 데이터를 정하고 → props로 내려주고 → 자식은 받아서 보여줌**

### 2. children props

```tsx
interface LayoutProps {
  children: React.ReactNode;  // ← 이 타입 외우기!
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>헤더</header>
      <main>{children}</main>   {/* 여기에 들어감 */}
      <footer>푸터</footer>
    </div>
  );
}

// 사용: 태그 사이에 넣은 게 children
<Layout>
  <p>이 부분이 children!</p>
</Layout>
```

### 3. 조건부 렌더링 (시험 자주 나옴)

```tsx
// 방법 1: 삼항연산자 - A 또는 B 중 하나
{isLoggedIn ? <p>환영합니다</p> : <p>로그인하세요</p>}

// 방법 2: && - 조건 맞으면 보여주기
{isNew && <span>NEW!</span>}

// 방법 3: if문 - 복잡할 때
let content;
if (status === "loading") content = <p>로딩중...</p>;
else if (status === "error") content = <p>에러!</p>;
else content = <p>완료!</p>;
return <div>{content}</div>;
```

### 4. 리스트 렌더링 + key (매우 중요!)

```tsx
const users = [
  { id: 1, name: "철수" },
  { id: 2, name: "영희" },
  { id: 3, name: "민수" },
];

return (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
```

**key가 왜 필요한가?**
> React가 리스트에서 어떤 항목이 추가/삭제/변경되었는지 **효율적으로 추적**하기 위해.
> key가 없으면 전체를 다시 그려야 해서 느려짐.
> key는 **고유한 값** (id 권장, index는 최후의 수단)

---

## 합격 기준

- props 타입 정의 + 전달 + 받기 코드를 쓸 수 있으면 OK
- `children: React.ReactNode` 를 기억하면 OK
- 조건부 렌더링 3가지 중 2가지 이상 쓸 수 있으면 OK
- "key가 왜 필요하나요?" → "React가 변경 추적하려고" 라고 답할 수 있으면 OK
