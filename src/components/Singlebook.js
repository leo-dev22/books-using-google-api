import React, { useState } from "react";
import Modal from "./Modal";

const Singlebook = ({ book }) => {
  console.log(book);
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();

  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        let currencyCode =
          item.saleInfo.listPrice && item.saleInfo.listPrice.currencyCode;
        let languages = item.volumeInfo.language;

        if (thumbnail != undefined && languages == "en") {
          return (
            <div key={item.id}>
              <div
                className="singlebook"
                onClick={() => {
                  setShow(true);
                  setBookItem(item);
                }}
              >
                <img
                  src={thumbnail}
                  // width="200px"
                  // height="250px"
                  alt="book of live"
                />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">
                    {" "}
                    {currencyCode} {amount}
                  </p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </div>
          );
        }
      })}
    </>
  );
};

export default Singlebook;
