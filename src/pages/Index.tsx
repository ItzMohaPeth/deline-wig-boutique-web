
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
      name: "Perruque Virgin Hair Ondulée",
      price: 125000,
      originalPrice: 150000,
      image: "",
      category: "Virgin Hair",
      isNew: true,
      isSale: true,
      rating: 4.8
    },
    {
      id: 2,
      name: "Vietnam Hair Lisse Long",
      price: 98000,
      image: "",
      category: "Vietnam Hair",
      isNew: true,
      rating: 4.9
    },
    {
      id: 3,
      name: "Perruque Courte Bouclée",
      price: 75000,
      originalPrice: 85000,
      image: "",
      category: "Perruques Courtes",
      isSale: true,
      rating: 4.7
    },
    {
      id: 4,
      name: "Perruque Longue Colorée",
      price: 110000,
      image: "",
      category: "Perruques Longues",
      isNew: true,
      rating: 4.6
    }
  ];

  const newProducts: Product[] = [
    {
      id: 5,
      name: "Virgin Hair Afro Kinky",
      price: 135000,
      image: "",
      category: "Virgin Hair",
      isNew: true,
      rating: 4.9
    },
    {
      id: 6,
      name: "Vietnam Hair Bob Cut",
      price: 89000,
      image: "",
      category: "Vietnam Hair",
      isNew: true,
      rating: 4.8
    },
    {
      id: 7,
      name: "Perruque Pixie Cut",
      price: 65000,
      image: "",
      category: "Perruques Courtes",
      isNew: true,
      rating: 4.7
    },
    {
      id: 8,
      name: "Perruque Ombré Hair",
      price: 120000,
      image: "",
      category: "Perruques Colorées",
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
