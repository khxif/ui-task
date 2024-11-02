import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Card } from "@mui/material";

interface PriceCardProps {
  title: string;
  price: string;
  image: string;
  features: string[];
}

export default function PriceCard({
  title,
  price,
  image,
  features,
}: PriceCardProps) {
  return (
    <Card variant="outlined" className="hover:border-primary rounded-full">
      <div className="px-4 py-5">
        <img src={image} alt="logo" className="pb-1" />

        <div className="flex flex-col space-y-2">
          <span className="flex items-end">
            <h1 className="text-3xl font-medium">{price}</h1>
            <p>/mo</p>
          </span>

          <p className="font-medium ">{title}</p>
        </div>
      </div>

      <div className="border-t border-t-[#e4e4e4] px-4 py-6 flex flex-col space-y-20">
        <div className="flex flex-col space-y-4">
          {features.map((feature: string) => (
            <span>
              <CheckCircleOutlineOutlinedIcon className="text-[#15B79F] size-3" />
              <span className="pl-2 text-sm">{feature}</span>
            </span>
          ))}
        </div>

        <button
          className="mt-10 bg-transparent border border-primary py-2 w-full 
      rounded-lg text-primary font-medium hover:bg-primary hover:text-white transition-all
      duration-300"
        >
          Start Free Trial
        </button>
      </div>
    </Card>
  );
}
