import "/src/assets/css/style.css";
import "/src/assets/css/a.css";
import { Product } from "../interface/product";
type Props = {
  product: Product[];
  setProduct: (data: Product[]) => void;
};
const LoadListProduct = (props: Props) => {
  return (
    <>
      <main>
        <div className="container mb-5 ">
          <hr className="mb-5" />
          <div className="tile">
            <button className="btn btn-danger"></button>{" "}
            <a className="btn text-danger fw-medium" href="">
              This Month
            </a>
            <div className="row">
              <div className="col-10">
                <h3 className="mt-3 ">Best Selling Products</h3>
              </div>
              <div className="col-2 mb-4 ">
                <a className="btn btn-danger py-3 px-5  " href="">
                  View All
                </a>
              </div>
            </div>
          </div>
          <div className="danhsachsanpham py-5 bg-light">
            <div className="container">
              <div className="row">
                {Array.isArray(props.product) &&
                  props.product.map((product) => {
                    return (
                      <div
                        className="col-md-4 position-relative"
                        key={product.id}
                      >
                        <div className="card mb-4 shadow-sm">
                          <div className=" hover-overlay position-absolute top-0 end-0 ">
                            <div className="icon px-3">
                              <div className="icon-heart rounded-circle bg-white my-3">
                                <a href="">
                                  <i className="btn bi bi-heart fs-6 "></i>
                                </a>

                                <a href="">
                                  <i className="btn bi bi-eye fs-6 "></i>
                                </a>

                                <a href="/giohang">
                                  <i className="btn bi bi-cart2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <a href={`/detailProduct/${product.id}`}>
                            <img
                              src={product.images}
                              width="100%"
                              height="350"
                              alt=""
                              className="card-img-top"
                            />
                          </a>
                          <div className="card-body">
                            <a
                              href={`/detailProduct/${product.id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <h5>{product.name}</h5>
                            </a>
                            <h6>MU</h6>
                            <p className="card-text" style={{ height: 100 }}>
                              {product.description}
                            </p>
                            <div className="start">
                              <span>
                                <i className="bi bi-star-fill text-warning"></i>
                              </span>
                              <span>
                                <i className="bi bi-star-fill text-warning"></i>
                              </span>
                              <span>
                                <i className="bi bi-star-fill text-warning"></i>
                              </span>
                              <span>
                                <i className="bi bi-star-fill text-warning"></i>
                              </span>
                              <span>
                                <i className="bi bi-star-fill text-warning"></i>
                              </span>
                              <samp>(65)</samp>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="btn-group">
                                <a
                                  className="btn btn-sm btn-outline-secondary"
                                  href={`/detailProduct/${product.id}`}
                                >
                                  Xem chi tiết
                                </a>
                              </div>
                              <small className="text-muted text-right">
                                <s>${product.price}</s>
                                <b>${product.price}</b>
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoadListProduct;
