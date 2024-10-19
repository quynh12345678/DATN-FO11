import FooterAdmin from "./footerAdmin";
import NavHeader from "./navHeader";
import LefpBar from "./lefpBar";

const ListUser = () => {
  return (
    <div>
      <div id="wrapper">
        <LefpBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavHeader />
            <div className="container-fluid ">
              <h1 className="my-3">Danh Sách User</h1>
              <form method="" action="">
                <input type="text" placeholder="Họ và tên" className="" />
                <button type="submit" className="">
                  Tìm kiếm
                </button>
              </form>{" "}
              <br />
              <table className="table table-striped table-bordered text-center ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Địa chỉ email</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Vai trò </th>
                    <th scope="col">Tính năng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="col">1</td>
                    <td scope="col">Quàng Phùng</td>
                    <td scope="col">phunhmanhquynh@gmail.com</td>
                    <td scope="col">0396357273</td>
                    <td scope="col">User</td>
                    <td scope="col">
                      <button className="btn btn-danger">Xoá</button>
                    </td>
                  </tr>
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

export default ListUser;
