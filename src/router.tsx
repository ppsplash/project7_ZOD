import { createBrowserRouter } from "react-router";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import GalleryPage from "./pages/GalleryPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:gallery",
        element: <GalleryPage />,
      },
    ],
  },
]);
