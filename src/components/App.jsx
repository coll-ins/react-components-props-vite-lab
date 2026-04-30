import React from "react";
import blogData from "../data/blog";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
// brings in the three child components and the data from the blog.js file


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About description={blogData.description} />
      <ArticleList articles={blogData.articles} />
    </div>
  );
}
function Header({ name }) {
  // Destructures the "name" prop from whatever App passes in

  return (
    <header>
      <h1>{name}</h1>
      {/* Displays the blog name inside an h1 */}
    </header>
  );
}

function Header({ name }) {
  // Destructures the "name" prop from whatever App passes in

  return (
    <header>
      <h1>{name}</h1>
      {/* Displays the blog name inside an h1 */}
    </header>
  );
}

export default Header;



function About({ image, about }) {
  // Gets "image" and "about" props from App

  return (
    <aside>
      <img
        src={image || "https://via.placeholder.com/215"}
        // Uses the image prop, OR falls back to placeholder if none passed
        alt="blog logo"
        // Required for accessibility
      />
      <p>{about}</p>
      {/* Displays the about text */}
    </aside>
  );
}

export default About;

function ArticleList({ posts }) {
  // Receives the posts array from App

  return (
    <main>
      {posts.map((post) => (
        // Loops through every post in the array
        <Article
          key={post.id}
          // "key" must be unique — React uses it to track list items
          title={post.title}
          date={post.date}
          preview={post.preview}
          // Passes each post's data down to Article
        />
      ))}
    </main>
  );
}

export default ArticleList;


function Article({ title, date = "January 1, 1970", preview }) {
  // Gets title, date, preview as props
  // date has a DEFAULT VALUE — if nothing is passed, it shows "January 1, 1970"

  return (
    <article>
      <h3>{title}</h3>
      {/* Article title */}
      <small>{date}</small>
      {/* Date in small text */}
      <p>{preview}</p>
      {/* Preview text */}
    </article>
  );
}

export default Article;

export default App;


