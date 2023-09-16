import React from 'react';
import './Banner.css';
function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner_title">Movie Name</h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(`test descriptin`, 150)}
        </h1>
      </div>

      <div className="banner--fadeButton" />
    </header>
  );
}

export default Banner;
