
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  cartItemsCount?: number;
  onOpenCart?: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount = 0, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full transition-all duration-300 z-50 ${
      isSticky ? 'fixed top-0 bg-white/95 backdrop-blur-md shadow-lg' : 'relative bg-white'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-deline text-white py-2 px-4">
        <div className="container mx-auto text-center text-sm">
          <span className="font-open-sans">Livraison gratuite à partir de 50 000 FCFA 🚚</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold bg-gradient-deline bg-clip-text text-transparent">
              DELINE-WIG
            </h1>
            <p className="text-xs text-gray-600 font-open-sans">Élégance & Beauté Capillaire</p>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Rechercher une perruque..." 
                className="pl-10 bg-nude-50 border-nude-300 focus:border-pastel-pink-400"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#accueil" className="font-montserrat text-gray-700 hover:text-pastel-pink-500 transition-colors">
              Accueil
            </a>
            <a href="#catalogue" className="font-montserrat text-gray-700 hover:text-pastel-pink-500 transition-colors">
              Catalogue
            </a>
            <a href="#nouveautes" className="font-montserrat text-gray-700 hover:text-pastel-pink-500 transition-colors">
              Nouveautés
            </a>
            <a href="#contact" className="font-montserrat text-gray-700 hover:text-pastel-pink-500 transition-colors">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Mobile */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Search className="w-5 h-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="w-5 h-5" />
            </Button>

            {/* Account */}
            <Button variant="ghost" size="sm">
              <User className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={onOpenCart}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pastel-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Rechercher..." 
              className="pl-10 bg-nude-50 border-nude-300"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-nude-200 animate-slide-up">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#accueil" className="block font-montserrat text-gray-700 hover:text-pastel-pink-500 transition-colors">
              Accueil
            </a>
            <a href="#catalogue" className="block font-montserrat text-gray-700 hover:text-pastel-pink-500 transition-colors">
              Catalogue
            </a>
            <a href="#nouveautes" className="block font-montserrat text-gray-700 hover:text-pastel-pink-500 transition-colors">
              Nouveautés
            </a>
            <a href="#contact" className="block font-montserrat text-gray-700 hover:text-pastel-pink-500 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
