import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage";
import { StoryListPage } from "./pages/StoryListPage";
import StoryPage from "./pages/StoryPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/stories",
        element: <StoryListPage />,
      },
      {
        path: "/stories/:name",
        element: <StoryPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
