import React, { useState } from "react";
import Singlebook from "./Singlebook";
import axios from "axios";

const Books = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          " https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCFuPCIfJEVym4u2M7ME1iCOjfMYmX8W84" +
            "&maxResults=40"
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="books">
        <div className="book1">
          <h1>
            Knowledges are all about our existence <br />
            and they are in the books
          </h1>
        </div>

        <div className="book2">
          <h2>
            Find your existence <br /> when reading books
          </h2>
          <div className="search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
              placeholder="Enter your book name"
            />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <img
            src="./images/books3.jpg"
            alt="library style"
            // width="400px"
            // height="500px"
          />
        </div>
      </div>

      <div className="container">{<Singlebook book={bookData} />}</div>
    </>
  );
};

export default Books;
