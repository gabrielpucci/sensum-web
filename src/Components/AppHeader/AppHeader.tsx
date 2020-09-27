import React from "react";
import { ReactComponent as PulseIcon } from "../../Svg/pulse.svg";
import { ReactComponent as Close } from "../../Svg/close.svg";
import "./AppHeader.scss";
import { Link } from "@reach/router";

interface AppHeaderProps {
  readonly rightButton: "goToHome" | "goToSensations";
}

const AppHeader: React.FC<AppHeaderProps> = ({
  rightButton,
}: AppHeaderProps) => {
  return (
    <nav className="AppHeader">
      <button
        type="button"
        className="AppName"
        onClick={() => alert("24 electrones en órbita")} // TODO
      >
        sensum
      </button>
      {rightButton === "goToHome" ? (
        <Link to="/" className="Close">
          <Close className="CloseIcon" />
        </Link>
      ) : (
        <Link to="/sensation/0" className="Pulse">
          <PulseIcon className="PulseIcon" />
        </Link>
      )}
    </nav>
  );
};

export default AppHeader;
