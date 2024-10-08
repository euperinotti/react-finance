import { Button } from "@/components/Button";
import { InputContainer } from "@/components/Input/InputContainer";
import { InputNumber } from "@/components/Input/InputNumber";
import { InputRadio } from "@/components/Input/InputRadio";
import { InputText } from "@/components/Input/InputText";
import {
  EntryCategory,
  IWalletEntry,
  WalletOperation,
} from "@/contexts/@types/WalletContextTypes";
import { useWallet } from "@/hooks/useWallet";
import { FormEvent, FormHTMLAttributes, useEffect, useState } from "react";

export interface NewEntryFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onClose?: () => void;
  entry: IWalletEntry | null;
}

const initialState: IWalletEntry = {
  id: "",
  value: 0,
  operation: "income",
  date: new Date(),
  description: "",
  category: "",
};

const entryCategories = Object.keys(EntryCategory);

export const NewEntryForm = ({
  onClose,
  entry,
  ...rest
}: NewEntryFormProps) => {
  const [form, setForm] = useState<IWalletEntry>(
    entry?.id ? entry : initialState
  );
  const { addEntry, updateEntry } = useWallet();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (entry && entry.id) {
      updateEntry({ ...form });
    } else {
      addEntry({ ...form });
    }
    handleCloseForm()
  };

  const handleCloseForm = () => {
    onClose?.();
    setForm(initialState);
  };

  useEffect(() => {
    if (entry) {
      setForm(entry);
    }
  }, [entry]);

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
        <InputContainer label="Description">
          <InputText
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            value={form.description}
          />
        </InputContainer>
        <InputContainer label="Value">
          <InputNumber
            onChange={(e) =>
              setForm({ ...form, value: Number(e.target.value) })
            }
            value={form.value}
            min={0}
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
            onChange={(e) =>
              setForm({ ...form, operation: e.target.value as WalletOperation })
            }
          />
        </InputContainer>
        <InputContainer label="Category">
          <select
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            {entryCategories.map((category, key) => (
              <option key={key} value={category}>
                {category}
              </option>
            ))}
          </select>
        </InputContainer>
      </div>
      <div className="flex item-start justify-end gap-4 p-5">
        <Button
          label="Close"
          styleType="danger"
          type="reset"
          onClick={handleCloseForm}
        />
        <Button label="Save" styleType="default" type="submit" />
      </div>
    </form>
  );
};
