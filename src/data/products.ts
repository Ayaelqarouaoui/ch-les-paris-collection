import chaleFourrure from '@/assets/chale-fourrure.jpg';
import chalePaisley from '@/assets/chale-paisley.jpg';
import chaleLeopard from '@/assets/chale-leopard.jpg';
import chaleSilkGold from '@/assets/chale-silk-gold.jpg';
import chaleCashmereNavy from '@/assets/chale-cashmere-navy.jpg';
import chaleFloral from '@/assets/chale-floral.jpg';
import chaleBordeaux from '@/assets/chale-bordeaux.jpg';
import chaleEmerald from '@/assets/chale-emerald.jpg';
import chaleNoirOr from '@/assets/chale-noir-or.jpg';

// Imports dyal s-tsawr l-jdad
import Fourrure1 from '@/assets/Fourrure1.jpg';
import Fourrure2 from '@/assets/Fourrure2.jpg';
import Fourrure3 from '@/assets/Fourrure3.jpg';
import Fourrure4 from '@/assets/Fourrure4.jpg';
import Fourrure5 from '@/assets/Fourrure5.jpg';
import Fourrure6 from '@/assets/Fourrure6.jpg';
import Fourrure7 from '@/assets/Fourrure7.jpg';
import Leopard1 from '@/assets/Leopard1.jpg';
import Leopard2 from '@/assets/Leopard2.jpg';
import Leopard3 from '@/assets/Leopard3.jpg';
import Leopard4 from '@/assets/Leopard4.jpg';
import Leopard5 from '@/assets/Leopard5.jpg';
import Leopard6 from '@/assets/Leopard6.jpg';
import Leopard7 from '@/assets/Leopard7.jpg';
import Leopard8 from '@/assets/Leopard8.jpg';
import Paisley1 from '@/assets/Paisley1.jpg';
import Paisley2 from '@/assets/Paisley2.jpg';
import Soie1 from '@/assets/Soie1.jpg';
import Soie2 from '@/assets/Soie2.jpg';
import Soie3 from '@/assets/Soie3.jpg';
import Soie4 from '@/assets/Soie4.jpg';
import Soie5 from '@/assets/Soie5.jpg';
import Soie6 from '@/assets/Soie6.jpg';
import Soie7 from '@/assets/Soie7.jpg';
import Soie8 from '@/assets/Soie8.jpg';

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  image: string;
  category: string;
  material?: string;
  dimensions?: string;
  featured?: boolean;
}

export const products: Product[] = [
  // --- Châles en Fourrure (L-qdam + J-dad) ---
  { id: 'chale-bordure-fourrure', name: 'Châle à Bordure Fourrure', description: 'Chaleur luxueuse et glamour.', price: 50, image: Fourrure1, category: 'Châles en Fourrure', featured: true },
  { id: 'chale-fourrure-sable', name: 'Châle Fourrure Sable', description: 'L\'ultime raffinement hivernal.', price: 89, image: Fourrure2, category: 'Châles en Fourrure' },
  { id: 'chale-fourrure-renard', name: 'Châle Col Renard', description: 'Élégance et chaleur absolue.', price: 65, image: Fourrure3, category: 'Châles en Fourrure', featured: true },
  { id: 'chale-fourrure-vison', name: 'Châle Garni Vison', description: 'Le summum du luxe parisien.', price: 100, image: Fourrure4, category: 'Châles en Fourrure' },
  { id: 'chale-fourrure-chinchilla', name: 'Châle Chinchilla', description: 'Douceur incomparable.', price: 50, image: Fourrure5, category: 'Châles en Fourrure' },
  { id: 'chale-fourrure-noir', name: 'Châle Fourrure Noir Absolu', description: 'Mystère et sophistication.', price: 45, image: Fourrure6, category: 'Châles en Fourrure' },
  { id: 'chale-fourrure-cape', name: 'Cape Fourrure Parisienne', description: 'Allure majestueuse.', price: 75, image: Fourrure7, category: 'Châles en Fourrure' },

  // --- Châles Paisley (L-qdam + J-dad) ---
  { id: 'chale-imperial-paisley', name: 'Châle Impérial Paisley', description: 'Douceur extrême et motifs ancestraux.', price: 100, image: Paisley1, category: 'Châles Paisley', featured: true },
  { id: 'chale-paisley-royal', name: 'Châle Paisley Royal', description: 'Héritage noble et raffiné.', price: 62, image: Paisley2, category: 'Châles Paisley', featured: true },

  // --- Soie (L-qdam + J-dad) ---
  { id: 'chale-soie-or', name: 'Châle Soie Champagne', description: 'L\'éclat de la soie pure.', price: 75, image: Soie1, category: 'Soie', featured: true },
  { id: 'chale-soie-marine', name: 'Châle Soie Bleu Nuit', description: 'La profondeur du bleu.', price: 78, image: Soie2, category: 'Soie', featured: true },
  { id: 'chale-soie-floral', name: 'Châle Soie Florale', description: 'Un jardin de soie.', price: 89, image: Soie3, category: 'Soie', featured: true },
  { id: 'chale-soie-emeraude', name: 'Châle Soie Émeraude', description: 'Vert profond et lumineux.', price: 82, image: Soie4, category: 'Soie' },
  { id: 'chale-soie-bordeaux', name: 'Châle Soie Bordeaux', description: 'Rouge passion.', price: 79, image: Soie5, category: 'Soie' },
  { id: 'chale-soie-noir', name: 'Châle Soie Noir Brodé', description: 'Broderies dorées sur soie noire.', price: 55, image: Soie6, category: 'Soie' },
  { id: 'chale-soie-rose', name: 'Châle Soie Rose Poudré', description: 'Douceur romantique.', price: 72, image: Soie7, category: 'Soie' },
  { id: 'chale-soie-geometrique', name: 'Châle Soie Géométrique', description: 'Modernité et tradition.', price: 85, image: Soie8, category: 'Soie' },

  // --- Imprimé Léopard (L-qdam + J-dad) ---
  { id: 'chale-signature-leopard', name: 'Châle Signature Léopard', description: "L'audace de la soie et du motif animalier.", price: 95, image: Leopard1, category: 'Imprimé Léopard', featured: true },
  { id: 'chale-leopard-classique', name: 'Châle Léopard Classique', description: 'Le classique revisité.', price: 88, image: Leopard2, category: 'Imprimé Léopard', featured: true },
  { id: 'chale-leopard-noir', name: 'Châle Léopard Noir', description: 'L\'audace sombre.', price: 92, image: Leopard3, category: 'Imprimé Léopard' },
  { id: 'chale-leopard-dore', name: 'Châle Léopard Doré', description: 'L\'éclat sauvage.', price: 65, image: Leopard4, category: 'Imprimé Léopard' },
  { id: 'chale-leopard-bordeaux', name: 'Châle Léopard Bordeaux', description: 'L\'animalier en rouge.', price: 89, image: Leopard5, category: 'Imprimé Léopard' },
  { id: 'chale-leopard-pastel', name: 'Châle Léopard Pastel', description: 'Douceur sauvage.', price: 85, image: Leopard6, category: 'Imprimé Léopard' },
  { id: 'chale-leopard-fourrure', name: 'Châle Léopard Bordé Fourrure', description: 'Luxe sauvage ultime.', price: 50, image: Leopard7, category: 'Imprimé Léopard' },
  { id: 'chale-leopard-echarpe', name: 'Écharpe Léopard Fine', description: 'L\'accent sauvage.', price: 58, image: Leopard8, category: 'Imprimé Léopard' },
];

export const categories = ['Châles en Fourrure', 'Châles Paisley', 'Soie', 'Imprimé Léopard'];
export const featuredProducts = products.filter(p => p.featured);
export const getProductById = (id: string) => products.find(p => p.id === id);
export const getRelatedProducts = (id: string, count = 10) => {
  const product = getProductById(id);
  if (!product) return products.slice(0, count);
  const sameCategory = products.filter(p => p.category === product.category && p.id !== id);
  const others = products.filter(p => p.category !== product.category && p.id !== id);
  return [...sameCategory, ...others].slice(0, count);
};
