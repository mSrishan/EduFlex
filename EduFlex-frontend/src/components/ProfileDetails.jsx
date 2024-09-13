import React, { useEffect, useState } from 'react';

const styles = {
  container: {
    marginTop: '50px',
    padding: '0 15px',
  },
  jumbotron: {
    backgroundColor: '#f8f9fa',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#0044cc',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#0044cc',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: '8px 8px 0 0',
  },
  tableHeaderCell: {
    padding: '12px',
  },
  tableRow: {
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '12px',
    color: '#555',
  },
  tableData: {
    fontSize: '16px',
  },
};

const ProfileDetails = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      setProfileData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="container" style={styles.container}>
      <div className="jumbotron" style={styles.jumbotron}>
        <h1 style={styles.heading}>Profile Details</h1>
        <table className="table" style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={{ ...styles.tableHeaderCell, textAlign: 'center' }}>Field</th>
              <th style={{ ...styles.tableHeaderCell, textAlign: 'center' }}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>First Name</td>
              <td style={styles.tableCell}>{profileData.first_name || 'N/A'}</td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>Last Name</td>
              <td style={styles.tableCell}>{profileData.last_name || 'N/A'}</td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>Email</td>
              <td style={styles.tableCell}>{profileData.email || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileDetails;
