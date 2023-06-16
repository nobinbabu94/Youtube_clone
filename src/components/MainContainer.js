import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";


const MainContainer = () => {
 

  return (
    <div className="mt-2">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
