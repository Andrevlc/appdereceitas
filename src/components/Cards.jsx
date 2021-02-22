import React from 'react';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import { getFoodByName } from '../Services/foodAPI';
import { getDrinksByName } from '../Services/drinkAPI';
import CardFoods from '../components/CardFoods';
import CardDrinks from '../components/CardDrinks';
import CategoriesD from '../components/CategoriesD';
import CategoriesF from '../components/CategoriesF';

let checkType = '';
function Cards() {
  const {
    location: { pathname },
  } = useHistory();
  const { setFood, setDrink, ingDC, ingFC } = useContext(Context);
  useEffect(() => {
    if (pathname === '/bebidas' && !ingDC) {
      checkType = 'bebidas';
      getDrinksByName('').then((data) => setDrink(data.drinks));
    } else if (pathname === '/comidas' && !ingFC) {
      checkType = 'comidas';
      getFoodByName('').then((data) => setFood(data.meals));
    } else if (ingDC && pathname === '/bebidas') {
      checkType = 'bebidas';
    } else {
      checkType = 'comidas';
    }
  }, [pathname]);
  if (checkType === 'bebidas' || ingDC) {
    return (
      <div className = 'margin-adj'>
        <CategoriesD />
        <CardDrinks />
      </div>
    );
  } else if (checkType === 'comidas' || ingFC) {
    return (
      <div className = 'margin-adj'>
        <CategoriesF />
        <CardFoods />
      </div>
    );
  }

  return <p></p>;
}

export default Cards;
