import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const { isEmpty, items, emptyCart } = useCart();
  if (isEmpty)
    return <h1 className="text-center"> Your Saved News Are Empty </h1>;
  return (
    <section className="py-4 container">
      {console.log(items)}
      <div className="row justify-content-center">
        <div className="col-12">
          <h1> Saved News </h1>
          <div className="btn btn-danger my-2" onClick={emptyCart}>
            Clear Saved News
          </div>
          <table className="table table-striped table-hover m-1">
            <thead style={{ fontWeight: "bold" }}>
              <tr>
                <td>Source</td>
                <td>Title</td>
                <td>Description</td>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {item.source.name} -{" "}
                      {item.author ? item.author : "Anonymous"}
                      <br />
                      <a href={item.url}>News Page</a>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    {/* <button type="button" className="" onClick={removeItem(item.id)}>Delete</button> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Cart;
