import React, { useContext, useEffect, useState } from "react";
import ProfileContainer from "./ProfileContainer";
import Fuse from "fuse.js";
import { FirebaseContext } from "../context/firebase";
import Loading from "../components/loading";
import Header from "../components/header";
import logo from "../logo.svg";
import Card from "../components/card";
import Player from "../components/player";
import * as ROUTES from "../constants/routers";

export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [slideRows, setSlideRows] = useState(slides[category]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          {/* left side of the frame bar: include logo and a nav for "filems and series" */}
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === "series" ? true : false}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? true : false}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          {/* right right of the bar*/}
          <Header.Group>
            {/* search bar at the right side of frame*/}
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            {/* profile block */}
            <Header.Profile src={user.photoURL}>
              {/* icon to init trigger the drop down*/}
              <Header.Picture src={user.photoURL} alt="header-photo" />

              {/* drop down block*/}
              <Header.Dropdown>
                {/* TODO: refactor to drop down could be a better way.
                          however, Header.Group is acting as a Dropdown item
                */}
                <Header.Group>
                  <Header.Picture src={user.photoURL} alt="header-photo" />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        {/* Feature block*/}
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed cmoedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => {
          return !slideItem.data.lenghth &&
            slideItem.data.length === 0 ? null : (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((item) => (
                  <Card.Item key={item.docId} item={item}>
                    <Card.Image
                      src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                    />

                    {/* a popover cardition*/}
                    <Card.Meta>
                      <Card.SubTitle>{item.title}</Card.SubTitle>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              <Card.Feature category={category}>
                {/* <Player>
                  <Player.Button />
                  <Player.Video src={"/videos/bunny.mp4"} />
                </Player> */}
                <Player>
                  <Player.Button />
                  <Player.Video src={"/videos/bunny.mp4"} />
                </Player>
              </Card.Feature>
            </Card>
          );
        })}
      </Card.Group>
    </>
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  );
}
