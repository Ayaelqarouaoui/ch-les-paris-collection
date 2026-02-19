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
  // --- 1. L-9 L-OULA (S-TSAWR L-QDAMA MKHTALFA) ---
  { id: 'chale-1', name: 'Châle Bordure Fourrure', description: 'Luxe et chaleur.', price: 50, image: chaleFourrure, category: 'Châles en Fourrure', featured: true },
  { id: 'chale-2', name: 'Châle Paisley Impérial', description: 'Motifs traditionnels.', price: 95, image: chalePaisley, category: 'Châles Paisley' },
  { id: 'chale-3', name: 'Châle Léopard Chic', description: 'Style animalier.', price: 85, image: chaleLeopard, category: 'Imprimé Léopard' },
  { id: 'chale-4', name: 'Châle Soie Champagne', description: 'Éclat soyeux.', price: 100, image: chaleSilkGold, category: 'Soie', featured: true },
  { id: 'chale-5', name: 'Châle Cashmere Navy', description: 'Bleu nuit profond.', price: 50, image: chaleCashmereNavy, category: 'Châles en Fourrure' },
  { id: 'chale-6', name: 'Châle Floral Printemps', description: 'Douceur fleurie.', price: 89, image: chaleFloral, category: 'Soie' },
  { id: 'chale-7', name: 'Châle Bordeaux Royal', description: 'Élégance bordeaux.', price: 100, image: chaleBordeaux, category: 'Châles Paisley' },
  { id: 'chale-8', name: 'Châle Émeraude Satin', description: 'Vert précieux.', price: 98, image: chaleEmerald, category: 'Soie' },
  { id: 'chale-9', name: 'Châle Noir & Or', description: 'Glamour nocturne.', price: 50, image: chaleNoirOr, category: 'Châles en Fourrure', featured: true },

  // --- 2. L-BAQI (S-TSAWR L-JDAD LI ZEDTI) ---
  // Fourrures
  { id: 'f1', name: 'Châle Fourrure Prestige 1', description: 'Collection 2026.', price: 80, image: Fourrure1, category: 'Châles en Fourrure' },
  { id: 'f2', name: 'Châle Fourrure Prestige 2', description: 'Collection 2026.', price: 60, image: Fourrure2, category: 'Châles en Fourrure' },
  { id: 'f3', name: 'Châle Fourrure Prestige 3', description: 'Collection 2026.', price: 65, image: Fourrure3, category: 'Châles en Fourrure' },
  { id: 'f4', name: 'Châle Fourrure Prestige 4', description: 'Collection 2026.', price: 75, image: Fourrure4, category: 'Châles en Fourrure' },
  { id: 'f5', name: 'Châle Fourrure Prestige 5', description: 'Collection 2026.', price: 45, image: Fourrure5, category: 'Châles en Fourrure' },
  { id: 'f6', name: 'Châle Fourrure Prestige 6', description: 'Collection 2026.', price: 59, image: Fourrure6, category: 'Châles en Fourrure' },
  { id: 'f7', name: 'Châle Fourrure Prestige 7', description: 'Collection 2026.', price: 55, image: Fourrure7, category: 'Châles en Fourrure' },

  // Léopards
  { id: 'l1', name: 'Châle Léopard Sauvage 1', description: 'Élégance animale.', price: 90, image: Leopard1, category: 'Imprimé Léopard' },
  { id: 'l2', name: 'Châle Léopard Sauvage 2', description: 'Élégance animale.', price: 50, image: Leopard2, category: 'Imprimé Léopard' },
  { id: 'l3', name: 'Châle Léopard Sauvage 3', description: 'Élégance animale.', price: 78, image: Leopard3, category: 'Imprimé Léopard' },
  { id: 'l4', name: 'Châle Léopard Sauvage 4', description: 'Élégance animale.', price: 74, image: Leopard4, category: 'Imprimé Léopard' },
  { id: 'l5', name: 'Châle Léopard Sauvage 5', description: 'Élégance animale.', price: 69, image: Leopard5, category: 'Imprimé Léopard' },
  { id: 'l6', name: 'Châle Léopard Sauvage 6', description: 'Élégance animale.', price: 56, image: Leopard6, category: 'Imprimé Léopard' },
  { id: 'l7', name: 'Châle Léopard Sauvage 7', description: 'Élégance animale.', price: 70, image: Leopard7, category: 'Imprimé Léopard' },
  { id: 'l8', name: 'Châle Léopard Sauvage 8', description: 'Élégance animale.', price: 88, image: Leopard8, category: 'Imprimé Léopard' },

  // Paisley & Soie
  { id: 'p1', name: 'Châle Paisley Modern 1', description: 'Design exclusif.', price: 100, image: Paisley1, category: 'Châles Paisley' },
  { id: 'p2', name: 'Châle Paisley Modern 2', description: 'Design exclusif.', price: 100, image: Paisley2, category: 'Châles Paisley' },
  { id: 's1', name: 'Châle Soie Royale 1', description: 'Soie naturelle.', price: 85, image: Soie1, category: 'Soie' },
  { id: 's2', name: 'Châle Soie Royale 2', description: 'Soie naturelle.', price: 85, image: Soie2, category: 'Soie' },
  { id: 's3', name: 'Châle Soie Royale 3', description: 'Soie naturelle.', price: 80, image: Soie3, category: 'Soie' },
  { id: 's4', name: 'Châle Soie Royale 4', description: 'Soie naturelle.', price: 60, image: Soie4, category: 'Soie' },
  { id: 's5', name: 'Châle Soie Royale 5', description: 'Soie naturelle.', price: 55, image: Soie5, category: 'Soie' },
  { id: 's6', name: 'Châle Soie Royale 6', description: 'Soie naturelle.', price: 45, image: Soie6, category: 'Soie' },
  { id: 's7', name: 'Châle Soie Royale 7', description: 'Soie naturelle.', price:70, image: Soie7, category: 'Soie' },
  { id: 's8', name: 'Châle Soie Royale 8', description: 'Soie naturelle.', price: 80, image: Soie8, category: 'Soie' },
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
