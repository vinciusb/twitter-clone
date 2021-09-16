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

        .logo {
            fill: rgb(255,255,255);
            width: 28px;
            margin-left: 15px;
            box-sizing: border-box;
        }
        .at-mark {
            color: rgb(155,155,155);
        }
        .user-photo {
            width: 48px;
            height: 48px;
            min-width: 48px;
            min-height: 48px;
            border-radius: 50%;
            margin-right: 15px;
            box-sizing: content-box;
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
