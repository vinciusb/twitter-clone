import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { btStyle } from '../SidebarOptions/InfoButton/InfoButton';

const ReStyled = styled(btStyle)`
    background-color: ${({ enabled }) => (enabled ? 'rgba(29, 155, 240, 1)' : 'rgba(0, 106, 190, 0.6)')};
    pointer-events: ${({ enabled }) => (enabled ? '' : 'none')};
    display: flex;
    justify-content: center;
    user-select: none;

    &:hover {
        background-color: rgba(10, 136, 220, 1)
    }
`;

function TweetButton({ onClick, enabled }) {
    return (
        <ReStyled onClick={onClick} enabled={enabled}>
            Tweetar
        </ReStyled>
    );
}

TweetButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    enabled: PropTypes.bool.isRequired,
};

export default TweetButton;
