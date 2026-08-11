export default function AuthInput({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="block text-sm text-white/80">
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="
          w-full
          h-12
          px-4
          rounded-sm
          border
          border-white/20
          bg-white/3
          text-white
          placeholder:text-white/50
          text-sm
          outline-none
          transition-all
          duration-200

          focus:border-blue-400
          focus:bg-white/6
          focus:ring-2
          focus:ring-blue-400/20
        "
      />
    </div>
  );
}
