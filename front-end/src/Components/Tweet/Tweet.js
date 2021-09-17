import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Styled = {
    Tweet: styled.div`
        font-size: 0.9rem;

        display: flex;

        & .user-photo {
            background-color: ${({ color }) => `${color}`};
        }
        & .tweet-content {
            width: 100%;
        }
        & header {
            display: flex;
            align-items: baseline;
        }
        & h3 {
            margin: 0;
            margin-right: 5px;
        }
        & h3:hover {
            text-decoration: underline;
            cursor: pointer;
        }
        & body {
            height: fit-content;
            font-size: 1rem;
        }
    `,
};

function Tweet({ ttData }) {
    const { user, text } = ttData;
    return (
        <Styled.Tweet color={user.color}>
            <div className="user-photo" />
            <div className="tweet-content">
                <header>
                    <h3>{user.name}</h3>
                    <span className="at-mark">
                        @
                        {user.at}
                    </span>
                </header>
                <body>
                    { text }
                </body>

            </div>
        </Styled.Tweet>
    );
}

Tweet.propTypes = {
    ttData: PropTypes.objectOf.isRequired,
};

export default Tweet;
