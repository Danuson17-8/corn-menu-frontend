import { useForm } from "react-hook-form";
import type z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { contactSchema } from "@/schema/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export interface ContactFormProps {
    isLoading: boolean;
    onSuccess: (data: z.infer<typeof contactSchema>) => void;
}

export default function ContactForm({
    onSuccess,
    isLoading,
}: ContactFormProps) {

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            topic: "Other",
            name: "user",
            email: "",
            message: ""
        },
    });

    const topics = [
        "Classic Corn", "Cheese Corn", "Garlic Corn",
        "Sweet Corn", "Coconut Corn", "Grilled Corn on Stick",
        "Corn with Chili Powder", "Lemon Corn", "Smoky Corn", "Corn with Mayonnaise",
        "Barbecue Corn", "Herb Corn", "Corn with Soy Sauce", "Corn with Salted Egg",
        "Corn with Cheese Sauce", "Other"
    ] as const;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSuccess)} className="space-y-5">
                <p>Select a topic:</p>
                <div className="space-x-5 space-y-5">
                    {topics.map((t) => (
                        <Button
                            key={t}
                            type="button"
                            onClick={() => form.setValue("topic", t)}
                            className="rounded-full bg-white text-black cursor-pointer shadow-xl"
                        >
                            {t}
                        </Button>
                    ))}
                </div>
                <div className="flex gap-5 mt-10">
                    <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                            <FormItem className="w-40">
                                <FormLabel>Topic:</FormLabel>
                                <FormControl>
                                    <Input {...field} readOnly />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({field}) => (
                            <FormItem className="w-full">
                                <FormLabel>Tell us what you need help with:</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Message."
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email:</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="your.email@domain.com"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="btn-primary rounded-none px-10" onClick={() => console.log(form.getValues())}>
                    GET HELP
                </Button>
            </form>
        </Form>
    );
}