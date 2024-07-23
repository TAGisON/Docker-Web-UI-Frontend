import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContainerList.css';

const ContainerList = () => {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    axios.get('/api/containers')
      .then(response => setContainers(response.data))
      .catch(error => console.error('Error fetching containers:', error));
  }, []);

  return (
    <div className="container-list">
      <h2>Containers</h2>
      <div className="container-types">
        <button>All</button>
        <button>Active</button>
        <button>Stopped</button>
      </div>
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

export default ContainerList;
