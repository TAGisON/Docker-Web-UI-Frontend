import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContainerList.css';

const ActiveContainers = () => {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.100.141:3230/api/container/fetch?status=active')
      .then(response => setContainers(response.data))
      .catch(error => console.error('Error fetching containers:', error));
  }, []);

  return (
    <div className="container-list">
      <h2>Active Containers</h2>
      <ul>
        {containers.map(container => (
          <li key={container.Id}>
            {container.Names[0]} - {container.Status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveContainers;
