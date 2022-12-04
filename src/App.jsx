import { Post } from "./Post";

function App() {
  return (
    <>
      <Post
        author="Sara Gomes"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Post author="Fulano de tal" content="Um novo post mt legal" />
    </>
  );
}

export default App;
