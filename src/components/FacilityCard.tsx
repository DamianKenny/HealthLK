import { MapPin, Phone, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "./StatusBadge";

interface FacilityCardProps {
  name: string;
  type: string;
  address: string;
  phone: string;
  status: "available" | "limited" | "unavailable";
  rating?: number;
  distance?: string;
}

const FacilityCard = ({
  name,
  type,
  address,
  phone,
  status,
  rating,
  distance,
}: FacilityCardProps) => {
  return (
    <Card className="hover-lift hover-glow transition-all">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{type}</p>
          </div>
          <StatusBadge status={status} />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-2 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <span className="text-muted-foreground">{address}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <a href={`tel:${phone}`} className="text-primary hover:underline">
            {phone}
          </a>
        </div>

        {distance && (
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="text-muted-foreground">{distance}</span>
          </div>
        )}

        {rating && (
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 text-accent fill-accent" />
            <span className="font-medium">{rating.toFixed(1)}</span>
            <span className="text-muted-foreground">/5.0</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FacilityCard;
