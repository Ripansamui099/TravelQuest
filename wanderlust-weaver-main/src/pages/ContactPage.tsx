import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_6a8h9y7",
        "template_dv8kar5",
        formRef.current,
        "cR7QFQf8r6IudnslR"
      );
      setSent(true);
      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-2">
              Let's Talk
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Have questions or ready to plan your trip? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                We're Here to Help
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a relaxing beach getaway or an action-packed
                adventure, our travel experts are ready to craft the perfect itinerary for you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground text-sm">hello@wanderlust.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Office</h4>
                    <p className="text-muted-foreground text-sm">123 Travel Street, New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <CheckCircle className="h-16 w-16 text-primary mb-6" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">We'll get back to you within 24 hours.</p>
                  <Button onClick={() => setSent(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                      <Input name="user_name" placeholder="Your name" required className="bg-card" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <Input name="user_email" type="email" placeholder="your@email.com" required className="bg-card" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                    <Input name="subject" placeholder="How can we help?" required className="bg-card" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your dream trip..."
                      rows={5}
                      required
                      className="bg-card resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>Send Message <Send className="ml-2 h-4 w-4" /></>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
