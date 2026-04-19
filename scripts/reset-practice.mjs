// ==========================================
// 📁 scripts/reset-practice.mjs
// 역할: src/practice/HW1~5.tsx 를 빈 템플릿으로 리셋
//
// 사용법:
//   npm run practice:reset        → 전체 리셋 (HW1~5)
//   npm run practice:reset 1      → HW1만 리셋
//   npm run practice:reset 2 5    → HW2, HW5만 리셋
// ==========================================

import { writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const practiceDir = resolve(__dirname, '..', 'src', 'practice')

const templates = {
  1: `// ==========================================
// 📝 연습 1번: 컴포넌트 분리 + props + 이벤트
// ==========================================
// 📁 이 파일: src/practice/HW1.tsx
//
// [요구사항]
// 1. Header 컴포넌트: "My App" 제목 출력
// 2. Content 컴포넌트: props로 message를 전달받아 출력
// 3. Button 컴포넌트: props로 text와 onClick을 전달받아 버튼 출력
// 4. HW1에서 모든 컴포넌트 조합, 버튼 클릭 시 "버튼 클릭됨" alert
//
// 👇 아래에 직접 코드를 작성하세요!
// ==========================================

function HW1() {
  // TODO: Header / Content / Button 조합
  return <div>{/* 여기에 작성 */}</div>
}

// TODO: Header 컴포넌트

// TODO: Content 컴포넌트 (props: message)

// TODO: Button 컴포넌트 (props: text, onClick)

export default HW1
`,

  2: `// ==========================================
// 📝 연습 2번: 이벤트 여러 개 처리
// ==========================================
// 📁 이 파일: src/practice/HW2.tsx
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
  // TODO: 버튼 하나에 3개의 이벤트 핸들러 달기
  return <div>{/* 여기에 작성 */}</div>
}

export default HW2
`,

  3: `// ==========================================
// 📝 연습 3번: 간단한 이벤트 버튼
// ==========================================
// 📁 이 파일: src/practice/HW3.tsx
//
// [요구사항]
// - "클릭" 버튼 하나를 만들고, 클릭 시 '클릭' alert이 뜨도록 작성
//
// 👇 아래에 직접 코드를 작성하세요!
// ==========================================

function HW3() {
  // TODO: 버튼 작성
  return <div>{/* 여기에 작성 */}</div>
}

export default HW3
`,

  4: `// ==========================================
// 📝 연습 4번: 컴포넌트 분리 + props + 이벤트 (학생 정보)
// ==========================================
// 📁 이 파일: src/practice/HW4.tsx
//
// [요구사항]
// 1. Title 컴포넌트: "학생 정보" 제목 출력
// 2. Profile 컴포넌트: props로 name, grade 전달받아 출력
//    - 출력: "이름: 홍길동" / "학년: 2학년"
// 3. ActionButton 컴포넌트: props로 text, onClick 전달받아 버튼 출력
// 4. HW4에서 조합, Profile에 "홍길동"과 2 전달
//    버튼 클릭 시 "학생 정보가 확인되었습니다." alert
//
// 👇 직접 작성하세요!
// ==========================================

function HW4() {
  // TODO: Title / Profile / ActionButton 조합
  return <div>{/* 여기에 작성 */}</div>
}

// TODO: Title 컴포넌트

// TODO: Profile 컴포넌트 (props: name, grade)

// TODO: ActionButton 컴포넌트 (props: text, onClick)

export default HW4
`,

  5: `// ==========================================
// 📝 연습 5번: Kiosk / OrderUp (props 중첩)
// ==========================================
// 📁 이 파일: src/practice/HW5.tsx
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
//
// 👇 아래에 직접 코드를 작성하세요!
// ==========================================

function HW5() {
  // TODO: OrderUp 호출
  return <div>{/* 여기에 작성 */}</div>
}

// TODO: Kiosk 컴포넌트 (props: order)
//   - order === 1 이면 "일반 세트 :" + 치즈버거 1개/콜라 1개 + 프렌치 프라이 2개
//   - order === 2 이면 "패밀리 세트 :" + 치즈버거 2개/콜라 2개 + 프렌치 프라이 4개

// TODO: OrderUp 컴포넌트
//   - 맨 위 헤더: "치즈버거 세트 메뉴를 주문하세요."
//   - Kiosk order={1}, Kiosk order={2} 2번 렌더링
//   - 맨 아래 푸터: "이용해 주셔서 감사합니다."

export default HW5
`,
}

async function main() {
  const args = process.argv.slice(2)
  const targets = args.length > 0
    ? args.map((n) => Number(n)).filter((n) => templates[n])
    : [1, 2, 3, 4, 5]

  if (targets.length === 0) {
    console.error('리셋할 연습 번호가 없습니다. 예: npm run practice:reset 1 3')
    process.exit(1)
  }

  await mkdir(practiceDir, { recursive: true })

  for (const n of targets) {
    const filePath = resolve(practiceDir, `HW${n}.tsx`)
    await writeFile(filePath, templates[n], 'utf8')
    console.log(`✓ reset  src/practice/HW${n}.tsx`)
  }

  console.log(`\n연습 ${targets.join(', ')}번 리셋 완료. 빈 템플릿으로 다시 작성해보세요!`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
