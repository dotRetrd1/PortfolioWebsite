import React from 'react';

const GameDevPortfolio: React.FC = () => {
  return (
    <div className="portfolio-page">
      <h1>GameDev Portfolio</h1>
      <p>Here are some of the games and projects I've worked on in the field of game development.</p>
      <div className="portfolio-gallery">
        <img src="path_to_game_screenshot_1.jpg" alt="Game Screenshot 1" />
        <img src="path_to_game_screenshot_2.jpg" alt="Game Screenshot 2" />
        {/* Add more screenshots or videos of your games here */}
      </div>
    </div>
  );
};

export default GameDevPortfolio;
