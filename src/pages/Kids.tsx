import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import { categoryConfig } from '../data/products';

const Kids = () => {
  const navigate = useNavigate();
  const kidsCategories = categoryConfig.kids;

  const handleCategoryClick = (category: string) => {
    navigate(`/kids/${category}`);
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
            Kids' Fashion
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Adorable and comfortable clothing for your little ones, featuring both traditional and modern styles
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(kidsCategories).map(([key, category], index) => (
            <CategoryCard
              key={key}
              name={(category as any).name}
              image={(category as any).image}
              onClick={() => handleCategoryClick(key)}
              index={index}
            />
          ))}
        </div>

        {/* Fun Facts Section */}
        <motion.section
          className="mt-16 py-12 bg-pink/10 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center px-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-foreground mb-6">
              Why Choose Kashvi for Kids?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                {
                  title: 'Skin-Friendly Fabrics',
                  description: 'Soft, breathable materials perfect for sensitive skin'
                },
                {
                  title: 'Durable Quality',
                  description: 'Built to withstand active play and frequent washing'
                },
                {
                  title: 'Growing Sizes',
                  description: 'Thoughtful sizing that grows with your child'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-pink rounded-full flex items-center justify-center mx-auto text-2xl">
                    {index === 0 ? '👶' : index === 1 ? '💪' : '📏'}
                  </div>
                  <h3 className="font-playfair font-semibold text-lg text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Size Guide Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-accent-foreground mb-4">
            Need Help with Sizing?
          </h3>
          <p className="text-accent-foreground/80 text-lg mb-6 max-w-2xl mx-auto">
            Our detailed size guide helps you find the perfect fit for your child
          </p>
          <motion.button
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Size Guide
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Kids;