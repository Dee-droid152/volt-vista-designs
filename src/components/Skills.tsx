
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Lightbulb, Server, Cpu, Shield } from "lucide-react";

export default function Skills() {
  // Technical skills with proficiency levels
  const technicalSkills = [
    { name: "Electrical System Design", value: 95 },
    { name: "AutoCAD Electrical", value: 90 },
    { name: "Power Distribution", value: 85 },
    { name: "Lighting Design", value: 90 },
    { name: "Load Calculations", value: 95 },
    { name: "Building Automation", value: 80 }
  ];

  // Core competencies
  const coreCompetencies = [
    {
      title: "Power Systems",
      icon: Zap,
      description: "Expert design of power distribution systems for buildings of all sizes and complexities."
    },
    {
      title: "Lighting Design",
      icon: Lightbulb,
      description: "Creating energy-efficient lighting solutions optimized for functionality and aesthetics."
    },
    {
      title: "Data & Communication",
      icon: Server,
      description: "Planning and integration of modern data infrastructure and communication systems."
    },
    {
      title: "Control Systems",
      icon: Cpu,
      description: "Design of advanced building control systems for automation and monitoring."
    },
    {
      title: "Safety Systems",
      icon: Shield,
      description: "Implementation of comprehensive electrical safety and emergency systems."
    }
  ];

  return (
    <section id="skills" className="section bg-secondary/30">
      <div className="container">
        <h2 className="section-title text-center">
          Professional <span className="text-electric-blue">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Specialized expertise in electrical engineering design and implementation across multiple disciplines.
        </p>

        {/* Core Competencies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {coreCompetencies.map((competency, index) => (
            <Card key={index} className="border-border hover:border-electric-blue/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 p-3 rounded-full bg-electric-blue/10 w-fit">
                  <competency.icon className="h-6 w-6 text-electric-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">{competency.title}</h3>
                <p className="text-muted-foreground">{competency.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Skills */}
        <h3 className="text-2xl font-bold mb-6">Technical Proficiency</h3>
        <div className="space-y-6">
          {technicalSkills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.value}%</span>
              </div>
              <Progress value={skill.value} className="h-2" indicatorClassName="bg-electric-blue" />
            </div>
          ))}
        </div>

        {/* Certifications & Qualifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Certifications & Qualifications</h3>
          <div className="space-y-4">
            {[
              "Professional Electrical Engineer (PE) License",
              "Leadership in Energy and Environmental Design (LEED) Accredited Professional",
              "National Electrical Code (NEC) Certified",
              "Building Information Modeling (BIM) Specialist",
              "Master Electrician License"
            ].map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-md border border-border">
                <CheckCircle2 className="h-5 w-5 text-electric-blue shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
