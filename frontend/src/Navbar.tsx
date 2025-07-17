import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-[#17053e] p-4">
      <h1 className="flex-1">Stories App</h1>
      <ul className="flex-1 flex gap-4 justify-end">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}
