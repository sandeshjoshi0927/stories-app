export default function Navbar() {
  return (
    <nav className="flex justify-between bg-red-400 p-4">
      <h1 className="flex-1">Stories App</h1>
      <ul className="flex-1 flex gap-4 justify-end">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/stories">Stories</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
      </ul>
    </nav>
  );
}
