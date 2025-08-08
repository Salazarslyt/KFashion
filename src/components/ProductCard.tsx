import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      className="product-card group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-muted">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            <motion.button
              onClick={() => navigate(`/product/${product.id}`)}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye className="w-5 h-5 text-primary" />
            </motion.button>
            <motion.button
              className={`p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all ${
                isLiked ? 'text-red-500' : 'text-muted-foreground'
              }`}
              onClick={() => setIsLiked(!isLiked)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </motion.button>
          </div>
        </div>

        {/* Sale/New Badge */}
        {index % 3 === 0 && (
          <div className="absolute top-3 left-3">
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-semibold">
              New
            </span>
          </div>
        )}
        
        {index % 4 === 0 && (
          <div className="absolute top-3 left-3">
            <span className="bg-pink text-pink-foreground px-2 py-1 rounded-md text-xs font-semibold">
              Sale
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <h3 className="font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-primary">
              ₹{product.price.toLocaleString()}
            </span>
            {index % 4 === 0 && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{(product.price * 1.2).toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <motion.button
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-full btn-hero text-sm py-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;