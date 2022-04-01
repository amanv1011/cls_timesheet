import React from "react";
import "./weeklystatus.css";

const Pagination = ({ page, pages, changePage }) => {
  return (
    pages >= 1 && (
      <div className="pagination">
        <button
          className="pagination__prev"
          onClick={() => changePage(page - 1)}
          disabled={page === 1}
          style={{
            paddingLeft: "15px",
            paddingRight: "15px",
            fontSize: "30px",
            fontWeight: "bolder",
          }}
        >
          &#171;
        </button>
        <span
          style={{
            borderRight: "1px solid rgb(192, 191, 240)",
            borderLeft: "1px solid rgb(192, 191, 240)",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "1px",
          }}
        >{`Page ${page} of ${pages}`}</span>
        <button
          className="pagination__next"
          onClick={() => changePage(page + 1)}
          disabled={page === pages}
          style={{
            paddingRight: "15px",
            paddingLeft: "15px",
            fontSize: "30px",
            fontWeight: "bolder",
          }}
        >
          &#187;
        </button>
      </div>
    )
  );
};

export default Pagination;
