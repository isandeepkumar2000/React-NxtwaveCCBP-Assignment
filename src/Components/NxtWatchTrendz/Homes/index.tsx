import React from "react";

const Home = () => {
  return (
    <div>
      <div className="textArea">
        <div>
          <span>Clothes That Get YOU Noticed</span>
        </div>
        <div>
          <span>
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </span>
        </div>
        <button type="button">Shop Now</button>
      </div>
      <div className="Image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="photo-Home"
        />
      </div>
    </div>
  );
};

export default Home;
