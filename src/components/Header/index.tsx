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
                  <li className="item"><a href="/">Home</a></li>
                  <li className="item"> <a href="/games">Jogos</a></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
  );
}

export default Header;