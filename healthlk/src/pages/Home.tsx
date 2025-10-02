import { Link } from "react-router-dom";
import { MapPin, Pill, Stethoscope, Ambulance, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/health.jpg";

const Home = () => {
  const stats = [
    { label: "Hospitals Tracked", value: "150+", change: "+12% this month" },
    { label: "Medicines Listed", value: "1,000+", change: "Updated daily" },
    { label: "Doctors Available", value: "100+", change: "Real-time data" },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Interactive Map",
      description:
        "Find nearby hospitals and pharmacies with real-time availability",
      link: "/map",
    },
    {
      icon: Pill,
      title: "Medicine Tracker",
      description: "Search for medicine availability across all facilities",
      link: "/medicines",
    },
    {
      icon: Stethoscope,
      title: "Doctor Availability",
      description: "Check specialist availability at government hospitals",
      link: "/doctors",
    },
    {
      icon: Ambulance,
      title: "Ambulance Services",
      description: "Quick access to ambulance contacts with response times",
      link: "/ambulance",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Healthcare professionals helping patients in Sri Lanka"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              We care.
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-xl leading-relaxed">
              Real-time information on medicine availability, doctor schedules,
              and emergency services across Sri Lanka. Helping vulnerable
              populations access the healthcare they need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-base px-8 hover-glow"
              >
                <Link to="/map">View Map</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 text-base px-8 hover:bg-foreground/5"
              >
                <Link to="/medicines">Find Medicine</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="flex items-center gap-1 text-sm text-secondary">
                  <TrendingUp className="h-3 w-3" />
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access critical healthcare information instantly through our
            comprehensive platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full hover-lift hover-glow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 mb-16">
        <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 animate-fade-in hover-lift">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Help Us Help Others
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your reports on medicine availability and facility conditions help
              thousands of patients every day
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover-glow"
            >
              Report Availability
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
