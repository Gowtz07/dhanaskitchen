import { Dish } from '@/types/menu';

export const menuData: Dish[] = [
  {
    id: 'lemon-rice',
    name: 'Lemon Rice',
    price: 160,
    quantity: '750 ML',
    maxQuantity: 'AS PER REQUIREMENT(MAX 750 ML)',
    spiceLevel: 3,
    ingredients: 'Lemon, Rice, Spices',
    category: 'Rice Varieties',
    description: 'Tangy and aromatic rice with fresh lemon and traditional spices'
  },
  {
    id: 'veg-biryani',
    name: 'Veg Biryani',
    price: 180,
    quantity: '750 ML',
    spiceLevel: 4,
    ingredients: 'with onion and chillies',
    category: 'Rice Varieties',
    description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices'
  },
  {
    id: 'curd-rice',
    name: 'Curd Rice',
    price: 250,
    quantity: '750 ML',
    spiceLevel: 2,
    ingredients: 'Soft cooked rice with creamy curd',
    category: 'Rice Varieties',
    description: 'Cooling and comforting rice mixed with fresh yogurt'
  },
  {
    id: 'tomato-rice',
    name: 'Tomato Rice',
    price: 150,
    quantity: '750 ML',
    spiceLevel: 4,
    ingredients: 'Juicy Tomatoes with onion and chilli powder, cooked rice',
    category: 'Rice Varieties',
    description: 'Flavorful rice cooked with fresh tomatoes and spices'
  },
  {
    id: 'vatha-kozhambu',
    name: 'Vatha Kozhambu',
    price: 210,
    quantity: '450 ML',
    spiceLevel: 4,
    ingredients: 'small onion, Tomatoes, garlic with Tamarind Pulp with some spices',
    category: 'Gravies',
    description: 'Traditional tangy curry with tamarind and aromatic spices'
  },
  {
    id: 'bisibelabath',
    name: 'Bisibelabath',
    price: 150,
    quantity: '750 ML',
    spiceLevel: 3,
    ingredients: 'Rice, Dal, veggies, ghee',
    category: 'Rice Varieties',
    description: 'Karnataka special one-pot meal with rice, lentils and vegetables'
  },
  {
    id: 'kootu',
    name: 'Kootu (Veggies)',
    price: 160,
    quantity: '450ML',
    spiceLevel: 2,
    ingredients: 'Soft cooked moong dal with any veggies',
    category: 'Side Dishes',
    description: 'Nutritious dal and vegetable preparation'
  },
  {
    id: 'poriyal',
    name: 'Poriyal (Veggies)',
    price: 170,
    quantity: '450ML',
    spiceLevel: 3,
    ingredients: 'Carrot, beans, Cabbage, Chow chow, Beetroot if any veggies - Cooked with some spices',
    category: 'Side Dishes',
    description: 'Fresh vegetables stir-fried with traditional spices'
  },
  {
    id: 'varuval',
    name: 'Varuval (Veggies)',
    price: 180,
    quantity: '450ML',
    spiceLevel: 4,
    ingredients: 'Potato, Vazhaikai, Senai kizhghu - if any requires Cooked with deep fry with chilli, pepper powder',
    category: 'Side Dishes',
    description: 'Crispy fried vegetables with spicy seasonings'
  },
  {
    id: 'white-rice',
    name: 'White Rice',
    price: 85,
    quantity: '750 ML',
    spiceLevel: 1,
    ingredients: 'Steamed rice',
    category: 'Rice Varieties',
    description: 'Perfectly steamed white rice'
  },
  {
    id: 'sambhar',
    name: 'Sambhar',
    price: 150,
    quantity: '450 ML',
    spiceLevel: 3,
    ingredients: 'Toor dal with mix veg, sambar powder',
    category: 'Gravies',
    description: 'Traditional South Indian lentil curry with vegetables'
  },
  {
    id: 'rasam',
    name: 'Rasam',
    price: 110,
    quantity: '450 ML',
    spiceLevel: 4,
    ingredients: 'Tomatoes, tamarind pulp, crushed garlic, pepper, jeera powder',
    category: 'Gravies',
    description: 'Tangy and spicy tomato-based soup with traditional spices'
  },
  {
    id: 'mor-kozlambu',
    name: 'Mor Kozlambu',
    price: 190,
    quantity: '450 ML',
    spiceLevel: 4,
    ingredients: 'Ginger, grated Coconut, green chillies, spices',
    category: 'Gravies',
    description: 'Traditional buttermilk curry with coconut and spices'
  },
  {
    id: 'idly-sambhar',
    name: 'Idly + Sambhar',
    price: 120,
    quantity: '6 nos',
    spiceLevel: 5,
    ingredients: 'Steamed soft rice balls with spicy chilli chutney',
    category: 'Breakfast',
    description: 'Fluffy steamed rice cakes served with sambhar and chutney'
  },
  {
    id: 'dosa-chutney',
    name: 'Dosa + Chutney',
    price: 150,
    quantity: '4 nos',
    spiceLevel: 4,
    ingredients: 'Rice, urid dal, fenugreek with coconut, chilli chutney',
    category: 'Breakfast',
    description: 'Crispy fermented crepe served with coconut chutney'
  },
  {
    id: 'chapathi-kurma',
    name: 'Chapathi + Veg Kurma',
    price: 140,
    quantity: '4 nos',
    spiceLevel: 4,
    ingredients: 'Wheat flavour with salt, fresh veggies with spices',
    category: 'Breakfast',
    description: 'Soft wheat flatbread served with spiced vegetable curry'
  },
  {
    id: 'poori-potato',
    name: 'Poori + Potato',
    price: 120,
    quantity: '4 nos',
    spiceLevel: 4,
    ingredients: 'wheat flavour, potato, onion, green chillies',
    category: 'Breakfast',
    description: 'Deep-fried bread served with spiced potato curry'
  },
  {
    id: 'full-meals',
    name: 'Full Meals',
    price: 350,
    quantity: '2 persons to eat',
    spiceLevel: 5,
    ingredients: 'steamed rice, dal veggies, Potato, cabbage, tomatoes, Tamarind pulp, semiya ghee, urid dal',
    category: 'Complete Meals',
    description: 'Traditional South Indian thali with rice, sambhar, kootu, poriyal, varuval, vatha kozhambu, rasam, mor, vada, payasam'
  },
  {
    id: 'avial',
    name: 'Avial',
    price: 175,
    quantity: '450 ML',
    spiceLevel: 3,
    ingredients: 'fresh veggies, coconut oil, pepper, jeera, green chillies',
    category: 'Side Dishes',
    description: 'Traditional mixed vegetable curry with coconut'
  },
  {
    id: 'sambarava-upma',
    name: 'Sambarava Upma',
    price: 180,
    quantity: '750 ML',
    spiceLevel: 3,
    ingredients: 'broken wheat rava, onion, chilli, ginger, oil',
    category: 'Breakfast',
    description: 'Savory semolina preparation with vegetables and spices'
  },
  {
    id: 'pongal-chutney',
    name: 'Pongal + Chutney, Sambar',
    price: 200,
    quantity: '750ml',
    spiceLevel: 3,
    ingredients: 'moong dal, raw rice with pepper and jeera ghee, ginger',
    category: 'Breakfast',
    description: 'Traditional rice and lentil dish with ghee and spices'
  }
];

export const categories = [
  'All',
  'Rice Varieties',
  'Gravies', 
  'Side Dishes',
  'Breakfast',
  'Complete Meals'
];