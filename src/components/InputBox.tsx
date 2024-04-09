type TInput = {
  type: string;
  placeholder: string;
};

export default function InputBox({ type, placeholder }: TInput) {
  return (
    <>
      <input
        type={type}
        className="border rounded-lg mb-3 border-[#8A8A8A] text-white outline-none bg-[#FFFFFF1A] p-3 w-full"
        placeholder={placeholder}
      />
    </>
  );
}
