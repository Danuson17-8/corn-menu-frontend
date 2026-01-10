import { Mail, MapPin, Phone } from "lucide-react";

const storeInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Thailand, Chiang Mai",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "012-345-6789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "corncorn@gmail.com",
  },
];


export function StoreInfoCard() {
    return (
        <div className="bg-white/30 backdrop-blur-md p-10 rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none shadow-lg space-y-10 text-gray-800">
            {storeInfo.map((item) => {
                const Icon = item.icon;
                return (
                    <div key={item.label} className="flex gap-3">
                        <Icon className="mt-1" />
                        <div className="font-bold text-2xl">
                            {item.label}
                            <p className="font-medium text-sm">{item.value}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}