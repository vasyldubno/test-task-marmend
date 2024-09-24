import clsx from "clsx";
import { useState } from "react";
import { Button } from "./components/Button/Button";
import { Form } from "./components/Form/Form";

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <div
      className={
        "bg-[url('/background.jpg')] bg-cover min-h-screen px-24 pt-10"
      }
    >
      <div
        className={clsx("w-screen h-screen bg-[#6677A2] fixed inset-0 z-10", {
          "opacity-50": isOpenModal,
          "opacity-0": !isOpenModal,
        })}
      />
      <div className="z-20 relative">
        <button
          className="bg-main-white w-full p-6 rounded-xl flex items-center gap-3 justify-center"
          onClick={handleOpenModal}
        >
          <p className="text-main-secondary text-base font-medium">Settings</p>
          <img
            src="/test-task-marmend/chevron-down.svg"
            className={clsx(
              "transition-transform duration-500",
              isOpenModal ? "rotate-0" : "-rotate-180"
            )}
          />
        </button>
        {isOpenModal && (
          <div className="bg-main-white rounded-2xl p-8 mt-2 max-w-[500px] m-auto flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-main-secondary text-xl font-semibold">
                Profile settings
              </p>
              <p className="text-main-tertiary text-xs">
                Profile settings allow you to change your password, interface
                language, and profile photo
              </p>
            </div>
            <div className="flex gap-4">
              <img src="/test-task-marmend/avatar.png" className="w-20 h-20" />
              <div className="w-48 flex flex-col gap-2">
                <Button variant="secondary">Change photo</Button>
                <Button variant="delete">Delete</Button>
              </div>
            </div>
            <Form />
          </div>
        )}
      </div>
    </div>
  );
};
