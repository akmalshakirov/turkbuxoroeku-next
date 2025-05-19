import { ChangeEvent, useEffect, useState } from "react";

interface ITelNumInputProps {
    onChange?: (value: string) => void;
    className?: string;
    label?: string;
    required?: boolean;
}

const PhoneInput: React.FC<ITelNumInputProps> = ({
    onChange,
    className = "",
    label = "",
    required = false,
}) => {
    const [value, setValue] = useState<string>("");
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
            setValue(digits);
            setFormattedValue(formatPhoneNumber(digits));
            if (onChange) {
                onChange(digits);
            }
        }
    };

    useEffect(() => {
        setFormattedValue(formatPhoneNumber(value));
    }, [value]);

    return (
        <div className={`max-w-md mx-auto ${className}`}>
            {label && (
                <label
                    htmlFor='phone'
                    className='block font-medium text-[#bf0059] mb-1'>
                    {label}
                </label>
            )}
            <input
                type='text'
                id='phone'
                name='phone'
                className='w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm outline-none focus:border-pink-400 transition-colors'
                placeholder='(12)-345-67-89'
                value={formattedValue}
                onChange={handleChange}
                required={required}
                autoComplete='none'
            />
        </div>
    );
};

export default PhoneInput;
