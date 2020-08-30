import React from "react";
import "./Search.scss";

const Search = ({ onClose }) => {
  return (
    <div className="Search">
      <div className="content">
        <button onClick={onClose}> </button>
        <div className="searchInput">
          <span> Search</span>
          <div className="inputWrapper">
            <input type="text" placeholder="검색어를 입력해주세요" />
            <button className="searchImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
