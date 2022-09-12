import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Todo } from "../utils/interfaces";

import styles from "../styles/Home.module.css";

import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";
import data from "../utils/data";

const Home: NextPage = () => {
  const [todos, setTodos] = useState(data);

  const handleFormSubmit = (todo: Todo) => {
    setTodos((previousTodos) => [...previousTodos, todo]);
  };

  return (
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
        <TodoList todos={todos} />
      </main>
    </div>
  );
};

export default Home;
