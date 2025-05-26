import "./navbar.css";

export default function Navbar() {
  return <nav className="navbar">
    <div className="image">
      <img src="/images/logo.png" alt="" />
    </div>
    <div className="list">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Help</li>
      </ul>
    </div>
  </nav>
}