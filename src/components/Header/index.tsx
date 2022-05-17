import React from 'react';

import  './style.scss';

const Header: React.FC = () => {
  return (
      <div className="header row">
          <div className="col-lg-12">
            <div className="container header-elements">
              <div className="header-img">GMSTORE</div>
              <div className="header-categories">
                <ul className="list list-index">
                  <li className="item">Game</li>
                  <li className="item">Games</li>
                  <li className="item">Games</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
  );
}

export default Header;