import React, { useState } from 'react';
import styled from 'styled-components';
import AutoTextarea from '../AutoTextarea/AutoTextarea';
import TweetButton from '../TweetButton/TweetButton';

const Styled = {
    MakeTweet: styled.div`
        display: flex;

        & .user-photo {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: rgb(0,155,155);
            margin-right: 15px;
            box-sizing: content-box;
        }
        & .edit-tweet {
            width: 100%;

            /* display: grid;
            grid-template-rows: auto; */
        }
    `,
};

function MakeTweet() {
    const [text, setText] = useState('');

    return (
        <Styled.MakeTweet>
            <div className="user-photo" />
            <div className="edit-tweet">
                <AutoTextarea
                    value={text}
                    onChange={(t) => setText(t)}
                />
                <div className="">
                    <TweetButton />
                </div>
            </div>

        </Styled.MakeTweet>
    );
}

export default MakeTweet;
