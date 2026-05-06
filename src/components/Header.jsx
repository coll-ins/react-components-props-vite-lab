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