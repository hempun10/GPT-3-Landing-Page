import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3_header section_padding" id="home">
      <div className="gpt3_header-content">
        <h1 className="gradient_text">
          Let's Build Something amazing with GPT-3 Open AI
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          sint dolorem, suscipit qui non mollitia quis sapiente unde velit
          tempore.
        </p>
        <div className="gpt3_header-content-input">
          <input type="email" placeholder="Your Email" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3_header-content_people">
          <img src={people} alt="people" />
          <p>1000 people appeared accessed last week</p>
        </div>
      </div>
      <div className="gpt3_header-image">
        <img src={ai} alt="hero-img " />
      </div>
    </div>
  );
};

export default Header;
