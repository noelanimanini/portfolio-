import React from "react";
import ReactDom from "react-dom";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import Carousel from "react-bootstrap/Carousel";
import "./modal.css";

function Index({ info, open, onClose }) {
  if (!open) return null;
  console.log(info);
  return ReactDom.createPortal(
    <>
      <div className="overLayStyle" onClick={onClose}>
        <div className="customStyle">
          <button onClick={onClose} className="CloseButton">
            CLOSE
          </button>

          <div className="modalTop">
            <div className="modalTopSocial">
              <h2>{info.name}</h2>
              <div className="modalTopSocialicons">
                <a
                  href={info["links"][0]["git"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="modalTopSocialIcon" />
                </a>
                {!info["links"][0]["video"] ? null : (
                  <a
                    href={info["links"][0]["video"]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillYoutube className="modalTopSocialIcon" />
                  </a>
                )}
                {!info["links"][0]["demo"] ? null : (
                  <a
                    href={info["links"][0]["demo"]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CgWebsite className="modalTopSocialIcon" />
                  </a>
                )}
              </div>
            </div>
            {/* <Carousel fade>
              <Carousel.Item> */}
            <img src={info.image} alt="project info" className="modalImage" />
            {/* </Carousel.Item>
            </Carousel> */}

            <div className="description">{info.description}</div>
          </div>
          <div className="techTitle">Technologies</div>
          <div className="technologies">
            {Object.values(info["technologies"][0]).map((x) => (
              <span>{x}</span>
            ))}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Index;
