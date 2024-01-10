const FeedbackOptions = ({ options, handleLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button key={option} type="button" onClick={handleLeaveFeedback}>
        {option}
      </button>
    ))}
  </div>
);

export { FeedbackOptions };
