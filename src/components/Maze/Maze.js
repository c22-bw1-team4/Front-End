import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import Styled from "styled-components";

const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Token ${token}`;
var array2d;
function Maze() {
  const [details, setDetails] = useState({});
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [currentRoom, setCurrentRoom] = useState({id: 0, title: '', description: ''});
  useEffect(() => {
    axios.get("https://bw-django-game.herokuapp.com/api/adv/init").then(res => {
      setDetails(res.data);
      setCurrentRoom({
          id: res.data.id,
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
          id: res.data.id,
          title: res.data.title,
          description: res.data.description
        });
        setDetails(res.data);
      });
  };
  
  const make2Darray = (rooms, curr_title) => {
      let obj = {};
      array2d = new Array(11)
      array2d.fill(0);
       array2d = array2d.map(arr => {
        arr = new Array(11)
        arr.fill(0);
        return arr
      });
    let rm_idx;
    for (let i = 0; i < rooms.length; i++) {
        let rm = rooms[i]; 
        if(rm.title === curr_title ){
            rm_idx = i
        }
      obj[rm.id.toString()] = rm;
    }

    renderNode(rooms[rm_idx], array2d, 5, 5, obj)
};

const renderNode = (node, array2d, x, y, obj)=>{
    
    if(array2d[y][x] !== 0 || array2d[y][x] === undefined){
        return
    }
    try {
        array2d[y][x] = node
        } catch (error) {
            console.log(error)
        }
        try {
            // console.log(x, y, node.n_to)
            renderNode(obj[node.n_to.toString()], array2d, x,y-1, obj)
        } catch (error) {
            // console.log(node.n_to) 
        }
        try {
            renderNode(obj[node.e_to.toString()], array2d, x+1,y, obj)
        } catch (error) {
            // console.log(x, y)
        }
        try {
            renderNode(obj[node.w_to.toString()], array2d, x-1,y, obj)
        } catch (error) {
            // console.log(x, y)
        }
        try {
            renderNode(obj[node.s_to.toString()], array2d, x,y+1, obj)
        } catch (error) {
            // console.log(x, y)
        }
    }
    const renderMap = ()=>{
        try {
            
            return array2d.map(a=>{
                return (
                    <div style={{display: 'flex', width: '100%'}} className="inner-map" >
                        {a.map((rm, i)=>{
                          return <div
                          className={`room-cell ${
                            // @ts-ignore
                            rm && rm.title === currentRoom.title ? "current-room" : ""} ${!rm ? 'no-room': ''}`}
                            key={i}
                            >
                                {/* {rm ? rm.id : ''} */}
                            </div>
                        })}
                    </div> 
                )
                })

        } catch (error) {

        }
    }
    
    let newRoomArr = <div />
    if(rooms.length !== 0){
        make2Darray(rooms, currentRoom.title)        
        newRoomArr = renderMap()
        console.log(newRoomArr)

    }
  return (
    <MapContainer>
      <div className="map-container">
        <p>Map</p>
        <div className="map">
          {newRoomArr}
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
            height: 50%;
            width: 50%;
            margin: 0 auto;
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
                background-color: #8143436e
            }
            .no-room{
                background-color: #515151;
            }

        }
    }
    .sidebar{
        width: 60%;
        margin: 0 auto
    }

`;

export default Maze;
