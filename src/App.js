import React from "react";
import {posts} from "./posts.js";
import "./App.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Contents from "./components/Contents";


const App = () => {
  return (
   <main className="main">
      <Header {...posts.user}/>
      <Navigation {...posts.navigation}/>
      <Contents content={posts.content}/>
   </main>
  );
}

export default App;