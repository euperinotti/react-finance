import { Button } from "@/components/Button";
import { InputContainer } from "@/components/Input/InputContainer";
import { InputNumber } from "@/components/Input/InputNumber";
import { InputRadio } from "@/components/Input/InputRadio";
import {
  IWalletEntry,
  WalletOperation,
} from "@/contexts/@types/WalletContextTypes";
import { useWallet } from "@/hooks/useWallet";
import { FormEvent, FormHTMLAttributes, useEffect, useState } from "react";

export interface NewEntryFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onClose?: () => void;
}

const initialState: IWalletEntry = {
  id: "",
  value: 0,
  operation: "income",
  date: new Date(),
  description: "",
  category: "",
};

export const NewEntryForm = ({ onClose, ...rest }: NewEntryFormProps) => {
  const [form, setForm] = useState<IWalletEntry>(initialState);
  const { addEntry } = useWallet();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addEntry({ ...form });
    onClose?.();
  };

  const handleCloseForm = () => {
    onClose?.();
  };

  useEffect(() => {
    setForm(initialState);
  }, [onClose]);

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
            onChange={(e) =>
              setForm({ ...form, value: Number(e.target.value) })
            }
            value={form.value}
          />
        </InputContainer>
        <InputContainer label="Entry type">
          <InputRadio
            label="Income"
            name="entry-type"
            value="income"
            id="entry-income"
            onChange={(e) =>
              setForm({ ...form, operation: e.target.value as WalletOperation })
            }
          />
          <InputRadio
            label="Outcome"
            name="entry-type"
            value="outcome"
            id="entry-outcome"
            onChange={(e) => setForm({ ...form, operation: e.target.value as WalletOperation })}
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
