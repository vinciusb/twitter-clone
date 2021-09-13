export function publishTweet(tweetInfos) {
    return {
        type: 'PUBLISH',
        payload: tweetInfos,
    };
}
