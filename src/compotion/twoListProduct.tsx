import { Product } from "../interface/product";
import "/src/assets/css/style.css";
type Props = {
  product: Product[];
  setProduct: (data: Product[]) => void;
};
const TwoListProduct = (props: Props) => {
  const firstFourProducts = props.product.slice(1, 9);
  return (
    <>
      <main>
        <div className="container">
          <div className="tile">
            <button className="btn btn-danger"></button>{" "}
            <a className="btn text-danger fw-medium" href="">
              Our Products
            </a>
            <h3 className="mt-3 ">Explore Our Products</h3>
          </div>
          <div className="row">
            {firstFourProducts.map((product: Product) => {
              return (
                <div className="col-md-4 position-relative" key={product.id}>
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
                      <p className="card-text" style={{ height: 70 }}>
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
                            href="/detailProduct"
                          >
                            Xem chi tiết
                          </a>
                        </div>
                        <small className="text-muted text-right">
                          <s>{product.price}</s>
                          <b>{product.price}</b>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="viewall text-center mt-3">
            <a className="btn btn-danger py-3 px-5 my-5" href="">
              View All Products
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default TwoListProduct;
