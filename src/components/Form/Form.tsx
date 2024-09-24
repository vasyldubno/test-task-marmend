import { ChangeEvent, FormEvent, useState } from "react";
import { Select } from "../Select/Select";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const Form = () => {
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");

  const isDisabledButton = password.length < 8 || firstName.length < 3;

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleClearFirstName = () => {
    setFirstName("");
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmitForm}>
      <div className="flex flex-col gap-4">
        <div className="w-full flex flex-col gap-1">
          <label>Name</label>
          <Input
            minLength={3}
            placeholder="Enter your name"
            value={firstName}
            onClear={handleClearFirstName}
            onChange={handleChangeFirstName}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Change your password</label>
          <PasswordInput
            minLength={8}
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Interface language</label>
          <Select
            options={[
              { value: "Unselected", content: "Unselected" },
              { value: "English", content: "English" },
              { value: "German", content: "German" },
              { value: "Ukrainian", content: "Ukrainian" },
            ]}
          />
        </div>
      </div>
      <Button variant="primary" disabled={isDisabledButton}>
        Save changes
      </Button>
    </form>
  );
};
