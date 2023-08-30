import React from 'react';

const Gallery = ({ data }) => {
  return (
    <div>
      <div>
        {data.map((image) => (
          <div key={image.id}>
            <div>
              <img
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                height="200"
                width="350"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
