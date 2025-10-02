import { useState, useMemo } from "react";
import { MapPin, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FacilityCard from "@/components/FacilityCard";
import Map from "@/components/Map";
import { facilities, provinces, getDistricts, getCities, Facility } from "@/data/facilities";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MapView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("All Provinces");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const districts = useMemo(() => getDistricts(selectedProvince), [selectedProvince]);
  const cities = useMemo(() => getCities(selectedDistrict), [selectedDistrict]);

  const filteredFacilities = useMemo(() => {
    return facilities.filter((f) => {
      const matchesSearch =
        f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.city.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesProvince =
        selectedProvince === "All Provinces" || f.province === selectedProvince;
      
      const matchesDistrict =
        selectedDistrict === "All Districts" || f.district === selectedDistrict;
      
      const matchesCity =
        selectedCity === "All Cities" || f.city === selectedCity;

      return matchesSearch && matchesProvince && matchesDistrict && matchesCity;
    });
  }, [searchTerm, selectedProvince, selectedDistrict, selectedCity]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Healthcare Facility Map
          </h1>
          <p className="text-muted-foreground">
            Find hospitals and pharmacies near you with real-time availability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Search & Results */}
          <div className="lg:col-span-1 space-y-4 animate-slide-in-left">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search facilities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid grid-cols-1 gap-3">
              <Select value={selectedProvince} onValueChange={(value) => {
                setSelectedProvince(value);
                setSelectedDistrict("All Districts");
                setSelectedCity("All Cities");
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Province" />
                </SelectTrigger>
                <SelectContent>
                  {provinces.map((province) => (
                    <SelectItem key={province} value={province}>
                      {province}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDistrict} onValueChange={(value) => {
                setSelectedDistrict(value);
                setSelectedCity("All Cities");
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select District" />
                </SelectTrigger>
                <SelectContent>
                  {districts.map((district) => (
                    <SelectItem key={district} value={district}>
                      {district}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="text-sm text-muted-foreground">
              Showing {filteredFacilities.length} facilities
            </div>

            <div className="space-y-4 max-h-[calc(100vh-450px)] overflow-y-auto pr-2">
              {filteredFacilities.map((facility) => (
                <div
                  key={facility.id}
                  onClick={() => setSelectedFacility(facility)}
                  className="cursor-pointer"
                >
                  <FacilityCard {...facility} />
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <Card className="h-[calc(100vh-240px)] min-h-[500px]">
              <CardContent className="p-0 h-full relative">
                <Map facilities={filteredFacilities} selectedFacility={selectedFacility} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
