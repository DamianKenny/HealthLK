import { Phone, Clock, MapPin, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Ambulance = () => {
  // Mock data
  const services = [
    {
      id: 1,
      name: "1990 - National Emergency Ambulance",
      phone: "1990",
      coverage: "Island-wide",
      responseTime: "15-20 minutes",
      availability: "24/7",
      type: "Government",
    },
    {
      id: 2,
      name: "Suwa Seriya Ambulance Service",
      phone: "1990",
      coverage: "All provinces",
      responseTime: "10-15 minutes",
      availability: "24/7",
      type: "Government",
    },
    {
      id: 3,
      name: "Lanka Hospitals Emergency",
      phone: "+94 11 551 4444",
      coverage: "Colombo & suburbs",
      responseTime: "8-12 minutes",
      availability: "24/7",
      type: "Private",
    },
    {
      id: 4,
      name: "Nawaloka Hospital Emergency",
      phone: "+94 11 554 4444",
      coverage: "Colombo & suburbs",
      responseTime: "10-15 minutes",
      availability: "24/7",
      type: "Private",
    },
    {
      id: 5,
      name: "Asiri Hospital Emergency",
      phone: "+94 11 466 5500",
      coverage: "Colombo & Kandy",
      responseTime: "12-18 minutes",
      availability: "24/7",
      type: "Private",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Emergency Ambulance Services
          </h1>
          <p className="text-muted-foreground">
            Quick access to ambulance contacts with estimated response times
          </p>
        </div>

        {/* Emergency Alert */}
        <Alert className="mb-8 border-destructive bg-destructive/10">
          <AlertCircle className="h-5 w-5 text-destructive" />
          <AlertDescription className="text-destructive font-medium ml-2">
            For life-threatening emergencies, call 1990 immediately
          </AlertDescription>
        </Alert>

        {/* Emergency Button */}
        <Card className="mb-8 bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need Immediate Help?
            </h2>
            <Button
              size="lg"
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
              asChild
            >
              <a href="tel:1990" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 1990 Now
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Free government ambulance service available 24/7
            </p>
          </CardContent>
        </Card>

        {/* Service List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            All Ambulance Services
          </h2>
          
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-elevated transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <div className="mt-2 flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          service.type === "Government"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/20 text-accent"
                        }`}
                      >
                        {service.type}
                      </span>
                      <span className="text-sm text-secondary font-medium">
                        {service.availability}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="default"
                    className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90"
                    asChild
                  >
                    <a href={`tel:${service.phone}`} className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {service.phone}
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Coverage</p>
                      <p className="text-sm font-medium">{service.coverage}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Response</p>
                      <p className="text-sm font-medium">{service.responseTime}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Information Card */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Emergency Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>• Stay calm and speak clearly when calling</p>
            <p>• Provide your exact location and landmarks</p>
            <p>• Describe the medical emergency briefly</p>
            <p>• Keep phone line clear after calling</p>
            <p>• Meet ambulance at easily accessible location if possible</p>
            <p>
              • Government ambulance service (1990) is free for emergencies
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Ambulance;
