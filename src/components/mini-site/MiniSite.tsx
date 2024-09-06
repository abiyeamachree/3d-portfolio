// MiniSite.tsx
import React from 'react';

const MiniSite: React.FC = () => {
  return (
    <div style={{ width: '600px', height: '400px', background: 'white', overflow: 'auto', padding: '10px' }}>
      <header>
        <h1>Welcome to My Internal Website</h1>
      </header>
      <main>
        <p>This is a placeholder for the internal website content.</p>
        <button onClick={() => alert('Button Clicked!')}>Click Me</button>
        {/* Add more HTML content here */}
      </main>
      <footer>
        <p>Created by Abiye Amachree</p>
      </footer>
    </div>
  );
};

export default MiniSite;
