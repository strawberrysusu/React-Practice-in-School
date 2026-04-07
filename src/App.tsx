import { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import HW1 from './homework/HW1'
import HW2 from './homework/HW2'
import HW3 from './homework/HW3'
import HW4 from './homework/HW4'

// =============================================
// 📁 이 파일: src/App.tsx
// 역할: 스텝 전환 + 숙제 전환 네비게이션
// =============================================

const tabs = [
  { id: "s1", label: "1단계 복습" },
  { id: "s2", label: "2단계 복습" },
  { id: "s3", label: "3단계 복습" },
  { id: "s4", label: "4단계 복습" },
  { id: "hw1", label: "숙제1" },
  { id: "hw2", label: "숙제2" },
  { id: "hw3", label: "숙제3" },
  { id: "hw4", label: "숙제4" },
]

function App() {
  const [tab, setTab] = useState("hw1")

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
              background: tab === t.id ? (t.id.startsWith("hw") ? "#e65100" : "#333") : "#fff",
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

      {/* 숙제 */}
      {tab === "hw1" && <HW1 />}
      {tab === "hw2" && <HW2 />}
      {tab === "hw3" && <HW3 />}
      {tab === "hw4" && <HW4 />}
    </div>
  )
}

export default App
