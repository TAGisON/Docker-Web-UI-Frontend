import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContainerDetails.css';

const ContainerDetails = ({ containerId }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    axios.get(`/api/containers/${containerId}`)
      .then(response => setContainer(response.data))
      .catch(error => console.error('Error fetching container details:', error));
  }, [containerId]);

  if (!container) return <div>Loading...</div>;

  return (
    <div className="container-details">
      <h2>Container: {container.Name}</h2>
      <p>Status: {container.Status}</p>
      <div className="actions">
        <button className="start">Start</button>
        <button className="stop">Stop</button>
        <button className="restart">Restart</button>
      </div>
    </div>
  );
};

export default ContainerDetails;
