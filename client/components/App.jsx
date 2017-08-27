import React, { PropTypes } from 'react';
import Header from './common/Header';

function App({ children }) {
  return (
    <div>
      <Header />
      <main>
      	{children}
      </main>
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
