import React from "react";
import ReactStars from "react-rating-stars-component";
import "./review.css";
const Review = () => {
  return (
    <div className="review">
      <div className="profile">
        <img
          src="https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-9/203228012_1339889339742318_2660820128908142869_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=E8OpIyrfG_0AX8nfKqj&_nc_ht=scontent.fdac138-1.fna&oh=6ed272aa3aad067321564124e0454aaa&oe=61B0EC46"
          alt=""
          className="avatar"
        />
        <span className="user-name">Alamin Hossain</span>
      </div>
      <div className="content py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit et odio
        sunt deserunt cupiditate officia.
      </div>
      <div className="rating">
        <ReactStars
          edit={false}
          count={5}
          value={3}
          size={24}
          activeColor="#ffd700"
        />
      </div>
    </div>
  );
};

export default Review;
