"use client";



// ShadCn
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea, TextareaProps } from "@/components/ui/textarea";

type FormTextareaProps<T> = {
    name: T;
    label?: string;
    labelHelper?: string;
    placeholder?: string;
    control: any
} & TextareaProps;

const FormTextarea = <T extends string>({
    name,
    label,
    labelHelper,
    placeholder,
    control,
    ...props
}: FormTextareaProps<T>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{`${label}`}</FormLabel>}
                    {labelHelper && (
                        <span className="text-xs"> {labelHelper}</span>
                    )}
                    <FormControl>
                        <Textarea
                            {...field}
                            placeholder={placeholder}
                            className="w-full"
                            {...props}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default FormTextarea;
