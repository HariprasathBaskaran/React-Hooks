import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { userContext, channelContext } from "../../App";

function ComponentE() {
  const user = useContext(userContext);
  const channel = useContext(channelContext);
  return (
    <div>
      <ComponentF />
      {user}-{channel}
    </div>
  );
}

export default ComponentE;
