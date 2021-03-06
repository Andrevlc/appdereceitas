import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer data-testid="footer">
        <Link to="/bebidas">
          <img className='footer-img' data-testid="drinks-bottom-btn" type="image" src={drinkIcon} alt="drink" />
        </Link>
        <Link to="/explorar">
          <img data-testid="explore-bottom-btn" type="image" src={exploreIcon} alt="explore" />
        </Link>
        <Link to="/comidas">
          <img data-testid="food-bottom-btn" type="image" src={mealIcon} alt="food" />
        </Link>
      </footer>
    );
  }
}

export default Footer;
