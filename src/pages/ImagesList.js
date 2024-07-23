import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ImageList.css';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('/api/images')
      .then(response => setImages(response.data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="image-list">
      <h2>Images</h2>
      <ul>
        {images.map(image => (
          <li key={image.Id}>
            {image.RepoTags[0]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageList;
