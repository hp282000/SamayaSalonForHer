import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, BookOpen, Palette, Star } from "lucide-react";
import nailStudio from "@/assets/nail-studio.jpg";

const NailClasses = () => {
  const courses = [
    {
      title: "Basic Nail Art Course",
      duration: "2 weeks",
      price: "$299",
      students: "8-10",
      level: "Beginner",
      includes: [
        "Nail anatomy and care",
        "Basic nail art techniques",
        "Color theory and design",
        "Tool usage and safety",
        "Practice sessions",
        "Certificate upon completion"
      ]
    },
    {
      title: "Advanced Nail Design",
      duration: "3 weeks",
      price: "$499",
      students: "6-8",
      level: "Intermediate",
      includes: [
        "3D nail art techniques",
        "Gel and acrylic application",
        "Advanced design patterns",
        "Business basics for nail techs",
        "Portfolio development",
        "Professional certification"
      ]
    },
    {
      title: "Professional Nail Technician",
      duration: "6 weeks",
      price: "$899",
      students: "5-6",
      level: "Professional",
      includes: [
        "Complete nail technician training",
        "Salon management basics",
        "Client consultation skills",
        "Advanced nail treatments",
        "Marketing and branding",
        "Job placement assistance"
      ]
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with limited students per batch"
    },
    {
      icon: Award,
      title: "Certified Training",
      description: "Industry-recognized certification upon course completion"
    },
    {
      icon: BookOpen,
      title: "Hands-on Learning",
      description: "Practical training with real clients and scenarios"
    },
    {
      icon: Star,
      title: "Expert Instructors",
      description: "Learn from experienced nail artists with 5+ years expertise"
    }
  ];

  return (
    <section id="nail-classes" className="py-20 bg-gradient-to-br from-background via-salon-purple-light/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-salon-gradient bg-clip-text text-transparent">
            Nail Art Training Classes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Master the art of nail design with our comprehensive training programs. 
            From basic techniques to professional certification, we'll help you build a successful career in nail artistry.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-elegant">
          <img 
            src={nailStudio} 
            alt="Nail Training Studio"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-salon-purple/10 via-salon-purple-light/20 to-white/30 flex items-center justify-center">
  <div className="text-center text-white">
    <h3 className="text-2xl md:text-3xl font-bold mb-4">Professional Training Environment</h3>
    <p className="mb-6 max-w-md mx-auto">
      Our state-of-the-art nail studio provides the perfect setting for hands-on learning and creativity.
    </p>
      <a href="https://wa.me/919328731878?text=Hi! I would like to know more about your nail classes at Samaya Salon. When next batch starts and fees?" target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="bg-white text-salon-purple hover:bg-white/90">
          Schedule a Nail Visit
        </Button>
      </a>
  </div>
</div>

        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-salon-gradient rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <Badge 
                    variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'default' : 'destructive'}
                    className="ml-2"
                  >
                    {course.level}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-salon-purple mb-2">{course.price}</div>
                  <p className="text-sm text-muted-foreground">Complete course fee</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Course Includes:</h4>
                  <ul className="space-y-2">
                    {course.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Palette className="w-4 h-4 text-salon-purple flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-salon-gradient hover:bg-salon-gradient-dark"
                onClick={() => window.open('https://wa.me/919328731878?text=Hi! I would like to enroll in the ' + course.title + ' at Samaya Salon.', '_blank')}>
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Have questions about our courses? Contact us for personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button variant="outline" size="lg" className="border-salon-purple text-salon-purple hover:bg-salon-purple hover:text-white">
              Download Brochure
            </Button> */}
            <Button size="lg" className="bg-salon-gradient hover:bg-salon-gradient-dark"
            onClick={() => window.open('https://wa.me/919328731878?text=Hi! I would like to know more about for Samaya Salon. when i can visit the salon?', '_blank')}>
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NailClasses;