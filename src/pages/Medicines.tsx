import { useState, useMemo } from "react";
import { Search, Filter, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/StatusBadge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FacilityStatus = "available" | "limited" | "unavailable";

interface Facility {
  name: string;
  status: FacilityStatus;
}

interface Medicine {
  id: number;
  name: string;
  category: string;
  manufacturer: string;
  facilities: Facility[];
}

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [manufacturerFilter, setManufacturerFilter] = useState("all");
  const [facilityFilter, setFacilityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const medicines: Medicine[] = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      category: "Antibiotic",
      manufacturer: "Local Pharma Ltd",
      facilities: [
        { name: "National Hospital", status: "limited" as const },
        { name: "Colombo General", status: "available" as const },
        { name: "Base Hospital Galle", status: "limited" as const },
      ],
    },
    {
      id: 3,
      name: "Metformin 500mg",
      category: "Diabetes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "available" as const },
        { name: "Teaching Hospital Peradeniya", status: "limited" as const },
      ],
    },
    {
      id: 4,
      name: "Insulin Glargine",
      category: "Diabetes",
      manufacturer: "Imported",
      facilities: [
        { name: "National Hospital", status: "limited" as const },
        { name: "Colombo General", status: "unavailable" as const },
        { name: "Teaching Hospital Kandy", status: "limited" as const },
      ],
    },
    // Anaesthetics
    {
      id: 5,
      name: "Halothane",
      category: "Anaesthetics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 6,
      name: "Nitrous oxide",
      category: "Anaesthetics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 7,
      name: "Oxygen",
      category: "Anaesthetics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 8,
      name: "Isoflurane",
      category: "Anaesthetics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 9,
      name: "Thiopental",
      category: "Anaesthetics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 10,
      name: "Ketamine",
      category: "Anaesthetics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 11,
      name: "Propofol",
      category: "Anaesthetics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 12,
      name: "Bupivacaine",
      category: "Anaesthetics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 13,
      name: "Lidocaine",
      category: "Anaesthetics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 14,
      name: "Lidocaine + adrenaline (epinephrine)",
      category: "Anaesthetics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 15,
      name: "Ephedrine",
      category: "Anaesthetics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    // Analgesics
    {
      id: 16,
      name: "Atropine",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 17,
      name: "Diazepam",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 18,
      name: "Morphine",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 19,
      name: "Midazolam",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 20,
      name: "Fentanyl",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 21,
      name: "Acetylsalicylic acid",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 22,
      name: "Diclofenac sodium",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 23,
      name: "Ibuprofen",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 24,
      name: "Paracetamol",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 25,
      name: "Tramadol",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 26,
      name: "Allopurinol",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 27,
      name: "Hydroxychloroquine",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 28,
      name: "Chloroquine",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 29,
      name: "Methotrexate",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 30,
      name: "Sulfasalazine",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    // Antiallergics
    {
      id: 31,
      name: "Azathioprine",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 32,
      name: "Methylprednisolone",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 33,
      name: "Leflunomide",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 34,
      name: "Cetirizine",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 35,
      name: "Chlorphenamine",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 36,
      name: "Adrenaline (epinephrine)",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 37,
      name: "Hydrocortisone",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    // Antidotes
    {
      id: 38,
      name: "Pralidoxime",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 39,
      name: "Charcoal, activated",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 40,
      name: "Fuller's earth",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 41,
      name: "Acetylcysteine",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 42,
      name: "Calcium gluconate",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 43,
      name: "Deferiprone",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 44,
      name: "Flumazenil",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 45,
      name: "Desferrioxamine",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 46,
      name: "DL-methionine",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 47,
      name: "Naloxone",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 48,
      name: "Penicillamine",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 49,
      name: "Protamine sulfate",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    // Anticonvulsants
    {
      id: 50,
      name: "Carbamazepine",
      category: "Anticonvulsants",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 51,
      name: "Clorazepate",
      category: "Anticonvulsants",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 52,
      name: "Diazepam",
      category: "Anticonvulsants",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 53,
      name: "Magnesium sulfate",
      category: "Anticonvulsants",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 54,
      name: "Phenobarbital",
      category: "Anticonvulsants",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 55,
      name: "Phenytoin",
      category: "Anticonvulsants",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 56,
      name: "Valproic acid",
      category: "Anticonvulsants",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 57,
      name: "Lamotrigine",
      category: "Anticonvulsants",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 58,
      name: "Topiramate",
      category: "Anticonvulsants",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    // Anti-Infective
    {
      id: 59,
      name: "Mebendazole",
      category: "Anti-Infective",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 60,
      name: "Amoxicillin",
      category: "Anti-Infective",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "National Hospital", status: "available" as const },
        { name: "Colombo General", status: "limited" as const },
        { name: "Teaching Hospital Kandy", status: "unavailable" as const },
      ],
    },
    {
      id: 61,
      name: "Sulfasalazine",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "A & D Pharmacy, Mulleriyawa, Colombo",
          status: "available" as const,
        },
        {
          name: "Nawala Pharmacy, Nawala, Colombo",
          status: "limited" as const,
        },
        { name: "Base Hospital Galle, Galle", status: "unavailable" as const },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "available" as const,
        },
      ],
    },
    {
      id: 62,
      name: "Azathioprine",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "Akila Pharmacy, Wadduwa, Kalutara",
          status: "available" as const,
        },
        {
          name: "Mulleriyawa New Town Pharmacy, Colombo",
          status: "limited" as const,
        },
        { name: "Base Hospital Galle, Galle", status: "limited" as const },
        {
          name: "District General Hospital Matara, Matara",
          status: "available" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "limited" as const,
        },
      ],
    },
    {
      id: 63,
      name: "Methylprednisolone",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "Polgahawela Pharmacy, Kurunegala",
          status: "available" as const,
        },
        { name: "Nugawela Pharmacy, Kandy", status: "limited" as const },
        {
          name: "Teaching Hospital Peradeniya, Peradeniya",
          status: "unavailable" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        { name: "Durdans Hospital, Colombo", status: "available" as const },
      ],
    },
    {
      id: 64,
      name: "Cetirizine",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "Nawinna Pharmacy, Colombo", status: "available" as const },
        {
          name: "Mulleriyawa New Town Pharmacy, Colombo",
          status: "limited" as const,
        },
        {
          name: "Castle Street Hospital for Women, Colombo",
          status: "available" as const,
        },
        {
          name: "Asiri Central Hospital, Colombo",
          status: "unavailable" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "limited" as const,
        },
      ],
    },
    {
      id: 65,
      name: "Chlorphenamine",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "Akurana Medicals, Kandy", status: "available" as const },
        { name: "Panadura Pharmacy, Panadura", status: "limited" as const },
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "unavailable" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        { name: "Base Hospital Ragama, Ragama", status: "limited" as const },
      ],
    },
    {
      id: 66,
      name: "Adrenaline (epinephrine)",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "A & D Pharmacy, Mulleriyawa, Colombo",
          status: "available" as const,
        },
        {
          name: "Nawala Pharmacy, Nawala, Colombo",
          status: "limited" as const,
        },
        {
          name: "Teaching Hospital Karapitiya, Galle",
          status: "unavailable" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "available" as const,
        },
        { name: "Base Hospital Ragama, Ragama", status: "limited" as const },
        { name: "Panadura Pharmacy, Panadura", status: "available" as const },
      ],
    },
    {
      id: 67,
      name: "Hydrocortisone",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "Akila Pharmacy, Wadduwa, Kalutara",
          status: "available" as const,
        },
        {
          name: "Mulleriyawa New Town Pharmacy, Colombo",
          status: "limited" as const,
        },
        { name: "Base Hospital Galle, Galle", status: "limited" as const },
        {
          name: "District General Hospital Matara, Matara",
          status: "available" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "limited" as const,
        },
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "available" as const,
        },
        {
          name: "Castle Street Hospital for Women, Colombo",
          status: "unavailable" as const,
        },
      ],
    },
    {
      id: 68,
      name: "Pralidoxime",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "Polgahawela Pharmacy, Kurunegala",
          status: "available" as const,
        },
        { name: "Nugawela Pharmacy, Kandy", status: "limited" as const },
        {
          name: "Teaching Hospital Peradeniya, Peradeniya",
          status: "unavailable" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        { name: "Durdans Hospital, Colombo", status: "available" as const },
        { name: "Hemas Hospitals, Colombo", status: "limited" as const },
      ],
    },
    {
      id: 69,
      name: "Charcoal, activated",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "Nawinna Pharmacy, Colombo", status: "available" as const },
        {
          name: "Mulleriyawa New Town Pharmacy, Colombo",
          status: "limited" as const,
        },
        {
          name: "Castle Street Hospital for Women, Colombo",
          status: "available" as const,
        },
        {
          name: "Asiri Central Hospital, Colombo",
          status: "unavailable" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "limited" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
      ],
    },
    {
      id: 70,
      name: "Acetylcysteine",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "Akurana Medicals, Kandy", status: "available" as const },
        { name: "Panadura Pharmacy, Panadura", status: "limited" as const },
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "unavailable" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        { name: "Base Hospital Ragama, Ragama", status: "limited" as const },
      ],
    },
    {
      id: 71,
      name: "Calcium gluconate",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "Akurana Medicals, Kandy", status: "available" as const },
        { name: "Panadura Pharmacy, Panadura", status: "available" as const },
        {
          name: "Castle Street Hospital for Women, Colombo",
          status: "limited" as const,
        },
        { name: "Durdans Hospital, Colombo", status: "limited" as const },
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "available" as const,
        },
      ],
    },
    {
      id: 72,
      name: "Diclofenac sodium",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "Colombo General Hospital, Colombo",
          status: "available" as const,
        },
        { name: "Base Hospital Ragama, Ragama", status: "limited" as const },
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "unavailable" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        { name: "Panadura Pharmacy, Panadura", status: "limited" as const },
      ],
    },
    {
      id: 73,
      name: "Atorvastatin",
      category: "Cardiovascular",
      manufacturer: "Local Pharma Ltd",
      facilities: [
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Teaching Hospital Peradeniya, Peradeniya",
          status: "limited" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "unavailable" as const,
        },
        {
          name: "A & D Pharmacy, Mulleriyawa, Colombo",
          status: "available" as const,
        },
        {
          name: "Nawala Pharmacy, Nawala, Colombo",
          status: "limited" as const,
        },
      ],
    },
    {
      id: 74,
      name: "Losartan",
      category: "Cardiovascular",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "District General Hospital Matara, Matara",
          status: "available" as const,
        },
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "available" as const,
        },
        { name: "Base Hospital Galle, Galle", status: "limited" as const },
        {
          name: "Colombo General Hospital, Colombo",
          status: "limited" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
      ],
    },
    {
      id: 75,
      name: "Metformin",
      category: "Diabetes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "available" as const,
        },
        {
          name: "Teaching Hospital Peradeniya, Peradeniya",
          status: "limited" as const,
        },
        { name: "Akurana Medicals, Kandy", status: "available" as const },
        {
          name: "Mulleriyawa New Town Pharmacy, Colombo",
          status: "limited" as const,
        },
      ],
    },
    {
      id: 76,
      name: "Paracetamol",
      category: "Pain Relief",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        { name: "Teaching Hospital Kandy, Kandy", status: "limited" as const },
        {
          name: "Colombo General Hospital, Colombo",
          status: "available" as const,
        },
        {
          name: "Nawala Pharmacy, Nawala, Colombo",
          status: "available" as const,
        },
        { name: "Base Hospital Ragama, Ragama", status: "limited" as const },
      ],
    },
    {
      id: 77,
      name: "Omeprazole",
      category: "Anti-Ulcer",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "Colombo General Hospital, Colombo",
          status: "available" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "limited" as const,
        },
        {
          name: "Teaching Hospital Karapitiya, Galle",
          status: "limited" as const,
        },
        { name: "Base Hospital Galle, Galle", status: "unavailable" as const },
        { name: "Akurana Medicals, Kandy", status: "available" as const },
      ],
    },
    {
      id: 78,
      name: "Aspirin",
      category: "Cardiovascular",
      manufacturer: "Local Pharma Ltd",
      facilities: [
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Teaching Hospital Peradeniya, Peradeniya",
          status: "limited" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "unavailable" as const,
        },
        { name: "Panadura Pharmacy, Panadura", status: "available" as const },
        {
          name: "District General Hospital Matara, Matara",
          status: "limited" as const,
        },
      ],
    },
    {
      id: 79,
      name: "Domperidone",
      category: "Gastrointestinal",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "available" as const,
        },
        { name: "Base Hospital Ragama, Ragama", status: "limited" as const },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "limited" as const,
        },
        {
          name: "A & D Pharmacy, Mulleriyawa, Colombo",
          status: "available" as const,
        },
      ],
    },
    {
      id: 80,
      name: "Clopidogrel",
      category: "Cardiovascular",
      manufacturer: "Local Pharma Ltd",
      facilities: [
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Teaching Hospital Karapitiya, Galle",
          status: "limited" as const,
        },
        { name: "Base Hospital Galle, Galle", status: "limited" as const },
        {
          name: "Colombo General Hospital, Colombo",
          status: "available" as const,
        },
        { name: "Panadura Pharmacy, Panadura", status: "limited" as const },
      ],
    },
    {
      id: 66,
      name: "Adrenaline (epinephrine)",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "A & D Pharmacy, Mulleriyawa, Colombo",
          status: "available" as const,
        },
        {
          name: "Nawala Pharmacy, Nawala, Colombo",
          status: "limited" as const,
        },
        {
          name: "Teaching Hospital Karapitiya, Galle",
          status: "unavailable" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "available" as const,
        },
        { name: "Base Hospital Ragama, Ragama", status: "limited" as const },
        { name: "Panadura Pharmacy, Panadura", status: "available" as const },
      ],
    },
    {
      id: 67,
      name: "Hydrocortisone",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "Akila Pharmacy, Wadduwa, Kalutara",
          status: "available" as const,
        },
        {
          name: "Mulleriyawa New Town Pharmacy, Colombo",
          status: "limited" as const,
        },
        { name: "Base Hospital Galle, Galle", status: "limited" as const },
        {
          name: "District General Hospital Matara, Matara",
          status: "available" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "limited" as const,
        },
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "available" as const,
        },
        {
          name: "Castle Street Hospital for Women, Colombo",
          status: "unavailable" as const,
        },
      ],
    },
    {
      id: 68,
      name: "Pralidoxime",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "Polgahawela Pharmacy, Kurunegala",
          status: "available" as const,
        },
        { name: "Nugawela Pharmacy, Kandy", status: "limited" as const },
        {
          name: "Teaching Hospital Peradeniya, Peradeniya",
          status: "unavailable" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        { name: "Durdans Hospital, Colombo", status: "available" as const },
        { name: "Hemas Hospitals, Colombo", status: "limited" as const },
      ],
    },
    {
      id: 69,
      name: "Charcoal, activated",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "Nawinna Pharmacy, Colombo", status: "available" as const },
        {
          name: "Mulleriyawa New Town Pharmacy, Colombo",
          status: "limited" as const,
        },
        {
          name: "Castle Street Hospital for Women, Colombo",
          status: "available" as const,
        },
        {
          name: "Asiri Central Hospital, Colombo",
          status: "unavailable" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "limited" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
      ],
    },
    {
      id: 70,
      name: "Acetylcysteine",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "Akurana Medicals, Kandy", status: "available" as const },
        { name: "Panadura Pharmacy, Panadura", status: "limited" as const },
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "unavailable" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        { name: "Base Hospital Ragama, Ragama", status: "limited" as const },
      ],
    },
    {
      id: 71,
      name: "Calcium gluconate",
      category: "Antidotes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        { name: "Akurana Medicals, Kandy", status: "available" as const },
        { name: "Panadura Pharmacy, Panadura", status: "available" as const },
        {
          name: "Castle Street Hospital for Women, Colombo",
          status: "limited" as const,
        },
        { name: "Durdans Hospital, Colombo", status: "limited" as const },
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "available" as const,
        },
      ],
    },
    {
      id: 72,
      name: "Diclofenac sodium",
      category: "Analgesics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "Colombo General Hospital, Colombo",
          status: "available" as const,
        },
        { name: "Base Hospital Ragama, Ragama", status: "limited" as const },
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "unavailable" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        { name: "Panadura Pharmacy, Panadura", status: "limited" as const },
      ],
    },
    {
      id: 73,
      name: "Atorvastatin",
      category: "Cardiovascular",
      manufacturer: "Local Pharma Ltd",
      facilities: [
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Teaching Hospital Peradeniya, Peradeniya",
          status: "limited" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "unavailable" as const,
        },
        {
          name: "A & D Pharmacy, Mulleriyawa, Colombo",
          status: "available" as const,
        },
        {
          name: "Nawala Pharmacy, Nawala, Colombo",
          status: "limited" as const,
        },
      ],
    },
    {
      id: 74,
      name: "Losartan",
      category: "Cardiovascular",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "District General Hospital Matara, Matara",
          status: "available" as const,
        },
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "available" as const,
        },
        { name: "Base Hospital Galle, Galle", status: "limited" as const },
        {
          name: "Colombo General Hospital, Colombo",
          status: "limited" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
      ],
    },
    {
      id: 75,
      name: "Metformin",
      category: "Diabetes",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "available" as const,
        },
        {
          name: "Teaching Hospital Peradeniya, Peradeniya",
          status: "limited" as const,
        },
        { name: "Akurana Medicals, Kandy", status: "available" as const },
        {
          name: "Mulleriyawa New Town Pharmacy, Colombo",
          status: "limited" as const,
        },
      ],
    },
    {
      id: 76,
      name: "Paracetamol",
      category: "Pain Relief",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        { name: "Teaching Hospital Kandy, Kandy", status: "limited" as const },
        {
          name: "Colombo General Hospital, Colombo",
          status: "available" as const,
        },
        {
          name: "Nawala Pharmacy, Nawala, Colombo",
          status: "available" as const,
        },
        { name: "Base Hospital Ragama, Ragama", status: "limited" as const },
      ],
    },
    {
      id: 77,
      name: "Omeprazole",
      category: "Anti-Ulcer",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "Colombo General Hospital, Colombo",
          status: "available" as const,
        },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "limited" as const,
        },
        {
          name: "Teaching Hospital Karapitiya, Galle",
          status: "limited" as const,
        },
        { name: "Base Hospital Galle, Galle", status: "unavailable" as const },
        { name: "Akurana Medicals, Kandy", status: "available" as const },
      ],
    },
    {
      id: 78,
      name: "Aspirin",
      category: "Cardiovascular",
      manufacturer: "Local Pharma Ltd",
      facilities: [
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Teaching Hospital Peradeniya, Peradeniya",
          status: "limited" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "unavailable" as const,
        },
        { name: "Panadura Pharmacy, Panadura", status: "available" as const },
        {
          name: "District General Hospital Matara, Matara",
          status: "limited" as const,
        },
      ],
    },
    {
      id: 79,
      name: "Domperidone",
      category: "Gastrointestinal",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "Teaching Hospital Kandy, Kandy",
          status: "available" as const,
        },
        { name: "Base Hospital Ragama, Ragama", status: "limited" as const },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "limited" as const,
        },
        {
          name: "A & D Pharmacy, Mulleriyawa, Colombo",
          status: "available" as const,
        },
      ],
    },
    {
      id: 80,
      name: "Clopidogrel",
      category: "Cardiovascular",
      manufacturer: "Local Pharma Ltd",
      facilities: [
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Teaching Hospital Karapitiya, Galle",
          status: "limited" as const,
        },
        { name: "Base Hospital Galle, Galle", status: "limited" as const },
        {
          name: "Colombo General Hospital, Colombo",
          status: "available" as const,
        },
        { name: "Panadura Pharmacy, Panadura", status: "limited" as const },
      ],
    },
    {
      id: 81,
      name: "Cetirizine",
      category: "Antiallergics",
      manufacturer: "State Pharmaceuticals",
      facilities: [
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Teaching Hospital Karapitiya, Galle",
          status: "available" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "limited" as const,
        },
        { name: "Nawinna Pharmacy, Colombo", status: "available" as const },
        { name: "Base Hospital Ragama, Ragama", status: "limited" as const },
      ],
    },
    {
      id: 82,
      name: "Gliclazide",
      category: "Diabetes",
      manufacturer: "Local Pharma Ltd",
      facilities: [
        { name: "Teaching Hospital Kandy, Kandy", status: "limited" as const },
        {
          name: "National Hospital of Sri Lanka, Colombo",
          status: "available" as const,
        },
        {
          name: "Colombo General Hospital, Colombo",
          status: "available" as const,
        },
        { name: "Akurana Medicals, Kandy", status: "limited" as const },
        { name: "Panadura Pharmacy, Panadura", status: "available" as const },
      ],
    },
  ];

  // Extract unique values for filters dynamically
  const categories = [
    "all",
    ...Array.from(new Set(medicines.map((m) => m.category))),
  ].sort();
  const manufacturers = [
    "all",
    ...Array.from(new Set(medicines.map((m) => m.manufacturer))),
  ].sort();
  const facilities = [
    "all",
    ...Array.from(
      new Set(medicines.flatMap((m) => m.facilities.map((f) => f.name)))
    ),
  ].sort();
  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "available", label: "Available" },
    { value: "limited", label: "Limited" },
    { value: "unavailable", label: "Unavailable" },
  ];

  // Memoize filtering result for performance
  const getFilteredMedicines = useMemo(() => {
    const listToFilter = medicines;
    const searchLower = searchTerm.toLowerCase().trim();

    return listToFilter.filter((medicine) => {
      // Search filter (name, category, manufacturer)
      if (searchTerm) {
        if (
          !medicine.name.toLowerCase().includes(searchLower) &&
          !medicine.category.toLowerCase().includes(searchLower) &&
          !medicine.manufacturer.toLowerCase().includes(searchLower)
        ) {
          return false;
        }
      }

      // Category filter
      if (categoryFilter !== "all" && medicine.category !== categoryFilter) {
        return false;
      }

      // Manufacturer filter
      if (
        manufacturerFilter !== "all" &&
        medicine.manufacturer !== manufacturerFilter
      ) {
        return false;
      }

      // Facility and status filter combined
      if (facilityFilter !== "all" || statusFilter !== "all") {
        const facilityMatch = medicine.facilities.some((fac) => {
          const facilityCheck =
            facilityFilter === "all" || fac.name === facilityFilter;
          const statusCheck =
            statusFilter === "all" || fac.status === statusFilter;
          return facilityCheck && statusCheck;
        });
        if (!facilityMatch) return false;
      }

      // Passed all filters
      return true;
    });
  }, [
    searchTerm,
    categoryFilter,
    manufacturerFilter,
    facilityFilter,
    statusFilter,
    medicines,
  ]);

  const clearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("all");
    setManufacturerFilter("all");
    setFacilityFilter("all");
    setStatusFilter("all");
  };

  const isFilterActive =
    searchTerm !== "" ||
    categoryFilter !== "all" ||
    manufacturerFilter !== "all" ||
    facilityFilter !== "all" ||
    statusFilter !== "all";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Medicine Availability
          </h1>
          <p className="text-muted-foreground">
            Search for medicines and check availability across hospitals and
            pharmacies
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search medicines by name, category, or manufacturer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                onClick={() => setSearchTerm("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Filter Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={manufacturerFilter}
              onValueChange={setManufacturerFilter}
            >
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Manufacturer" />
              </SelectTrigger>
              <SelectContent>
                {manufacturers.map((man) => (
                  <SelectItem key={man} value={man}>
                    {man === "all" ? "All Manufacturers" : man}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={facilityFilter} onValueChange={setFacilityFilter}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Facility" />
              </SelectTrigger>
              <SelectContent>
                {facilities.map((fac) => (
                  <SelectItem key={fac} value={fac}>
                    {fac === "all" ? "All Facilities" : fac}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters & Clear Button */}
          {isFilterActive && (
            <div className="flex flex-wrap items-center gap-2 p-3 bg-muted/50 rounded-lg">
              <span className="text-sm font-medium">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                  Search: "{searchTerm}"
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 hover:bg-primary/20"
                    onClick={() => setSearchTerm("")}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </span>
              )}
              {categoryFilter !== "all" && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                  Category: {categoryFilter}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 hover:bg-primary/20"
                    onClick={() => setCategoryFilter("all")}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </span>
              )}
              {manufacturerFilter !== "all" && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                  Manufacturer: {manufacturerFilter}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 hover:bg-primary/20"
                    onClick={() => setManufacturerFilter("all")}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </span>
              )}
              {facilityFilter !== "all" && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                  Facility: {facilityFilter}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 hover:bg-primary/20"
                    onClick={() => setFacilityFilter("all")}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </span>
              )}
              {statusFilter !== "all" && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                  Status:{" "}
                  {statusOptions.find((s) => s.value === statusFilter)?.label}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 hover:bg-primary/20"
                    onClick={() => setStatusFilter("all")}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </span>
              )}
              <Button
                variant="outline"
                onClick={clearFilters}
                className="ml-auto text-sm"
                size="sm"
              >
                Clear All
              </Button>
            </div>
          )}
        </div>

        {/* Debug Info */}
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm font-medium text-blue-800">Current Filters:</p>
          <div className="text-xs text-blue-600 mt-1 space-y-1">
            <div>Search: "{searchTerm}"</div>
            <div>Category: {categoryFilter}</div>
            <div>Manufacturer: {manufacturerFilter}</div>
            <div>Facility: {facilityFilter}</div>
            <div>Status: {statusFilter}</div>
            <div className="font-semibold mt-1">
              Showing {getFilteredMedicines.length} of {medicines.length}{" "}
              medicines
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {getFilteredMedicines.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  {isFilterActive
                    ? "No medicines found matching your current filters."
                    : "No medicines available."}
                </p>
                {isFilterActive && (
                  <Button variant="outline" onClick={clearFilters}>
                    Clear All Filters
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            getFilteredMedicines.map((medicine) => (
              <Card
                key={medicine.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                    <div>
                      <CardTitle className="text-xl">{medicine.name}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2 text-sm text-muted-foreground">
                        <span className="bg-muted px-2 py-1 rounded">
                          {medicine.category}
                        </span>
                        <span>{medicine.manufacturer}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Report Status
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Availability at facilities:
                    </p>
                    {medicine.facilities.map((facility, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                      >
                        <span className="text-sm font-medium">
                          {facility.name}
                        </span>
                        <StatusBadge status={facility.status} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Medicines;
