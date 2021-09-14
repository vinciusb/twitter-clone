import React from 'react';
import styled from 'styled-components';
import TimeLine from '../TimeLine/TimeLine';
import Sidebars from '../Sidebars/Sidebars';

const Styled = {
    MainPage: styled.div`
        color: rgb(250,250,250);
        width: 100%;
        height: 100%;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-size: 24px;

        display: flex;
        justify-content: center;

        & .logo {
            fill: rgb(255,255,255);
            width: 28px;
            margin-left: 15px;
            box-sizing: border-box;
        }
    `,
};

function App() {
    return (
        <Styled.MainPage>
            <Sidebars />
            <TimeLine />
        </Styled.MainPage>
    );
}

export default App;
