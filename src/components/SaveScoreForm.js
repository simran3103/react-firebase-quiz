import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { saveScoreDocument } from "./Firebase/Firebase";
export default function SaveScoreForm({ score, name }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      (async () => {
        await saveScoreDocument(score, name);
        setLoading(false);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [score, name]);

  return (
    <React.Fragment>
      {loading && <div id="loader" />}

      {!loading && (
        <div className="container">
          <h1>Score: {score}</h1>
          <div className="cal-container">
            <svg
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 800 800"
              style={{ enableBackground: "new 0 0 800 800" }}
            >
              <g className="confetti-cone">
                <path
                  className="conf0"
                  d="M131.5,172.6L196,343c2.3,6.1,11,6.1,13.4,0l65.5-170.7L131.5,172.6z"
                />
                <path
                  className="conf1"
                  d="M131.5,172.6L196,343c2.3,6.1,11,6.1,13.4,0l6.7-17.5l-53.6-152.9L131.5,172.6z"
                />
                <path
                  className="conf2"
                  d="M274.2,184.2c-1.8,1.8-4.2,2.9-7,2.9l-129.5,0.4c-5.4,0-9.8-4.4-9.8-9.8c0-5.4,4.4-9.8,9.9-9.9l129.5-0.4 c5.4,0,9.8,4.4,9.8,9.8C277,180,275.9,182.5,274.2,184.2z"
                />
                <polygon
                  className="conf3"
                  points="231.5,285.4 174.2,285.5 143.8,205.1 262.7,204.7"
                />
                <path
                  className="conf4"
                  d="M166.3,187.4l-28.6,0.1c-5.4,0-9.8-4.4-9.8-9.8c0-5.4,4.4-9.8,9.9-9.9l24.1-0.1c0,0-2.6,5-1.3,10.6 C161.8,183.7,166.3,187.4,166.3,187.4z"
                />
                <ellipse
                  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -89.8523 231.0278)"
                  className="conf2"
                  cx="233.9"
                  cy="224"
                  rx="5.6"
                  ry="5.6"
                />
                <path
                  className="conf5"
                  d="M143.8,205.1l5.4,14.3c6.8-2.1,14.4-0.5,19.7,4.8c7.7,7.7,7.6,20.1-0.1,27.8c-1.7,1.7-3.7,3-5.8,4l11.1,29.4 l27.7,0l-28-80.5L143.8,205.1z"
                />
                <path
                  className="conf2"
                  d="M169,224.2c-5.3-5.3-13-6.9-19.7-4.8l13.9,36.7c2.1-1,4.1-2.3,5.8-4C176.6,244.4,176.6,231.9,169,224.2z"
                />
                <ellipse
                  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -119.0946 221.1253)"
                  className="conf6"
                  cx="207.4"
                  cy="254.3"
                  rx="11.3"
                  ry="11.2"
                />
                <rect
                  x="113.7"
                  y="135.7"
                  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -99.5348 209.1582)"
                  className="conf7"
                  width="178"
                  height="178"
                />
                <line
                  className="conf7"
                  x1="76.8"
                  y1="224.7"
                  x2="328.6"
                  y2="224.7"
                />
                <polyline
                  className="conf7"
                  points="202.7,350.6 202.7,167.5 202.7,98.9"
                />
                <circle
                  className="conf2"
                  id="b1"
                  cx="195.2"
                  cy="232.6"
                  r="5.1"
                />
                <circle
                  className="conf0"
                  id="b2"
                  cx="230.8"
                  cy="219.8"
                  r="5.4"
                />
                <circle
                  className="conf0"
                  id="c2"
                  cx="178.9"
                  cy="160.4"
                  r="4.2"
                />
                <circle
                  className="conf6"
                  id="d2"
                  cx="132.8"
                  cy="123.6"
                  r="5.4"
                />
                <circle
                  className="conf0"
                  id="d3"
                  cx="151.9"
                  cy="105.1"
                  r="5.4"
                />
                <path
                  className="conf0"
                  id="d1"
                  d="M129.9,176.1l-5.7,1.3c-1.6,0.4-2.2,2.3-1.1,3.5l3.8,4.2c1.1,1.2,3.1,0.8,3.6-0.7l1.9-5.5 C132.9,177.3,131.5,175.7,129.9,176.1z"
                />
                <path
                  className="conf6"
                  id="b5"
                  d="M284.5,170.7l-5.4,1.2c-1.5,0.3-2.1,2.2-1,3.3l3.6,3.9c1,1.1,2.9,0.8,3.4-0.7l1.8-5.2 C287.4,171.9,286.1,170.4,284.5,170.7z"
                />
                <circle
                  className="conf6"
                  id="c3"
                  cx="206.7"
                  cy="144.4"
                  r="4.5"
                />
                <path
                  className="conf2"
                  id="c1"
                  d="M176.4,192.3h-3.2c-1.6,0-2.9-1.3-2.9-2.9v-3.2c0-1.6,1.3-2.9,2.9-2.9h3.2c1.6,0,2.9,1.3,2.9,2.9v3.2 C179.3,191,178,192.3,176.4,192.3z"
                />
                <path
                  className="conf2"
                  id="b4"
                  d="M263.7,197.4h-3.2c-1.6,0-2.9-1.3-2.9-2.9v-3.2c0-1.6,1.3-2.9,2.9-2.9h3.2c1.6,0,2.9,1.3,2.9,2.9v3.2 C266.5,196.1,265.2,197.4,263.7,197.4z"
                />
                <path
                  id="yellow-strip"
                  d="M179.7,102.4c0,0,6.6,15.3-2.3,25c-8.9,9.7-24.5,9.7-29.7,15.6c-5.2,5.9-0.7,18.6,3.7,28.2 c4.5,9.7,2.2,23-10.4,28.2"
                />
                <path
                  className="conf8"
                  id="yellow-strip"
                  d="M252.2,156.1c0,0-16.9-3.5-28.8,2.4c-11.9,5.9-14.9,17.8-16.4,29c-1.5,11.1-4.3,28.8-31.5,33.4"
                />
                <path
                  className="conf0"
                  id="a1"
                  d="M277.5,254.8h-3.2c-1.6,0-2.9-1.3-2.9-2.9v-3.2c0-1.6,1.3-2.9,2.9-2.9h3.2c1.6,0,2.9,1.3,2.9,2.9v3.2 C280.4,253.5,279.1,254.8,277.5,254.8z"
                />
                <path
                  className="conf3"
                  id="c4"
                  d="M215.2,121.3L215.2,121.3c0.3,0.6,0.8,1,1.5,1.1l0,0c1.6,0.2,2.2,2.2,1.1,3.3l0,0c-0.5,0.4-0.7,1.1-0.6,1.7v0 c0.3,1.6-1.4,2.8-2.8,2l0,0c-0.6-0.3-1.2-0.3-1.8,0h0c-1.4,0.7-3.1-0.5-2.8-2v0c0.1-0.6-0.1-1.3-0.6-1.7l0,0 c-1.1-1.1-0.5-3.1,1.1-3.3l0,0c0.6-0.1,1.2-0.5,1.5-1.1v0C212.5,119.8,214.5,119.8,215.2,121.3z"
                />
                <path
                  className="conf3"
                  id="b3"
                  d="M224.5,191.7L224.5,191.7c0.3,0.6,0.8,1,1.5,1.1l0,0c1.6,0.2,2.2,2.2,1.1,3.3v0c-0.5,0.4-0.7,1.1-0.6,1.7l0,0 c0.3,1.6-1.4,2.8-2.8,2h0c-0.6-0.3-1.2-0.3-1.8,0l0,0c-1.4,0.7-3.1-0.5-2.8-2l0,0c0.1-0.6-0.1-1.3-0.6-1.7v0 c-1.1-1.1-0.5-3.1,1.1-3.3l0,0c0.6-0.1,1.2-0.5,1.5-1.1l0,0C221.7,190.2,223.8,190.2,224.5,191.7z"
                />
                <path
                  className="conf3"
                  id="a2"
                  d="M312.6,242.1L312.6,242.1c0.3,0.6,0.8,1,1.5,1.1l0,0c1.6,0.2,2.2,2.2,1.1,3.3l0,0c-0.5,0.4-0.7,1.1-0.6,1.7v0 c0.3,1.6-1.4,2.8-2.8,2l0,0c-0.6-0.3-1.2-0.3-1.8,0h0c-1.4,0.7-3.1-0.5-2.8-2v0c0.1-0.6-0.1-1.3-0.6-1.7l0,0 c-1.1-1.1-0.5-3.1,1.1-3.3l0,0c0.6-0.1,1.2-0.5,1.5-1.1v0C309.9,240.6,311.9,240.6,312.6,242.1z"
                />
                <path
                  className="conf8"
                  id="yellow-strip"
                  d="M290.7,215.4c0,0-14.4-3.4-22.6,2.7c-8.2,6.2-8.2,23.3-17.1,29.4c-8.9,6.2-19.8-2.7-32.2-4.1 c-12.3-1.4-19.2,5.5-20.5,10.9"
                />
              </g>
            </svg>
          </div>
          <Link to="/highScores" className="btn">
            Check Leader Board
          </Link>
          <Link to="/" className="btn">
            Go Home
          </Link>
        </div>
      )}
    </React.Fragment>
  );
}
