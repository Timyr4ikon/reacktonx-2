import Section from './components/Section/Section'
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react'
import styles from './App.module.css';
export default class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  }
  handleChange = (e) => {
      const {name} = e.target;
      this.setState((state) => ({ [name]: state[name] + 1 }));
  }
  countTotalFeedback = () => {
      const {good,neutral,bad} = this.state;
      return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
      const {good} = this.state;
      return  (good / this.countTotalFeedback()) * 100
  };
    render() {
    const {good,neutral,bad} = this.state;
        return (
            <div className={styles.block}>
                <Section title="Please leave feedback">
                    <FeedbackOptions  onLeaveFeedback={this.handleChange}/>
                    <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}></Statistics>
                </Section>
            </div>
        )
  }
}