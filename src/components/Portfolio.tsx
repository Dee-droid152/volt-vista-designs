
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Search, Maximize } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "commercial" | "residential" | "industrial";
  tags: string[];
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const portfolioItems: Project[] = [
    {
      id: 1,
      title: "High-Rise Office Complex",
      description: "Complete electrical system design for a 25-story commercial building including power distribution, lighting, and emergency systems.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
      category: "commercial",
      tags: ["Power Distribution", "Emergency Systems", "BMS Integration"]
    },
    {
      id: 2,
      title: "Smart Home Automation",
      description: "Integrated electrical and automation system for luxury residential property with voice control and energy efficiency monitoring.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
      category: "residential",
      tags: ["Home Automation", "Energy Efficiency", "Smart Lighting"]
    },
    {
      id: 3,
      title: "Manufacturing Plant Upgrade",
      description: "Power system redesign for an industrial manufacturing facility to improve reliability and support new automation equipment.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      category: "industrial",
      tags: ["Industrial Power", "Machine Integration", "Safety Systems"]
    },
    {
      id: 4,
      title: "Hospital Critical Systems",
      description: "Design and implementation of critical power systems for a major medical center, including backup generators and UPS.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
      category: "commercial",
      tags: ["Healthcare", "Critical Power", "Redundancy"]
    },
    {
      id: 5,
      title: "Residential Complex",
      description: "Electrical plans for a multi-building residential development including common areas and individual unit specifications.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
      category: "residential",
      tags: ["Residential", "Distribution", "Metering"]
    },
    {
      id: 6,
      title: "Pharmaceutical Production Facility",
      description: "Specialized electrical systems for clean room environments and precise manufacturing equipment in pharmaceutical production.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      category: "industrial",
      tags: ["Clean Room", "Precision Power", "Monitoring"]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section bg-background">
      <div className="container">
        <h2 className="section-title text-center">
          My <span className="text-electric-blue">Portfolio</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Explore my collection of electrical engineering projects, showcasing detailed building plans and innovative solutions for various industries.
        </p>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["all", "commercial", "residential", "industrial"].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "bg-electric-blue hover:bg-blue-700" : ""}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden border border-border hover:border-electric-blue/50 transition-all duration-300">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-between items-center">
              <span className="capitalize text-xs font-medium bg-electric-blue/80 text-white px-2 py-1 rounded">
                {project.category}
              </span>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30">
                    <Maximize className="h-4 w-4 text-white" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="aspect-video overflow-hidden rounded-md">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="text-xs bg-secondary px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button className="mt-4 bg-electric-blue hover:bg-blue-700">
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 group-hover:text-electric-blue transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </Card>
  );
}
