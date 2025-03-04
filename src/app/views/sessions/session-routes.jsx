import { lazy, Suspense } from "react";

const NotFound = lazy(() => import("./NotFound"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));

const JwtLogin = lazy(() => import("./login/JwtLogin"));
const JwtRegister = lazy(() => import("./register/JwtRegister.jsx"));

const sessionRoutes = [
  {
    path: "/session/signup",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <JwtRegister />
      </Suspense>
    )
  },
  {
    path: "/session/signin",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <JwtLogin />
      </Suspense>
    )
  },
  {
    path: "/session/forgot-password",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ForgotPassword />
      </Suspense>
    )
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    )
  }
];

export default sessionRoutes;
