import React from "react";

function ProductList(props) {
  const { listProduct, handleSort } = props;
  return (
    <div className="">
      <h1>Product List</h1>
      <div className="row">
        {listProduct.map((item, index) => {
          return (
            <div className="col-2" key={index}>
              <div className="card">
                <img src={item.urlimg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text" style={{color:"red"}}>{item.price}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-3">
          <select
            className="form-select"
            onChange={(e) => {
            //   console.log("check value", e.target.value);
              return handleSort(e.target.value, "price");
            }}
          >
            <option value="" defaultValue>Sắp xếp</option>
            <option value="asc">thấp-cao</option>
            <option value="desc">cao-thấp</option>
            <option value="default">mặc định</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
