import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactMarkdown from "react-markdown";
import AppHeader from "../AppHeader/AppHeader";
import {
  faChevronRight,
  faChevronLeft,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

import "./Sensation.scss";

// TODO make everythingnon-optional
interface SensationProps {
  text?: string;
  signature?: string;
  votes?: {
    up: number;
    down: number;
  };
}

const Sensation: React.FC<SensationProps> = ({
  text = `Nalgueame pero _también_ dame besitos en la frente`,
  signature = "Anonymous",
  votes = {
    up: 0,
    down: 0,
  },
}: SensationProps) => {
  return (
    <article className="Sensation">
      <AppHeader
        rightButton="goToHome"
        onClickRightButton={() => alert("MainPage")} // TODO remove
      />
      <section className="SensationBody">
        <div className="SensationBodyText">
          <ReactMarkdown source={text} />
        </div>
        <address className="Signature">~ {signature}</address>
      </section>
      <footer className="Navigator">
        <div className="Votes">
          <button className="VoteBtn NegVotes">
            <FontAwesomeIcon icon={faMinus} /> {votes.down}
          </button>
          <button className="VoteBtn PosVotes">
            <FontAwesomeIcon icon={faPlus} /> {votes.up}
          </button>
        </div>
        <nav className="NavArrows">
          <button className="NavBtn LeftArrow">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="NavBtn RightArrow">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </nav>
      </footer>
    </article>
  );
};

export default Sensation;
