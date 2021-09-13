import React from 'react';
import styled from 'styled-components';
import { btStyle } from '../SidebarOptions/InfoButton/InfoButton';

const ReStyled = styled(btStyle)`
    background-color: rgba(29, 155, 240, 1);
    display: flex;
    justify-content: center;

    &:hover {
        background-color: rgba(10, 136, 220, 1)
    }
`;

function TweetButton() {
    return (
        <ReStyled onClick={() => {}}>
            Tweetar
        </ReStyled>
    );
}

export default TweetButton;
