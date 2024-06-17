type TInput = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
};

export default function InputBox({ type, placeholder, value, onChange }: TInput) {
  return (
    <>
      <input
        type={type}
        className="border rounded-lg mb-3 border-[#8A8A8A] text-white outline-none bg-[#FFFFFF1A] p-3 w-full"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
