import { motion } from 'framer-motion';
import { Heart, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Fashion',
      description: 'We believe fashion is a form of self-expression that should be accessible to everyone.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Premium fabrics and meticulous craftsmanship go into every piece we create.'
    },
    {
      icon: Users,
      title: 'Family Values',
      description: 'We understand the importance of dressing the whole family with care and style.'
    },
    {
      icon: Globe,
      title: 'Sustainable Future',
      description: 'Committed to ethical practices and sustainable fashion for a better tomorrow.'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-foreground mb-6">
            About Kashvi Fashion
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Established with a vision to bring premium fashion to modern families, Kashvi Fashion has been 
            creating beautiful clothing that combines traditional craftsmanship with contemporary design.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2018, Kashvi Fashion began as a small boutique with a simple mission: 
                to provide high-quality, stylish clothing for women and children. Our founder, 
                inspired by the rich textile heritage of India, wanted to create a brand that 
                honors traditional craftsmanship while embracing modern aesthetics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to serve thousands of customers who trust us for their 
                fashion needs. Every piece in our collection is carefully curated to ensure 
                it meets our high standards of quality, comfort, and style.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center"
                alt="Fashion Design Process"
                className="rounded-2xl w-full h-80 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg">
                6+ Years
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Kashvi Fashion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card-elegant text-center space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate individuals dedicated to bringing you the best in fashion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                role: 'Founder & Creative Director',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e4?w=300&h=300&fit=crop&crop=face'
              },
              {
                name: 'Rajesh Kumar',
                role: 'Head of Operations',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
              },
              {
                name: 'Anita Patel',
                role: 'Lead Designer',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="card-elegant text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-playfair font-semibold text-xl text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-primary-foreground mb-4">
            Join the Kashvi Family
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Be part of our fashion journey and discover clothing that celebrates your unique style
          </p>
          <motion.button
            className="btn-gold px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Shopping
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
};

export default About;