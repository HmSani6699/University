import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <div>hallo test</div>,
      },
    ],
  },
]);

export default router;
