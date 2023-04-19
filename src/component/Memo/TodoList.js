import React, { useMemo } from "react";
import { fliterTodos } from "../../utils/constant";

const TodoList = ({ todos, theme, tab }) => {
  const visibleTodos = useMemo(() => fliterTodos(todos, tab), [todos, tab]);
  return (
    <div className={theme}>
      <p>
        <b>
          Note :<code>FilterTodos</code> is artifical slowed down!
        </b>
      </p>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
