import { useState } from "react";
import star from "./assets/images/icon-star.svg";
import minus from "./assets/images/icon-minus.svg";
import plus from "./assets/images/icon-plus.svg";
import "./App.css";

function App() {
  const [answer1, setAnswer1] = useState(false);

  const toggle1 = () => {
    setAnswer1(!answer1);
  };

  const [answer2, setAnswer2] = useState(false);

  const toggle2 = () => {
    setAnswer2(!answer2);
  };

  const [answer3, setAnswer3] = useState(false);

  const toggle3 = () => {
    setAnswer3(!answer3);
  };

  const [answer4, setAnswer4] = useState(false);

  const toggle4 = () => {
    setAnswer4(!answer4);
  };

  return (
    <>
      {/* <!-- Header --> */}
      <div className="container">
        <div className="header">
          <div>
            <img className="icon-head" src={star} alt="" />
          </div>
          <div className="title">FAQs</div>
        </div>

        {/* <!-- Question1 --> */}
        <div className="question-title" onClick={toggle1}>
          <div className="questions">
            {"What is Frontend Mentor, and how will it help me?"}
          </div>
          {answer1 ? (
            <div>
              <img className="icon" src={minus} alt="" />
            </div>
          ) : (
            <div>
              <img className="icon" src={plus} alt="" />
            </div>
          )}
        </div>

        {/* <!-- Answers 1 --> */}
        {answer1 ? (
          <p className="answer">
            {
              "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
            }
          </p>
        ) : (
          ""
        )}

        <hr />

        {/* <!-- Question2 --> */}
        <div className="question-title" onClick={toggle2}>
          <div className="questions">Is Frontend Mentor free?</div>
          {answer2 ? (
            <div>
              <img className="icon" src={minus} alt="" />
            </div>
          ) : (
            <div>
              <img className="icon" src={plus} alt="" />
            </div>
          )}
        </div>

        {/* <!-- Answers 2 --> */}
        {answer2 ? (
          <p className="answer">
            {
              "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
            }
          </p>
        ) : (
          ""
        )}
        <hr />

        {/* <!-- Question3 --> */}
        <div className="question-title" onClick={toggle3}>
          <div className="questions">
            {"Can I use Frontend Mentor projects in my portfolio?"}
          </div>
          {answer3 ? (
            <div>
              <img className="icon" src={minus} alt="" />
            </div>
          ) : (
            <div>
              <img className="icon" src={plus} alt="" />
            </div>
          )}
        </div>

        {/* <!-- Answers 3 --> */}
        {answer3 ? (
          <p className="answer">
            {
              "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
            }
          </p>
        ) : (
          ""
        )}
        <hr />

        {/* <!-- Question4 --> */}
        <div className="question-title" onClick={toggle4}>
          <div className="questions">
            {"How can I get help if I'm stuck on a Frontend Mentor challenge?"}
          </div>
          {answer4 ? (
            <div>
              <img className="icon" src={minus} alt="" />
            </div>
          ) : (
            <div>
              <img className="icon" src={plus} alt="" />
            </div>
          )}
        </div>

        {/* <!-- Answers 4 --> */}
        {answer4 ? (
          <p className="answer">
            {
              "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
            }
          </p>
        ) : (
          ""
        )}
      </div>

      <div className="attribution">
        {"Challenge by"}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Siyaphat</a>.
      </div>
    </>
  );
}

export default App;
