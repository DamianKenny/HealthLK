import { Badge } from "@/components/ui/badge";

type Status = "available" | "limited" | "unavailable";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const statusConfig = {
    available: {
      label: "Available",
      className: "bg-secondary hover:bg-secondary text-secondary-foreground",
    },
    limited: {
      label: "Limited",
      className: "bg-accent hover:bg-accent text-accent-foreground",
    },
    unavailable: {
      label: "Unavailable",
      className:
        "bg-destructive hover:bg-destructive text-destructive-foreground",
    },
  };

  const config = statusConfig[status];

  return (
    <Badge className={`${config.className} ${className || ""}`}>
      {config.label}
    </Badge>
  );
};

export default StatusBadge;
