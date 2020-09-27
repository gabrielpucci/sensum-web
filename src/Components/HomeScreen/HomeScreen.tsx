import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import { RouteComponentProps } from "@reach/router";
import "./HomeScreen.scss";
import { SensumIcon } from "../SensumIcon/SensumIcon";

const HomeScreen: React.FC<RouteComponentProps> = () => {
  return (
    <div className="HomeScreen">
      <AppHeader rightButton="goToSensations" />
      <main>
        <SensumIcon />
      </main>
    </div>
  );
};

export default HomeScreen;
