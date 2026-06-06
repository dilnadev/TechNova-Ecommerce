import { Truck, RefreshCw, Headphones, Tag, ShieldCheck } from "lucide-react";

const features = [
  {
    Icon: Truck,
    title: "Free Shipping",
    subtitle: "Free Shipping On All Orders",
  },
  {
    Icon: RefreshCw,
    title: "Money Guarantee",
    subtitle: "30 Day Money Back Guarantee",
  },
  {
    Icon: Headphones,
    title: "Online Support 24/7",
    subtitle: "Technical Support Anytime",
  },
  {
    Icon: Tag,
    title: "Member Discount",
    subtitle: "Upto 40% Discount All Products",
  },
  {
    Icon: ShieldCheck,
    title: "Secure Payment",
    subtitle: "All Cards Accepted",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-white border-y border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {features.map(({ Icon, title, subtitle }) => (
            <div
              key={title}
              className="flex items-center gap-3 px-4 py-4"
            >
              <div className="shrink-0 bg-light-fill p-2.5 rounded-full">
                <Icon size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800 leading-tight">{title}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
