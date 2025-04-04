
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Electrical Engineering{" "}
              <span className="text-electric-blue">Solutions</span> That Power
              <span className="relative">
                <span className="text-electric-blue"> Innovation</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-electric-blue rounded-full animate-pulse"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Specialized in designing comprehensive electrical building plans
              and technical systems with a focus on efficiency, sustainability,
              and innovation.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={scrollToPortfolio}
                className="bg-electric-blue hover:bg-blue-700"
              >
                View Portfolio
              </Button>
              
              <Button variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="w-full h-[300px] md:h-[400px] bg-electric-blue/10 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-6">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`rounded-lg ${i % 2 === 0 ? 'bg-electric-blue/20' : 'bg-electric-blue/10'}`}
                  />
                ))}
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-electric-blue flex items-center justify-center shadow-lg">
                    <svg className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <button 
            onClick={scrollToPortfolio} 
            aria-label="Scroll down"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
