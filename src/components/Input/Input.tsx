import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onClear: () => void;
}

export const Input: FC<InputProps> = ({ onClear, ...props }) => {
  return (
    <div className="relative w-full">
      <input
        className="peer block w-full border-main-tertiary border rounded-lg text-main-secondary text-xs px-3 py-2 invalid:text-red-red placeholder:text-gray-7 disabled:bg-gray-2 disabled:placeholder:text-gray-7 disabled:border-gray-2 invalid:border-red-red outline-none"
        {...props}
      />
      <img
        src="/test-task-marmend/error.svg"
        className="hidden peer-invalid:block w-4 h-4 absolute end-0 inset-y-0 mr-3 mt-[10px]"
      />
      {props.value.length > 0 && (
        <button
          className="hidden peer-valid:block w-4 h-4 absolute end-0 inset-y-0 mr-3 mt-[10px]"
          onClick={onClear}
        >
          <img src="/test-task-marmend/x-mark.svg" />
        </button>
      )}
      <p className="hidden peer-invalid:block text-red-red text-xs leading-5">
        Invalid input format
      </p>
    </div>
  );
};
