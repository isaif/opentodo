import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Open Todo List</title>
        <meta name="Opentodo" content="A place to share your todo list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Open Todo</h1>
        <h2>Share your todo list with the world</h2>
      </main>

      <form onSubmit={handleSubmit}>
        <input name="todo" type="text" placeholder="Add your todo" />
        <button type="submit" />
      </form>

      <ul className="todolist">
        <li>
          <h2>My first todo</h2>
        </li>
        <li>
          <h2>My second todo</h2>
        </li>
      </ul>
    </div>
  );
};

export default Home;
