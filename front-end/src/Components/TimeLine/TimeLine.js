import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MakeTweet from '../MakeTweet/MakeTweet';
import Tweet from '../Tweet/Tweet';

const Styled = {
    TimeLine: styled.div`
        border-left: 1px rgba(255,255,255, 0.2) solid;
        border-right: 1px rgba(255,255,255, 0.2) solid;
        overflow-y: scroll;

        & > * {
            padding: 10px 20px;
            border-bottom: 1px rgba(255,255,255, 0.2) solid;
        }
    `,
};

function TimeLine() {
    const tweets = useSelector((state) => state.timeline);

    function renderTweets(tts) {
        const list = [];

        tts.forEach((tt) => {
            list.push(<Tweet
                ttData={tt}
            />);
        });

        return list;
    }

    return (
        <Styled.TimeLine>
            <header>
                Página Inicial
                <img src="" alt="" />
            </header>
            <MakeTweet />
            {renderTweets(tweets)}
        </Styled.TimeLine>
    );
}

export default TimeLine;
