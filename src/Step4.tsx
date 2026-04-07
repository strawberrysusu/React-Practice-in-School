// ==========================================
// 🔵 4단계: 상태 설계
// ==========================================
// 📁 이 파일: src/Step4.tsx
//
// 1~3단계: "어떻게" 쓰는지 (문법)
// 4단계:   "어디에" "왜" 이렇게 관리하는지 (설계)
//
// 소단원 5개를 탭으로 나눠서 하나씩 봅니다.
// ==========================================

import { useState, useReducer, createContext, useContext } from "react"

function Step4() {
  const [section, setSection] = useState(1)

  const tabs = [
    "① state 판단",
    "② 끌어올리기",
    "③ 중복 제거",
    "④ useReducer",
    "⑤ Context",
  ]

  return (
    <div>
      <h2>🔵 4단계: 상태 설계</h2>
      <p style={{ color: "#666" }}>
        문법보다 "생각하는 법"을 배우는 단계. 천천히 하나씩!
      </p>

      {/* 소단원 탭 */}
      <nav style={{ display: "flex", gap: "4px", marginBottom: "20px", flexWrap: "wrap" }}>
        {tabs.map((label, i) => (
          <button
            key={i}
            onClick={() => setSection(i + 1)}
            style={{
              padding: "6px 12px",
              fontSize: "13px",
              border: section === i + 1 ? "2px solid #1976d2" : "1px solid #ccc",
              borderRadius: "6px",
              background: section === i + 1 ? "#e3f2fd" : "#fff",
              fontWeight: section === i + 1 ? "bold" : "normal",
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      {section === 1 && <Section1 />}
      {section === 2 && <Section2 />}
      {section === 3 && <Section3 />}
      {section === 4 && <Section4 />}
      {section === 5 && <Section5 />}
    </div>
  )
}

// ==========================================
// ① 이게 state여야 하나?
// ==========================================
function Section1() {
  // 예시: 쇼핑 목록
  const [items, setItems] = useState(["우유", "계란", "빵"])
  const [newItem, setNewItem] = useState("")

  // ↓↓↓ 이건 state가 아님! items로부터 "계산"하면 되니까 ↓↓↓
  const itemCount = items.length
  const hasItems = items.length > 0

  const addItem = () => {
    if (!newItem.trim()) return
    setItems([...items, newItem])
    setNewItem("")
  }

  return (
    <div>
      <h3>① 이게 state여야 하나? — 3가지 질문</h3>

      <div style={conceptBox}>
        <p><strong>어떤 값을 state로 만들지 판단하는 3가지 질문:</strong></p>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr style={{ background: "#f5f5f5" }}>
              <th style={thStyle}>질문</th>
              <th style={thStyle}>YES면?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>시간이 지나면서 바뀌나?</td>
              <td style={tdStyle}>바뀌지 않으면 그냥 const 변수</td>
            </tr>
            <tr>
              <td style={tdStyle}>부모가 props로 내려주나?</td>
              <td style={tdStyle}>props로 받으면 state 아님</td>
            </tr>
            <tr>
              <td style={tdStyle}>다른 state로 계산 가능한가?</td>
              <td style={tdStyle}>계산 가능하면 state 아님!</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: "12px" }}>
          → 세 질문 다 통과한 것만 state!
        </p>
      </div>

      <div style={exampleBox}>
        <h4>실습: 쇼핑 목록</h4>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
          placeholder="추가할 품목"
          style={inputStyle}
        />
        <button onClick={addItem} style={{ marginLeft: "8px" }}>추가</button>

        <ul>
          {items.map((item, i) => (
            <li key={i}>
              {item}
              <button onClick={() => setItems(items.filter((_, idx) => idx !== i))} style={delBtn}>
                삭제
              </button>
            </li>
          ))}
        </ul>

        <p>개수: {itemCount}개 {hasItems ? "✅" : "비어있음"}</p>

        <div style={analyzeBox}>
          <strong>분석:</strong>
          <ul style={{ margin: "4px 0" }}>
            <li><code>items</code> → ✅ <strong>state!</strong> 사용자가 추가/삭제하면 바뀜</li>
            <li><code>newItem</code> → ✅ <strong>state!</strong> 입력할 때마다 바뀜</li>
            <li><code>itemCount</code> → ❌ state 아님! items.length로 계산 가능</li>
            <li><code>hasItems</code> → ❌ state 아님! items.length &gt; 0 으로 계산 가능</li>
          </ul>
          <p>
            💡 <strong>계산 가능한 값을 state로 만들면?</strong>
            → items는 업데이트했는데 itemCount는 깜빡하면 → 버그!
          </p>
        </div>
      </div>
    </div>
  )
}

// ==========================================
// ② 형제가 같은 값을 쓸 때 → 부모로 끌어올리기
// ==========================================
function Section2() {
  // ★ 핵심: todos를 부모(Section2)가 갖고 있어야
  //   AddForm과 TodoList 둘 다 쓸 수 있음!
  const [todos, setTodos] = useState(["React 공부", "TypeScript 복습"])

  const addTodo = (text: string) => {
    setTodos([...todos, text])
  }

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h3>② 끌어올리기 (Lifting State Up)</h3>

      <div style={conceptBox}>
        <p><strong>문제 상황:</strong></p>
        <pre style={codeBlock}>{`
  Section2 (부모)
   ├── AddForm (입력 폼)     ← todos에 추가하고 싶음
   └── TodoList (목록 표시)  ← todos를 보여주고 싶음

  형제끼리는 직접 데이터 주고받기 불가능!
  → 해결: todos를 "부모"가 가지고, 양쪽에 props로 내려주기
        `}</pre>
        <p>
          백엔드로 비유하면: 두 서비스가 같은 DB를 써야 할 때,
          각자 DB를 따로 만들지 않고 <strong>공통 DB를 상위에 두는 것</strong>과 같음!
        </p>
      </div>

      <div style={exampleBox}>
        <h4>실습: 할일 관리</h4>
        {/* 부모(Section2)가 todos를 가지고, 자식에게 함수와 데이터를 내려줌 */}
        <AddForm onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} />
        <p style={{ color: "#888", fontSize: "13px" }}>
          총 {todos.length}개 — 이 숫자도 state가 아닌 "계산값"!
        </p>
      </div>

      <div style={analyzeBox}>
        <strong>구조 정리:</strong>
        <pre style={codeBlock}>{`
  Section2 (부모)
  │  └ state: todos          ← 여기서 state 관리!
  │
  ├── AddForm
  │   └ props: onAdd         ← 추가 "함수"를 받음
  │
  └── TodoList
      └ props: todos, onDelete  ← 데이터 + 삭제 함수를 받음
        `}</pre>
        <p>
          💡 <strong>state를 어디에 둘지 = "누가 이 데이터를 쓰는가?"</strong>
          <br />
          → 쓰는 컴포넌트들의 <strong>가장 가까운 공통 부모</strong>에 둔다!
        </p>
      </div>
    </div>
  )
}

// Section2에서 쓰는 자식 컴포넌트들
interface AddFormProps {
  onAdd: (text: string) => void
}

function AddForm({ onAdd }: AddFormProps) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    onAdd(input)     // 부모가 준 함수를 호출해서 추가!
    setInput("")     // 이 input state는 AddForm만 쓰니까 여기에 둠
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "8px 0" }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="새 할일"
        style={inputStyle}
      />
      <button type="submit" style={{ marginLeft: "8px" }}>추가</button>
    </form>
  )
}

interface TodoListProps {
  todos: string[]
  onDelete: (index: number) => void
}

function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i} style={{ margin: "4px 0" }}>
          {todo}
          <button onClick={() => onDelete(i)} style={delBtn}>삭제</button>
        </li>
      ))}
    </ul>
  )
}

// ==========================================
// ③ derived state: 중복 state 피하기
// ==========================================
function Section3() {
  const [todos, setTodos] = useState([
    { id: 1, text: "React 공부", done: false },
    { id: 2, text: "TS 복습", done: true },
    { id: 3, text: "운동하기", done: false },
    { id: 4, text: "밥 먹기", done: true },
  ])
  const [filter, setFilter] = useState<"all" | "done" | "todo">("all")

  // ★ 핵심: filteredTodos는 state가 아님!
  //   todos와 filter로 "계산"하면 됨
  const filteredTodos =
    filter === "all" ? todos :
    filter === "done" ? todos.filter((t) => t.done) :
    todos.filter((t) => !t.done)

  // 이것도 state가 아님! 계산값!
  const doneCount = todos.filter((t) => t.done).length
  const todoCount = todos.filter((t) => !t.done).length

  const toggleTodo = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  return (
    <div>
      <h3>③ derived state (중복 state 피하기)</h3>

      <div style={conceptBox}>
        <p><strong>나쁜 예 vs 좋은 예:</strong></p>
        <pre style={codeBlock}>{`
  ❌ 나쁜 예 (중복 state):
  const [todos, setTodos] = useState([...])
  const [filteredTodos, setFilteredTodos] = useState([...])  // 이것도 state?!
  const [doneCount, setDoneCount] = useState(0)              // 이것도?!
  → todos 바꿀 때마다 filteredTodos, doneCount도 같이 바꿔야 함
  → 하나 깜빡하면 → 버그!

  ✅ 좋은 예 (계산값):
  const [todos, setTodos] = useState([...])     // state는 이것만!
  const [filter, setFilter] = useState("all")   // 이것도 state (사용자가 바꿈)
  const filteredTodos = todos.filter(...)        // 그냥 변수! 매 렌더마다 계산
  const doneCount = todos.filter(...).length     // 그냥 변수!
        `}</pre>
        <p>
          💡 <strong>다른 state에서 계산할 수 있으면 → state로 만들지 마!</strong>
        </p>
      </div>

      <div style={exampleBox}>
        <h4>실습: 필터 있는 할일 목록</h4>

        <div style={{ display: "flex", gap: "8px", margin: "8px 0" }}>
          {(["all", "done", "todo"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                ...tabBtnStyle,
                background: filter === f ? "#1976d2" : "#fff",
                color: filter === f ? "#fff" : "#333",
              }}
            >
              {f === "all" ? `전체 (${todos.length})` : f === "done" ? `완료 (${doneCount})` : `미완료 (${todoCount})`}
            </button>
          ))}
        </div>

        <ul>
          {filteredTodos.map((t) => (
            <li
              key={t.id}
              onClick={() => toggleTodo(t.id)}
              style={{ margin: "4px 0", cursor: "pointer", textDecoration: t.done ? "line-through" : "none", color: t.done ? "#999" : "#333" }}
            >
              {t.done ? "✅" : "⬜"} {t.text} (클릭해서 토글)
            </li>
          ))}
        </ul>
      </div>

      <div style={analyzeBox}>
        <strong>이 예시에서 state vs 계산값:</strong>
        <ul style={{ margin: "4px 0" }}>
          <li><code>todos</code> → ✅ state (할일 목록 원본)</li>
          <li><code>filter</code> → ✅ state (사용자가 선택한 필터)</li>
          <li><code>filteredTodos</code> → ❌ 계산값 (todos + filter로 계산)</li>
          <li><code>doneCount</code> → ❌ 계산값 (todos에서 계산)</li>
        </ul>
      </div>
    </div>
  )
}

// ==========================================
// ④ useReducer: 복잡한 상태를 깔끔하게
// ==========================================

// 먼저 타입 정의
interface Todo {
  id: number
  text: string
  done: boolean
}

// action = "무슨 일이 일어났는지" 설명하는 객체
type TodoAction =
  | { type: "ADD"; text: string }
  | { type: "DELETE"; id: number }
  | { type: "TOGGLE"; id: number }

// reducer = action을 받아서 새 state를 리턴하는 함수
// 백엔드로 비유: switch문으로 요청 종류별로 처리하는 핸들러!
function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.text, done: false }]
    case "DELETE":
      return state.filter((t) => t.id !== action.id)
    case "TOGGLE":
      return state.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t
      )
  }
}

function Section4() {
  // useReducer(리듀서함수, 초기값)
  // → [현재상태, dispatch함수] 리턴 (useState랑 비슷한 구조!)
  const [todos, dispatch] = useReducer(todoReducer, [
    { id: 1, text: "React 공부", done: false },
    { id: 2, text: "TS 복습", done: true },
  ])
  const [input, setInput] = useState("")

  const handleAdd = () => {
    if (!input.trim()) return
    dispatch({ type: "ADD", text: input }) // setTodos 대신 dispatch!
    setInput("")
  }

  return (
    <div>
      <h3>④ useReducer — 복잡한 상태를 깔끔하게</h3>

      <div style={conceptBox}>
        <p><strong>useState vs useReducer 비교:</strong></p>
        <pre style={codeBlock}>{`
  useState 방식 (간단한 상태에 적합):
    const [todos, setTodos] = useState([...])
    setTodos([...todos, newTodo])              // 직접 새 값을 계산
    setTodos(todos.filter(t => t.id !== id))   // 직접 새 값을 계산

  useReducer 방식 (복잡한 상태에 적합):
    const [todos, dispatch] = useReducer(reducer, [...])
    dispatch({ type: "ADD", text: "..." })     // "무슨 일인지"만 알려줌
    dispatch({ type: "DELETE", id: 3 })        // 계산은 reducer가 함
        `}</pre>
        <p>
          백엔드로 비유: <strong>API 라우터 + 컨트롤러</strong>와 같음!
          <br />
          dispatch = 요청 보내기 / action.type = 라우트 / reducer = 컨트롤러
        </p>
        <p>
          💡 <strong>언제 useReducer?</strong>
          → state 업데이트 방법이 3개 이상이면 고려해볼 만함
        </p>
      </div>

      <div style={exampleBox}>
        <h4>실습: useReducer로 만든 할일 목록</h4>

        <div style={{ margin: "8px 0" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="새 할일"
            style={inputStyle}
          />
          <button onClick={handleAdd} style={{ marginLeft: "8px" }}>추가</button>
        </div>

        <ul>
          {todos.map((t) => (
            <li key={t.id} style={{ margin: "4px 0" }}>
              <span
                onClick={() => dispatch({ type: "TOGGLE", id: t.id })}
                style={{ cursor: "pointer", textDecoration: t.done ? "line-through" : "none", color: t.done ? "#999" : "#333" }}
              >
                {t.done ? "✅" : "⬜"} {t.text}
              </span>
              <button
                onClick={() => dispatch({ type: "DELETE", id: t.id })}
                style={delBtn}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div style={analyzeBox}>
        <strong>useReducer 구조 정리:</strong>
        <pre style={codeBlock}>{`
  1. 타입 정의
     type Action = { type: "ADD", text: string }
                 | { type: "DELETE", id: number }

  2. reducer 함수 (컴포넌트 바깥에 정의!)
     function reducer(state, action) {
       switch (action.type) { ... }
     }

  3. 컴포넌트 안에서 사용
     const [state, dispatch] = useReducer(reducer, 초기값)
     dispatch({ type: "ADD", text: "..." })
        `}</pre>
      </div>
    </div>
  )
}

// ==========================================
// ⑤ Context: 깊은 props 전달 줄이기
// ==========================================

// 1단계: Context 만들기
const ThemeContext = createContext<{
  dark: boolean
  toggle: () => void
}>({
  dark: false,
  toggle: () => {},
})

function Section5() {
  const [dark, setDark] = useState(false)

  return (
    <div>
      <h3>⑤ Context — props 전달 지옥 탈출</h3>

      <div style={conceptBox}>
        <p><strong>문제: Prop Drilling (프롭 드릴링)</strong></p>
        <pre style={codeBlock}>{`
  ❌ props로 계속 내려보내기:
  App → Layout → Sidebar → MenuItem → Icon
                                       ↑ 여기서 theme이 필요한데
                                         4단계를 거쳐서 내려와야 함!

  ✅ Context 사용:
  App (Provider: theme을 제공)
   └── Layout
        └── Sidebar
             └── MenuItem
                  └── Icon (useContext로 바로 가져옴!)
        `}</pre>
        <p>
          백엔드로 비유: <strong>Spring의 의존성 주입(DI)</strong>과 같은 느낌!
          <br />
          필요한 곳에서 @Autowired 하듯, useContext로 바로 가져옴
        </p>
      </div>

      {/* 2단계: Provider로 감싸기 (값을 "제공") */}
      <ThemeContext.Provider value={{ dark, toggle: () => setDark(!dark) }}>
        <div style={exampleBox}>
          <h4>실습: 다크모드 토글</h4>
          <p>아래 컴포넌트들은 props 없이 Context에서 직접 theme을 가져옴!</p>
          {/* PageLayout → Header, Content 모두 props 없이 theme 사용 */}
          <PageLayout />
        </div>
      </ThemeContext.Provider>

      <div style={analyzeBox}>
        <strong>Context 3단계:</strong>
        <pre style={codeBlock}>{`
  1. 만들기 (컴포넌트 바깥)
     const ThemeContext = createContext(기본값)

  2. 제공하기 (상위 컴포넌트)
     <ThemeContext.Provider value={{ dark, toggle }}>
       <자식들 />
     </ThemeContext.Provider>

  3. 사용하기 (어디서든)
     const { dark, toggle } = useContext(ThemeContext)
        `}</pre>
        <p>
          💡 <strong>언제 Context?</strong>
          → props를 2단계 이상 내려보내야 할 때 고려.
          <br />
          단, 간단한 경우는 그냥 props가 더 나음! 남용 금지.
        </p>
      </div>

      {/* ---- 4단계 전체 합격 기준 ---- */}
      <div style={{ background: "#fffde7", padding: "16px", borderRadius: "8px", marginTop: "24px" }}>
        <h3>✅ 4단계 합격 기준</h3>
        <ul>
          <li>"이 값이 state여야 하는가?" 3가지 질문으로 판단 가능</li>
          <li>형제 컴포넌트가 같은 데이터 필요하면 → 부모로 올려야 한다는 걸 안다</li>
          <li>다른 state에서 계산 가능한 값은 state로 만들면 안 된다는 걸 안다</li>
          <li>useReducer로 dispatch/action/reducer 패턴을 쓸 수 있다</li>
          <li>Context로 createContext → Provider → useContext 흐름을 쓸 수 있다</li>
        </ul>
      </div>
    </div>
  )
}

// Context 예시용 컴포넌트들 (props 없이 theme 사용!)
function PageLayout() {
  return (
    <div>
      <ContextHeader />
      <ContextContent />
    </div>
  )
}

function ContextHeader() {
  // 3단계: useContext로 가져오기 — props 안 받아도 됨!
  const { dark, toggle } = useContext(ThemeContext)

  return (
    <div style={{ background: dark ? "#333" : "#f0f0f0", color: dark ? "#fff" : "#333", padding: "12px", borderRadius: "8px 8px 0 0" }}>
      <strong>헤더</strong> (현재: {dark ? "🌙 다크" : "☀️ 라이트"})
      <button onClick={toggle} style={{ marginLeft: "12px" }}>
        모드 전환
      </button>
    </div>
  )
}

function ContextContent() {
  const { dark } = useContext(ThemeContext)

  return (
    <div style={{ background: dark ? "#444" : "#fff", color: dark ? "#eee" : "#333", padding: "16px", borderRadius: "0 0 8px 8px", border: `1px solid ${dark ? "#555" : "#ddd"}` }}>
      <p>컨텐츠 영역입니다.</p>
      <p>이 컴포넌트도 props 없이 theme을 알고 있어요!</p>
      <p style={{ fontSize: "13px", color: dark ? "#aaa" : "#888" }}>
        PageLayout → ContextContent 경로에서 theme props를 안 내려보냈는데도 작동!
      </p>
    </div>
  )
}

// ==========================================
// 공통 스타일
// ==========================================
const conceptBox: React.CSSProperties = {
  background: "#f8f9ff", border: "1px solid #d0d7ff", padding: "16px", borderRadius: "8px", margin: "12px 0",
}
const exampleBox: React.CSSProperties = {
  border: "1px solid #e0e0e0", padding: "16px", borderRadius: "8px", margin: "12px 0",
}
const analyzeBox: React.CSSProperties = {
  background: "#fff8e1", padding: "16px", borderRadius: "8px", margin: "12px 0",
}
const codeBlock: React.CSSProperties = {
  background: "#1e1e1e", color: "#d4d4d4", padding: "12px", borderRadius: "6px", fontSize: "13px", overflow: "auto", whiteSpace: "pre",
}
const inputStyle: React.CSSProperties = {
  padding: "6px 10px", borderRadius: "4px", border: "1px solid #ccc",
}
const delBtn: React.CSSProperties = {
  marginLeft: "8px", color: "red", border: "none", background: "none", cursor: "pointer",
}
const thStyle: React.CSSProperties = {
  padding: "8px 12px", textAlign: "left", borderBottom: "2px solid #ddd",
}
const tdStyle: React.CSSProperties = {
  padding: "8px 12px", borderBottom: "1px solid #eee",
}
const tabBtnStyle: React.CSSProperties = {
  padding: "4px 12px", borderRadius: "20px", border: "1px solid #ccc", cursor: "pointer", fontSize: "13px",
}

export default Step4
