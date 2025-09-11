import { Dish } from '@/types/menu';

export const menuData: Dish[] = [
  {
    id: 'lemon-rice',
    name: 'Lemon Rice',
    price: 80,
    quantity: '750 ML',
    maxQuantity: 'AS PER REQUIREMENT(MAX 750 ML)',
    spiceLevel: 3,
    ingredients: 'Lemon, Rice, Spices',
    category: 'Rice Varieties',
    description: 'Tangy and aromatic rice with fresh lemon and traditional spices'
  },
  {
    id: 'veg-biryani',
    name: 'Veg/Paneer/Mushroom Biryani',
    price: 150,
    quantity: '750 ML',
    spiceLevel: 4,
    ingredients: 'with onion and chillies',
    category: 'Rice Varieties',
    description: 'Fragrant basmati rice cooked with vegetables/paneer/mushroom and aromatic spices'
  },
  {
    id: 'curd-rice',
    name: 'Curd Rice',
    price: 80,
    quantity: '750 ML',
    spiceLevel: 2,
    ingredients: 'Soft cooked rice with creamy curd',
    category: 'Rice Varieties',
    description: 'Cooling and comforting rice mixed with fresh yogurt'
  },
  {
    id: 'tomato-rice',
    name: 'Tomato Rice',
    price: 80,
    quantity: '750 ML',
    spiceLevel: 4,
    ingredients: 'Juicy Tomatoes with onion and chilli powder, cooked rice',
    category: 'Rice Varieties',
    description: 'Flavorful rice cooked with fresh tomatoes and spices'
  },
  {
    id: 'vatha-kozhambu',
    name: 'Vatha Kozhambu',
    price: 100,
    quantity: '450 ML',
    spiceLevel: 4,
    ingredients: 'small onion, Tomatoes, garlic with Tamarind Pulp with some spices',
    category: 'Gravies',
    description: 'Traditional tangy curry with tamarind and aromatic spices'
  },
  {
    id: 'bisibelabath',
    name: 'Bisibelabath',
    price: 80,
    quantity: '750 ML',
    spiceLevel: 3,
    ingredients: 'Rice, Dal, veggies, ghee',
    category: 'Rice Varieties',
    description: 'Karnataka special one-pot meal with rice, lentils and vegetables'
  },
  {
    id: 'kootu',
    name: 'Kootu (Veggies)',
    price: 70,
    quantity: '450ML',
    spiceLevel: 2,
    ingredients: 'Soft cooked moong dal with any veggies',
    category: 'Side Dishes',
    description: 'Nutritious dal and vegetable preparation'
  },
  {
    id: 'poriyal',
    name: 'Poriyal (Veggies)',
    price: 88,
    quantity: '450ML',
    spiceLevel: 3,
    ingredients: 'Carrot, beans, Cabbage, Chow chow, Beetroot if any veggies - Cooked with some spices',
    category: 'Side Dishes',
    description: 'Fresh vegetables stir-fried with traditional spices'
  },
  {
    id: 'varuval',
    name: 'Varuval (Veggies)',
    price: 80,
    quantity: '450ML',
    spiceLevel: 4,
    ingredients: 'Potato, Vazhaikai, Senai kizhghu - if any requires Cooked with deep fry with chilli, pepper powder',
    category: 'Side Dishes',
    description: 'Crispy fried vegetables with spicy seasonings'
  },
  {
    id: 'white-rice',
    name: 'White Rice',
    price: 60,
    quantity: '750 ML',
    spiceLevel: 1,
    ingredients: 'Steamed rice',
    category: 'Rice Varieties',
    description: 'Perfectly steamed white rice'
  },
  {
    id: 'sambhar',
    name: 'Sambhar',
    price: 65,
    quantity: '450 ML',
    spiceLevel: 3,
    ingredients: 'Toor dal with mix veg, sambar powder',
    category: 'Gravies',
    description: 'Traditional South Indian lentil curry with vegetables'
  },
  {
    id: 'rasam',
    name: 'Rasam',
    price: 55,
    quantity: '450 ML',
    spiceLevel: 4,
    ingredients: 'Tomatoes, tamarind pulp, crushed garlic, pepper, jeera powder',
    category: 'Gravies',
    description: 'Tangy and spicy tomato-based soup with traditional spices'
  },
  {
    id: 'mor-kozlambu',
    name: 'Mor Kozlambu',
    price: 90,
    quantity: '450 ML',
    spiceLevel: 4,
    ingredients: 'Ginger, grated Coconut, green chillies, spices',
    category: 'Gravies',
    description: 'Traditional buttermilk curry with coconut and spices'
  },
  {
    id: 'idly-sambhar',
    name: 'Idly + Sambhar',
    price: 80,
    quantity: '6 nos',
    spiceLevel: 5,
    ingredients: 'Steamed soft rice balls with spicy chilli chutney',
    category: 'Breakfast',
    description: 'Fluffy steamed rice cakes served with sambhar and chutney'
  },
  {
    id: 'dosa-chutney',
    name: 'Dosa + Chutney',
    price: 80,
    quantity: '4 nos',
    spiceLevel: 4,
    ingredients: 'Rice, urid dal, fenugreek with coconut, chilli chutney',
    category: 'Breakfast',
    description: 'Crispy fermented crepe served with coconut chutney'
  },
  {
    id: 'chapathi-kurma',
    name: 'Chapathi + Veg Kurma',
    price: 75,
    quantity: '4 nos',
    spiceLevel: 4,
    ingredients: 'Wheat flavour with salt, fresh veggies with spices',
    category: 'Breakfast',
    description: 'Soft wheat flatbread served with spiced vegetable curry'
  },
  {
    id: 'poori-potato',
    name: 'Poori + Potato',
    price: 60,
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
    price: 90,
    quantity: '450 ML',
    spiceLevel: 3,
    ingredients: 'fresh veggies, coconut oil, pepper, jeera, green chillies',
    category: 'Side Dishes',
    description: 'Traditional mixed vegetable curry with coconut'
  },
  {
    id: 'sambarava-upma',
    name: 'Sambarava Upma',
    price: 120,
    quantity: '750 ML',
    spiceLevel: 3,
    ingredients: 'broken wheat rava, onion, chilli, ginger, oil',
    category: 'Breakfast',
    description: 'Savory semolina preparation with vegetables and spices'
  },
  {
    id: 'pongal-chutney',
    name: 'Pongal + Chutney, Sambar',
    price: 80,
    quantity: '450ml',
    spiceLevel: 3,
    ingredients: 'moong dal, raw rice with pepper and jeera ghee, ginger',
    category: 'Breakfast',
    description: 'Traditional rice and lentil dish with ghee and spices'
  },
  {
    id: 'pirandai-thokku',
    name: 'Pirandai Thokku',
    price: 35,
    quantity: '100ml',
    spiceLevel: 4,
    ingredients: 'Pirandai (Adamant creeper), spices, oil',
    category: 'Others',
    description: 'Traditional medicinal chutney made from pirandai'
  },
  {
    id: 'garlic-pickle',
    name: 'Garlic Pickle',
    price: 40,
    quantity: '100gm',
    spiceLevel: 4,
    ingredients: 'Garlic, oil, spices, salt',
    category: 'Others',
    description: 'Spicy and flavorful garlic pickle'
  },
  {
    id: 'murugaikeerai-salt',
    name: 'Murugaikeerai Salt',
    price: 30,
    quantity: '100gm',
    spiceLevel: 2,
    ingredients: 'Drumstick leaves, salt, spices',
    category: 'Others',
    description: 'Nutritious drumstick leaves powder with salt'
  },
  {
    id: 'mudaathan-rice-batter',
    name: 'Mudaathan Rice Batter',
    price: 65,
    quantity: '450ml',
    spiceLevel: 1,
    ingredients: 'Mudaathan rice, water',
    category: 'Others',
    description: 'Traditional fermented rice batter'
  },
  {
    id: 'vallari-keerai-paruppu-podi',
    name: 'Vallari Keerai Paruppu Podi',
    price: 40,
    quantity: '100gm',
    spiceLevel: 3,
    ingredients: 'Vallari keerai, dal, spices',
    category: 'Others',
    description: 'Healthy greens and lentil powder mix'
  },
  {
    id: 'poondu-paruppu-podi',
    name: 'Poondu Paruppu Podi',
    price: 55,
    quantity: '100gm',
    spiceLevel: 4,
    ingredients: 'Garlic, dal, red chili, spices',
    category: 'Others',
    description: 'Aromatic garlic and lentil powder blend'
  },
  {
    id: 'mudavatukal-soup-mix',
    name: 'Mudavatukal Soup Mix',
    price: 150,
    quantity: '50g',
    spiceLevel: 2,
    ingredients: 'Mixed herbs, spices, natural ingredients',
    category: 'Others',
    description: 'Traditional herbal soup mix for health and wellness'
  },
  {
    id: 'abc-health-mix',
    name: 'ABC Health Mix',
    price: 200,
    quantity: '100gm',
    spiceLevel: 1,
    ingredients: 'Multi-grain blend, nuts, natural ingredients',
    category: 'Others',
    description: 'Nutritious health mix packed with essential nutrients'
  }
];

export const categories = [
  'All',
  'Rice Varieties',
  'Gravies', 
  'Side Dishes',
  'Breakfast',
  'Complete Meals',
  'Others'
];