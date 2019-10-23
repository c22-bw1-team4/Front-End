import React, {useEffect, useState} from "react";
import axios from "axios";
import {axiosWithAuth} from '../../utils/AxiosWithAuth'

function Maze() {
    const [details, setDetails] = useState({}) 
    const [rooms, setRooms] = useState([])
    const [error, setError] = useState('')
    const [currentRoom, setCurrentRoom] = useState({})
    useEffect(() => {
        axios
            .get('https://bw-django-game.herokuapp.com/api/adv/init')
            .then(res => {
                console.log("init", res);
                setDetails(res.data);
                setCurrentRoom(res.data.title, res.data.description);
                console.log(details);
            });
    }, []);

    useEffect(() => {
        axios
            .get("https://bw-django-game.herokuapp.com/api/adv/rooms")
            .then(res => {
                console.log("init", res);
                setRooms(res.data);
                console.log(details);
            });
    }, []);

    const move = (direction) => {
        let explore = { 'direction': direction }
        axios
            .post('https://bw-django-game.herokuapp.com/api/adv/move', explore)
            .then(res => {
                if(res.data.error_msg){
                    setError(res.data.error_msg)
                }else{
                    setError('')
                }
                console.log("Move", res)
                setDetails({title: res.data.title, description:res.data.description})
            })
    }
    return (
        <>
        <div>
            <p>Room Title:<strong>{details.title}</strong></p>
            <p>Room description:<strong>{details.description}</strong></p>
        </div>
        <button onClick={() => move('w')}>West</button>
        <button onClick={() => move('n')}>North</button>
        <button onClick={() => move('s')}>South</button>
        <button onClick={() => move('e')}>East</button> 

        {error ? <span>{error}</span> : ''}
        </>
    );
}
export default Maze;
