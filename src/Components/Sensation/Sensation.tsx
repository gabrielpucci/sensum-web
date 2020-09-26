import React from "react";
import ReactMarkdown from "react-markdown";
import AppHeader from "../AppHeader/AppHeader";
import "./Sensation.scss";

const Sensation: React.FC<{}> = () => {
  return (
    <article className="Sensation">
      <AppHeader
        rightButton="goToHome"
        onClickRightButton={() => alert("MainPage")}
      />
      <section className="SensationBody">
        <div className="SensationBodyText">
          <ReactMarkdown
            source={`Nalgueame pero _también_ dame besitos en la frente`}
          />
        </div>
        <address className="Signature">~ Anonymous</address>
      </section>
      <footer className="Navigator">
        <div className="Votes">
          <button className="NegVotes">-0</button>
          <button className="PosVotes">+0</button>
        </div>
        <nav className="NavArrows">
          <button className="LeftArrow" />
          <button className="RightArrow" />
        </nav>
      </footer>
    </article>
  );
};

export default Sensation;
