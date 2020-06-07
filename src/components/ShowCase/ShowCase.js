import React from 'react';
import BoatInfo from '../BoatInfo';
import boatsList from './dummyData';

const ShowCase = () => {
  return (
    <section style={{ margin: '20px auto', width: 'fit-content' }}>
      {boatsList.map(boat => <BoatInfo key={boat.id} data={boat} />)}
    </section>
  );
};

export default ShowCase;