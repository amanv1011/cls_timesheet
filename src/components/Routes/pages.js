import React, { lazy, Suspense } from "react";

const Dashboard = React.lazy(() => import("../Dashboard"));
const Login = React.lazy(() => import("../Login"));

export default { Dashboard, Login };
