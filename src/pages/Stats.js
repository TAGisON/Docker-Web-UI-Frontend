import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Stats.css';

const Stats = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get('http://192.168.100.141:3230/system/df')
      .then(response => setStats(response.data))
      .catch(error => console.error('Error fetching stats:', error));
  }, []);

  return (
    <div className="stats">
      <h2>System Statistics</h2>
      <p>CPU Usage: {stats.cpuUsage}</p>
      <p>Memory Usage: {stats.memoryUsage}</p>
    </div>
  );
};

export default Stats;
