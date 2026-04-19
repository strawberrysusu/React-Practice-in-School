import { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import HW1 from './homework/HW1'
import HW2 from './homework/HW2'
import HW3 from './homework/HW3'
import HW4 from './homework/HW4'
import HW5 from './homework/HW5'
import PW1 from './practice/HW1'
import PW2 from './practice/HW2'
import PW3 from './practice/HW3'
import PW4 from './practice/HW4'
import PW5 from './practice/HW5'

// =============================================
// 📁 이 파일: src/App.tsx
// 역할: 스텝 전환 + 숙제 전환 + 연습 전환 네비게이션
// =============================================

const tabs = [
  { id: "s1", label: "1단계 복습", group: "step" },
  { id: "s2", label: "2단계 복습", group: "step" },
  { id: "s3", label: "3단계 복습", group: "step" },
  { id: "s4", label: "4단계 복습", group: "step" },
  { id: "hw1", label: "숙제1", group: "hw" },
  { id: "hw2", label: "숙제2", group: "hw" },
  { id: "hw3", label: "숙제3", group: "hw" },
  { id: "hw4", label: "숙제4", group: "hw" },
  { id: "hw5", label: "숙제5", group: "hw" },
  { id: "pw1", label: "연습1", group: "pw" },
  { id: "pw2", label: "연습2", group: "pw" },
  { id: "pw3", label: "연습3", group: "pw" },
  { id: "pw4", label: "연습4", group: "pw" },
  { id: "pw5", label: "연습5", group: "pw" },
]

function colorFor(group: string, active: boolean) {
  if (!active) return "#fff"
  if (group === "hw") return "#e65100"
  if (group === "pw") return "#2e7d32"
  return "#333"
}

function App() {
  const [tab, setTab] = useState("s1")

  return (
    <div>
      {/* 탭 네비게이션 */}
      <nav style={{ display: "flex", gap: "6px", marginBottom: "24px", flexWrap: "wrap" }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: "6px 14px",
              fontSize: "13px",
              border: tab === t.id ? "2px solid #333" : "1px solid #ccc",
              borderRadius: "6px",
              background: colorFor(t.group, tab === t.id),
              color: tab === t.id ? "#fff" : "#333",
              fontWeight: tab === t.id ? "bold" : "normal",
              cursor: "pointer",
            }}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {/* 복습 */}
      {tab === "s1" && <Step1 />}
      {tab === "s2" && <Step2 />}
      {tab === "s3" && <Step3 />}
      {tab === "s4" && <Step4 />}

      {/* 숙제 (정답 보관) */}
      {tab === "hw1" && <HW1 />}
      {tab === "hw2" && <HW2 />}
      {tab === "hw3" && <HW3 />}
      {tab === "hw4" && <HW4 />}
      {tab === "hw5" && <HW5 />}

      {/* 연습 (빈 템플릿 - 매번 리셋하며 반복 연습) */}
      {tab === "pw1" && <PW1 />}
      {tab === "pw2" && <PW2 />}
      {tab === "pw3" && <PW3 />}
      {tab === "pw4" && <PW4 />}
      {tab === "pw5" && <PW5 />}
    </div>
  )
}

export default App
