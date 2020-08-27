import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./MainCollection.scss";

class MainCollection extends Component {

  render() {
    return (
      <div className="MainCollection">
        <video loop={true} autoPlay={true} muted={true}>
          <source
            src="https://player.vimeo.com/external/429883157.hd.mp4?s=c779c9da91553f45d5861ca719815a38986db533&profile_id=175"
            type="video/mp4"
          />
        </video>
        <div className="sectionLabel">01</div>
        <div className="sectionTitle">
          <span></span>
          <h1>Collection</h1>
          <p>My Own Attitude. 나의 관점, 나의 태도.</p>
        </div>
        <div className="sectionBottom">
          <Link to="/list"></Link>
        </div>
      </div>
    );
  }
}

export default MainCollection;
