import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContainerList.css';

const AllContainers = () => {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.100.141:3230/containers/json?all=true')
      .then(response => setContainers(response.data))
      .catch(error => console.error('Error fetching containers:', error));
  }, []);

  return (
    <div className="container-list">
      <h2>All Containers</h2>
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

export default AllContainers;
