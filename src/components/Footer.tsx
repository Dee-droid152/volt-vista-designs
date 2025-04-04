
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a 
                href="mailto:contact@voltvistadesigns.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-electric-blue transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contact@voltvistadesigns.com</span>
              </a>
              <a 
                href="tel:+15551234567" 
                className="flex items-center gap-3 text-muted-foreground hover:text-electric-blue transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>San Francisco, California</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest electrical engineering insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-10 w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="rounded-l-none bg-electric-blue hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Github, href: "#" },
              { icon: Twitter, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="bg-background hover:bg-electric-blue text-foreground hover:text-white p-2 rounded-full transition-colors"
                aria-label={`Social link ${index + 1}`}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="text-center md:text-right text-muted-foreground text-sm">
            <div>
              <a
                href="#"
                className="font-bold text-foreground hover:text-electric-blue transition-colors"
              >
                VoltVista<span className="text-electric-blue">Designs</span>
              </a>
            </div>
            <div>© {new Date().getFullYear()} All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
