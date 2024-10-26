import FooterAdmin from "./footerAdmin";
import NavHeader from "./navHeader";
import LefpBar from "./lefpBar";
import { Product } from "../../interface/product";
import { deleteProduct } from "../../sevies/product";

type Props = {
  product: Product[];
  setProduct: (data: Product[]) => void;
};

const Listproduct = (props: Props) => {
  const delProdutc = async (id: string | number) => {
    if (window.confirm("bạn có chắc là muốn xóa sản phẩm này chứ!")) {
      try {
        const deletePro: Product = await deleteProduct(id);
        const newProduct = props.product.filter(
          (deletePro: Product) => deletePro.id !== id
        );
        props.setProduct(newProduct);
        alert(`xóa thành công sản phẩm`);
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
              <h1 className="my-3">Danh sách sản phẩm</h1>
              <a href="/admin/add" className="btn btn-success my-3">
                Thêm sản phẩm mới <i className="bi bi-plus-circle-fill"></i>
              </a>
              <table className="table table-striped table-bordered text-center ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">giá sản phẩm</th>
                    <th scope="col">ảnh sản phẩm</th>
                    <th scope="col">mô tả sản phẩm </th>
                    <th scope="col">danh mục sản phẩm </th>
                    <th scope="col">hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {props.product.map((product: Product, index: number) => {
                    return (
                      <tr key={product.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{product.name}</td>
                        <td>{product.price_sale}</td>
                        <td>
                          <img
                            src={product.images}
                            width={"100px"}
                            height={"80px"}
                          />
                        </td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td>
                          <a
                            href={`/admin/update/${product.id}`}
                            className="btn btn-warning"
                          >
                            sửa{" "}
                            <i className="bi bi-wrench-adjustable-circle"></i>
                          </a>
                          <a
                            onClick={() => {
                              delProdutc(product.id);
                            }}
                            className="btn btn-danger mx-3"
                          >
                            xóa <i className="bi bi-trash3-fill"></i>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </div>
  );
};

export default Listproduct;
