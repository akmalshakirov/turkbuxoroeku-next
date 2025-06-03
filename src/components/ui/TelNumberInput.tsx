"use client";

import { ChangeEvent, useEffect, useState } from "react";

interface ITelNumInputProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    label?: string;
    required?: boolean;
    name?: string;
}

const PhoneInput: React.FC<ITelNumInputProps> = ({
    value,
    onChange,
    className = "",
    label = "",
    required = false,
    name = "",
}) => {
    const [formattedValue, setFormattedValue] = useState<string>("");

    const getOnlyDigits = (val: string): string => val.replace(/\D/g, "");

    const formatPhoneNumber = (phoneNumber: string): string => {
        const digits = getOnlyDigits(phoneNumber);
        const digitsLength = digits.length;

        if (digitsLength === 0) return "";
        if (digitsLength <= 2) return `(${digits}`;
        if (digitsLength <= 5)
            return `(${digits.substring(0, 2)})-${digits.substring(2)}`;
        if (digitsLength <= 7)
            return `(${digits.substring(0, 2)})-${digits.substring(
                2,
                5
            )}-${digits.substring(5)}`;
        return `(${digits.substring(0, 2)})-${digits.substring(
            2,
            5
        )}-${digits.substring(5, 7)}-${digits.substring(7, 9)}`;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const digits = getOnlyDigits(inputValue);

        if (digits.length <= 9) {
            onChange(digits);
        }
    };

    useEffect(() => {
        setFormattedValue(formatPhoneNumber(value));
    }, [value]);

    return (
        <div className={`phone-input ${className}`}>
            {label && (
                <label
                    htmlFor={name}
                    className='block mb-1 font-medium text-[#bf0059]'>
                    {label}
                </label>
            )}
            <input
                type='text'
                id={name}
                name={name}
                value={formattedValue}
                onChange={handleChange}
                className='w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm outline-none focus:border-pink-400 transition-colors'
                required={required}
                placeholder='(77)-777-77-77'
            />
        </div>
    );
};

export default PhoneInput;
