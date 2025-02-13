import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Image from "./components/image";
import Youtube from "./components/youtube";
import {
  Back,
  Header,
  Title,
  Explanation,
  Date,
  ImgDiv,
} from "./components/content";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "reactstrap";

/*const dummyData = {
  date: "2023-05-31",
  explanation:
    "How did we get here? We know that we live on a planet orbiting a star orbiting a galaxy, but how did all of this form? Since our universe moves too slowly to watch, faster-moving computer simulations are created to help find out. Specifically, this featured video from the IllustrisTNG collaboration tracks gas from the early universe (redshift 12) until today (redshift 0). As the simulation begins, ambient gas falls into and accumulates in a region of relatively high gravity.  After a few billion years, a well-defined center materializes from a strange and fascinating cosmic dance. Gas blobs -- some representing small satellite galaxies -- continue to fall into and become absorbed by the rotating galaxy as the present epoch is reached and the video ends.  For the Milky Way Galaxy, however, big mergers may not be over -- recent evidence indicates that our large spiral disk Galaxy will collide and coalesce with the slightly larger Andromeda spiral disk galaxy in the next few billion years.    Open Science: Browse 3,000+ codes in the Astrophysics Source Code Library",
  media_type: "video",
  service_version: "v1",
  title: "Simulation: A Disk Galaxy Forms",
  url: "https://www.youtube.com/embed/X4UF9Akman0?rel=0",
  
};
*/
function App() {
  const [data, setData] = useState("");
  const [date, setDate] = useState("2023-05-31");

  const changeHandler = event => {
    setDate(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=uXmudTQ8ZADkwpnIYhqff1DicK99SVL6UEVfYanK&date=" +
            date
        )
        .then(res => {
          setData(res.data);
        });
    }, 2000);
  }, [date]);

  return (
    <div className="App">
      <Back>
        <Row>
          <Col>
            <Header>NASA</Header>

            <input type="date" value={date} onChange={changeHandler} />

            <Title>{data.title}</Title>
            <Date>{data.date}</Date>
            <Explanation>{data.explanation}</Explanation>
          </Col>

          <Col>
            {data ? setData : <p>Yükleniyor</p>}
            <ImgDiv>
              {data.media_type === "image" ? (
                <Image dataUrl={data.url} />
              ) : (
                <Youtube dataUrl={data.url} />
              )}
            </ImgDiv>
          </Col>
        </Row>
      </Back>
    </div>
  );
}

export default App;
