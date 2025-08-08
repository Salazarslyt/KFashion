import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import { categoryConfig } from '../data/products';

const Women = () => {
  const navigate = useNavigate();
  const womenCategories = categoryConfig.women;

  const handleCategoryClick = (category: string) => {
    navigate(`/women/${category}`);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-foreground mb-4">
            Women's Fashion
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our exquisite collection of women's clothing, from elegant kurtis to trendy jeans and stylish tops
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(womenCategories).map(([key, category], index) => (
            <CategoryCard
              key={key}
              name={(category as any).name}
              image={(category as any).image}
              onClick={() => handleCategoryClick(key)}
              index={index}
            />
          ))}
        </div>

        {/* Featured Banner */}
        <motion.div
          className="mt-16 relative h-64 md:h-80 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop&crop=center"
            alt="Women's Fashion Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="text-white p-8 md:p-12 max-w-lg">
              <motion.h2
                className="text-3xl md:text-4xl font-playfair font-bold mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                New Collection
              </motion.h2>
              <motion.p
                className="text-lg text-white/90 mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Explore our latest arrivals featuring contemporary designs and premium fabrics
              </motion.p>
              <motion.button
                className="btn-gold"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop New Arrivals
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Women;