import { useState } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [bad, setBad] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const feedbacksTotal = bad + good + neutral;

  const statesSetters = {
    bad: setBad,
    good: setGood,
    neutral: setNeutral,
  };

  const countPercentage = totalFeedbacks => {
    const percent = (good / totalFeedbacks) * 100;
    if (percent.toFixed(1) >= 1) return percent.toFixed(0);
    return percent.toFixed(1);
  };

  const handleLeaveFeedback = e => {
    const currentStateName = e.target.textContent.toLowerCase();
    statesSetters[currentStateName](prevState => prevState + 1);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys({ good, neutral, bad })}
        handleLeaveFeedback={handleLeaveFeedback}
      />
      <div>
        <h2>Statistics</h2>
        {feedbacksTotal ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={feedbacksTotal}
            positivePercentage={countPercentage(feedbacksTotal)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    </Section>
  );
};
