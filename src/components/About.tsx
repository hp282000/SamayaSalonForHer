import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, Users } from "lucide-react";
import staff1 from "@/assets/staff-1.jpg";
import staff3 from "@/assets/SamayaArtist1.jpg";
import staff2 from "@/assets/staff-2.jpg";
import staff4 from "@/assets/samayabg3.png";


const About = () => {
  const staff = [
    {
      name: "Sandhya Purohit",
      role: "Senior Hair Stylist & Salon Owner",
      experience: "8 years",
      image: staff3,
      specialties: ["Hair Cutting", "Coloring", "Bridal Styling"],
      certification: "Certified Hair Stylist"
    },
    {
      name: "Mishba Shaikh",
      role: "Nail Technician & Instructor",
      experience: "5 years",
      image: staff2,
      specialties: ["Nail Art", "Manicure", "Nail Training"],
      certification: "Certified Nail Technician"
    },
     {
      name: "Aarti Patel",
      role: "Nail Technician & Instructor",
      experience: "5 years",
      image: staff1,
      specialties: ["Nail Art", "Manicure", "Nail Training"],
      certification: "Certified Nail Technician"
    },
    {
      name: "Naman Shah",
      role: "Nail Technician & Instructor",
      experience: "5 years",
      image: staff4,
      specialties: ["Nail Art", "Manicure", "Nail Training"],
      certification: "Certified Nail Technician"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "All our staff are certified and regularly trained"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Building trust and beauty relationships since 2020"
    },
    {
      icon: Clock,
      title: "Years of Experience",
      description: "Combined 13+ years of professional beauty expertise"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-salon-gradient bg-clip-text text-transparent">
            About Samaya Salon
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Samaya Salon, we believe beauty is an art form. Our passionate team of certified professionals 
            is dedicated to enhancing your natural beauty while providing a luxurious and relaxing experience.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-salon-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        {/* Staff Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Meet Our Expert Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {staff.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                    <p className="text-salon-purple font-medium mb-2">{member.role}</p>
                    <Badge variant="secondary" className="mb-3">
                      {member.experience} Experience
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-3">{member.certification}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-salon-purple text-salon-purple">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Salon Story */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Our Story</h3>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2020 with a vision to create a space where beauty meets artistry, Samaya Salon has grown 
            into a trusted destination for professional beauty services. We pride ourselves on staying updated 
            with the latest trends and techniques while maintaining the highest standards of hygiene and customer care. 
            Our nail teaching classes have trained dozens of aspiring nail technicians, contributing to the beauty 
            industry's growth in our community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;