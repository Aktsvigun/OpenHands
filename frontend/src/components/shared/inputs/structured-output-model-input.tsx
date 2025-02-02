import { Input } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { I18nKey } from "#/i18n/declaration";

interface StructuredOutputModelInputProps {
  isDisabled: boolean;
  defaultValue: string;
}

export function CustomStructuredOutputModelInput({
  isDisabled,
  defaultValue,
}: StructuredOutputModelInputProps) {
  const { t } = useTranslation();

  return (
    <fieldset className="flex flex-col gap-2">
      <label
        htmlFor="structured-output-model"
        className="font-[500] text-[#A3A3A3] text-xs"
      >
        {t(I18nKey.SETTINGS_FORM$CUSTOM_STRUCTURED_OUTPUT_MODEL_LABEL)}
      </label>
      <Input
        data-testid="structured-output-model-input"
        isDisabled={isDisabled}
        id="structured-output-model"
        name="structured-output-model"
        defaultValue={defaultValue}
        aria-label="Structured Output Model"
        classNames={{
          inputWrapper: "bg-[#27272A] rounded-md text-sm px-3 py-[10px]",
        }}
      />
    </fieldset>
  );
}
