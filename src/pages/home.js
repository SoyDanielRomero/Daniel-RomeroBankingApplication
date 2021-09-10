import React from 'react';
import Card from '../components/card';

function Home() {
  return (
    <Card
      txtcolor='black'
      header='BadBank Landing Page'
      title='Welcome to BadBank App'
      text='You can use this app'
      body={<p> Hola!</p>}
    />
  );
}

export default Home;
