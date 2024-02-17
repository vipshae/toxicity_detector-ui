'use client';

import { predict } from "../lib/actions";
import { SubmitButton } from "./submit-button";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

export default function InputTextForm() {
    const { pending } = useFormStatus();
    const ref = useRef(null);
    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <form action={async(formData) => {
                await predict(formData);
                ref.current?.reset();
            }} ref={ref}>
                <label htmlFor="input" className="sr-only">
                    <p>
                        Enter Text to Predict:
                    </p>
                </label>
                <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm ouline-2"
                    name="input"
                    type="text"
                    id="input"
                    defaultValue=""
                    required
                    placeholder="Enter text"
                />
                <SubmitButton pending={pending}/>
            </form>
        </div>
    )
} 