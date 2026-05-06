import Article from "./Article";

function ArticleList({ posts }) {
  // Receives the posts array from App
console.log("=============",posts);

  return (
    <main>
      {posts?.map((post) => (
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
