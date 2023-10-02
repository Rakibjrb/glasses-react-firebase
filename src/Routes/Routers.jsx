import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import NotFound from "../Components/NotFound";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoutes from "./PrivateRoutes";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UpdateNamePhoto from "../Pages/UserProfile/EditProfile/UpdateProfile/UpdateNamePhoto";
import UpdateInfo from "../Pages/UserProfile/EditProfile/UpdateProfile/UpdateInfo";
import PaymentHistory from "../Pages/UserProfile/PaymentHistory/PaymentHistory";
import Orders from "../Pages/UserProfile/Orders/Orders";
import Revies from "../Pages/UserProfile/Reviews/Revies";

const url =
  "https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: async () => fetch(url),
      },
      {
        path: "products",
        element: <Products />,
        loader: async () => fetch(url),
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
        loader: async ({ params }) => fetch(`${url}/${params.id}`),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/user",
        element: (
          <PrivateRoutes>
            <UserProfile />
          </PrivateRoutes>
        ),
      },

      //user profile settings options and rounts
      {
        path: "/user/update-profile",
        element: (
          <PrivateRoutes>
            <UserProfile>
              <UpdateNamePhoto></UpdateNamePhoto>
            </UserProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/user/change-password",
        element: (
          <PrivateRoutes>
            <UserProfile>
              <UpdateInfo></UpdateInfo>
            </UserProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/user/change-email",
        element: (
          <PrivateRoutes>
            <UserProfile>
              <PaymentHistory></PaymentHistory>
            </UserProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/user/orders",
        element: (
          <PrivateRoutes>
            <UserProfile>
              <Orders></Orders>
            </UserProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/user/reviews",
        element: (
          <PrivateRoutes>
            <UserProfile>
              <Revies></Revies>
            </UserProfile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
