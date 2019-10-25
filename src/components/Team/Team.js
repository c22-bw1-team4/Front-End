import React from 'react';
import Styled from 'styled-components';

function Team(){
    return(
        <TeamContainer className="team-container">
            <div className="member">
                <p className="name">Erik Sandoval</p>
                <p className="name">Pedro Montesinos</p>
                <p className="name">Jean-Francois Sebagh</p>
                <p className="name">Juru Steve Mugenzi</p>
            </div>
        </TeamContainer>
    )
}

const TeamContainer = Styled.div`
    display: 'flex';
    .member {
        background-color: #dfdbe5b3;
        margin: 30px;
        p {
            font-size: 24px;
            font-weight: 500;
            margin: 20px;
            padding: 20px
        }

    }
`


export default Team;