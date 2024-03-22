import {useId, forwardRef, HTMLProps} from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
    label?: string;
    type?: string;
    name: string;
    placeholder: string,
    className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({
                                                                                 label,
                                                                                 type = "text",
                                                                                 name,
                                                                                 placeholder,
                                                                                 className = "block w-full rounded-md border-0 py-1.5 px-1.5 text-neutral-content shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-success sm:text-sm sm:leading-6",
                                                                                 ...props
                                                                             }, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {label && <label
                className="block text-sm font-medium leading-6 text-neutral-content"
                htmlFor={id}
            >
                {label}
            </label>
            }
            <input
                type={type}
                className={`${className}`}
                ref={ref}
                {...props}
                id={id}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
})