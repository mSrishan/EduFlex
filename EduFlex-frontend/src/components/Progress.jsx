import React from "react";
import PropTypes from "prop-types";

const styles = {
  progress: {
    height: '2rem',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#e9ecef',
  },
  progressBar: {
    height: '100%',
    transition: 'width 0.6s ease',
    color: '#fff',
    textAlign: 'center',
    lineHeight: '2rem',
    fontSize: '1rem',
  },
};

const Progress = ({ percentage }) => {
  let progressColor;
  
  if (percentage < 30) {
    progressColor = 'bg-danger'; // Red color for low progress
  } else if (percentage < 70) {
    progressColor = 'bg-warning'; // Yellow color for moderate progress
  } else {
    progressColor = 'bg-success'; // Green color for high progress
  }

  return (
    <div className="progress" style={styles.progress}>
      <div
        className={`progress-bar ${progressColor} progress-bar-striped`}
        role="progressbar"
        style={{ width: `${percentage}%`, ...styles.progressBar }}
      >
        {percentage}%
      </div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;
