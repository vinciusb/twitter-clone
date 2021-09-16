import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { publishTweet } from '../../Store/timeline/timeline.actions';
import AutoTextarea from '../AutoTextarea/AutoTextarea';
import TweetButton from '../TweetButton/TweetButton';
import logos from './logos/logos';

const Styled = {
    MakeTweet: styled.div`
        display: flex;

        & .user-photo {
            background-color: ${({ color }) => `${color}`};
        }
        & .edit-tweet {
            width: 100%;
        }
        & .publish {
            display: grid;
            grid-template-columns: 30% 1fr 20%;
            grid-gap: 50%;
        }
        & .publish .extra {
            display: flex;
            justify-content: space-between;
        }
        & .make-logo {
            width: 24px;
            fill: rgb(29, 155, 240);
        }
        & .make-logo:hover {
            cursor: pointer;
        }
    `,
};

function MakeTweet() {
    const [text, setText] = useState('');
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleTweetPublication = () => {
        if(text !== '') {
            dispatch(publishTweet(user, text));
            setText('');
        }
    };

    return (
        <Styled.MakeTweet color={user.color}>
            <div className="user-photo" />
            <div className="edit-tweet">
                <AutoTextarea
                    value={text}
                    onChange={(t) => setText(t)}
                />
                <div className="publish">
                    <div className="extra">
                        { logos.picture}
                        { logos.gif}
                        { logos.survey}
                        { logos.emoji}
                        { logos.calendar}
                    </div>
                    <TweetButton
                        onClick={handleTweetPublication}
                        enabled={text !== ''}
                    />
                </div>
            </div>

        </Styled.MakeTweet>
    );
}

export default MakeTweet;
