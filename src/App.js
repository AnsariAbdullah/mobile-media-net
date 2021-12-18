import React from 'react';
import BreadCrumbs from './components/breadcrumbs';
import Header from './components/header/header';
import Hero from './components/hero/hero';

function App() {
  return (
    <div className="App">
      <Header />
			<BreadCrumbs />
			<Hero />
    </div>
  );
}

export default App;
