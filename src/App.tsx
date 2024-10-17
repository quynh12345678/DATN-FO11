import { useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./compotion/home";
import "react-toastify/dist/ReactToastify.css";
import ClientLayout from "./layouts/clientLayout";
import "/src/assets/css/style.css";
import Pay from "./pages/Website/home/pay";
import Bill from "./pages/Website/home/bill";
import DetailBill from "./pages/Website/home/detailBill";
import Products from "./compotion/product";
import Login from "./compotion/login";
import Register from "./compotion/register";

const routerConfig = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pay",
        element: <Pay />,
      },
      {
        path: "/bill",
        element: <Bill />,
      },
      {
        path: "/detailbill",
        element: <DetailBill />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];

function App() {
  const routes = useRoutes(routerConfig);
  return <>{routes}</>;
}

export default App;
