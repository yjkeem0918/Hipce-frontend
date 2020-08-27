import React from "react";
import "./Search.scss";

const Search = ({ onClose }) => {
  const moveList = () => {
    return;
  };
  const getValue = (e) => {
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
              type="text"
              placeholder="검색어를 입력해주세요"
              onChange={(e) => getValue(e)}
            />
            <button className="searchImg" onClick={() => moveList()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
