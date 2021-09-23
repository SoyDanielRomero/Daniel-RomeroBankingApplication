import React from 'react';
import Card from '../components/card';

function Home() {
  return (
    <Card
      txtcolor='black'
      header='Welcome to Fanky'
      title='A fake bank app'
      text='Send me an email if you liked this app'
      body={<p> Please create an account in order to test the app</p>}
    />
  );
}

export default Home;
