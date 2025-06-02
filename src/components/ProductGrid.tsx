
import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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

interface ProductGridProps {
  title: string;
  products: Product[];
  onAddToCart?: (product: Product) => void;
  onToggleFavorite?: (productId: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  title, 
  products, 
  onAddToCart, 
  onToggleFavorite 
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-deline mx-auto rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-nude-50 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <div className="w-full h-full bg-gradient-to-br from-nude-100 to-pastel-pink-100 flex items-center justify-center">
                    <span className="text-6xl">👩‍🦱</span>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 space-y-2">
                    {product.isNew && (
                      <span className="bg-sky-blue-500 text-white px-2 py-1 rounded-full text-xs font-montserrat font-semibold">
                        Nouveau
                      </span>
                    )}
                    {product.isSale && (
                      <span className="bg-pastel-pink-500 text-white px-2 py-1 rounded-full text-xs font-montserrat font-semibold">
                        Promo
                      </span>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite?.(product.id);
                    }}
                  >
                    <Heart className="w-4 h-4 text-gray-600 hover:text-pastel-pink-500" />
                  </Button>

                  {/* Quick Add to Cart */}
                  <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button
                      className="w-full bg-gradient-deline hover:bg-gradient-gold text-white font-montserrat font-semibold"
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart?.(product);
                      }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Ajouter au panier
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs font-open-sans text-gray-500 uppercase tracking-wide">
                      {product.category}
                    </p>
                    <h3 className="font-montserrat font-semibold text-gray-800 text-lg leading-tight">
                      {product.name}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i}
                        className={`text-sm ${i < Math.floor(product.rating) ? 'text-gold-500' : 'text-gray-300'}`}
                      >
                        ⭐
                      </span>
                    ))}
                    <span className="text-xs text-gray-500 ml-2">({product.rating})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="font-montserrat font-bold text-lg text-gray-800">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="font-open-sans text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-pastel-pink-300 text-pastel-pink-600 hover:bg-pastel-pink-50 font-montserrat font-semibold px-8 py-3"
          >
            Voir toute la collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
