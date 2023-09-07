import { forwardRef, useImperativeHandle, useState } from "react";
import Product from "../models/product";
import productService from "../services/product.service";
import { Modal } from "react-bootstrap";

const ProductSave = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    //interaction with parent
    showProductModal() {
      setTimeout(() => {
        setShow(true);
      }, 0);
    },
  }));

  const [product, setProduct] = useState(new Product("", "", 0));
  const [errorMessage, seterrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [show, setShow] = useState(false);

  const saveProduct = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!product.name || !product.description || !product.price) {
      return;
    }
    console.log("burak" + product.name);
    console.log("burak" + product.description);
    console.log("burak" + product.price);
    productService
      .saveProduct(product)
      .then((response) => {
        console.log("burak" + response.data);
      })
      .catch((err) => {
        seterrorMessage("Unexpected error saving product");
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <Modal show={show}>
      <form
        onSubmit={(e) => saveProduct(e)}
        noValidate
        className={submitted ? "was-validated" : ""}
      >
        <div className="modal-header">
          <h5 className="modal-title">Product Details</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShow(false)}
          ></button>
        </div>

        <div className="modal-body">
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
              value={product.name}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="invalid-feedback">Name is required.</div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description: </label>
            <textarea
              name="description"
              placeholder="description"
              className="form-control"
              value={product.description}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="invalid-feedback">Description is required.</div>
          </div>

          <div className="form-group">
            <label htmlFor="price">Price: </label>
            <input
              type="number"
              min="1"
              step="any"
              name="price"
              placeholder="price"
              className="form-control"
              value={product.price}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="invalid-feedback">
              Price is required and should be greater than 0.
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShow(false)}
          >
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </Modal>
  );
});

export { ProductSave };
