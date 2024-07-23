import React, { useState, useEffect } from 'react';
import DockerService from '../services/DockerService';
import './ContainerList.css'; // Add this line

const ContainerList = () => {
  const [containers, setContainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    DockerService.getContainers()
      .then(response => {
        setContainers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Containers</h1>
      <ul>
        {containers.map(container => (
          <li key={container.Id}>
            {container.Name} - {container.State.Status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContainerList;
