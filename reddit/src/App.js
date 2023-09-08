import "./App.css";
import React from "react";

export const url = () => {
  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then(console.log);
};

url();

function App() {
  return (
    <div className="App">
      <>
        <CreatePosts />
      </>
    </div>
  );
}

export default App;
