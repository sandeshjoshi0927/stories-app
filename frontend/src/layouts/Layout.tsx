import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-8 py-8 my-4">
        <Outlet />
      </main>
    </>
  );
}
