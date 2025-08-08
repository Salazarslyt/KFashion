import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ProductList from '../components/ProductList';
import { womenProducts, kidsProducts } from '../data/products';

const ProductCategory = () => {
  const { section, category } = useParams<{ section: string; category: string }>();
  const navigate = useNavigate();

  // Get products based on section and category
  const getProducts = () => {
    if (section === 'women' && category && (womenProducts as any)[category]) {
      return (womenProducts as any)[category];
    }
    if (section === 'kids' && category && (kidsProducts as any)[category]) {
      return (kidsProducts as any)[category];
    }
    return [];
  };

  const getCategoryName = () => {
    const categoryMap: Record<string, string> = {
      kurtis: 'Kurtis',
      jeans: 'Jeans', 
      tops: 'Tops',
      boysEthnic: 'Boys Ethnic Wear',
      boysTshirts: 'Boys T-shirts',
      girlsFrocks: 'Girls Frocks',
      girlsEthnic: 'Girls Ethnic Wear'
    };
    return categoryMap[category || ''] || 'Products';
  };

  const products = getProducts();

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <button 
            onClick={() => navigate(-1)}
            className="btn-hero"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to {section === 'women' ? 'Women' : 'Kids'}
          </button>
        </motion.div>

        {/* Category Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-foreground mb-4">
            {getCategoryName()}
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover our curated collection of {getCategoryName().toLowerCase()}
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Filter Bar (Future Enhancement) */}
        <motion.div
          className="flex justify-between items-center mb-8 p-4 bg-card rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-muted-foreground">
            Showing {products.length} products
          </span>
          <select className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ProductList products={products} />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCategory;