import React from 'react';
import BreadCrumbs from './components/breadcrumbs';
import Header from './components/header/header';
import MainProduct from './components/hero/mainProduct';

function App() {
  return (
    <div className="App">
      <Header />
			<BreadCrumbs />
			<MainProduct />
    </div>
  );
}

export default App;
