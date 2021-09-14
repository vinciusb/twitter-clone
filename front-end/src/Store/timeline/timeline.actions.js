export function publishTweet(user, text) {
    return {
        type: 'PUBLISH',
        payload: { user, text },
    };
}
