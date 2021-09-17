import React from 'react';
import styled from 'styled-components';
import SidebarOptions from '../SidebarOptions/SidebarOptions';
import SidebarInfos from '../SidebarInfos/SidebarInfos';

const Styled = {
    Sidebars: styled.div`
        background-color: rgb(21,32,43);
        position: fixed;
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: 1fr 600px 1fr;
        grid-gap: 30px;
    `,
};

function Sidebars() {
    return (
        <Styled.Sidebars>
            <SidebarOptions />
            <div />
            <SidebarInfos />
        </Styled.Sidebars>
    );
}

export default Sidebars;
