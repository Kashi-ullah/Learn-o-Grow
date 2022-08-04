import React from "react";
import "./indexStyle.css";
import Card from "../UI/Card";
import classes from "./Home.module.css";
import "./style.css";
const Home = (props) => {
  return (
    <div>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-center welcom">Welcome to LEarn o Grow!</h1>
      <div className="row">
        <div className="leftcolumn">
          <div className="Mycard">
            <h2>React Js</h2>
            <h5> Dec 7, 2017</h5>
            <img src="./react.png" alt="IMg Not Found"></img>

            <p>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components
            </p>
          </div>
          <div className="Mycard">
            <h2>Vue Js</h2>
            <h5> Jan 9, 2016</h5>
            <img src="./vue.png" alt="IMg Not Found"></img>

            <p>
              Vue.js is an open-source model–view–viewmodel front end JavaScript
              framework for building user interfaces and single-page
              applications
            </p>
          </div>
        </div>
        <div class="rightcolumn">
    <div class="Mycard">
      <h2>About Me</h2>
      <img src="./me.jpg" className="profile" alt="IMg Not Found" width="190px"></img>
      <h3>Kashif Ullah</h3>
      <p>React js, Frontend Developer |Influencer, Learner</p>
    </div>
    <div class="Mycard">
      <h3>Popular Courses</h3>
      <div class="fakeimg">Image</div><br></br>
      <div class="fakeimg">Image</div><br></br>
      <div class="fakeimg">Image</div>
    </div>
    <div class="card">
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </div>
  </div>
      </div>
      <footer className="footer">
        <p className="text-footer">Copyright ©-All rights are reserved</p>
      </footer>
    </div>
  );
};

export default Home;
