import { InputContainer } from "@/components/Input/InputContainer";
import { InputNumber } from "@/components/Input/InputNumber";
import { InputRadio } from "@/components/Input/InputRadio";
import { FormHTMLAttributes } from "react";

export interface NewEntryFormProps
  extends FormHTMLAttributes<HTMLFormElement> {}

export const NewEntryForm = ({ ...rest }: NewEntryFormProps) => {
  return (
    <form
      {...rest}
      className="bg-white w-[600px] h-[600px] rounded-md overflow-hidden"
    >
      <div className="w-full bg-gray-100">
        <h1 className="text-2xl font-bold px-4 py-6 text-gray-700">
          New entry
        </h1>
      </div>
      <div className="flex flex-col item-start justify-start gap-4 p-5">
        <InputContainer label="Value">
          <InputNumber />
        </InputContainer>
        <InputContainer label="Entry type">
          <InputRadio label="Income" name="entry-type" value="income" id="entry-income"/>
          <InputRadio label="Outcome" name="entry-type" value="outcome" id="entry-outcome"/>
        </InputContainer>
      </div>
    </form>
  );
};
