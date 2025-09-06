import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sakshi Mehta",
      rating: 5,
      review: "Amazing experience! The staff is so professional and the salon is beautifully designed. My haircut came out perfect and I received so many compliments.",
      service: "Hair Cut & Styling",
      date: "2 weeks ago"
    },
    {
      name: "Ritika Gupta",
      rating: 5,
      review: "I took the nail art course here and it was incredible! Meera is an excellent teacher and I learned so much. Now I'm working as a nail technician!",
      service: "Nail Art Course",
      date: "1 month ago"
    },
    {
      name: "Priyanka Singh",
      rating: 5,
      review: "Best salon in the area! The bridal package was worth every penny. The team made me feel like a princess on my wedding day. Highly recommended!",
      service: "Bridal Package",
      date: "3 weeks ago"
    },
    {
      name: "Neha Sharma",
      rating: 5,
      review: "Love their nail art services! Creative designs and excellent quality. The salon is clean and the staff is very friendly. Will definitely come back!",
      service: "Nail Art",
      date: "1 week ago"
    },
    {
      name: "Kavya Patel",
      rating: 5,
      review: "Great place for hair coloring! They understood exactly what I wanted and the result was even better than expected. Professional and affordable.",
      service: "Hair Coloring",
      date: "2 weeks ago"
    },
    {
      name: "Anita Reddy",
      rating: 5,
      review: "Excellent makeup service for my engagement. The artist was skilled and the makeup lasted all day. The salon has a very relaxing atmosphere.",
      service: "Makeup",
      date: "1 month ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-salon-gradient bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Don't just take our word for it - hear from our happy clients who trust us with their beauty needs
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(5)}</div>
              <span className="text-2xl font-bold text-salon-purple">4.9</span>
            </div>
            <div className="text-muted-foreground">
              <div className="font-semibold">500+ Reviews</div>
              <div className="text-sm">Google & Facebook</div>
            </div>
          </div>

          {/* Review Us Button */}
          <Button 
            size="lg" 
            className="bg-salon-gradient hover:bg-salon-gradient-dark shadow-elegant mb-8"
            onClick={() => window.open('https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review', '_blank')}
          >
            <Star className="w-5 h-5 mr-2" />
            Write a Review on Google
          </Button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <Quote className="w-8 h-8 text-salon-purple-light" />
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{review.review}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-salon-purple">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.service}</div>
                  <div className="text-xs text-muted-foreground mt-1">{review.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">Join Our Happy Clients</h3>
            <p className="text-muted-foreground">
              Experience the same exceptional service that has earned us hundreds of 5-star reviews. 
              Book your appointment today and see why clients love Samaya Salon.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-salon-gradient hover:bg-salon-gradient-dark">
              Book Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-salon-purple text-salon-purple hover:bg-salon-purple hover:text-white"
              onClick={() => window.open('https://www.google.com/maps/place/YOUR_SALON_ADDRESS', '_blank')}
            >
              View All Google Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;