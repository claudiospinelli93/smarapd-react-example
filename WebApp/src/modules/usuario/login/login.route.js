import Login from "./container/login.container";

const routes = [
  {
    path: "/login",
    component: Login,
    noAuth: true
  }
];

export default routes;
