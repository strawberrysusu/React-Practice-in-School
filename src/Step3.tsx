// ==========================================
// 🟠 3단계 복습: 상태(State)와 입력
// ==========================================
// 📁 이 파일: src/Step3.tsx
// 핵심: useState = 화면에서 바뀌는 값을 관리

import { useState } from "react"

// 할일 목록용 타입
interface Todo {
  id: number
  text: string
}

function Step3() {
  // ---- ① useState 기본: 카운터 ----
  const [count, setCount] = useState<number>(0)

  // ---- ② Controlled Input ----
  const [text, setText] = useState<string>("")

  // ---- ③ 폼: 객체 state ----
  const [form, setForm] = useState({ name: "", email: "" })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form, // 기존 값 복사 (spread)
      [e.target.name]: e.target.value, // 바뀐 필드만 덮어쓰기
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // ← 이거 없으면 페이지가 새로고침됨!
    alert(`이름: ${form.name}, 이메일: ${form.email}`)
    setForm({ name: "", email: "" })
  }

  // ---- ④ 배열 state: 불변 업데이트 ----
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "React 공부" },
    { id: 2, text: "TypeScript 복습" },
    { id: 3, text: "할일 목록 만들기" },
  ])
  const [newTodo, setNewTodo] = useState("")

  const addTodo = () => {
    if (!newTodo.trim()) return
    // 추가: 기존 배열 펼치고 + 새 항목
    setTodos([...todos, { id: Date.now(), text: newTodo }])
    setNewTodo("")
  }

  const deleteTodo = (id: number) => {
    // 삭제: filter로 해당 항목 제외한 새 배열
    setTodos(todos.filter((t) => t.id !== id))
  }

  return (
    <div>
      <h2>🟠 3단계 복습: 상태 + 입력</h2>

      {/* ---- ① 카운터 ---- */}
      <section style={sectionStyle}>
        <h3>① useState 카운터</h3>
        <p style={{ fontSize: "24px" }}>{count}</p>
        <button onClick={() => setCount(count + 9)}>+9</button>{" "}
        <button onClick={() => setCount(count - 1)}>-1</button>{" "}
        <button onClick={() => setCount(0)}>리셋</button>
        <p style={{ color: "#888", fontSize: "13px" }}>
          const [count, setCount] = useState&lt;number&gt;(0)
        </p>
      </section>

      {/* ---- ② Controlled Input ---- */}
      <section style={sectionStyle}>
        <h3>② Controlled Input</h3>
        <input
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
          placeholder="입력해보세요"
          style={inputStyle}
        />
        <p style={{ color: text.length > 5 ? "red" : "black" }}>
          입력값: {text} (글자수: {text.length})</p>
        <p style={{ color: "#888", fontSize: "13px" }}>
          value=&#123;state&#125; + onChange=&#123;setState&#125; = controlled input
        </p>
      </section>

      {/* ---- ③ 폼 ---- */}
      <section style={sectionStyle}>
        <h3>③ 폼 (객체 state + preventDefault)</h3>
        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleFormChange} placeholder="이름" style={inputStyle} />
          <input name="email" value={form.email} onChange={handleFormChange} placeholder="이메일" style={{ ...inputStyle, marginLeft: "8px" }} />
          <button type="submit" style={{ marginLeft: "8px" }}>제출</button>
        </form>
        <p style={{ color: "#888", fontSize: "13px" }}>
          폼 상태: {JSON.stringify(form)}
        </p>
      </section>

      {/* ---- ④ 할일 목록 ---- */}
      <section style={sectionStyle}>
        <h3>④ 배열 state (불변 업데이트)</h3>
        <div>
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="새 할일"
            style={inputStyle}
          />
          <button onClick={addTodo} style={{ marginLeft: "8px" }}>추가</button>
        </div>
        <ul>
          {todos.map((t) => (
            <li key={t.id} style={{ margin: "4px 0" }}>
              {t.text}
              <button onClick={() => deleteTodo(t.id)} style={{ marginLeft: "8px", color: "red", cursor: "pointer" }}>
                삭제
              </button>
            </li>
          ))}
        </ul>
        {todos.length === 0 && <p style={{ color: "#999" }}>할일이 없습니다</p>}
        <p style={{ color: "#888", fontSize: "13px" }}>
          추가: [...기존, 새것] | 삭제: .filter(조건)
        </p>
      </section>

      {/* ---- 합격 기준 ---- */}
      <div style={{ background: "#fffde7", padding: "16px", borderRadius: "8px", marginTop: "24px" }}>
        <h3>✅ 3단계 합격 기준</h3>
        <ul>
          <li>useState로 숫자, 문자, 객체, 배열 상태 관리 가능</li>
          <li>이벤트 타입(ChangeEvent, MouseEvent, FormEvent) 쓸 수 있다</li>
          <li>e.preventDefault()가 왜 필요한지 설명 가능</li>
          <li>controlled input이 뭔지 안다 (value + onChange 세트)</li>
          <li>객체/배열을 spread(...)로 불변 업데이트 가능</li>
        </ul>
      </div>
    </div>
  )
}

const sectionStyle: React.CSSProperties = {
  border: "1px solid #e0e0e0", padding: "16px", borderRadius: "8px", margin: "12px 0",
}
const inputStyle: React.CSSProperties = {
  padding: "6px 10px", borderRadius: "4px", border: "1px solid #ccc",
}

export default Step3
