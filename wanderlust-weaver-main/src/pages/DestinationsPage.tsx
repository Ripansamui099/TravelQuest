import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Clock, Users, Search, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MapView from "@/components/MapView";
import destSantorini from "@/assets/dest-santorini.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destSwitzerland from "@/assets/dest-switzerland.jpg";
import destTokyo from "@/assets/dest-tokyo.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";
import destParis from "@/assets/dest-paris.jpg";

const destinations = [
  { name: "Santorini, Greece", image: destSantorini, rating: 4.9, price: "$1,299", duration: "7 Days", group: "2-6", desc: "Whitewashed villages perched above the azure Aegean Sea." },
  { name: "Bali, Indonesia", image: destBali, rating: 4.8, price: "$899", duration: "10 Days", group: "2-8", desc: "Lush rice terraces, ancient temples, and vibrant culture." },
  { name: "Swiss Alps", image: destSwitzerland, rating: 4.9, price: "$1,599", duration: "5 Days", group: "2-4", desc: "Majestic peaks, pristine meadows, and charming chalets." },
  { name: "Tokyo, Japan", image: destTokyo, rating: 4.7, price: "$1,199", duration: "8 Days", group: "2-6", desc: "A dazzling blend of tradition and futuristic innovation." },
  { name: "Maldives", image: destMaldives, rating: 5.0, price: "$2,199", duration: "6 Days", group: "2", desc: "Crystal-clear waters and overwater luxury villas." },
  { name: "Paris, France", image: destParis, rating: 4.8, price: "$1,099", duration: "5 Days", group: "2-6", desc: "The city of lights, love, art, and haute cuisine." },
];

const DestinationsPage = () => {
  const [mapQuery, setMapQuery] = useState("Santorini, Greece");
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setMapQuery(searchInput.trim());
    }
  };


  return (
    <>
      {/* Header */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-2">
              Where To Next?
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              Our Destinations
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Handpicked destinations for every kind of traveler. Find your perfect escape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
                    <span className="text-sm font-semibold text-card-foreground">{dest.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-card-foreground flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary" /> {dest.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{dest.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {dest.duration}</span>
                    <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {dest.group} people</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <p className="text-lg font-bold text-primary">
                      {dest.price} <span className="text-xs font-normal text-muted-foreground">/ person</span>
                    </p>
                    <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Explorer */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-2">
              <Globe className="inline h-4 w-4 mr-1" /> Explore Any Place
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Map Explorer
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Search for any destination in the world and see it on the map instantly.
            </p>
          </motion.div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-3 max-w-xl mx-auto mb-8">
            <Input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search any place... e.g. Kyoto, Japan"
              className="bg-card text-base"
            />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
              <Search className="h-4 w-4" />
            </Button>
          </form>

          {/* Quick destination chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {destinations.map((d) => (
              <button
                key={d.name}
                onClick={() => { setMapQuery(d.name); setSearchInput(d.name); }}
                className={`text-xs px-4 py-2 rounded-full border transition-colors ${
                  mapQuery === d.name
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>

          {/* Map */}
          <motion.div
            key={mapQuery}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden shadow-lg border border-border"
          >
            <MapView query={mapQuery} />
          </motion.div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            Currently showing: <span className="font-semibold text-foreground">{mapQuery}</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default DestinationsPage;
