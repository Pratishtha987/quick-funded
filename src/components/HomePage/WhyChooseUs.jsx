// WhyChooseUs.jsx
import React from "react";
import {
  Calendar,
  Beaker,
  Clock,
  Shield,
  RefreshCw,
  DollarSign,
  MessageCircle,
  FileText,
} from "lucide-react";
import FeatureGrid from "./FeatureGrid";

const WhyChooseUs = () => {
  const features = [
    { icon: Calendar, title: "Unlimited Trading Days", bgColor: "bg-blue-500" },
    {
      icon: Beaker,
      title: "Expert Advisor(EA) Allowed",
      bgColor: "bg-green-500",
    },
    {
      icon: Clock,
      title: "Hold Trades Over The Weekend",
      bgColor: "bg-orange-500",
    },
    {
      icon: Shield,
      title: "No Restriction On Trading Style",
      bgColor: "bg-teal-500",
    },
    { icon: RefreshCw, title: "Unlimited Retries", bgColor: "bg-purple-500" },
    {
      icon: DollarSign,
      title: "Best Price In The Market",
      bgColor: "bg-cyan-500",
    },
    {
      icon: MessageCircle,
      title: "24/5 Customer Support",
      bgColor: "bg-red-500",
    },
    {
      icon: FileText,
      title: "Best Trading Conditions",
      bgColor: "bg-pink-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Why Choose Us
      </h2>
      <FeatureGrid features={features} />
    </div>
  );
};

export default WhyChooseUs;
