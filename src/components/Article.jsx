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
