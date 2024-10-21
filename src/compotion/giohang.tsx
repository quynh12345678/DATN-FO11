import "../assets/css/giohang.css";
import { useState } from "react";


import { ToastContainer, toast } from "react-toastify";
const Cart = () => {
  return (
    <>
   
      <h2 className="text-center">
       Giỏ Hàng
      </h2>
      <div className="container">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: 50 }}>Ảnh sản phẩm</th>
              <th style={{ width: 50 }}>Tên sản phẩm</th>
              <th style={{ width: 10 }}>Giá</th>
              <th style={{ width: 8 }}>Số lượng</th>
              <th style={{ width: 22 }} className="text-center">
                Thành tiền
              </th>
              <th style={{ width: 10 }}> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-th="Product">
                <div className="row">
                  <div className="col-sm-2 hidden-xs">
                    <img
                      src="src/images/blue.jpg"
                      alt="Sản phẩm 1"
                      className="img-responsive"
                      width="100"
                    />
                  </div>
                  
                </div>
              </td>
              <td>
<div className="col-sm-10">
                    <h4 className="nomargin">Sản phẩm 1</h4>
                   
                  </div>
              </td>
              <td data-th="Price">200.000 đ</td>
              <td data-th="Quantity">
                <input
                  className="form-control text-center"
                  value="1"
                  type="number"
                />
              </td>
              <td data-th="Subtotal" className="text-center">
                200.000 đ
              </td>
              <td className="actions" data-th="">
                <button className="btn btn-info btn-sm">
                <i className="bi bi-credit-card">Sửa</i>
                </button>
                <button className="btn btn-danger btn-sm">
                <i className="bi bi-trash">Xoá</i>
                </button>
              </td>
            </tr>
            <tr>
            <td data-th="Product">
                <div className="row">
                  <div className="col-sm-2 hidden-xs">
                    <img
                      src="https://footdealer.co/wp-content/uploads/2023/06/Maillot-Manchester-United-Domicile-2023-2024-1.jpg"
                      alt="Sản phẩm 1"
                      className="img-responsive"
                      width="100"
                    />
                  </div>
                  
                </div>
              </td>
              <td>
<div className="col-sm-10">
                    <h4 className="nomargin">Sản phẩm 2</h4>
                   
                  </div>
              </td>
<td data-th="Price">300.000 đ</td>
              <td data-th="Quantity">
                <input
                  className="form-control text-center"
                  value="1"
                  type="number"
                />
              </td>
              <td data-th="Subtotal" className="text-center">
                300.000 đ
              </td>
              <td className="actions" data-th="">
                <button className="btn btn-info btn-sm">
                <i className="bi bi-credit-card">Sửa</i>
                </button>
                <button className="btn btn-danger btn-sm">
                <i className="bi bi-trash">Xoá</i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
           
            <tr>
              <td>
                <a href="http://hocwebgiare.com/" className="btn btn-warning">
                  <i className="fa fa-angle-left"></i> Tiếp tục mua hàng
                </a>
              </td>
              <td className="hidden-xs"> </td>
              <td className="hidden-xs text-center">
                <strong>Tổng tiền 500.000 đ</strong>
              </td>
              <td>
                <a
                  href="/pay"
                  className="btn btn-success btn-block"
                >
                  Thanh toán <i className="fa fa-angle-right"></i>
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <ToastContainer/>
     
    </>
  );
};

export default Cart; 