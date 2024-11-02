import { ArrowLeft } from "lucide-react";
import Layout from "./layout/Layout";
import PriceCard from "./components/PriceCard";

export default function App() {
  return (
    <Layout>
      <main className="py-20 max-w-6xl mx-auto">
        <span className="flex items-center space-x-2 py-6">
          <ArrowLeft className="size-5" />
          <h2>Home</h2>
        </span>

        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-medium">
            Start today. Boost up your services
          </h1>
          <p className="text-secondary py-3">
            Join 3,000+ developers & designers using Devias to power modern web
            projects
          </p>
        </div>

        <div className="py-10 grid grid-cols-3 space-x-8">
        {
          prices.map((price) => (
            <PriceCard
              title={price.title}
              price={price.price}
              image={price.image}
              features={price.features}
            />
          ))
        }
        </div>
      </main>
    </Layout>
  );
}

const prices = [
  {
    title: "Basic",
    price: "$99",
    image: "/1.svg",
    features: [
      "Up to 100 patients",
      "500 scans per month",
      "3 imaging processes",
    ],
  },
  {
    title: "Pro",
    price: "$299",
    image: "/2.svg",
    features: [
      "Up to 500 patients",
      "1000 scans per month",
      "5 imaging processes",
    ],
  },
  {
    title: "Enterprise",
    price: "$599",
    image: "/3.svg",
    features: [
      "Unlimited patients",
      "Unlimited scans per month",
      "Unlimited imaging processes",
    ],
  },
];
