import chaleFourrure from '@/assets/chale-fourrure.jpg';
import chalePaisley from '@/assets/chale-paisley.jpg';
import chaleLeopard from '@/assets/chale-leopard.jpg';
import chaleSilkGold from '@/assets/chale-silk-gold.jpg';
import chaleCashmereNavy from '@/assets/chale-cashmere-navy.jpg';
import chaleFloral from '@/assets/chale-floral.jpg';
import chaleBordeaux from '@/assets/chale-bordeaux.jpg';
import chaleEmerald from '@/assets/chale-emerald.jpg';
import chaleNoirOr from '@/assets/chale-noir-or.jpg';

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

const images = [chaleFourrure, chalePaisley, chaleLeopard, chaleSilkGold, chaleCashmereNavy, chaleFloral, chaleBordeaux, chaleEmerald, chaleNoirOr];

const getImage = (index: number) => images[index % images.length];

export const products: Product[] = [
  // Châles en Fourrure (10)
  { id: 'chale-bordure-fourrure', name: 'Châle à Bordure Fourrure', description: 'Chaleur luxueuse et glamour.', longDescription: 'Ce châle d\'exception allie la douceur du cachemire à une somptueuse bordure en fourrure véritable. Chaque pièce est confectionnée à la main dans nos ateliers parisiens.', price: 1250, image: chaleFourrure, category: 'Châles en Fourrure', material: 'Cachemire & Fourrure', dimensions: '200 × 70 cm', featured: true },
  { id: 'chale-fourrure-sable', name: 'Châle Fourrure Sable', description: 'L\'ultime raffinement hivernal.', longDescription: 'Un châle en cachemire orné d\'une bordure en fourrure de sable, symbole d\'un luxe intemporel.', price: 88, image: chaleFourrure, category: 'Châles en Fourrure', material: 'Cachemire & Fourrure de Sable', dimensions: '200 × 75 cm' },
  { id: 'chale-fourrure-renard', name: 'Châle Col Renard', description: 'Élégance et chaleur absolue.', longDescription: 'Un châle enveloppant avec col en fourrure de renard, idéal pour les soirées d\'hiver.', price: 90, image: chaleFourrure, category: 'Châles en Fourrure', material: 'Laine & Fourrure de Renard', dimensions: '190 × 70 cm', featured: true },
  { id: 'chale-fourrure-vison', name: 'Châle Garni Vison', description: 'Le summum du luxe parisien.', longDescription: 'Finitions en vison sur un châle en cachemire double épaisseur.', price: 70, image: chaleFourrure, category: 'Châles en Fourrure', material: 'Cachemire & Vison', dimensions: '210 × 80 cm' },
  { id: 'chale-fourrure-chinchilla', name: 'Châle Chinchilla', description: 'Douceur incomparable.', longDescription: 'Bordure en chinchilla sur cachemire ultra-fin, une pièce de collection.', price: 35, image: chaleFourrure, category: 'Châles en Fourrure', material: 'Cachemire & Chinchilla', dimensions: '200 × 75 cm' },
  { id: 'chale-fourrure-noir', name: 'Châle Fourrure Noir Absolu', description: 'Mystère et sophistication.', longDescription: 'Un châle noir profond avec bordure fourrure, l\'essence du glamour nocturne.', price: 99.99, image: chaleNoirOr, category: 'Châles en Fourrure', material: 'Laine & Fourrure', dimensions: '195 × 70 cm' },
  { id: 'chale-fourrure-cape', name: 'Cape Fourrure Parisienne', description: 'Allure majestueuse.', longDescription: 'Cape-châle avec col fourrure, inspirée des grandes maisons parisiennes.', price: 50, image: chaleFourrure, category: 'Châles en Fourrure', material: 'Cachemire & Fourrure', dimensions: '180 × 120 cm' },
  { id: 'chale-fourrure-ivoire', name: 'Châle Fourrure Ivoire', description: 'Pureté et élégance.', longDescription: 'Châle ivoire bordé de fourrure blanche, parfait pour les occasions spéciales.', price: 57, image: chaleFourrure, category: 'Châles en Fourrure', material: 'Soie & Fourrure', dimensions: '200 × 70 cm' },
  { id: 'chale-fourrure-gris', name: 'Châle Fourrure Gris Perle', description: 'Discrétion luxueuse.', longDescription: 'Un gris perle délicat rehaussé d\'une bordure fourrure naturelle.', price: 1350, image: chaleFourrure, category: 'Châles en Fourrure', material: 'Cachemire & Fourrure', dimensions: '200 × 70 cm' },
  { id: 'chale-fourrure-reversible', name: 'Châle Fourrure Réversible', description: 'Deux looks en un.', longDescription: 'Châle réversible : côté fourrure pour le glamour, côté cachemire pour la sobriété.', price: 100, image: chaleFourrure, category: 'Châles en Fourrure', material: 'Cachemire & Fourrure', dimensions: '200 × 75 cm' },

  // Châles Paisley (10)
  { id: 'chale-imperial-paisley', name: 'Châle Impérial Paisley', description: 'Douceur extrême et motifs ancestraux.', longDescription: 'Inspiré des motifs cachemire traditionnels, ce châle est tissé en laine mérinos avec des fils de soie.', price: 100, image: chalePaisley, category: 'Châles Paisley', material: 'Laine Mérinos & Soie', dimensions: '200 × 70 cm', featured: true },
  { id: 'chale-paisley-royal', name: 'Châle Paisley Royal', description: 'Héritage noble et raffiné.', longDescription: 'Motifs paisley tissés en jacquard sur un cachemire d\'exception.', price: 40, image: chalePaisley, category: 'Châles Paisley', material: 'Cachemire', dimensions: '200 × 70 cm', featured: true },
  { id: 'chale-paisley-bordeaux', name: 'Châle Paisley Bordeaux', description: 'La noblesse du bordeaux.', longDescription: 'Un paisley classique sur fond bordeaux profond, l\'élégance à l\'état pur.', price: 60, image: chaleBordeaux, category: 'Châles Paisley', material: 'Laine & Soie', dimensions: '200 × 70 cm' },
  { id: 'chale-paisley-or', name: 'Châle Paisley Fil d\'Or', description: 'Tissé de fils dorés.', longDescription: 'Motifs paisley rehaussés de fils d\'or véritables sur cachemire fin.', price: 33, image: chaleNoirOr, category: 'Châles Paisley', material: 'Cachemire & Fil d\'Or', dimensions: '200 × 70 cm', featured: true },
  { id: 'chale-paisley-emeraude', name: 'Châle Paisley Émeraude', description: 'La fraîcheur de l\'émeraude.', longDescription: 'Un paisley vibrant sur fond émeraude, parfait pour illuminer une tenue.', price: 45, image: chaleEmerald, category: 'Châles Paisley', material: 'Laine & Soie', dimensions: '200 × 70 cm' },
  { id: 'chale-paisley-marine', name: 'Châle Paisley Marine', description: 'L\'élégance maritime.', longDescription: 'Motifs paisley sur fond bleu marine profond avec finitions soie.', price: 65, image: chaleCashmereNavy, category: 'Châles Paisley', material: 'Cachemire & Soie', dimensions: '200 × 70 cm' },
  { id: 'chale-paisley-ivoire', name: 'Châle Paisley Ivoire', description: 'Légèreté et tradition.', longDescription: 'Un paisley délicat sur fond ivoire, idéal pour les saisons douces.', price: 89, image: chaleFloral, category: 'Châles Paisley', material: 'Soie & Laine', dimensions: '190 × 65 cm' },
  { id: 'chale-paisley-noir', name: 'Châle Paisley Noir', description: 'Mystère et élégance.', longDescription: 'Motifs paisley ton sur ton sur fond noir profond.', price: 90, image: chaleNoirOr, category: 'Châles Paisley', material: 'Cachemire', dimensions: '200 × 70 cm' },
  { id: 'chale-paisley-camel', name: 'Châle Paisley Camel', description: 'Chaleur naturelle.', longDescription: 'Un camel chaleureux avec des motifs paisley traditionnels.', price: 78, image: chaleSilkGold, category: 'Châles Paisley', material: 'Laine', dimensions: '195 × 70 cm' },
  { id: 'chale-paisley-multicolor', name: 'Châle Paisley Multicolore', description: 'Explosion de couleurs.', longDescription: 'Motifs paisley colorés sur un fond neutre, une pièce statement.', price: 100, image: chalePaisley, category: 'Châles Paisley', material: 'Soie & Cachemire', dimensions: '200 × 75 cm' },

  // Soie (10)
  { id: 'chale-soie-or', name: 'Châle Soie Champagne', description: 'L\'éclat de la soie pure.', longDescription: 'Soie naturelle teinte à la main dans un champagne lumineux.', price: 75, image: chaleSilkGold, category: 'Soie', material: 'Soie Pure', dimensions: '190 × 65 cm', featured: true },
  { id: 'chale-soie-marine', name: 'Châle Soie Bleu Nuit', description: 'La profondeur du bleu.', longDescription: 'Soie bleu nuit avec des reflets subtils, une pièce intemporelle.', price: 78, image: chaleCashmereNavy, category: 'Soie', material: 'Soie Pure', dimensions: '190 × 65 cm', featured: true },
  { id: 'chale-soie-floral', name: 'Châle Soie Florale', description: 'Un jardin de soie.', longDescription: 'Motifs floraux peints à la main sur soie naturelle.', price: 890, image: chaleFloral, category: 'Soie', material: 'Soie Peinte', dimensions: '190 × 65 cm', featured: true },
  { id: 'chale-soie-emeraude', name: 'Châle Soie Émeraude', description: 'Vert profond et lumineux.', longDescription: 'Soie émeraude aux reflets changeants, un bijou textile.', price: 82, image: chaleEmerald, category: 'Soie', material: 'Soie Pure', dimensions: '190 × 65 cm' },
  { id: 'chale-soie-bordeaux', name: 'Châle Soie Bordeaux', description: 'Rouge passion.', longDescription: 'Soie bordeaux profond, la quintessence de l\'élégance française.', price: 79, image: chaleBordeaux, category: 'Soie', material: 'Soie Pure', dimensions: '190 × 65 cm' },
  { id: 'chale-soie-noir', name: 'Châle Soie Noir Brodé', description: 'Broderies dorées sur soie noire.', longDescription: 'Soie noire ornée de broderies dorées réalisées à la main.', price: 55, image: chaleNoirOr, category: 'Soie', material: 'Soie & Fil d\'Or', dimensions: '190 × 65 cm' },
  { id: 'chale-soie-rose', name: 'Châle Soie Rose Poudré', description: 'Douceur romantique.', longDescription: 'Soie rose poudré délicatement teintée, une ode à la féminité.', price: 72, image: chaleFloral, category: 'Soie', material: 'Soie Pure', dimensions: '185 × 60 cm' },
  { id: 'chale-soie-geometrique', name: 'Châle Soie Géométrique', description: 'Modernité et tradition.', longDescription: 'Motifs géométriques contemporains sur soie traditionnelle.', price: 85, image: chaleEmerald, category: 'Soie', material: 'Soie', dimensions: '190 × 65 cm' },
  { id: 'chale-soie-degrade', name: 'Châle Soie Dégradé', description: 'Couleurs en transition.', longDescription: 'Un dégradé unique du doré au bordeaux, teint à la main.', price: 92, image: chaleSilkGold, category: 'Soie', material: 'Soie Pure', dimensions: '200 × 70 cm' },
  { id: 'chale-soie-reversible', name: 'Châle Soie Réversible', description: 'Deux visages, un châle.', longDescription: 'Soie double face avec deux motifs distincts pour deux styles.', price: 98, image: chaleSilkGold, category: 'Soie', material: 'Soie Double Face', dimensions: '190 × 65 cm' },

  // Imprimé Léopard (10)
  { id: 'chale-signature-leopard', name: 'Châle Signature Léopard', description: "L'audace de la soie et du motif animalier.", longDescription: 'Notre châle signature en soie imprimée léopard, un incontournable de la collection.', price: 95, image: chaleLeopard, category: 'Imprimé Léopard', material: 'Soie', dimensions: '200 × 70 cm', featured: true },
  { id: 'chale-leopard-classique', name: 'Châle Léopard Classique', description: 'Le classique revisité.', longDescription: 'Imprimé léopard classique sur fond camel, l\'essentiel du style.', price: 88, image: chaleLeopard, category: 'Imprimé Léopard', material: 'Soie & Laine', dimensions: '200 × 70 cm', featured: true },
  { id: 'chale-leopard-noir', name: 'Châle Léopard Noir', description: 'L\'audace sombre.', longDescription: 'Imprimé léopard ton sur ton noir, discret et puissant.', price: 92, image: chaleLeopard, category: 'Imprimé Léopard', material: 'Soie', dimensions: '200 × 70 cm' },
  { id: 'chale-leopard-dore', name: 'Châle Léopard Doré', description: 'L\'éclat sauvage.', longDescription: 'Imprimé léopard doré sur fond noir, le luxe animalier par excellence.', price: 65, image: chaleLeopard, category: 'Imprimé Léopard', material: 'Soie & Fil d\'Or', dimensions: '200 × 70 cm' },
  { id: 'chale-leopard-bordeaux', name: 'Châle Léopard Bordeaux', description: 'L\'animalier en rouge.', longDescription: 'Imprimé léopard sur fond bordeaux profond, une audace chic.', price: 89, image: chaleLeopard, category: 'Imprimé Léopard', material: 'Soie & Cachemire', dimensions: '200 × 70 cm' },
  { id: 'chale-leopard-pastel', name: 'Châle Léopard Pastel', description: 'Douceur sauvage.', longDescription: 'Imprimé léopard dans des tons pastel doux, féminité et audace.', price: 85, image: chaleLeopard, category: 'Imprimé Léopard', material: 'Soie', dimensions: '190 × 65 cm' },
  { id: 'chale-leopard-fourrure', name: 'Châle Léopard Bordé Fourrure', description: 'Luxe sauvage ultime.', longDescription: 'Imprimé léopard avec bordure fourrure, la rencontre de deux mondes.', price: 45, image: chaleLeopard, category: 'Imprimé Léopard', material: 'Soie, Cachemire & Fourrure', dimensions: '200 × 75 cm' },
  { id: 'chale-leopard-echarpe', name: 'Écharpe Léopard Fine', description: 'L\'accent sauvage.', longDescription: 'Écharpe fine en soie imprimée léopard, l\'accessoire parfait.', price: 58, image: chaleLeopard, category: 'Imprimé Léopard', material: 'Soie', dimensions: '180 × 45 cm' },
  { id: 'chale-leopard-marine', name: 'Châle Léopard Marine', description: 'L\'animalier marin.', longDescription: 'Imprimé léopard sur fond bleu marine, une combinaison originale.', price: 90, image: chaleLeopard, category: 'Imprimé Léopard', material: 'Soie & Laine', dimensions: '200 × 70 cm' },
  { id: 'chale-leopard-xl', name: 'Châle Léopard Grand Format', description: 'Enveloppement total.', longDescription: 'Grand châle léopard en cachemire, pour un style enveloppant.', price: 100, image: chaleLeopard, category: 'Imprimé Léopard', material: 'Cachemire', dimensions: '220 × 90 cm' },
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
