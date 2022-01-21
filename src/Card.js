import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`}></img>
      <div>
        <h2 className="f5">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
