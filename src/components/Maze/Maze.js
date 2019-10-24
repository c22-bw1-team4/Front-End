import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import Styled from "styled-components";

const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Token ${token}`;

function Maze() {
  const [details, setDetails] = useState({});
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [currentRoom, setCurrentRoom] = useState({});

  useEffect(() => {
    axios.get("https://bw-django-game.herokuapp.com/api/adv/init").then(res => {
      setDetails(res.data);
      setCurrentRoom({
        title: res.data.title,
        description: res.data.description
      });
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://bw-django-game.herokuapp.com/api/adv/rooms")
      .then(res => {
        setRooms(res.data.rooms);
        setLoaded(true);
      });
  }, []);

  const move = direction => {
    let explore = { direction: direction };
    axios
      .post("https://bw-django-game.herokuapp.com/api/adv/move", explore)
      .then(res => {
        if (res.data.error_msg) {
          setError(res.data.error_msg);
        } else {
          setError("");
        }
        console.log("Move", res);
        setCurrentRoom({
          title: res.data.title,
          description: res.data.description
        });
        setDetails(res.data);
      });
  };
  return (
    <MapContainer>
      <div className="map-container">
        <p>Map</p>
        <div className="map">
          {rooms
            ? rooms.map((rm, i) => {
                return (
                  <div
                    className={`room-cell ${
                      // @ts-ignore
                      rm.title === currentRoom.title ? "current-room" : ""
                    }`}
                    key={i}
                  >
                    {/* {rm.id} */}
                  </div>
                );
              })
            : ""}
        </div>
        <div className="controls">
          <button onClick={() => move("w")}>West</button>
          <button onClick={() => move("n")}>North</button>
          <button onClick={() => move("s")}>South</button>
          <button onClick={() => move("e")}>East</button>
        </div>
        <div className="errors">{error ? <span>{error}</span> : ""}</div>
      </div>

      <div className="sidebar">
        <Sidebar move={move} currRoom={currentRoom} />
      </div>
    </MapContainer>
  );
}

const MapContainer = Styled.div`
    display:flex;
    flex-direction: column;
    width: 100%
    .map-container{
        width: 100%;
        text-align: center;
        .controls{
            button {
                font-size: 20px;
                padding: 10px;
                margin: 5px;
                border-radius: 10px
                background-color: lightyellow
            }
            button:hover{
                color: lightyellow;
                background-color: black
            }
        }
        .map{
            height: 100%;
            background-color: #515151;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            .room-cell{
                font-size: 15px;
                background-color: yellow;
                padding:10px;
                margin:10px;
                width: 5px;
                height: 5px
            }
            .current-room{
                background-color: pink
            }
        }
    }
    .sidebar{
        width: 60%
    }

`;

export default Maze;
