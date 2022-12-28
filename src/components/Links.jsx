import React from 'react';

const Links = ({ url, text, type, icon }) => {
  return (
    <li>
      <a href={url}>{type ? icon : text}</a>
    </li>
  );
};

export default Links;
