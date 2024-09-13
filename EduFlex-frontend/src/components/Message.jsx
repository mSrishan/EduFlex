import React from "react";
import PropTypes from "prop-types";

const styles = {
  alert: {
    borderRadius: '0.3rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    marginBottom: '1rem',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    color: '#333',
    cursor: 'pointer',
  },
};

const Message = ({ msg }) => {
  return (
    <div className="alert alert-info" role="alert" style={styles.alert}>
      {msg}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        style={styles.closeButton}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Message;
