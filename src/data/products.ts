import chaleFourrure from '@/assets/chale-fourrure.jpg';
import chalePaisley from '@/assets/chale-paisley.jpg';
import chaleLeopard from '@/assets/chale-leopard.jpg';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 'chale-imperial-paisley',
    name: 'Châle Impérial Paisley',
    description: 'Douceur extrême et motifs ancestraux.',
    price: 890,
    image: chalePaisley,
    category: 'Châles Paisley',
  },
  {
    id: 'chale-signature-leopard',
    name: 'Châle Signature Léopard',
    description: "L'audace de la soie et du motif animalier.",
    price: 950,
    image: chaleLeopard,
    category: 'Imprimé Léopard',
  },
  {
    id: 'chale-bordure-fourrure',
    name: 'Châle à Bordure Fourrure',
    description: 'Chaleur luxueuse et glamour.',
    price: 1250,
    image: chaleFourrure,
    category: 'Châles en Fourrure',
  },
];

export const categories = ['Châles en Fourrure', 'Châles Paisley', 'Imprimé Léopard'];
