import React, { Component } from 'react'
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Statistics from '../statistics/Statistics';
import options from '../../data/options.json'
import Section from '../section/Section';
import Notification from '../notification/Notification';


class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0
    }
    
    onLeaveFeedback = (event) => {
        console.log(event.target.name);
         const { name } = event.target;
        this.setState(prevState => ({
          [name] :prevState[name] + 1
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage()
    }

    countTotalFeedback = () => {
        this.setState(prevState => ({ total: prevState.good + prevState.neutral + prevState.bad }));
    }

    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => ({ positivePercentage: Math.round(prevState.good / prevState.total * 100)}))
    }

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.state;
        return (
            <>
                <Section title="Pleace leave feedback">
                {options.map((option) => (
                    <FeedbackOptions option={option} onLeaveFeedback={this.onLeaveFeedback} key={option}/>
                ))}
                </Section>
                <Section title="Statistics">
                    {total === 0 ?
                    <Notification message={"No feedback given"}/> :
                    <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
    }
                </Section>
            </>
        );
    }
}

export default Feedback;