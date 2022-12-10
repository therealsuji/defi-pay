interface TextInput {
  value: string;
  onChange: (val: string) => void;
  type: "text" | "textarea" | "number" | "password";
  label?: string;
}

export const TextInput: React.FC<TextInput> = ({
  onChange,
  type,
  value,
  label,
}) => {
  return (
    <>
      {type === "number" && (
        <div className="w-full flex flex-col">
          {label && (
            <label className="text-input-label text-xl" htmlFor={label}>
              {label}
            </label>
          )}
          <input
            id={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="bg-input-fill border-input-border border-[1px] p-2 rounded-md"
            type="number"
          />
        </div>
      )}
      {type === "text" && (
        <div className="w-full flex flex-col">
          {label && (
            <label className="text-input-label text-xl " htmlFor={label}>
              {label}
            </label>
          )}
          <input
            id={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="bg-input-fill border-input-border border-[1px] p-2 rounded-md h-10"
            type="text"
          />
        </div>
      )}
    </>
  );
};
