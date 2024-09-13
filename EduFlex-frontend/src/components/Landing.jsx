import React, { Component } from 'react';
import heroImage from '../assets/hero.jpg'; // Adjust the path according to your project structure

const styles = {
  container: {
    padding: '2rem',
  },
  jumbotron: {
    backgroundColor: '#f8f9fa',
    borderRadius: '0.3rem',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#0044cc', // Blue color
  },
  subheading: {
    fontSize: '2rem',
    color: '#333',
  },
  heroWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  heroImage: {
    width: '60%', // Adjust the width as needed
    height: 'auto',
    borderRadius: '0.3rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container" style={styles.container}>
          <div className="jumbotron" style={styles.jumbotron}>
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center" style={styles.heading}>
                Welcome to EduFlex
              </h1>
              <h2 className="text-center" style={styles.subheading}>
                Virtual Learning Environment
              </h2>
            </div>
          </div>
        </div>
        <div style={styles.heroWrapper}>
          <img src={heroImage} alt="Hero" style={styles.heroImage} />
        </div>
      </div>
    );
  }
}

export default Landing;
