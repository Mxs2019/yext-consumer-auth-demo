import React from "react";
import AuthWrapper from "../components/AuthWrapper";

type Props = {
  //Insert Props Here
};

const App = () => {
  return (
    <AuthWrapper>
      {(identity) => {
        return (
          <div>
            You are successfuly logged in! Your user id is {identity.sub}
          </div>
        );
      }}
    </AuthWrapper>
  );
};

export default App;
