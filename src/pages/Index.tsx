
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import ProductGrid from '@/components/ProductGrid';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  rating: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Perruque Bob Lisse Premium",
      price: 89000,
      originalPrice: 105000,
      image: "/lovable-uploads/9059f76c-eeb0-4d82-a218-7fe645c11ba4.png",
      category: "Perruques Courtes",
      isNew: true,
      isSale: true,
      rating: 4.9
    },
    {
      id: 2,
      name: "Perruque Bouclée Naturelle",
      price: 135000,
      image: "/lovable-uploads/5a0cc022-afde-4d63-b2c8-ebd3a875b938.png",
      category: "Virgin Hair",
      isNew: true,
      rating: 4.8
    },
    {
      id: 3,
      name: "Perruque Ondulée Volumineuse",
      price: 125000,
      originalPrice: 145000,
      image: "/lovable-uploads/2c3a15c1-5f27-4d81-98b4-a1406d211908.png",
      category: "Perruques Longues",
      isSale: true,
      rating: 4.7
    },
    {
      id: 4,
      name: "Perruque Longue Body Wave",
      price: 155000,
      image: "/lovable-uploads/f3dc1859-a30f-48a4-a489-f3bee352b172.png",
      category: "Virgin Hair",
      isNew: true,
      rating: 4.9
    }
  ];

  const newProducts: Product[] = [
    {
      id: 5,
      name: "Perruque Rouge Ondulée Premium",
      price: 145000,
      image: "/lovable-uploads/5a805ddf-06bb-4bd4-bee7-21520b1c9634.png",
      category: "Perruques Colorées",
      isNew: true,
      rating: 4.9
    },
    {
      id: 6,
      name: "Perruque Noire Lisse Longue",
      price: 135000,
      image: "/lovable-uploads/fc67c429-f3bf-4b02-9e4e-d55f38f491a6.png",
      category: "Virgin Hair",
      isNew: true,
      rating: 4.8
    },
    {
      id: 7,
      name: "Perruque Deep Wave Luxe",
      price: 175000,
      image: "/lovable-uploads/bb3aebac-5080-41d9-8c62-73d4e876749d.png",
      category: "Perruques Longues",
      isNew: true,
      rating: 4.9
    },
    {
      id: 8,
      name: "Perruque Lace Front Glamour",
      price: 165000,
      image: "/lovable-uploads/e6fbe8ee-1446-4d25-b131-97d6db0acce9.png",
      category: "Lace Front",
      isNew: true,
      rating: 4.8
    }
  ];

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
    console.log('Added to cart:', product.name);
  };

  const handleToggleFavorite = (productId: number) => {
    console.log('Toggled favorite for product:', productId);
  };

  const handleOpenCart = () => {
    console.log('Cart opened, items:', cartItems.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItems.length} 
        onOpenCart={handleOpenCart}
      />
      
      <main>
        <Hero />
        
        <CategorySection />
        
        <div className="bg-deep-black py-20">
          <ProductGrid 
            title="Produits Phares"
            products={featuredProducts}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>
        
        <div className="bg-nude-50 py-20">
          <ProductGrid 
            title="Nouveautés"
            products={newProducts}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
          />
        </div>
        
        <TestimonialsSection />
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
