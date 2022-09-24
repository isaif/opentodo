import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Todo } from "../utils/interfaces";

import styles from "../styles/Home.module.css";

import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";
import data from "../utils/data";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const [todos, setTodos] = useState(data);

  const handleFormSubmit = (todo: Todo) => {
    setTodos((previousTodos) => [...previousTodos, todo]);
  };

  const handleCheckBox = (id: number) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      return todo;
    });
    setTodos(newTodo);
  };

  const handleDelete = (id: number) => {
    const newTodo = todos.filter((todo) => {
      if (todo.id !== id) return todo;
    });
    setTodos(newTodo);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Open Todo</title>
          <meta name="Opentodo" content="A place to share your todo list" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <header className={styles.main}> */}
        {/*   <h1 className={styles.title}>Open Todo</h1> */}
        {/*   <h2>Share your todo list with the world</h2> */}
        {/* </header> */}

        <main className={styles.main}>
          <CreateTodo onFormSubmit={handleFormSubmit} />
          <TodoList
            todos={todos}
            handleCheckBox={handleCheckBox}
            handleDelete={handleDelete}
          />
        </main>
      </div>
    </>
  );
};

export default Home;
