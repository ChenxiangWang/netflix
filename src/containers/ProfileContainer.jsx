import React from "react";
import Header from "../components/header";
import * as ROUTERS from "../constants/routers";
import logo from "../logo.svg";
import Profiles from "../components/profiles";

export default function ProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTERS.HOME} alt={"Netflix"} src={logo} />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => {
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              });
            }}
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
