import React from "react";
import { ReactComponent as PulseIcon } from "../../Svg/pulse.svg";
import { ReactComponent as Close } from "../../Svg/close.svg";
import "./AppHeader.scss";

interface AppHeaderProps {
  rightButton: "goToHome" | "goToSensations";
  onClickRightButton: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  rightButton,
  onClickRightButton,
}: AppHeaderProps) => {
  return (
    <nav className="AppHeader">
      <button
        type="button"
        className="AppName"
        onClick={() => alert("24 electrones en órbita")}
      >
        sensum
      </button>
      {rightButton === "goToHome" ? (
        <button type="button" className="Close" onClick={onClickRightButton}>
          <Close className="CloseIcon" />
        </button>
      ) : (
        <button type="button" className="Pulse" onClick={onClickRightButton}>
          <PulseIcon className="PulseIcon" />
        </button>
      )}
    </nav>
  );
};

export default AppHeader;
