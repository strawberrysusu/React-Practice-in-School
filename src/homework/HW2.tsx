// ==========================================
// 📝 숙제 2번: 이벤트 여러 개 처리
// ==========================================
// 📁 이 파일: src/homework/HW2.tsx
//
// [요구사항]
// 버튼 1개를 만들고:
// - 클릭 시 → 콘솔에 "클릭됨" 출력
// - 마우스 올리면 → 콘솔에 "마우스 올라감" 출력
// - 마우스 나가면 → 콘솔에 "마우스 나감" 출력
//
// 힌트: onClick, onMouseEnter, onMouseLeave
// ==========================================

function HW2() {
  // TODO: 여기에 코드 작성!

  return (
    <div>
<button onClick={() => console.log("클릭됨")}
        onMouseEnter={() => console.log("마우스 올라감")}
        onMouseLeave={() => console.log("마우스 나감")}>
  이벤트 버튼
</button>
    </div>
  )
}



export default HW2
