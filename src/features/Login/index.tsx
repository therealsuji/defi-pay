import { Button } from "components/Button";
import { TextInput } from "components/Input/TextInput";
import { useState } from "react";

export const Login = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="max-w-xs flex flex-col items-center gap-4 mx-auto h-full justify-center">
      <TextInput
        value={inputValue}
        onChange={setInputValue}
        type="text"
        label="Email Address"
      />
      <div>OR</div>
      <Button size={"large"}>Connect Wallet</Button>
    </div>
  );
};
