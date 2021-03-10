import React from "react";
// import './App.css'
import MenuBar from "./MenuBar";
import MainPage from "./MainPage";
import Discussion from "./Discussions";
import QueryForm from "./QueryForm";

function App(props) {
  return (
    <div>
      <h1>app page</h1>

      <MenuBar />
      <MainPage />
      <Discussion />
      <QueryForm />
    </div>
  );
}

export default App;
