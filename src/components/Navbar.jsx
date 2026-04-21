export default function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <h1>Portfolio</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
}