export interface Ingredient {
  id: string;
  name: string;
  price: number;
  category: 'protein' | 'cheese' | 'vegetable' | 'sauce' | 'extra';
  image: string;
  description: string;
  calories: number;
  available: boolean;
}

export interface BurgerItem {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  image: string;
  defaultIngredients: string[];
  category: 'signature' | 'classic' | 'premium';
  rating: number;
  popular: boolean;
}

export interface CustomBurger {
  id: string;
  name: string;
  ingredients: string[];
  totalPrice: number;
  createdAt: Date;
}

export interface CartItem {
  id: string;
  type: 'preset' | 'custom';
  burger?: BurgerItem;
  customBurger?: CustomBurger;
  ingredients: string[];
  quantity: number;
  totalPrice: number;
  notes?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  createdAt: Date;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
}