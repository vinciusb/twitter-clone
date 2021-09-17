import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes, { bool } from 'prop-types';

const Styled = {
    Accounts: styled.div`
    font-size: 1rem;border-radius: 40px;
    padding: 10px;
    transition: background-color 0.2s ease-out;
    align-items: center;
    
    display: flex;

    &:hover {
        cursor: pointer;
        background-color: rgba(255,255,255,0.15);
    }
    & h3 {
        margin: 0;
        margin-right: 5px;
    }
    .user-photo {
        background-color: ${({ color }) => `${color}`};
    }
    .options {
        display: flex;
        margin-left: 25px;
    }
    .point {
        border-radius: 50%;
        width: 3px;
        height: 3px;
        background-color: white;
        margin-left: 3px;
    }
    `,
    PopUp: styled.div`
    `,
};

function Accounts() {
    const user = useSelector((state) => state.user);
    const [popUp, setPopUp] = useState(false);

    const handlePopUp = () => {
        setPopUp(!popUp);
    };

    return (
        <Styled.Accounts color={user.color} onClick={handlePopUp}>
            <div className="user-photo" />
            <div className="user-names">
                <h3>{user.name}</h3>
                <span className="at-mark">
                    @
                    {user.at}
                </span>
            </div>
            <div className="options">
                <div className="point" />
                <div className="point" />
                <div className="point" />
            </div>
            <PopUp popUp={popUp} />
        </Styled.Accounts>
    );
}

function PopUp({ popUp }) {
    const [opc, setOpc] = useState(0);

    return (
        <Styled.PopUp />
    );
}

PopUp.propTypes = {
    popUp: PropTypes.bool.isRequired,
};

export default Accounts;
