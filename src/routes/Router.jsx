import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));
const Template = lazy(() => import("../pages/Template"));

export const router = createHashRouter([
  {
    path: `/`,
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/template",
        element: <Template></Template>,
      },
    ],
  },
]);
