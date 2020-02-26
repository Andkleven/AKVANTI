import React, { useState, createContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { slide as Menu } from "react-burger-menu";
import { Player } from "./components/Player";
import { Container, Row, Button } from "react-bootstrap";
import "./styles.css";
import Hero from "./components/Hero";
import { ReactComponent as Burger } from "./images/burger.svg";
import ScrollButtons from "./components/ScrollButtons";
import useFetch from "use-http";
import Tree from "./components/tree/Tree";
import json from "./data/exampleData.json";
import json2 from "./data/exampleData2.json";

export const Context = createContext();

const App = () => {
  const [data, setData] = useState(json);
  const [index, setIndex] = useState(0);
  const [videoList, setVideoList] = useState([]);
  const [specific, setSpecific] = useState([]);
  const [video, setVideo] = useState("");
  const [request, response] = useFetch("http://81.167.143.242:3001");
  useEffect(() => {
    console.log("Fetch data...");
    // const initialTodos = request.get("/treedirminus");
    // if (response.ok) setData(initialTodos);
  }, []);
  useEffect(() => {
    if (videoList[index]) {
      setVideo(videoList[index].name);
    }
  }, [videoList, index]);

  const fetchVideo = path => {
    let list = path.split("/");
    console.log(`Fetch video: /treedir/${list[1]}/${list[2]}`);
    setVideoList(json2.children);
    // const initialTodos = request.get(`/treedir/${list[1]}/${list[2]}`);
    // if (response.ok) setVideoList(initialTodos.children);
  };

  const submit = () => {
    console.log("Submit data: ", videoList[index].path, specific);
    if (specific.length && videoList[index].path) {
      request.post("/todos", {
        video: videoList[index].path,
        specific
      });
    }
    setSpecific([]);
  };

  const nextVideo = () => {
    submit();
    if (index + 1 < videoList.length) {
      setIndex(index + 1);
    }
  };

  const backVideo = () => {
    submit();
    if (0 < index) setIndex(index - 1);
  };

  const handelSubmit = () => {
    submit();
    if (index + 1 < videoList.length) {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://kit-pro.fontawesome.com/releases/latest/css/pro.min.css"
        media="all"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />
      <container className="col-4 text-center mx-0 px-0">
        <h1>AKVANTI</h1>
      </container>
      <Context.Provider value={(data, setData)}>
        <div className="col-4 text-center mx-0 px-0">
          <h1>{video}</h1>
        </div>
        <Player
          sources={{
            type: "application/x-mpegURL",
            src: { video }
            //"https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
          }}
        />
        {request.error && "Error!"}
        {request.loading && "Loading..."}
        <Menu
          pageWrapId={"page-wrap"}
          width={230}
          customBurgerIcon={<Burger />}
        >
          <div className="mt-2" style={{ fontWeight: 600 }}>
            River
          </div>
          {data &&
            data.children.map((child, index) => (
              <Tree
                key={index}
                name={`${child.name && child.name}`}
                // defaultOpen
              >
                <div className="mt-2" style={{ fontWeight: 600 }}>
                  Year
                </div>
                {child.children &&
                  child.children.map((child, index) => (
                    <Button
                      key={index}
                      variant="outline-light"
                      block
                      onClick={() => {
                        fetchVideo(child.path);
                      }}
                    >
                      {child.name}
                    </Button>
                    // <Tree key={index} name={`${child.name && child.name}`}>
                    //   {child.children &&
                    //     child.children.map((child, index) => (
                    //       <Tree key={index} name={child.name} />
                    //     ))}
                    // </Tree>
                  ))}
              </Tree>
            ))}
        </Menu>
        {videoList[index] ? (
          <Hero>
            <Button
              variant="outline-light"
              block
              onClick={() => {
                backVideo();
              }}
            >
              Back
            </Button>
            <Button
              variant="outline-light"
              block
              onClick={() => {
                nextVideo();
              }}
            >
              Next
            </Button>
            <hr className="mb-4 w-100" />
            <ScrollButtons specific={specific} setSpecific={setSpecific} />
            <hr className="mb-4 w-100" />
            <Button
              variant="outline-light"
              block
              onClick={() => {
                handelSubmit();
              }}
            >
              Submit
            </Button>
          </Hero>
        ) : null}
        <Container className="mt-4">
          <div />
          <Row />
          <hr className="mb-4 w-100" />
          <div />
          <Row className="mt-3 mb-5 d-flex align-items-center justify-content-center">
            <div className="col-12 text-center mt-2 mb-3" />
          </Row>
        </Container>
      </Context.Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("react-root"));
