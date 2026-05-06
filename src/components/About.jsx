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