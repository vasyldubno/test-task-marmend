import clsx from "clsx";
import { FC, InputHTMLAttributes, useState } from "react";
import EyeSlashIcon from "../../assets/eye-slash.svg?react";
import EyeIcon from "../../assets/eye.svg?react";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

export const PasswordInput: FC<PasswordInputProps> = (props) => {
  const [type, setType] = useState<"password" | "text">("password");

  const handleTogglePassword = () => {
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder="Enter your password"
        className={clsx(
          "peer outline-none block w-full border-main-tertiary border rounded-lg text-main-secondary text-xs px-3 py-2 placeholder:text-gray-7 disabled:bg-gray-2 disabled:placeholder:text-gray-7 disabled:border-gray-2 invalid:text-red-red invalid:border-red-red",
          { "valid:border-green-green": props.value.length > 0 }
        )}
        {...props}
      />
      <button
        onClick={handleTogglePassword}
        className="w-4 h-4 absolute end-0 inset-y-0 mr-3 mt-[10px] text-main-secondary peer-disabled:text-gray-7"
        disabled={props.disabled}
      >
        {type === "password" ? <EyeSlashIcon /> : <EyeIcon />}
      </button>
      <img
        src="/error.svg"
        className="hidden peer-invalid:block w-4 h-4 absolute end-0 inset-y-0 mr-9 mt-[10px]"
      />
      {props.value.length > 0 && (
        <img
          src="/success.svg"
          className="invisible peer-valid:visible w-4 h-4 absolute end-0 inset-y-0 mr-9 mt-[10px]"
        />
      )}
      {props.value.length > 0 && (
        <>
          <p className="hidden peer-invalid:block text-red-red text-xs leading-5">
            Invalid password
          </p>
          <p className="hidden peer-valid:block text-green-green text-xs leading-5">
            Password is valid
          </p>
        </>
      )}
    </div>
  );
};
