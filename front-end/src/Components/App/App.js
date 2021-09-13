import React, { useState } from 'react';
import styled from 'styled-components';
import SidebarOptions from '../SidebarOptions/SidebarOptions';
import TimeLine from '../TimeLine/TimeLine';
import SidebarInfos from '../SidebarInfos/SidebarInfos';

const Styled = {
    MainPage: styled.div`
        background-color: rgb(21,32,43);
        color: rgb(250,250,250);
        width: 100%;
        height: 100%;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-size: 24px;

        display: grid;
        grid-template-columns: 1fr 600px 1fr;
        grid-gap: 30px;
    `,
};

function App() {
    return (
        <Styled.MainPage>
            <SidebarOptions />
            <TimeLine />
            <SidebarInfos />
        </Styled.MainPage>
    );
}

export default App;
