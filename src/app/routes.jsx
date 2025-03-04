import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";
import sessionRoutes from "./views/sessions/session-routes";

// Dashboard
const Analytics = Loadable(lazy(() => import("app/views/dashboard/Analytics")));

// Pages
const Words = Loadable(lazy(() => import("app/views/pages/Words")));
const Lessons = Loadable(lazy(() => import("app/views/pages/Lessons")));
const Quizzes = Loadable(lazy(() => import("app/views/pages/Quizzes")));
const Leaderboard = Loadable(lazy(() => import("app/views/pages/Leaderboard")));
const Settings = Loadable(lazy(() => import("app/views/pages/Settings")));
const FAQ = Loadable(lazy(() => import("app/views/pages/FAQ")));
const ContactSupport = Loadable(lazy(() => import("app/views/pages/ContactSupport")));
const UserProfile = Loadable(lazy(() => import("app/views/pages/UserProfile")));

const routes = [
  { path: "/", element: <Navigate to="dashboard" /> },
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      { path: "/dashboard", element: <Analytics />, auth: authRoles.admin },
      { path: "/words", element: <Words /> },
      { path: "/lessons", element: <Lessons /> },
      { path: "/quizzes", element: <Quizzes /> },
      { path: "/leaderboard", element: <Leaderboard /> },
      { path: "/settings", element: <Settings /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contact-support", element: <ContactSupport /> },
      { path: "/user_profile", element: <UserProfile /> }
    ]
  },

  // session pages route
  ...sessionRoutes
];

export default routes;
