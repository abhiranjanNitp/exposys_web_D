import { BurgerItem } from '../types';

export const signatureBurgers: BurgerItem[] = [
  {
    id: 'classic-brrr',
    name: 'The Classic Brrr',
    description: 'Our signature burger with chicken patty, cheddar, lettuce, tomato, and special sauce',
    basePrice: 8.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500',
    defaultIngredients: ['Mutton-patty', 'cheddar', 'lettuce', 'tomato', 'onion', 'mayo', 'ketchup'],
    category: 'signature',
    rating: 4.8,
    popular: true
  },
  {
    id: 'bacon-deluxe',
    name: 'Bacon Deluxe',
    description: 'Double chicken patty with crispy bacon, swiss cheese, and BBQ sauce',
    basePrice: 12.99,
    image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=500',
    defaultIngredients: ['Chicken-patty', 'bacon', 'swiss', 'lettuce', 'tomato', 'bbq', 'mayo'],
    category: 'premium',
    rating: 4.9,
    popular: true
  },
  {
    id: 'chicken-supreme',
    name: 'Chicken Supreme',
    description: 'Grilled chicken with avocado, swiss cheese, and garlic mayo',
    basePrice: 10.99,
    image: 'https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg?auto=compress&cs=tinysrgb&w=500',
    defaultIngredients: ['chicken-patty', 'avocado', 'swiss', 'lettuce', 'tomato', 'mayo'],
    category: 'signature',
    rating: 4.7,
    popular: false
  },
  {
    id: 'plant-power',
    name: 'Plant Power',
    description: 'Plant-based patty with avocado, mushrooms, and special vegan sauce',
    basePrice: 11.99,
    image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=500',
    defaultIngredients: ['plant-patty', 'avocado', 'mushrooms', 'lettuce', 'tomato', 'onion'],
    category: 'premium',
    rating: 4.6,
    popular: false
  },
  {
    id: 'spicy-heat',
    name: 'Spicy Heat',
    description: 'Mutton patty with jalapeños, pepper jack, and spicy sauce',
    basePrice: 9.99,
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=500',
    defaultIngredients: ['Mutton-patty', 'cheddar', 'lettuce', 'tomato', 'onion', 'hot-sauce', 'mayo'],
    category: 'signature',
    rating: 4.5,
    popular: false
  },
  {
    id: 'blue-cheese-special',
    name: 'Blue Cheese Special',
    description: 'Premium mutton with blue cheese, bacon, and caramelized onions',
    basePrice: 13.99,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
    defaultIngredients: ['mutton-patty', 'blue-cheese', 'bacon', 'lettuce', 'onion', 'mayo'],
    category: 'premium',
    rating: 4.8,
    popular: true
  }
];
