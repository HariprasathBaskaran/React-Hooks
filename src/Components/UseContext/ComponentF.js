import React from "react";
import { userContext, channelContext } from "../../App";

function ComponentF() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <channelContext.Consumer>
              {(channel) => {
                return (
                  <h3>
                    user name: {user}, {channel}
                  </h3>
                );
              }}
            </channelContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
}

export default ComponentF;
