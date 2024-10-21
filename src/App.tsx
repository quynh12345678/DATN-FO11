import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./compotion/home";
import "react-toastify/dist/ReactToastify.css";

import "/src/assets/css/style.css";
import Pay from "./pages/Website/home/pay";
import Bill from "./pages/Website/home/bill";
import DetailBill from "./pages/Website/home/detailBill";
import Products from "./compotion/product";
import Login from "./compotion/login";
import Register from "./compotion/register";
import SingleProduct from "./compotion/singleProduct";
import NotFound from "./compotion/notFound";

import HomeAdmin from "./compotion/admin/homeAdmin";
import Listproduct from "./compotion/admin/listproduct";
import AddProduct from "./compotion/admin/addProduct";
import ListUser from "./compotion/admin/listUser";
import { useEffect, useState } from "react";
import { Product } from "./interface/product";
import { getAllProduct } from "./sevies/product";
import Header from "./compotion/header";
import Footer from "./compotion/footer";
import Cart from "./compotion/giohang";

function App() {
  const [listproduct, setlistProduct] = useState<Product[]>([]);
  const getProduct = async () => {
    try {
      const product: Product[] = await getAllProduct();
      setlistProduct(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      await getProduct();
    })();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products" Component={Products} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/detailProduct" Component={SingleProduct} />
        <Route path="/pay" Component={Pay} />
        <Route path="/bill" Component={Bill} />
        <Route path="/detailbill" Component={DetailBill} />
        <Route path="/admin" Component={HomeAdmin} />
        <Route path="/admin/list" Component={Listproduct} />
        <Route path="/admin/add" Component={AddProduct} />
        <Route path="/admin/user" Component={ListUser} />
        <Route path="/giohang" Component={Cart} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
