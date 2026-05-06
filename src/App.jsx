// import React from "react";
import blogData from "./data/blog";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
// brings in the three child components and the data from the blog.js file


// console.log(blogData);

console.log("=============",blogData.posts);

function App() {
  return (
    <div className="App">
      <Header name="" />
      <About image="" about= "" />
      <Article title="" date="" preview="" />
      <ArticleList posts= {blogData?.posts} />
    </div>
  );
}

export default App;


