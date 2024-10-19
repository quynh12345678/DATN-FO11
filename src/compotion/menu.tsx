import "/src/assets/css/style.css";

const Menu = () => {
  return (
    <>
      <main>
        <div className="container mb-5">
          <div className="tile">
            <button className="btn btn-danger"></button>{" "}
            <a className="btn text-danger fw-medium" href="">
              Categories
            </a>
            <h3 className="mt-3 ">Browse By Category</h3>
          </div>
          <div className="d-flex">
            <div className="col border m-3 text-center p-5 category">
              <i className="bi bi-bag fs-1"></i>
              <div>Giỏ hàng</div>
            </div>
            <div className="col border m-3 text-center p-5 category">
              <i className="bi bi-bag-heart fs-1"></i>
              <div>Yêu Thích</div>
            </div>
            <div className="col border m-3 text-center p-5 category">
              <i className="bi bi-smartwatch fs-1"></i>
              <div>Mẫu mới</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Menu;
