
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
    <section className="py-16 bg-gradient-to-br from-nude-50 to-sky-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Nos Catégories
          </h2>
          <p className="text-xl font-open-sans text-gray-600 max-w-2xl mx-auto">
            Explorez notre vaste gamme de perruques soigneusement sélectionnées pour chaque style et occasion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id}
              className="group cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  {/* Background Gradient */}
                  <div className="h-32 bg-gradient-deline opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center space-y-4">
                  <h3 className="font-montserrat font-bold text-xl text-gray-800 group-hover:text-pastel-pink-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="font-open-sans text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="inline-flex items-center space-x-2 text-sm text-sky-blue-600 font-montserrat font-semibold">
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
