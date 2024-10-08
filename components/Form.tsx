"use client";

import { createUser } from "@/utils/actions";
import { useFormState, useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className={btnStyle} type="submit" disabled={pending}>
      {pending ? "Submiting..." : "Submit"}
    </button>
  );
};

export default function Form() {
  const [message, formAction] = useFormState(createUser, null);
  return (
    <form className={formStyle} action={formAction}>
      {message && <p>{message}</p>}
      <h2 className="text-2xl capitalize mb-4">Create User</h2>
      <input
        type="text"
        name="firstName"
        id="firstName"
        defaultValue="peter"
        required
        className={inputStyle}
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        defaultValue="smith"
        required
        className={inputStyle}
      />
      <FormButton />
    </form>
  );
}

const formStyle = "max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";
