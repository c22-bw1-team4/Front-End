import React from "react";

const SideMenu = props => {
  const players = props.currRoom.players;

  if (props.currRoom) {
    return (
      <div className="side-menu">
        <div className="player-stats">
          <h3>Title: {props.currRoom.title}</h3>
          <p>Description: {props.currRoom.description}</p>
        </div>
        <div className="players">
          <h3>Players:</h3>
          {players
            ? players.map((player, i) => <p key={i}>{player}</p>)
            : ":-( No online players!"}
        </div>
      </div>
    );
  } else {
    return <div className="side-menu">LOADING...</div>;
  }
};

export default SideMenu;
