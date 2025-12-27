import { useEffect, useRef, useState } from "react"

const initialTodos = [
  "Go for a peaceful morning nature walk 🌿",
  "Explore Chanderi Fort 🏰",
  "Enjoy a traditional local breakfast 🍽️",
  "Attend handloom weaving experience 🧵",
  "Relax with a book under the trees 📖",
  "Capture sunset views 📸",
  "Enjoy a bonfire evening 🔥",
  "Taste authentic Bundelkhand cuisine 🍛",
  "Visit nearby temples 🛕",
  "Stargazing at night ✨"
]

const PlayfulTodoList = () => {
  const [todos, setTodos] = useState(
    initialTodos.map((text) => ({
      text,
      done: false
    }))
  )

  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  // 👇 Observe when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const toggleTodo = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto px-6">

        <h2
          className={`
            text-3xl font-bold text-center mb-10
            transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          Things To Do at Chanderi Eco Retreat
        </h2>

        <ul className="space-y-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              onClick={() => toggleTodo(index)}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={`
                cursor-pointer select-none
                flex items-center gap-4
                p-4 rounded-lg border bg-white shadow-sm
                transition-all duration-500
                hover:scale-[1.02]
                ${todo.done ? "todo-done" : ""}
                ${visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"}
              `}
            >
              <span
                className={`
                  w-6 h-6 flex items-center justify-center
                  rounded-full border-2
                  transition-all duration-300
                  ${todo.done
                    ? "bg-green-600 border-green-600 text-white"
                    : "border-gray-400"}
                `}
              >
                {todo.done && "✓"}
              </span>

              <span
                className={`
                  flex-1 transition-all duration-300
                  ${todo.done ? "line-through text-gray-400" : ""}
                `}
              >
                {todo.text}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default PlayfulTodoList
