export interface FeaturedProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  set: string;
  isHot?: boolean;
  isNew?: boolean;
  category?: string;
}

export const featuredProducts: FeaturedProduct[] = [
  {
    id: '1',
    name: 'Pokemon TCG: Sword & Shield - Darkness Ablaze Booster Box - 36 Packs',
    price: 249.99,
    originalPrice: 269.99,
    image:
      'https://myshopville.com/cdn/shop/products/pokemontradingcardgameswordandshielddarknessablaze36packboosterboxcardgameboxcover.jpg',
    set: 'Scarlet & Violet',
    category: 'Booster Boxes',
    isHot: false,
  },
  {
    id: '2',
    name: 'Pokemon TCG: Sword & Shield - Time Gazer Booster Box - Japanese - 30 Packs',
    price: 69.99,
    originalPrice: 89.99,
    image:
      'https://myshopville.com/cdn/shop/products/pokemontcgswordandshieldtimegazerboosterboxjapanese30packstradingcardgameboxcover.jpg',
    set: 'Vmax Climax',
    category: 'Japanese Sets',
    isHot: false,
  },
  {
    id: '3',
    name: 'Pokemon TCG: Scarlet & Violet - Destined Rivals Booster Box - 36 Packs',
    price: 199.99,
    originalPrice: 219.99,
    image:
      'https://myshopville.com/cdn/shop/files/pokemon-tcg-scarlet-and-violet-Destined-Rivals-Booster-Box-box-cover_1_1dd9bc6c-975a-4f1b-921d-be86a9983826.jpg',
    set: 'Darkness Ablaze',
    category: 'Special Collections',
  },
  {
    id: '4',
    name: 'Pokemon TCG: Scarlet & Violet - Expansion Pack Black Bolt Booster Box [JPN] - 20 Packs',
    price: 99.99,
    originalPrice: 119.99,
    image:
      'https://myshopville.com/cdn/shop/products/pokemontcgswordandshieldfusionstrikeboosterdisplaybox36packstradingcardgameboxcover.jpg',
    set: 'Rebel Clash',
    category: 'Booster Boxes',
  },
  {
    id: '5',
    name: 'Pokemon TCG: Scarlet & Violet Booster Box - 36 Packs',
    price: 249.99,
    originalPrice: 269.99,
    image:
      'https://myshopville.com/cdn/shop/files/pokemontcgscarletandvioletboosterdisaplybox36packstradingcardgameboxcover_4158ea5a-7e3d-4952-a07e-edfe155e7ebd.jpg',
    set: 'High Class Pack',
    category: 'Japanese Sets',
    isNew: false,
  },
  {
    id: '6',
    name: 'Pokemon TCG Sun & Moon Booster Box - 36 Packs',
    price: 479.99,
    originalPrice: 499.99,
    image:
      'https://myshopville.com/cdn/shop/products/pokemon_tcg_sun_moon_booster_box_card_game_shopville.png',
    set: 'High Class Pack',
    category: 'Japanese Sets',
    isNew: false,
  },
  {
    id: '7',
    name: 'Pokemon TCG: Sword & Shield - Lost Origin Booster Box - 36 Packs',
    price: 479.99,
    originalPrice: 499.99,
    image:
      'https://myshopville.com/cdn/shop/files/pokemontcgswordandshieldlostoriginboosterdisplaybox36packstradingcardgameboxcover_cbb7cb5d-7e3a-4363-959b-f7c48df04cba.jpg',
    set: 'High Class Pack',
    category: 'Japanese Sets',
    isHot: false,
  },
  {
    id: '8',
    name: 'Pokemon TCG: Crown Zenith Elite Trainer Box',
    price: 139.99,
    originalPrice: 159.99,
    image:
      'https://myshopville.com/cdn/shop/files/pokemontcgcrownzenithelitetrainerboxtradingcardgameboxcover_7ede7b31-bbbb-4ee2-898b-695a340c20e3.jpg',
    set: 'High Class Pack',
    category: 'Japanese Sets',
    isNew: false,
  },
]; 