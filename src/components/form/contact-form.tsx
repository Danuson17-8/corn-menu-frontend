import { useForm } from "react-hook-form";
import type z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { contactSchema } from "@/schema/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SelectCustom } from "../custom/select/select-custom";

const topics = [
    "Classic Corn", "Cheese Corn", "Garlic Corn",
    "Sweet Corn", "Coconut Corn", "Grilled Corn on Stick",
    "Corn with Chili Powder", "Lemon Corn", "Smoky Corn", "Corn with Mayonnaise",
    "Barbecue Corn", "Herb Corn", "Corn with Soy Sauce", "Corn with Salted Egg",
    "Corn with Cheese Sauce", "Other"
];

export interface ContactFormProps {
    onSuccess: (data: z.infer<typeof contactSchema>) => void;
}

export default function ContactForm({
    onSuccess,
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

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSuccess)} className="space-y-5">
                <div className="hidden md:block">
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
                </div>
                <div className="flex flex-col md:flex-row gap-5 mt-10">
                    <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                            <FormItem className="w-full md:w-60">
                                <FormLabel>Topic:</FormLabel>
                                <FormControl>
                                    <SelectCustom
                                        label="Select topic"
                                        items={topics}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
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
                <Button type="submit" className="w-full md:w-auto btn-primary rounded-none px-10" onClick={() => console.log(form.getValues())}>
                    GET HELP
                </Button>
            </form>
        </Form>
    );
}