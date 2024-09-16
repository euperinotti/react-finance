import { Button } from "@/components/Button";
import { InputContainer } from "@/components/Input/InputContainer";
import { InputNumber } from "@/components/Input/InputNumber";
import { InputRadio } from "@/components/Input/InputRadio";
import { useWallet } from "@/hooks/useWallet";
import { FormEvent, FormHTMLAttributes, useState } from "react";

export interface NewEntryFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onClose?: () => void;
}

export const NewEntryForm = ({ onClose, ...rest }: NewEntryFormProps) => {
  const [form, setForm] = useState<any>({
    value: 0,
    type: "income",
  });
  const { addEntry } = useWallet();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addEntry(Number(form.value), form.type);
    onClose?.();
    setForm({ value: 0, type: "income" });
  };

  const handleCloseForm = () => {
    onClose?.();
    setForm({ value: 0, type: "income" });
  };

  return (
    <form
      {...rest}
      className="bg-white w-[600px] h-auto rounded-md overflow-hidden"
      onSubmit={handleSubmit}
    >
      <div className="w-full bg-gray-100">
        <h1 className="text-2xl font-bold px-4 py-6 text-gray-700">
          New entry
        </h1>
      </div>
      <div className="flex flex-col item-start justify-start gap-4 p-5">
        <InputContainer label="Value">
          <InputNumber
            onChange={(e) => setForm({ ...form, value: e.target.value })}
            value={form.value}
          />
        </InputContainer>
        <InputContainer label="Entry type">
          <InputRadio
            label="Income"
            name="entry-type"
            value="income"
            id="entry-income"
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          />
          <InputRadio
            label="Outcome"
            name="entry-type"
            value="outcome"
            id="entry-outcome"
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          />
        </InputContainer>
      </div>
      <div className="flex item-start justify-end gap-4 p-5">
        <Button label="Close" type="danger" onClick={handleCloseForm} />
        <Button label="Save" type="default" />
      </div>
    </form>
  );
};
