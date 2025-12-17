import { Controller, type Control } from "react-hook-form";
import { Eye, EyeClosed, X } from "lucide-react";
import TextField from "@mui/material/TextField";
import { useState } from "react";

interface FloatingInputProps {
  control: Control<any>;
  name: string;
  label: string;
  type?: string;
  maxLength?: number;
  onChangeExternal?: (
    value: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => string | void;
}

export default function FloatingInput({
  control,
  name,
  label,
  type = "text",
  maxLength = 999,
  onChangeExternal,
}: FloatingInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <TextField
            //autoComplete="off"
            color="warning"
            {...field}
            fullWidth
            label={label}
            type={type === "password" ? (showPassword ? "text" : "password"): type}
            error={!!fieldState.error}
            onChange={(e) => {
              let value = e.target.value;
              if (onChangeExternal) {
                const modified = onChangeExternal(value, e);
                if (typeof modified === "string") {
                  value = modified;
                }
              }
              field.onChange(value);
            }}
            inputProps={{maxLength: maxLength}}
            InputProps={{
              endAdornment: field.value && (
                <>
                  <button
                    className="bg-gray-300 hover:bg-gray-200 rounded-full p-0.5 ml-3"
                    onClick={() => field.onChange("")}
                  >
                    <X size={12} color="white" />
                  </button>
                  {type === "password" && (
                    <button 
                      type="button" 
                      className="ml-3 text-gray-400 hover:text-gray-300" 
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Eye size={16} /> : <EyeClosed size={16} />}
                    </button>
                  )}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );
}
