import "/src/assets/css/swiper.min.css";
import "/src/assets/js/modernizr.js";
import "/src/assets/js/jquery-main.js";
import "/src/assets/js/jquery-migrate.js";
import "/src/assets/js/popper.min.js";
import "/src/assets/js/jquery-ui.min.js";
import "/src/assets/js/swiper.min.js";
import "/src/assets/js/fancybox.min.js";
import "/src/assets/js/waypoint.js";
import "/src/assets/js/parallax.min.js";
import "/src/assets/css/pe-icon-7-stroke.css";
import "/src/assets/css/aos.min.css";
import "/src/assets/js/custom.js";
import "/src/assets/css/style.css";
import { Product, ProductLite } from "../interface/product";
import { useEffect, useState } from "react";
import { getIdProduct } from "../sevies/product";
import { useParams } from "react-router-dom";

type Props = {
  product: Product[];
  setProduct: (data: Product[]) => void;
};
const SingleProduct = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [images, setImage] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDesc] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { id }: any = useParams();
  const firstFourProducts = props.product.slice(0, 4);
  useEffect(() => {
    (async () => {
      try {
        const getIdPro: ProductLite = await getIdProduct(id);
        setName(getIdPro.name);
        setPrice(getIdPro.price);
        setImage(getIdPro.images);
        setDesc(getIdPro.description);
        console.log(getIdPro);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <main>
        <section className="product-area product-single-area my-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="product-single-item">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="product-single-thumb">
                        <div className="swiper-container single-product-thumb single-product-thumb-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide flex flex-wrap">
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href=""
                              >
                                <img
                                  src={images}
                                  width="570"
                                  height="541"
                                  alt="Image-HasTech"
                                />
                              </a>
                              <div
                                style={{
                                  display: "flex",
                                  textDecoration: "none",
                                }}
                              >
                                <a href="">
                                  <img
                                    style={{
                                      width: 150,
                                      height: 150,
                                      margin: 20,
                                    }}
                                    src="src/images/white.jpg"
                                    alt="Image 1"
                                  />
                                  <h1
                                    style={{
                                      fontSize: 15,
                                      textAlign: "center",
                                      color: "green",
                                    }}
                                  >
                                    Color white
                                  </h1>
                                </a>
                                <a href="">
                                  <img
                                    style={{
                                      width: 150,
                                      height: 150,
                                      margin: 20,
                                    }}
                                    src="src/images/black.jpg"
                                    alt="Image 1"
                                  />
                                  <h1
                                    style={{
                                      fontSize: 15,
                                      textAlign: "center",
                                      color: "black",
                                    }}
                                  >
                                    Color Black
                                  </h1>
                                </a>
                                <a href="">
                                  <img
                                    style={{
                                      width: 150,
                                      height: 150,
                                      margin: 20,
                                      color: "blue",
                                    }}
                                    src="src/images/blue.jpg"
                                    alt="Image 1"
                                  />
                                  <h1
                                    style={{
                                      fontSize: 15,
                                      textAlign: "center",
                                    }}
                                  >
                                    Color Blue
                                  </h1>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="product-single-info">
                        <h3 className="main-title" style={{ marginTop: 20 }}>
                          {name}
                        </h3>
                        <div className="prices">
                          <span className="price" color="#red">
                            {price}
                          </span>
                        </div>
                        <div className="rating-box-wrap">
                          <div className="rating-box m-0 d-block">
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                          </div>
                          <div className="review-status m-0 d-block">
                            <a href="javascript:void(0)">(5 Customer Review)</a>
                          </div>
                        </div>
                        <p></p>
                        <div className="group-product-list">
                          <span className="info-text">
                            {description}
                            <span className="text-danger">25%</span> of all
                            prices.
                          </span>
                          <table className="m-0 d-block">
                            <tbody>
                              <tr>
                                <td className="choose">
                                  <input
                                    type="checkbox"
                                    checked={true}
                                    disabled={true}
                                  />
                                </td>
                                <td className="quantity"></td>
                                <td className="thumb">
                                  <img
                                    src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg"
                                    width="40"
                                    height="35"
                                    alt="Image"
                                  />
                                </td>
                                <td className="title">
                                  {" "}
                                  <a className="btn" href="single-product.html">
                                    Trọn bộ
                                  </a>
                                </td>
                                <td className="price">
                                  <span className="pro-price fw-medium">
                                    <span>$96</span>
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="choose">
                                  <input type="checkbox" />{" "}
                                </td>
                                <td className="quantity">1</td>
                                <td className="thumb">
                                  <img
                                    src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg"
                                    width="40"
                                    height="35"
                                    alt="Image"
                                  />
                                </td>
                                <td className="title">
                                  <a className="btn" href="single-product.html">
                                    Trọn bộ 3 cái
                                  </a>
                                </td>
                                <td className="price">
                                  <span className="pro-price">
                                    <span className="old fw-medium  ">
                                      $120
                                    </span>{" "}
                                    <span className="">-</span>
                                    <span className="new fw-medium text-danger ">
                                      $96
                                    </span>
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="product-quick-action my-3">
                          <div className="qty-wrap m-0 d-block">
                            <div className="pro-qty">
                              <input type="text" title="Quantity" value="1" />
                            </div>
                          </div>
                          <a
                            className="btn btn-danger m-0 d-block mx-5 px-4 py-3"
                            href="/giohang"
                          >
                            Add to Cart
                          </a>
                        </div>
                        <div className="product-wishlist-compare">
                          <a href="shop-wishlist.html">
                            <i className="bi bi-heart"></i>Đánh giá
                          </a>
                          <a href="shop-compare.html">
                            <i className="bi bi-chat-left"></i>Bình luận
                          </a>
                        </div>
                        <div className="product-info-footer">
                          <h6 className="code">
                            <span>Code :</span>Ch-256xl
                          </h6>
                          <div className="social-icons">
                            <span>Share</span>
                            <a href="#/">
                              <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#/">
                              <i className="bi bi-dribbble"></i>
                            </a>
                            <a href="#/">
                              <i className="bi bi-pinterest"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <main>
          <div className="container mb-5 ">
            <hr className="mb-5" />
            <div className="tile">
              <div className="row">
                <div className="col-10">
                  <h3 className="mt-3 ">Mục Liên Quan</h3>
                </div>
              </div>
            </div>
            <div className="danhsachsanpham py-5 bg-light">
              <div className="container">
                <div className="row">
                  {firstFourProducts.map((product: Product) => {
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
                              src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg"
                              width="100%"
                              height="350"
                              alt=""
                              className="card-img-top"
                            />
                          </a>
                          <div className="card-body">
                            <a href={`/detailProduct/${product.id}`}>
                              <h5>{product.name}</h5>
                            </a>
                            <h6>MU</h6>
                            <p className="card-text">{product.description}</p>
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
      </main>
    </>
  );
};

export default SingleProduct;
