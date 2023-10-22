import React from 'react';
import Welcome from './components/Welcome';
import Login from './components/Login';

export default function App() {
  return (
    <div style={styles.container}>
      <Login />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#F4F6F1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
};
