import React from "react";
import { AiOutlineHtml5, AiOutlineConsoleSql } from "react-icons/ai";
import { DiCss3, DiReact, DiJavascript1, DiRuby } from "react-icons/di";
import { SiMaterialUi, SiBootstrap } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { ImStack } from "react-icons/im";
import skills from "./skills.css";

function Skills() {
  return (
    <div className="container">
      {/* <div>
        <DiJavascript1 className="icon2" />
        <DiReact className="icon2" />
        <DiCss3 className="icon2" />
        <AiOutlineHtml5 className="icon2" />
        <DiRuby className="icon2" />
        <AiOutlineConsoleSql className="icon2" />
      </div> */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <DiJavascript1 className="icon2" />
          <div className="bar front expert" data-skill="Javascript"></div>
        </div>
        <div>
          <DiReact className="icon2" />
          <div className="bar front expert" data-skill="React"></div>
        </div>
        <div>
          <DiCss3 className="icon2" />
          <div className="bar back advanced" data-skill="CSS3"></div>
        </div>
        <div>
          <AiOutlineHtml5 className="icon2" />
          <div className="bar back expert" data-skill="HTML5"></div>
        </div>
        <div>
          <DiRuby className="icon2" />
          <div className="bar front expert" data-skill="Ruby"></div>
        </div>
        <div>
          <AiOutlineConsoleSql className="icon2" />
          <div className="bar front expert" data-skill="SQL"></div>
        </div>
        <div>
          <ImStack className="icon2" />
          <div className="bar front expert" data-skill="noSQL"></div>
        </div>
        <div>
          <SiMaterialUi className="icon2" />
          <div className="bar front expert" data-skill="Material UI"></div>
        </div>
        <div>
          <BsBootstrap className="icon2" />
          <div className="bar front expert" data-skill="Bootstrap"></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
