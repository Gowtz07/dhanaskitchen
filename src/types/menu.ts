export interface Dish {
  id: string;
  name: string;
  price: number;
  quantity: string;
  maxQuantity?: string;
  spiceLevel: number;
  ingredients: string;
  category: string;
  image?: string;
  description?: string;
}

export interface CartItem {
  dish: Dish;
  selectedQuantity: number;
  selectedSpiceLevel: number;
  customQuantity?: string;
}

export interface OrderDetails {
  items: CartItem[];
  customerName: string;
  customerPhone: string;
  orderType: 'takeaway' | 'delivery';
  specialInstructions?: string;
  total: number;
}