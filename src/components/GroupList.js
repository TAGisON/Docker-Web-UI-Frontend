import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GroupList.css';

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get('/api/groups')
      .then(response => setGroups(response.data))
      .catch(error => console.error('Error fetching groups:', error));
  }, []);

  return (
    <div className="group-list">
      <h2>Groups</h2>
      <ul>
        {groups.map(group => (
          <li key={group.Id}>{group.Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
