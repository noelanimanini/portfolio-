import React from "react";
import projects from "../../projects.js";
import "./projectstyle.css";
import Modal from "../Modal/Index";
import { BsTrophy } from "react-icons/bs";

function Index() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({});

  const handleModal = (x) => {
    setIsOpen(true);
    setModalInfo(x);
  };

  return (
    <div id="projects">
      <div className="parent">
        <div className="title">Projects</div>
        <div style={{ height: "5vh" }}></div>
        <div className="projectLayout">
          {projects.map((x) => (
            <div className="item" onClick={() => handleModal(x)}>
              {x.awards ? (
                <div class="outer ribbon-top-left">
                  <span>
                    <BsTrophy className="trophy" />
                  </span>
                </div>
              ) : null}
              <img src={x.image} className="projectImage" alt={x.name} />

              <div className="projectName">{x.name} </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={modalIsOpen}
        info={modalInfo}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default Index;
