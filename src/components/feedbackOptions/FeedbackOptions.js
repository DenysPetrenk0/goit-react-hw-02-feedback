import React from 'react';

const FeedbackOptions = ({onLeaveFeedback, option}) => {
    return (
        <>
            <button type="button" onClick={onLeaveFeedback} name={option}>{option}</button>
        </>
    );
}

export default FeedbackOptions;