import React from "react";
import "./Search.scss";

const Search = ({ onClose }) => {
  const moveList = () => {
    return;
  };
  const getValue = () => {
    return;
  };
  return (
    <div className="Search">
      <div className="content">
        <button onClick={onClose}> </button>
        <div className="searchInput">
          <span> Search</span>
          <div className="inputWrapper">
            <input
              placeholder="검색어를 입력해주세요"
              value=""
              onChange={(e) => getValue(e)}
            />
            <span className="searchImg" onClick={() => moveList()}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
