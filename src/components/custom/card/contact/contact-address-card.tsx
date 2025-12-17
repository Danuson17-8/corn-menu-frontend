import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactAddressCard() {
    return (
        <div className="">
            <Card
                className="p-8 space-y-3 h-90"
                style={{
                    clipPath: "polygon(0% 0%, 100% 0, 100% 75%, 81% 83%, 75% 100%, 38% 83%, 0% 75%)"
                }}
            >
                <div className="flex gap-3">
                    <MapPin className="mt-1"/>
                    <div className="font-bold text-2xl">
                        Location
                        <p className="font-medium text-sm">45/8 ถนนพหลโยธิน ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Phone className="mt-1"/>
                    <div className="font-bold text-2xl">
                        Phone
                        <p className="font-medium text-sm">0812345678 </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Mail className="mt-1"/>
                    <div className="font-bold text-2xl">
                        Email
                        <p className="font-medium text-sm">corncorn@gmail.com </p>
                    </div>
                </div>
            </Card>
            <img
                src="/images/mascot-corn.png"
                className="h-[70px] ml-auto"
            />
        </div>
    );
}