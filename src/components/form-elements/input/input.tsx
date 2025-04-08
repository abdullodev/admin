import ErrorBox from "@/components/custom-elements/error-box";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BatteryWarning,
  FileWarning,
  InfoIcon,
  LucideMessageCircleWarning,
  MessageCircle,
  MessageCircleWarning,
  MessageSquare,
  MessageSquareWarning,
} from "lucide-react";
import { useFormContext } from "react-hook-form";

const FormInput = ({
  label = "",
  name,
  required = true,
  message = "Required",
  onCustomChange,
  ...props
}: React.ComponentProps<"input"> & {
  label?: string;
  name: string;
  required?: boolean;
  message?: string;
  onCustomChange?: (value: string | number) => void;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message?.toString() || "";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    onCustomChange?.(value);

    return value;
  };

  return (
    <div className="space-y-1">
      <Label
        htmlFor={name}
        className={`text-sm font-normal ${
          errorMessage
            ? "text-red-600 dark:text-red-400"
            : "text-gray-700 dark:text-gray-300"
        }`}
      >
        {label}
        {required && <span className="text-red-600 dark:text-red-400">*</span>}
      </Label>
      <Input
        id={name}
        {...register(name, {
          required: required ? message : false,
          onChange: handleChange,
        })}
        {...props}
        className={`mt-1 h-10 border !bg-[var(--accent)] transition-all ${
          errorMessage
            ? "border-red-600 focus:!border-red-600 focus:!ring-1 focus:!ring-red-600 focus:ring-opacity-50 dark:border-red-400 dark:focus:!ring-red-400"
            : "!border-[var(--border)] focus:!border-[var(--primary)] focus:!ring-1 focus:!ring-[var(--primary)] focus:ring-opacity-50 dark:border-[var(--border)] dark:focus:ring-[var(--primary)]"
        }`}
      />

      {errorMessage && <ErrorBox errorMessage={errorMessage} />}
    </div>
  );
};

export default FormInput;
