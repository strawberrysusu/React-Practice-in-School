// ==========================================
// 🟢 1단계 복습: TSX 문법 + 컴포넌트
// ==========================================
// 📁 이 파일: src/Step1.tsx
// 핵심: 컴포넌트 = HTML(TSX)을 리턴하는 함수

function Step1() {
  // ---- {} 안에 JS 값 넣기 ----
  const siteName = "나의 프로필"
  const year = 2026
  const skills = ["React", "TypeScript", "Vite"]

  return (
    // 규칙1: 최상위 태그 1개로 감싸기 (div 또는 빈 태그 <></>)
    <div>
      <h2>🟢 1단계 복습: TSX + 컴포넌트</h2>

      {/* 규칙4: {중괄호} 안에 변수·연산 */}
      <h3>{siteName}</h3>
      <p>연도: {year} | 스킬 수: {skills.length}개</p>

      {/* 규칙2: class 대신 className */}
      <p className="info">class가 아니라 className</p>

      {/* 규칙3: 태그 반드시 닫기 */}
      <img src="https://picsum.photos/seed/step1/200/80" alt="샘플" style={{ borderRadius: "8px" }} />
      <hr />

      {/* ---- 컴포넌트 조립 ---- */}
      {/* 대문자 시작 = 내가 만든 컴포넌트, 소문자 = HTML 태그 */}
      <ProfileCard />
      <SkillList />

      <PassCriteria />
    </div>
  )
}

// ---- 컴포넌트는 그냥 함수. 이름만 대문자로! ----

function ProfileCard() {
  return (
    <div style={boxStyle("#f0f4ff")}>
      <h3>👤 홍길동</h3>
      <p>프론트엔드 개발 공부 중</p>
    </div>
  )
}

function SkillList() {
  const items = ["HTML/CSS", "JavaScript", "TypeScript", "React"]
  return (
    <div style={boxStyle("#f0faf0")}>
      <h3>🛠 기술 스택</h3>
      <ul>
        {items.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </div>
  )
}

// ---- import/export 정리 ----
// export default Step1 → 이 파일의 대표 컴포넌트
// 다른 파일에서: import Step1 from './Step1'
// 파일 분리하고 싶으면: 새 파일에 함수 쓰고 export default

function PassCriteria() {
  return (
    <div style={boxStyle("#fffde7")}>
      <h3>✅ 1단계 합격 기준</h3>
      <ul>
        <li>TSX 규칙 4가지(감싸기, className, 닫기, {"{}"})를 안 보고 말할 수 있다</li>
        <li>function으로 컴포넌트 만들고 다른 컴포넌트 안에서 쓸 수 있다</li>
        <li>export default / import 가 뭔지 안다</li>
      </ul>
    </div>
  )
}

const boxStyle = (bg: string) => ({
  background: bg, padding: "16px", borderRadius: "8px", margin: "12px 0",
})

export default Step1
