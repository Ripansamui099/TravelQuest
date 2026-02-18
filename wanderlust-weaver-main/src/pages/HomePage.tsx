import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-travel.jpg";
import destSantorini from "@/assets/dest-santorini.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destSwitzerland from "@/assets/dest-switzerland.jpg";

const featuredDestinations = [
  {
    name: "Santorini, Greece",
    image: destSantorini,
    rating: 4.9,
    price: "$1,299",
    tag: "Popular",
  },
  {
    name: "Bali, Indonesia",
    image: destBali,
    rating: 4.8,
    price: "$899",
    tag: "Trending",
  },
  {
    name: "Swiss Alps",
    image: destSwitzerland,
    rating: 4.9,
    price: "$1,599",
    tag: "Adventure",
  },
];

const stats = [
  { value: "500+", label: "Destinations" },
  { value: "50K+", label: "Happy Travelers" },
  { value: "4.9", label: "Average Rating" },
  { value: "24/7", label: "Support" },
];

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Tropical paradise beach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-4">
              Explore the World
            </p>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Your Next Adventure Awaits
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg">
              Discover breathtaking destinations and create memories that last a lifetime with our curated travel experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                <Link to="/destinations">
                  Explore Destinations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-2">
              Top Picks
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Featured Destinations
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
                  <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {dest.tag}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      <span className="text-primary-foreground text-sm font-medium">{dest.rating}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary-foreground flex items-center gap-2">
                      <MapPin className="h-5 w-5" /> {dest.name}
                    </h3>
                    <p className="text-primary-foreground/80 mt-1">
                      From <span className="font-bold text-secondary">{dest.price}</span> / person
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="text-base px-8">
              <Link to="/destinations">
                View All Destinations <Compass className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Get in touch with our travel experts and let us plan your perfect getaway.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
