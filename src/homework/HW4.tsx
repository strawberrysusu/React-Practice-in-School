// ==========================================
// 📝 숙제 4번: 컴포넌트 분리 + props + 이벤트 (학생 정보)
// ==========================================
// 📁 이 파일: src/homework/HW4.tsx
//
// [요구사항]
// 1. Title 컴포넌트: "학생 정보" 제목 출력
// 2. Profile 컴포넌트: props로 name, grade 전달받아 출력
//    - 출력: "이름: 홍길동" / "학년: 2학년"
// 3. ActionButton 컴포넌트: props로 text, onClick 전달받아 버튼 출력
// 4. App에서 조합, Profile에 "홍길동"과 2 전달
//    버튼 클릭 시 "학생 정보가 확인되었습니다." alert
//
// 👇 직접 작성하세요!
// ==========================================

function HW4() {
  // TODO: 여기에 코드 작성!

  return (
    <>
      <Title />
      <Profile name="홍길동" grade={2} />
      <ActionButton text="확인" onClick={() => alert("학생 정보가 확인되었습니다.")} />
    </>
  )
}

// TODO: Title 컴포넌트
function Title() {
  return (
    <>
      <h1>학생 정보</h1>
    </>
  )
}
// TODO: Profile 컴포넌트 (props: name, grade)
interface ProfileProps {
  name: string
  grade: number
}
function Profile({name, grade}: ProfileProps) {
  return (
    <>
      <p>이름 : {name}</p>
      <p>학년 : {grade}학년</p>
    </>
  )
}
// TODO: ActionButton 컴포넌트 (props: text, onClick)
interface ActionButtonProps {
  text: string
  onClick: () => void
}
function ActionButton({text, onClick}: ActionButtonProps) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}
export default HW4
