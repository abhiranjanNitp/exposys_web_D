import { Ingredient } from '../types';

export const ingredients: Ingredient[] = [
  // Proteins
  {
    id: 'Mutton-patty',
    name: 'Mutton Patty',
    price: Rs-299,
    category: 'protein',
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium grass-fed Mutton patty',
    calories: 280,
    available: true
  },
  {
    id: 'chicken-patty',
    name: 'Grilled Chicken',
    price: 4.00,
    category: 'protein',
    image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Tender grilled chicken breast',
    calories: 220,
    available: true
  },
  {
    id: 'plant-patty',
    name: 'Plant-Based Patty',
    price: 5.00,
    category: 'protein',
    image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Delicious plant-based protein',
    calories: 240,
    available: true
  },
  
  // Cheese
  {
    id: 'cheddar',
    name: 'Aged Cheddar',
    price: 1.50,
    category: 'cheese',
    image: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Sharp aged cheddar cheese',
    calories: 110,
    available: true
  },
  {
    id: 'swiss',
    name: 'Swiss Cheese',
    price: 1.75,
    category: 'cheese',
    image: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Creamy Swiss cheese',
    calories: 100,
    available: true
  },
  {
    id: 'blue-cheese',
    name: 'Blue Cheese',
    price: 2.00,
    category: 'cheese',
    image: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Premium blue cheese crumbles',
    calories: 120,
    available: true
  },
  
  // Vegetables
  {
    id: 'lettuce',
    name: 'Fresh Lettuce',
    price: 0.50,
    category: 'vegetable',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Crisp iceberg lettuce',
    calories: 5,
    available: true
  },
  {
    id: 'tomato',
    name: 'Ripe Tomatoes',
    price: 0.75,
    category: 'vegetable',
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Fresh vine-ripened tomatoes',
    calories: 15,
    available: true
  },
  {
    id: 'onion',
    name: 'Red Onions',
    price: 0.50,
    category: 'vegetable',
    image: 'https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Thinly sliced red onions',
    calories: 10,
    available: true
  },
  {
    id: 'pickles',
    name: 'Dill Pickles',
    price: 0.50,
    category: 'vegetable',
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Tangy dill pickle slices',
    calories: 5,
    available: true
  },
  {
    id: 'mushrooms',
    name: 'Sautéed Mushrooms',
    price: 1.25,
    category: 'vegetable',
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Golden sautéed mushrooms',
    calories: 20,
    available: true
  },
  
  // Sauces
  {
    id: 'ketchup',
    name: 'House Ketchup',
    price: 0.25,
    category: 'sauce',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Our signature house ketchup',
    calories: 20,
    available: true
  },
  {
    id: 'mayo',
    name: 'Garlic Mayo',
    price: 0.50,
    category: 'sauce',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Creamy garlic mayonnaise',
    calories: 90,
    available: true
  },
  {
    id: 'bbq',
    name: 'BBQ Sauce',
    price: 0.50,
    category: 'sauce',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Smoky BBQ sauce',
    calories: 25,
    available: true
  },
  {
    id: 'hot-sauce',
    name: 'Spicy Hot Sauce',
    price: 0.50,
    category: 'sauce',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Fiery hot sauce blend',
    calories: 5,
    available: true
  },
  
  // Extras
  {
    id: 'bacon',
    name: 'Crispy Bacon',
    price: 299,
    category: 'extra',
    image: 'https://images.pexels.com/photos/1588473/pexels-photo-1588473.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Perfectly crispy bacon strips',
    calories: 150,
    available: true
  },
  {
    id: 'avocado',
    name: 'Fresh Avocado',
    price: 2.00,
    category: 'extra',
    image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Creamy avocado slices',
    calories: 160,
    available: true
  },
  {
    id: 'fried-egg',
    name: 'Fried Egg',
    price: 1.50,
    category: 'extra',
    image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Farm-fresh fried egg',
    calories: 90,
    available: true
  }
];
