import { useState } from "react";
import FooterAdmin from "./footerAdmin";
import LefpBar from "./lefpBar";
import NavHeader from "./navHeader";

import { toast, ToastContainer } from "react-toastify";
import { validatePro } from "../../validate/product";
import { postProduct } from "../../sevies/product";
import { ProductLite } from "../../interface/product";

const AddProduct = () => {
  const [name, setName] = useState<string>("");
  const [images, setImage] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [price_sale, setPrice_sale] = useState<number>(0);
  const [description, setDesc] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // reader.result contains the base64 representation of the image
        const base64String = reader.result as string;
        setImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSummit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = validatePro.validate({
      name,
      images,
      price,
    });
    if (error) {
      toast.error(error.message);
    } else {
      try {
        const product = await postProduct({
          name,
          images,
          price,
          description,
        } as ProductLite);
        toast.success(`Thêm thành công sản phẩm`);
        setTimeout(() => {
          window.location.href = `/admin/list`;
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <div id="wrapper">
        <LefpBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavHeader />
            <div className="container-fluid ">
              <h1 className="my-3">Trang thêm mới sản phẩm</h1>
              <a href="/admin/list" className="btn btn-primary my-3">
                Quay lại danh sách sản phẩm
              </a>
              <form onSubmit={handleSummit}>
                <div className="mb-3">
                  <label className="form-label">Tên sản phẩm</label>
                  <input
                    type="text"
                    onChange={(e: any) => {
                      setName(e.target.value);
                    }}
                    className="form-control w-100 "
                    id="exampleFormControlInput1"
                    placeholder="Tên sản phẩm"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Giá sản phẩm</label>
                  <input
                    type="number"
                    onChange={(e: any) => {
                      setPrice(e.target.value);
                    }}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Giá sản phẩm"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Giá giảm</label>
                  <input
                    type="number"
                    onChange={(e: any) => {
                      setPrice_sale(e.target.value);
                    }}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Giá giảm"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ảnh sản phẩm</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mô tả</label>
                  <textarea
                    className="form-control"
                    onChange={(e: any) => {
                      setDesc(e.target.value);
                    }}
                    id="exampleFormControlTextarea1"
                    rows={3}
                  ></textarea>
                </div>
                <button className="btn btn-success" type="submit">
                  Thêm sản phẩm
                </button>
              </form>
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
