import { useState } from "react";
import { Search, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");

  // Mock data
  const doctors = [
    {
      id: 1,
      name: "Dr. Nimal Perera",
      specialty: "Cardiology",
      hospital: "National Hospital of Sri Lanka",
      availability: "Mon, Wed, Fri",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 10:30 AM",
    },
    {
      id: 2,
      name: "Dr. Sanduni Fernando",
      specialty: "Pediatrics",
      hospital: "Colombo General Hospital",
      availability: "Tue, Thu, Sat",
      time: "2:00 PM - 5:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 2:00 PM",
    },
    {
      id: 3,
      name: "Dr. Kasun Silva",
      specialty: "Orthopedics",
      hospital: "Teaching Hospital Kandy",
      availability: "Mon-Fri",
      time: "8:00 AM - 11:00 AM",
      queueStatus: "Short",
      nextAvailable: "Today, 8:15 AM",
    },
    {
      id: 4,
      name: "Dr. Chamari Rajapaksa",
      specialty: "Neurology",
      hospital: "National Hospital of Sri Lanka",
      availability: "Wed, Fri",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Friday, 1:00 PM",
    },
    {
      id: 5,
      name: "Dr. Nirmala Wijesinghe",
      specialty: "Radiologist",
      hospital: "Nawaloka Hospital",
      availability: "Mon, Wed, Fri",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 10:00 AM",
    },
    {
      id: 6,
      name: "Dr. Lakmali Paranahewa",
      specialty: "Radiologist",
      hospital: "Asiri Central Hospital",
      availability: "Tue, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 2:00 PM",
    },
    {
      id: 7,
      name: "Dr. Jerard Fernando",
      specialty: "Radiologist",
      hospital: "Asiri Central Hospital",
      availability: "Mon, Wed, Fri",
      time: "8:00 AM - 11:00 AM",
      queueStatus: "Short",
      nextAvailable: "Today, 9:30 AM",
    },
    {
      id: 8,
      name: "Dr. Shantha Hettiarachchi",
      specialty: "Radiologist",
      hospital: "Kings Hospital",
      availability: "Mon, Fri",
      time: "10:00 AM - 1:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 11:00 AM",
    },
    {
      id: 9,
      name: "Dr. Lalith Wijerathne",
      specialty: "Rheumatologist",
      hospital: "Asiri Central Hospital",
      availability: "Tue, Thu",
      time: "2:00 PM - 5:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 3:00 PM",
    },
    {
      id: 10,
      name: "Dr. Lilani P. Weerasekara",
      specialty: "Rheumatologist",
      hospital: "Asiri Medical Hospital",
      availability: "Mon, Wed",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Monday, 10:00 AM",
    },
    {
      id: 11,
      name: "Dr. Kaleel Cassim",
      specialty: "Rheumatologist",
      hospital: "Asiri Medical Hospital",
      availability: "Tue, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 2:00 PM",
    },
    {
      id: 12,
      name: "Dr. Sarath Kumara Kollure",
      specialty: "General Surgeon",
      hospital: "Winsetha Hospital",
      availability: "Mon, Fri",
      time: "8:00 AM - 11:00 AM",
      queueStatus: "Long",
      nextAvailable: "Friday, 9:00 AM",
    },
    {
      id: 13,
      name: "Dr. Rohana R Vidanage",
      specialty: "General Surgeon",
      hospital: "Asiri Surgical Hospital",
      availability: "Tue, Thu",
      time: "10:00 AM - 1:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Thursday, 11:00 AM",
    },
    {
      id: 14,
      name: "Dr. Duminda Ariyaratne",
      specialty: "General Surgeon",
      hospital: "Lanka Hospital",
      availability: "Mon, Wed",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 10:00 AM",
    },
    {
      id: 15,
      name: "Prof. Mohan De Silva",
      specialty: "General Surgeon",
      hospital: "Asiri Surgical Hospital",
      availability: "Tue, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 2:00 PM",
    },
    {
      id: 16,
      name: "Dr. M. Rizan Badurdeen",
      specialty: "General Surgeon",
      hospital: "Asiri Central Hospital",
      availability: "Mon, Fri",
      time: "8:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Friday, 9:30 AM",
    },
    {
      id: 17,
      name: "Dr. Ajith Malalasekara",
      specialty: "Urologist",
      hospital: "Durdans Hospital",
      availability: "Mon, Wed, Fri",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 9:00 AM",
    },
    {
      id: 18,
      name: "Dr. Anura Wijewardana",
      specialty: "Urologist",
      hospital: "Asiri Surgical Hospital",
      availability: "Tue, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 1:00 PM",
    },
    {
      id: 19,
      name: "Dr. A. A. Ahamed Riyaaz",
      specialty: "General Physician",
      hospital: "National Hospital of Sri Lanka",
      availability: "Mon, Wed, Fri",
      time: "8:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 10:00 AM",
    },
    {
      id: 20,
      name: "Dr. Ananda Wijewickrama",
      specialty: "General Physician",
      hospital: "Teaching Hospital Kandy",
      availability: "Tue, Thu",
      time: "2:00 PM - 6:00 PM",
      queueStatus: "Short",
      nextAvailable: "Tomorrow, 3:00 PM",
    },
    {
      id: 21,
      name: "Dr. Chandana Kanakaratne",
      specialty: "General Physician",
      hospital: "Colombo General Hospital",
      availability: "Mon-Fri",
      time: "8:30 AM - 1:30 PM",
      queueStatus: "Long",
      nextAvailable: "Friday, 9:00 AM",
    },
    {
      id: 22,
      name: "Dr. Darshan De Silva",
      specialty: "General Physician",
      hospital: "Durdans Hospital",
      availability: "Mon, Wed",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Wednesday, 10:00 AM",
    },
    {
      id: 23,
      name: "Dr. Eranga Silva",
      specialty: "General Physician",
      hospital: "National Hospital of Sri Lanka",
      availability: "Tue, Thu",
      time: "1:00 PM - 5:00 PM",
      queueStatus: "Short",
      nextAvailable: "Tomorrow, 2:00 PM",
    },
    {
      id: 25,
      name: "Dr. Nirmala Wijesinghe",
      specialty: "Radiologist",
      hospital: "Nawaloka Hospital",
      availability: "Mon, Wed, Fri",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 10:00 AM",
    },
    {
      id: 26,
      name: "Dr. Lakmali Paranahewa",
      specialty: "Radiologist",
      hospital: "Asiri Central Hospital",
      availability: "Tue, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 2:00 PM",
    },
    {
      id: 27,
      name: "Dr. Jerard Fernando",
      specialty: "Radiologist",
      hospital: "Asiri Central Hospital",
      availability: "Mon, Wed, Fri",
      time: "8:00 AM - 11:00 AM",
      queueStatus: "Short",
      nextAvailable: "Today, 9:30 AM",
    },
    {
      id: 28,
      name: "Dr. Shantha Hettiarachchi",
      specialty: "Radiologist",
      hospital: "Kings Hospital",
      availability: "Mon, Fri",
      time: "10:00 AM - 1:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 11:00 AM",
    },
    {
      id: 29,
      name: "Dr. Lalith Wijerathne",
      specialty: "Rheumatologist",
      hospital: "Asiri Central Hospital",
      availability: "Tue, Thu",
      time: "2:00 PM - 5:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 3:00 PM",
    },
    {
      id: 30,
      name: "Dr. Lilani P. Weerasekara",
      specialty: "Rheumatologist",
      hospital: "Asiri Medical Hospital",
      availability: "Mon, Wed",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Monday, 10:00 AM",
    },
    {
      id: 31,
      name: "Dr. Kaleel Cassim",
      specialty: "Rheumatologist",
      hospital: "Asiri Medical Hospital",
      availability: "Tue, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 2:00 PM",
    },
    {
      id: 32,
      name: "Dr. Sarath Kumara Kollure",
      specialty: "General Surgeon",
      hospital: "Winsetha Hospital",
      availability: "Mon, Fri",
      time: "8:00 AM - 11:00 AM",
      queueStatus: "Long",
      nextAvailable: "Friday, 9:00 AM",
    },
    {
      id: 33,
      name: "Dr. Rohana R Vidanage",
      specialty: "General Surgeon",
      hospital: "Asiri Surgical Hospital",
      availability: "Tue, Thu",
      time: "10:00 AM - 1:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Thursday, 11:00 AM",
    },
    {
      id: 34,
      name: "Dr. Duminda Ariyaratne",
      specialty: "General Surgeon",
      hospital: "Lanka Hospital",
      availability: "Mon, Wed",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 10:00 AM",
    },
    {
      id: 35,
      name: "Prof. Mohan De Silva",
      specialty: "General Surgeon",
      hospital: "Asiri Surgical Hospital",
      availability: "Tue, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 2:00 PM",
    },
    {
      id: 36,
      name: "Dr. M. Rizan Badurdeen",
      specialty: "General Surgeon",
      hospital: "Asiri Central Hospital",
      availability: "Mon, Fri",
      time: "8:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Friday, 9:30 AM",
    },
    {
      id: 37,
      name: "Dr. Ajith Malalasekara",
      specialty: "Urologist",
      hospital: "Durdans Hospital",
      availability: "Mon, Wed, Fri",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 9:00 AM",
    },
    {
      id: 38,
      name: "Dr. Anura Wijewardana",
      specialty: "Urologist",
      hospital: "Asiri Surgical Hospital",
      availability: "Tue, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 1:00 PM",
    },
    {
      id: 39,
      name: "Dr. A. A. Ahamed Riyaaz",
      specialty: "General Physician",
      hospital: "National Hospital of Sri Lanka",
      availability: "Mon, Wed, Fri",
      time: "8:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 10:00 AM",
    },
    {
      id: 40,
      name: "Dr. Ananda Wijewickrama",
      specialty: "General Physician",
      hospital: "Teaching Hospital Kandy",
      availability: "Tue, Thu",
      time: "2:00 PM - 6:00 PM",
      queueStatus: "Short",
      nextAvailable: "Tomorrow, 3:00 PM",
    },
    {
      id: 41,
      name: "Dr. Chandana Kanakaratne",
      specialty: "General Physician",
      hospital: "Colombo General Hospital",
      availability: "Mon-Fri",
      time: "8:30 AM - 1:30 PM",
      queueStatus: "Long",
      nextAvailable: "Friday, 9:00 AM",
    },
    {
      id: 42,
      name: "Dr. Darshan De Silva",
      specialty: "General Physician",
      hospital: "Durdans Hospital",
      availability: "Mon, Wed",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Wednesday, 10:00 AM",
    },
    {
      id: 43,
      name: "Dr. Eranga Silva",
      specialty: "General Physician",
      hospital: "National Hospital of Sri Lanka",
      availability: "Tue, Thu",
      time: "1:00 PM - 5:00 PM",
      queueStatus: "Short",
      nextAvailable: "Tomorrow, 2:00 PM",
    },
    {
      id: 44,
      name: "Dr. Madhawa Gunaratne",
      specialty: "Pediatrician",
      hospital: "Lady Ridgeway Hospital",
      availability: "Mon, Wed, Fri",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Long",
      nextAvailable: "Today, 11:00 AM",
    },
    {
      id: 45,
      name: "Dr. Asela Gunawardena",
      specialty: "General Physician",
      hospital: "Colombo National Hospital",
      availability: "Mon, Wed, Fri",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 10:00 AM",
    },
    {
      id: 46,
      name: "Dr. K. Thirumawalawa",
      specialty: "General Physician",
      hospital: "National Hospital of Sri Lanka",
      availability: "Tue, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 2:00 PM",
    },
    {
      id: 47,
      name: "Dr. W.A.J.N. Tissera",
      specialty: "Pediatrics",
      hospital: "National Hospital of Sri Lanka",
      availability: "Mon-Fri",
      time: "8:00 AM - 12:00 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 9:30 AM",
    },
    {
      id: 48,
      name: "Dr. A.H.N. Fernando",
      specialty: "General Physician",
      hospital: "Colombo General Hospital",
      availability: "Mon, Wed, Fri",
      time: "2:00 PM - 5:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Friday, 2:30 PM",
    },
    {
      id: 49,
      name: "Dr. Aruna Gunapala",
      specialty: "Orthopedics",
      hospital: "Teaching Hospital Kandy",
      availability: "Tue, Thu",
      time: "9:00 AM - 1:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 10:00 AM",
    },
    {
      id: 50,
      name: "Dr. B.G. Kumarakulasinghe",
      specialty: "General Surgeon",
      hospital: "Asiri Surgical Hospital",
      availability: "Mon-Fri",
      time: "10:00 AM - 2:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 11:00 AM",
    },
    {
      id: 51,
      name: "Dr. C. Chath Silva",
      specialty: "Cardiology",
      hospital: "Lanka Hospital",
      availability: "Mon, Wed, Fri",
      time: "8:30 AM - 11:30 AM",
      queueStatus: "Short",
      nextAvailable: "Today, 9:00 AM",
    },
    {
      id: 52,
      name: "Dr. S. Jayalath",
      specialty: "Neurology",
      hospital: "Castle Street Hospital",
      availability: "Tue, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 1:30 PM",
    },
    {
      id: 53,
      name: "Dr. R. Wickramasinghe",
      specialty: "Dermatology",
      hospital: "Asiri Central Hospital",
      availability: "Mon, Wed",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 11:00 AM",
    },
    {
      id: 54,
      name: "Dr. M. Rajapakse",
      specialty: "Gastroenterology",
      hospital: "National Hospital of Sri Lanka",
      availability: "Tue, Thu",
      time: "10:00 AM - 1:00 PM",
      queueStatus: "Short",
      nextAvailable: "Tomorrow, 10:30 AM",
    },
    {
      id: 55,
      name: "Dr. N. Perera",
      specialty: "General Physician",
      hospital: "Durdans Hospital",
      availability: "Mon, Fri",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 10:00 AM",
    },
    {
      id: 56,
      name: "Dr. H. Silva",
      specialty: "Orthopedics",
      hospital: "Teaching Hospital Kandy",
      availability: "Wed, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 2:00 PM",
    },
    {
      id: 57,
      name: "Dr. P. Jayasinghe",
      specialty: "Psychiatry",
      hospital: "National Institute of Mental Health",
      availability: "Mon, Wed, Fri",
      time: "8:00 AM - 12:00 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 9:00 AM",
    },
    {
      id: 58,
      name: "Dr. W. Perera",
      specialty: "General Surgeon",
      hospital: "Asiri Surgical Hospital",
      availability: "Mon, Thu",
      time: "9:00 AM - 11:30 AM",
      queueStatus: "Moderate",
      nextAvailable: "Thursday, 10:00 AM",
    },
    {
      id: 59,
      name: "Dr. S. Fernando",
      specialty: "Rheumatology",
      hospital: "Asiri Medical Hospital",
      availability: "Tue, Fri",
      time: "2:00 PM - 5:00 PM",
      queueStatus: "Long",
      nextAvailable: "Friday, 2:30 PM",
    },
    {
      id: 60,
      name: "Dr. M. A. Santos",
      specialty: "Ophthalmology",
      hospital: "Base Hospital Ragama",
      availability: "Mon, Wed, Fri",
      time: "8:30 AM - 12:30 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 9:00 AM",
    },
    {
      id: 61,
      name: "Dr. K. Silva",
      specialty: "Endocrinology",
      hospital: "Teaching Hospital Peradeniya",
      availability: "Tue, Thu",
      time: "9:00 AM - 1:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Tomorrow, 10:00 AM",
    },
    {
      id: 62,
      name: "Dr. R. Kumarasinghe",
      specialty: "Pediatrics",
      hospital: "Lady Ridgeway Hospital",
      availability: "Mon-Fri",
      time: "10:00 AM - 2:00 PM",
      queueStatus: "Long",
      nextAvailable: "Friday, 11:00 AM",
    },
    {
      id: 63,
      name: "Dr. L. De Silva",
      specialty: "Cardiology",
      hospital: "Lanka Hospital",
      availability: "Wed, Fri",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Friday, 1:30 PM",
    },
    {
      id: 64,
      name: "Dr. G. Perera",
      specialty: "General Medicine",
      hospital: "Colombo General Hospital",
      availability: "Mon, Thu",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Short",
      nextAvailable: "Thursday, 10:00 AM",
    },
    {
      id: 65,
      name: "Dr. T. Balamuraly",
      specialty: "General Medicine",
      hospital: "Sivaram Medicines & Surgery",
      availability: "Mon-Fri",
      time: "9:00 AM - 1:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 10:00 AM",
    },
    {
      id: 66,
      name: "Dr. J.D.V.C. Lekamwasam",
      specialty: "General Physician",
      hospital: "General Clinic, Colombo",
      availability: "Tue, Thu",
      time: "10:00 AM - 2:00 PM",
      queueStatus: "Short",
      nextAvailable: "Tomorrow, 10:30 AM",
    },
    {
      id: 67,
      name: "Dr. Ravindra Lokugamage",
      specialty: "General Physician",
      hospital: "Colombo General Hospital",
      availability: "Mon-Wed",
      time: "9:00 AM - 1:00 PM",
      queueStatus: "Long",
      nextAvailable: "Monday, 09:00 AM",
    },
    {
      id: 68,
      name: "Dr. A.A. Ahamed Riyaaz",
      specialty: "General Physician",
      hospital: "National Hospital of Sri Lanka",
      availability: "Mon, Wed, Fri",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 11:30 AM",
    },
    {
      id: 69,
      name: "Dr. Ananda Wijewickrama",
      specialty: "General Physician",
      hospital: "Teaching Hospital Kandy",
      availability: "Tue, Thu",
      time: "1:00 PM - 5:00 PM",
      queueStatus: "Short",
      nextAvailable: "Tomorrow, 2:00 PM",
    },
    {
      id: 70,
      name: "Dr. Anula Wijesundere",
      specialty: "General Physician",
      hospital: "Teaching Hospital Karapitiya",
      availability: "Mon, Fri",
      time: "9:30 AM - 12:30 PM",
      queueStatus: "Moderate",
      nextAvailable: "Friday, 10:00 AM",
    },
    {
      id: 71,
      name: "Dr. Harshini Fernando",
      specialty: "Internist",
      hospital: "Asiri Central Hospital",
      availability: "Mon-Fri",
      time: "9:00 AM - 1:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 11:00 AM",
    },
    {
      id: 72,
      name: "Dr. Saroj Jayasinghe",
      specialty: "Internist",
      hospital: "Asiri Central Hospital",
      availability: "Tue, Thu",
      time: "2:00 PM - 5:00 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 3:30 PM",
    },
    {
      id: 73,
      name: "Dr. Rushika Lanerolle",
      specialty: "Nephrologist",
      hospital: "Durdans Hospital",
      availability: "Mon, Wed, Fri",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 10:15 AM",
    },
    {
      id: 74,
      name: "Dr. Anura Hewagamage",
      specialty: "Nephrologist",
      hospital: "Asiri Medical Hospital",
      availability: "Tue, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 2:30 PM",
    },
    {
      id: 75,
      name: "Dr. M.T.M. Riffsy",
      specialty: "Neuro-physician",
      hospital: "Asiri Medical Hospital",
      availability: "Mon, Wed",
      time: "8:30 AM - 12:30 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 9:00 AM",
    },
    {
      id: 76,
      name: "Dr. Nirmala Wijesinghe",
      specialty: "Radiologist",
      hospital: "Nawaloka Centre",
      availability: "Mon-Fri",
      time: "9:00 AM - 1:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Today, 10:30 AM",
    },
    {
      id: 77,
      name: "Dr. Lakmali Paranahewa",
      specialty: "Radiologist",
      hospital: "Asiri Central Hospital",
      availability: "Tue, Thu",
      time: "2:00 PM - 5:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 3:00 PM",
    },
    {
      id: 78,
      name: "Dr. Jerard Fernando",
      specialty: "Radiologist",
      hospital: "Durdans Hospital",
      availability: "Mon, Wed, Fri",
      time: "8:00 AM - 12:00 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 9:00 AM",
    },
    {
      id: 79,
      name: "Dr. Shantha Hettiarachchi",
      specialty: "Radiologist",
      hospital: "Kings Hospital",
      availability: "Tue, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Thursday, 10:00 AM",
    },
    {
      id: 80,
      name: "Dr. Lalith Wijerathne",
      specialty: "Rheumatologist",
      hospital: "Asiri Central Hospital",
      availability: "Mon-Fri",
      time: "9:00 AM - 1:00 PM",
      queueStatus: "Long",
      nextAvailable: "Friday, 11:00 AM",
    },
    {
      id: 81,
      name: "Dr. Lilani P. Weerasekara",
      specialty: "Rheumatologist",
      hospital: "Asiri Medical Hospital",
      availability: "Tue, Thu",
      time: "2:00 PM - 5:00 PM",
      queueStatus: "Short",
      nextAvailable: "Thursday, 3:00 PM",
    },
    {
      id: 82,
      name: "Dr. Kaleel Cassim",
      specialty: "Rheumatologist",
      hospital: "Durdans Hospital",
      availability: "Mon, Wed",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Wednesday, 10:00 AM",
    },
    {
      id: 83,
      name: "Dr. Sarath Kumara Kollure",
      specialty: "Surgeon (General)",
      hospital: "Winsetha Hospital",
      availability: "Tue, Thu",
      time: "10:00 AM - 2:00 PM",
      queueStatus: "Long",
      nextAvailable: "Thursday, 11:00 AM",
    },
    {
      id: 84,
      name: "Dr. Rohana R Vidanage",
      specialty: "Surgeon (General)",
      hospital: "Asiri Surgical Hospital",
      availability: "Mon, Wed, Fri",
      time: "8:00 AM - 11:00 AM",
      queueStatus: "Short",
      nextAvailable: "Friday, 10:00 AM",
    },
    {
      id: 85,
      name: "Dr. Duminda Ariyaratne",
      specialty: "Surgeon (General)",
      hospital: "Lanka Hospital",
      availability: "Tue, Thu",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Thursday, 11:30 AM",
    },
    {
      id: 86,
      name: "Prof. Mohan De Silva",
      specialty: "Surgeon (General)",
      hospital: "Asiri Surgical Hospital",
      availability: "Mon-Fri",
      time: "10:00 AM - 3:00 PM",
      queueStatus: "Long",
      nextAvailable: "Today, 1:00 PM",
    },
    {
      id: 87,
      name: "Dr. M. Rizan Badurdeen",
      specialty: "Surgeon (General)",
      hospital: "Asiri Central Hospital",
      availability: "Mon, Wed",
      time: "8:00 AM - 11:00 AM",
      queueStatus: "Moderate",
      nextAvailable: "Wednesday, 9:00 AM",
    },
    {
      id: 88,
      name: "Dr. Ajith Malalasekara",
      specialty: "Urologist",
      hospital: "Durdans Hospital",
      availability: "Tue, Thu",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Short",
      nextAvailable: "Thursday, 10:00 AM",
    },
    {
      id: 89,
      name: "Dr. Anura Wijewardana",
      specialty: "Urologist",
      hospital: "Asiri Surgical Hospital",
      availability: "Mon, Fri",
      time: "10:00 AM - 2:00 PM",
      queueStatus: "Long",
      nextAvailable: "Friday, 11:00 AM",
    },
    {
      id: 90,
      name: "Dr. A. A. Ahamed Riyaaz",
      specialty: "General Physician",
      hospital: "National Hospital of Sri Lanka",
      availability: "Tue, Thu",
      time: "1:00 PM - 5:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Thursday, 2:00 PM",
    },
    {
      id: 91,
      name: "Dr. Ananda Wijewickrama",
      specialty: "General Physician",
      hospital: "Teaching Hospital Kandy",
      availability: "Mon, Wed, Fri",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Short",
      nextAvailable: "Wednesday, 10:00 AM",
    },
    {
      id: 92,
      name: "Dr. Chandana Kanakaratne",
      specialty: "General Physician",
      hospital: "Colombo General Hospital",
      availability: "Tue, Thu",
      time: "8:30 AM - 1:30 PM",
      queueStatus: "Long",
      nextAvailable: "Thursday, 9:00 AM",
    },
    {
      id: 93,
      name: "Dr. Darshan De Silva",
      specialty: "General Physician",
      hospital: "Durdans Hospital",
      availability: "Mon, Wed",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Wednesday, 11:00 AM",
    },
    {
      id: 94,
      name: "Dr. Eranga Silva",
      specialty: "General Physician",
      hospital: "National Hospital of Sri Lanka",
      availability: "Thu, Fri",
      time: "10:00 AM - 2:00 PM",
      queueStatus: "Short",
      nextAvailable: "Friday, 10:30 AM",
    },
    {
      id: 95,
      name: "Dr. Madhawa Gunaratne",
      specialty: "Pediatrician",
      hospital: "Lady Ridgeway Hospital",
      availability: "Mon-Fri",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Long",
      nextAvailable: "Today, 11:00 AM",
    },
    {
      id: 96,
      name: "Dr. Ruwan Jayasuriya",
      specialty: "General Medicine",
      hospital: "District General Hospital Galle",
      availability: "Mon, Wed, Fri",
      time: "9:00 AM - 1:00 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 11:00 AM",
    },
    {
      id: 97,
      name: "Dr. Anjali De Silva",
      specialty: "Dermatology",
      hospital: "Teaching Hospital Karapitiya",
      availability: "Tue, Thu",
      time: "10:00 AM - 2:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 10:00 AM",
    },
    {
      id: 98,
      name: "Dr. Sunil Gunawardena",
      specialty: "Psychiatry",
      hospital: "National Hospital of Sri Lanka",
      availability: "Mon, Fri",
      time: "9:00 AM - 12:00 PM",
      queueStatus: "Moderate",
      nextAvailable: "Friday, 9:00 AM",
    },
    {
      id: 99,
      name: "Dr. Nishantha Kumara",
      specialty: "Ophthalmology",
      hospital: "Base Hospital Ragama",
      availability: "Wed, Thu",
      time: "1:00 PM - 4:00 PM",
      queueStatus: "Short",
      nextAvailable: "Today, 2:30 PM",
    },
    {
      id: 100,
      name: "Dr. Shehani Wijesinghe",
      specialty: "Pediatrics",
      hospital: "Colombo General Hospital",
      availability: "Mon-Fri",
      time: "8:00 AM - 12:00 PM",
      queueStatus: "Long",
      nextAvailable: "Tomorrow, 9:00 AM",
    },
  ];

  const specialties = [
    "all",
    "Cardiology",
    "Pediatrics",
    "Orthopedics",
    "Neurology",
    "General Medicine",
    "Radiology",
    "Rheumatology",
    "General Surgery",
    "Urology",
    "Dermatology",
    "Psychiatry",
    "Endocrinology",
    "Gastroenterology",
    "Ophthalmology",
    "Obstetrics and Gynaecology",
  ];

  const getQueueColor = (status: string) => {
    switch (status) {
      case "Short":
        return "bg-secondary hover:bg-secondary text-secondary-foreground";
      case "Moderate":
        return "bg-accent hover:bg-accent text-accent-foreground";
      case "Long":
        return "bg-destructive hover:bg-destructive text-destructive-foreground";
      default:
        return "bg-muted";
    }
  };

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      specialtyFilter === "all" || doc.specialty === specialtyFilter;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Doctor Availability
          </h1>
          <p className="text-muted-foreground">
            Find specialists and check their schedules at government hospitals
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search doctors or hospitals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              {specialties.map((specialty) => (
                <SelectItem key={specialty} value={specialty}>
                  {specialty === "all" ? "All Specialties" : specialty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="hover:shadow-elevated transition-shadow"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{doctor.name}</CardTitle>
                    <p className="text-sm text-primary font-medium mt-1">
                      {doctor.specialty}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {doctor.hospital}
                    </p>
                  </div>
                  <Badge className={getQueueColor(doctor.queueStatus)}>
                    {doctor.queueStatus} Queue
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Available:</span>
                    <span className="font-medium">{doctor.availability}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Hours:</span>
                    <span className="font-medium">{doctor.time}</span>
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <p className="text-sm text-muted-foreground mb-1">
                    Next Available:
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {doctor.nextAvailable}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredDoctors.length === 0 && (
            <Card className="md:col-span-2">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  No doctors found. Try adjusting your search.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
