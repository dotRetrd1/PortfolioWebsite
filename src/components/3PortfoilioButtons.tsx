import React from 'react';

const PortfolioButtons: React.FC = () => {
  return (
    <div className="portfolio-buttons">
      <button onClick={() => window.open('https://your-art-portfolio-link.com', '_blank')}>Art Portfolio</button>
      <button onClick={() => window.open('https://your-gamedev-portfolio-link.com', '_blank')}>GameDev Portfolio</button>
      <button onClick={() => window.open('https://your-engineering-portfolio-link.com', '_blank')}>Engineering Portfolio</button>
    </div>
  );
};

export default PortfolioButtons;
