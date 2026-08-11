export default function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        h-12
        rounded-sm
        bg-blue-600
        hover:bg-blue-500
        active:bg-blue-700
        text-white
        font-medium
        text-sm
        tracking-wide
        transition-all
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400/50
        ${className}
      `}
    >
      {children}
    </button>
  );
}
