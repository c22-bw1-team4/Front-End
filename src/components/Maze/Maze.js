import React, {useEffect, useState} from "react";
import axios from "axios";

function Maze() {
    const [rooms, setRooms] = useState([]) 
    const [graph, setGraph] = useState({})
    const [currentRoom, setCurrentRoom] = useState({})

    useEffect(() => {
        sendCredentials();
    }, [])

    const sendCredentials = async () => {
        try {
            const url = "https://bw-django-game.herokuapp.com/api/adv/rooms";
            const res = await axios.get(url);
            setRooms(res.data.rooms)
            console.log(res.data.rooms)
        } catch (error) {
            console.log("err", error.message);
        }
    };

    const localGraph = (id, coordinates, exits) => {
        let graphObj = Object.assign({}, graph);
        if (!graph[id]) {
            let map = [];
            let roomExits = {};
            map.push(coordinates);
            exits.forEach(exit => { roomExits[exit] = '?' });
            map.push(roomExits);

            graphObj = { ...graphObj, [id]: map };

        };
        localStorage.setItem('map', JSON.stringify(graphObj));
        return graphObj;
    }

    const move = (direction) => {
        let explore = { 'direction': direction }
        axios
            .post('https://bw-django-game.herokuapp.com/api/adv/move', explore)
            .then(response => {
                let graph = localGraph(response.data.room_id, response.data.coordinates, response.data.exits);
                setCurrentRoom({ currRoom: response.data, graph });
                console.log('move!!!!!:', currentRoom);
            }).catch(error => console.log(error));
    }
    return (
        <>
        <div className="menu">
            <p>Room ID:<strong>{currentRoom.id}</strong></p>
            <p>Room Title:<strong>{currentRoom.title}</strong></p>
            <p>Room description:<strong>{currentRoom.description}</strong></p>
        </div>
        <button onClick={() => move('w')}>West</button>
        <button onClick={() => move('n')}>North</button>
        <button onClick={() => move('s')}>South</button>
        <button onClick={() => move('e')}>East</button> 
        </>
    );
}
export default Maze;
