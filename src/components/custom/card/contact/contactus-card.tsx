import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ReactNode } from "react";

export default function ContactCard({children}: {children:ReactNode}) {
    return(
        <Card className="w-200 rounded-none shadow-2xl p-2 md:p-5">
            <CardHeader>
                <CardTitle className="flex justify-center text-4xl">Contact us</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
}