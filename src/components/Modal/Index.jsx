import React from "react";
import ReactDom from "react-dom";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import "./modal.css";

const customStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 100,
  width: "60%",
  height: "60%",
  overflowY: "scroll",
  borderRadius: "20px 20px 20px 20px",
};

const overStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0, .7)",
  zIndex: 1000,
  overflowY: "scroll",
};

function Index({ info, open, onClose }) {
  if (!open) return null;
  // console.log(Object.values(info["technologies"][0]));
  return ReactDom.createPortal(
    <>
      <div style={overStyles} onClick={onClose}>
        <div style={customStyles}>
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
            <img src={info.image} alt="project info" className="modalImage" />

            <div className="description">{info.description}</div>
          </div>
          <div className="technologies">
            <h2>Technologies</h2>
            {Object.values(info["technologies"][0]).map((x) => (
              <p>{x}</p>
            ))}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Index;
