import { Input } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { I18nKey } from "#/i18n/declaration";

interface VisionModelInputProps {
  isDisabled: boolean;
  defaultValue: string;
}

export function CustomVisionModelInput({
  isDisabled,
  defaultValue,
}: VisionModelInputProps) {
  const { t } = useTranslation();

  return (
    <fieldset className="flex flex-col gap-2">
      <label
        htmlFor="vision-model"
        className="font-[500] text-[#A3A3A3] text-xs"
      >
        {t(I18nKey.SETTINGS_FORM$CUSTOM_VISION_MODEL_LABEL)}
      </label>
      <Input
        data-testid="vision-model-input"
        isDisabled={isDisabled}
        id="vision-model"
        name="vision-model"
        defaultValue={defaultValue}
        aria-label="Vision Model"
        classNames={{
          inputWrapper: "bg-[#27272A] rounded-md text-sm px-3 py-[10px]",
        }}
      />
    </fieldset>
  );
}
