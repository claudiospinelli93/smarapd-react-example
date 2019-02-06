import PostContainer from "./container/post.container";

const routes = [
  {
    path: "/post/list",
    component: PostContainer,
    noAuth: true
  }
];

export default routes;
