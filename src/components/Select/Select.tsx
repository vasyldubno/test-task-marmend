import { FC, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import clsx from "clsx";

interface SelectProps {
  options: { value: string; content: string }[];
}

export const Select: FC<SelectProps> = ({ options }) => {
  const [selected, setSelected] = useState<{
    value: string;
    content: string;
  } | null>(null);
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);

  const handleClick = () => {
    setIsShowDropdown((prev) => !prev);
  };

  const ref = useClickOutside(() => setIsShowDropdown(false));

  return (
    <>
      <div ref={ref} className="w-full">
        <button
          className={
            "py-2 px-4 rounded-lg border border-main-tertiary w-full flex items-center justify-between"
          }
          onClick={handleClick}
        >
          <p
            className={clsx("text-xs", {
              "text-main-secondary": selected,
              "text-gray-7": !selected,
            })}
          >
            {selected ? selected.content : "Choose language"}
          </p>
          <img
            src="/chevron-down.svg"
            className={clsx("w-4 h-4 transition-transform duration-500", {
              "-rotate-180": isShowDropdown,
            })}
          />
        </button>
        {isShowDropdown && (
          <ul className="bg-main-white mt-1 shadow shadow-shadow rounded-lg py-3">
            {options.map((option) => (
              <li
                className="py-2 px-4 text-main-secondary text-xs cursor-pointer"
                onClick={() => {
                  setSelected(option);
                  setIsShowDropdown(false);
                }}
              >
                {option.content}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
