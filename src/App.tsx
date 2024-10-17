import { useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./compotion/home";
import "react-toastify/dist/ReactToastify.css";
import ClientLayout from "./layouts/clientLayout";
import "/src/assets/css/style.css";
import Pay from "./pages/Website/home/pay";
import Bill from "./pages/Website/home/bill";
import DetailBill from "./pages/Website/home/detailBill";
import AdminLayout from "./layouts/adminLayout";
import HomeAdmin from "./compotion/admin/homeAdmin";
import Listproduct from "./compotion/admin/listproduct";
import AddProduct from "./compotion/admin/addProduct";

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
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      
        {
          path: "/admin",
          element: <HomeAdmin />,
        },
        {
          path: "/admin/list",
          element: <Listproduct />,
        },
        {
          path: "/admin/add",
          element: <AddProduct />,
        },
      
    ]
  },
];

function App() {
  const routes = useRoutes(routerConfig);
  return <>{routes}</>;
}

export default App;
