import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Sara Gomes"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <Post author="Fulano de tal" content="Um novo post mt legal" />
        </main>
      </div>
    </div>
  );
}
