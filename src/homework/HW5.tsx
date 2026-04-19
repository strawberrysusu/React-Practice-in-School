// ==========================================
// 📝 숙제 5번: Kiosk / OrderUp (props 중첩)
// ==========================================
// 📁 이 파일: src/homework/HW5.tsx
//
// [요구사항 — 찐 시험 문제]
// (Step1) Kiosk 컴포넌트를 만들고, OrderUp 컴포넌트로 order prop을 전달
//   - order === 1 → 일반 세트
//   - order === 2 → 패밀리 세트
// (Step2) OrderUp 컴포넌트를 만들고, Kiosk에 order prop을 처리
// (Step3) root 컴포넌트에서 OrderUp 렌더링
//
// [출력 예시]
//   치즈버거 세트 메뉴를 주문하세요.
//   일반 세트 :
//   치즈버거 1개/콜라 1개 + (이벤트)프렌치 프라이 2개
//   패밀리 세트 :
//   치즈버거 2개/콜라 2개 + (이벤트)프렌치 프라이 4개
//   이용해 주셔서 감사합니다.
// ==========================================

interface KioskProps {
  order: number
}

function Kiosk({ order }: KioskProps) {
  if (order === 1) {
    return (
      <>
        <p>일반 세트 :</p>
        <p>치즈버거 1개/콜라 1개 + (이벤트)프렌치 프라이 2개</p>
      </>
    )
  }
  if (order === 2) {
    return (
      <>
        <p>패밀리 세트 :</p>
        <p>치즈버거 2개/콜라 2개 + (이벤트)프렌치 프라이 4개</p>
      </>
    )
  }
  return null
}

function OrderUp() {
  return (
    <div>
      <p>치즈버거 세트 메뉴를 주문하세요.</p>
      <Kiosk order={1} />
      <Kiosk order={2} />
      <p>이용해 주셔서 감사합니다.</p>
    </div>
  )
}

function HW5() {
  return <OrderUp />
}

export default HW5
