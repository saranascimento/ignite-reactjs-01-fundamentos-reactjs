import { Post } from "./Post";
import { Header } from "./components/Header.jsx";

import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <Post
        author="Sara Gomes"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Post author="Fulano de tal" content="Um novo post mt legal" />
    </div>
  );
}

export default App;
