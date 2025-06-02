
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  productCount: number;
}

const CategorySection: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Virgin Hair",
      description: "Cheveux 100% naturels non traités",
      icon: "👑",
      productCount: 156
    },
    {
      id: 2,
      name: "Vietnam Hair",
      description: "Qualité premium d'Asie",
      icon: "🌸",
      productCount: 98
    },
    {
      id: 3,
      name: "Perruques Courtes",
      description: "Style moderne et élégant",
      icon: "✂️",
      productCount: 87
    },
    {
      id: 4,
      name: "Perruques Longues",
      description: "Pour un look glamour",
      icon: "💫",
      productCount: 134
    },
    {
      id: 5,
      name: "Perruques Colorées",
      description: "Osez la couleur",
      icon: "🎨",
      productCount: 76
    },
    {
      id: 6,
      name: "Perruques Bouclées",
      description: "Volume et texture naturels",
      icon: "🌀",
      productCount: 92
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-nude-50 to-nude-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-deep-black mb-6">
            Nos <span className="font-great-vibes bg-gradient-gold bg-clip-text text-transparent">Catégories</span>
          </h2>
          <p className="text-xl font-open-sans text-deep-black-300 max-w-2xl mx-auto leading-relaxed">
            Explorez notre vaste gamme de perruques soigneusement sélectionnées pour chaque style et occasion
          </p>
          <div className="w-32 h-1 bg-gradient-gold mx-auto rounded-full mt-6"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id}
              className="group cursor-pointer transition-all duration-500 hover:shadow-luxury hover:-translate-y-4 border border-gold-200/20 bg-white/90 backdrop-blur-sm overflow-hidden animate-fade-in hover:border-gold-400/40"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  {/* Background Gradient */}
                  <div className="h-36 bg-gradient-gold opacity-10 group-hover:opacity-20 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 group-hover:shadow-gold-lg transition-all duration-300 border-2 border-gold-200 group-hover:border-gold-400">
                      <span className="text-4xl">{category.icon}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 text-center space-y-4">
                  <h3 className="font-montserrat font-bold text-2xl text-deep-black group-hover:text-gold-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="font-open-sans text-deep-black-300 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="inline-flex items-center space-x-2 text-sm text-gold-600 font-montserrat font-semibold bg-gold-50 px-4 py-2 rounded-full">
                    <span>{category.productCount} produits</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
