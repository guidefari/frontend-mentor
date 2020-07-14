import React from 'react';
import Article from './components/article'
import GlobalFonts from './fonts/fonts';

function App() {
  return (
    <div id="card-container" className="flex justify-center items-center h-screen w-full bg-grayish-blue text-content p-8">
      <Article />
      <GlobalFonts/>
    </div>
  );
}

export default App;
