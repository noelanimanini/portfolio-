import React from "react";
import { AiOutlineHtml5, AiOutlineConsoleSql } from "react-icons/ai";
import { DiCss3, DiReact, DiJavascript1, DiRuby } from "react-icons/di";
import { SiMaterialUi, SiHeroku } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import "./skills.css";

function Skills() {
  return (
    <div className="container">
      <div className="topDog">
        <div className="raise">
          <DiJavascript1 className="icon2" />
          <div className="bar front expert" data-skill="Javascript"></div>
          <div className="JS">Javascript</div>
        </div>
        <div className="raise">
          <DiReact className="icon2" />
          <div className="bar front expert" data-skill="React"></div>
          <div className="react"> React</div>
        </div>

        <div className="raise">
          <DiRuby className="icon2" />
          <div className="bar front expert" data-skill="Ruby"></div>
          <div className="ruby">Ruby</div>
        </div>
        <div className="raise">
          <AiOutlineConsoleSql className="icon2" />
          <div className="bar front expert" data-skill="SQL"></div>
          <div className="sql">SQL</div>
        </div>
        <div className="raise">
          <ImStack className="icon2" />
          <div className="bar front expert" data-skill="noSQL"></div>
          <div className="noSQL">noSQL</div>
        </div>
        <div className="raise">
          <SiMaterialUi className="icon2" />
          <div className="bar front expert" data-skill="Material UI"></div>
          <div className="material">Material UI</div>
        </div>
        <div className="raise">
          <FiFigma className="icon2" />
          <div className="bar front intermediate" data-skill="Figma"></div>
          <div className="figma">Figma</div>
        </div>
        <div className="raise">
          <DiCss3 className="icon2" />
          <div className="bar front expert" data-skill="CSS3"></div>
          <div className="css3">CSS3</div>
        </div>
        <div className="raise">
          <AiOutlineHtml5 className="icon2" />
          <div className="bar front expert" data-skill="html5"></div>
          <div className="html5">HTML5</div>
        </div>
        <div className="raise">
          <BsBootstrap className="icon3" />
          <div className="bar front intermediate" data-skill="bootstrap"></div>
          <div className="bootstrap">Bootstrap</div>
        </div>
        <div className="raise">
          <SiHeroku className="icon3" />
          <div className="bar front intermediate" data-skill="heroku"></div>
          <div className="heroku">Heroku</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
