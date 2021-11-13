import React from "react";
import ReactStars from "react-rating-stars-component";
import "./review.css";
const Review = ({ data }) => {
  const { img, name, rating, message } = data;
  return (
    <div className="review">
      <div className="profile">
        <img
          src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
          alt=""
          className="avatar"
        />
        <span className="user-name">{name}</span>
      </div>
      <div className="content py-2">{message}</div>
      <div className="rating">
        <ReactStars
          edit={false}
          count={5}
          value={rating}
          size={24}
          activeColor="#ffd700"
        />
      </div>
    </div>
  );
};

export default Review;
