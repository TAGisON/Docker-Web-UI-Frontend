import React from 'react';
import { FaHome, FaDocker, FaChartLine } from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Containers',
    path: '/containers',
    icon: <FaDocker />,
    cName: 'nav-text'
  },
  {
    title: 'All Containers',
    path: '/containers/all',
    icon: <FaDocker />,
    cName: 'nav-text'
  },
  {
    title: 'Active Containers',
    path: '/containers/active',
    icon: <FaDocker />,
    cName: 'nav-text'
  },
  {
    title: 'Stopped Containers',
    path: '/containers/stopped',
    icon: <FaDocker />,
    cName: 'nav-text'
  },
  {
    title: 'Images',
    path: '/images',
    icon: <FaDocker />,
    cName: 'nav-text'
  },
  {
    title: 'Stats',
    path: '/stats',
    icon: <FaChartLine />,
    cName: 'nav-text'
  }
];
