import { useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./compotion/home";
import "react-toastify/dist/ReactToastify.css";
import ClientLayout from "./layouts/clientLayout";
import "/src/assets/css/style.css";

const routerConfig = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

function App() {
  const routes = useRoutes(routerConfig);
  return <>{routes}</>;
}

export default App;
