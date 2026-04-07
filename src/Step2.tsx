// ==========================================
// 🟡 2단계 복습: Props와 렌더링
// ==========================================
// 📁 이 파일: src/Step2.tsx
// 핵심: props = 부모가 자식에게 데이터를 넘기는 방법

// ---- ① props 타입 정의 (interface) ----
interface UserCardProps {
  name: string
  age: number
  job: string
  email?: string // optional: 있어도 되고 없어도 됨
}

function UserCard({ name, age, job, email }: UserCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "12px", borderRadius: "8px", margin: "8px 0" }}>
      <strong>{name}</strong> ({age}살) - {job}
      {/* 조건부 렌더링: && → email이 있을 때만 표시 */}
      {email && <span> | 📧 {email}</span>}
      {/* 조건부 렌더링: 삼항 → 조건에 따라 다른 텍스트 */}
      <span> | {age >= 20 ? "🟢 성인" : "🟡 미성년"}</span>
    </div>
  )
}

// ---- ② children props ----
interface CardWrapperProps {
  title: string
  children: React.ReactNode // children 타입은 항상 이거
}

function CardWrapper({ title, children }: CardWrapperProps) {
  return (
    <div style={{ background: "#f9f9f9", padding: "16px", borderRadius: "10px", margin: "12px 0" }}>
      <h4 style={{ marginTop: 0 }}>{title}</h4>
      {children}
    </div>
  )
}

// ---- ③ 리스트 렌더링용 타입 ----
interface Skill {
  id: number
  name: string
  level: "초급" | "중급" | "고급"
}

// ---- 메인 컴포넌트 ----
function Step2() {
  const users = [
    { id: 1, name: "홍길동", age: 25, job: "프론트엔드", email: "hong@test.com" },
    { id: 2, name: "김영희", age: 19, job: "학생" },
    { id: 3, name: "박철수", age: 30, job: "백엔드", email: "park@test.com" },
  ]

  const skills: Skill[] = [
    { id: 1, name: "JavaScript", level: "중급" },
    { id: 2, name: "TypeScript", level: "초급" },
    { id: 3, name: "React", level: "초급" },
    { id: 4, name: "HTML/CSS", level: "고급" },
  ]

  return (
    <div>
      <h2>🟡 2단계 복습: Props + 렌더링</h2>

      {/* ---- 같은 컴포넌트를 데이터만 바꿔서 재사용 ---- */}
      <h3>① Props: 같은 카드, 다른 데이터</h3>
      {users.map((u) => (
        <UserCard key={u.id} name={u.name} age={u.age} job={u.job} email={u.email} />
      ))}
      {/* ↑ map으로 배열 → 컴포넌트 리스트. key는 필수! */}

      {/* ---- children 사용 ---- */}
      <h3>② children: 감싸는 컴포넌트</h3>
      <CardWrapper title="📚 스킬 목록">
        <ul>
          {skills.map((s) => (
            <li key={s.id}>
              {s.name} - {s.level}
              {s.level === "고급" && " ⭐"}
            </li>
          ))}
        </ul>
      </CardWrapper>

      <CardWrapper title="💡 아무거나 넣기">
        <p>CardWrapper 안에 뭘 넣든 children으로 들어갑니다.</p>
        <p>레이아웃 컴포넌트 만들 때 자주 씀!</p>
      </CardWrapper>

      {/* ---- 합격 기준 ---- */}
      <div style={{ background: "#fffde7", padding: "16px", borderRadius: "8px", marginTop: "24px" }}>
        <h3>✅ 2단계 합격 기준</h3>
        <ul>
          <li>interface로 props 타입 정의하고, 컴포넌트에서 구조분해로 받을 수 있다</li>
          <li>optional props(?)가 뭔지 안다</li>
          <li>children: React.ReactNode 를 쓸 수 있다</li>
          <li>&&와 삼항으로 조건부 렌더링 할 수 있다</li>
          <li>map() + key로 리스트 렌더링 할 수 있다</li>
        </ul>
      </div>
    </div>
  )
}

export default Step2
