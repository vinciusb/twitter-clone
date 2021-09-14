import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { btStyle } from '../SidebarOptions/InfoButton/InfoButton';

const ReStyled = styled(btStyle)`
    background-color: rgba(29, 155, 240, 1);
    display: flex;
    justify-content: center;

    &:hover {
        background-color: rgba(10, 136, 220, 1)
    }
`;

function TweetButton({ onClick }) {
    return (
        <ReStyled onClick={onClick}>
            Tweetar
        </ReStyled>
    );
}

TweetButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default TweetButton;
