import React, { useEffect, useState } from 'react';

const ProfileDetails = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
      setProfileData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto">
          <h1 className="text-center">Profile Details</h1>
        </div>
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>First Name</td>
              <td>{profileData.first_name}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{profileData.last_name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{profileData.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileDetails;
