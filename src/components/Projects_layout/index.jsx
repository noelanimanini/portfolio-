import React from "react";
import projects from "../../projects.js";
import "./projectstyle.css";
import Modal from "../Modal/Index";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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
        <div className="projectLayout">
          {projects.map((x) => (
            <div className="item" onClick={() => handleModal(x)}>
              <img src={x.image} />
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
