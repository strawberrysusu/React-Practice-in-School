// ==========================================
// 📝 숙제 1번: 컴포넌트 분리 + props + 이벤트
// ==========================================
// 📁 이 파일: src/homework/HW1.tsx
//
// [요구사항]
// 1. Header 컴포넌트: "My App" 제목 출력
// 2. Content 컴포넌트: props로 message를 전달받아 출력
// 3. Button 컴포넌트: props로 text와 onClick을 전달받아 버튼 출력
// 4. App에서 모든 컴포넌트 조합, 버튼 클릭 시 "버튼 클릭됨" alert
//
// 👇 아래에 직접 코드를 작성하세요!
// 막히면 "힌트" 라고 말해주세요.
// ==========================================

function HW1() {
  // TODO: 여기에 코드 작성!
  // Header, Content, Button 컴포넌트를 조합하세요

  return (
    <div>
      <Header />
      <Content message = "안녕하세요 React !"/>
      <Button text="클릭하세요" onClick={() => alert("버튼 클릭됨")} />

    </div>
  )
}
// TODO: Header 컴포넌트 만들기 (props: message)
function Header() {
  return (
    <>
      <h1>My App</h1>
    </>
  )
}

// TODO: Content 컴포넌트 만들기 (props: message)
interface ContentProps {
  message: string
}
function Content({ message }: ContentProps) {
  return (
    <>
      <p>{message}</p>
    </>
  )
}
// TODO: Button 컴포넌트 만들기 (props: text, onClick)
interface ButtonProps {
  text: string
  onClick: () => void
}
function Button({text, onClick}: ButtonProps) {
  return <button onClick={onClick}>{text}</button>
}
export default HW1