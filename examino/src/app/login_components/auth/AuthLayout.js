export default function AuthLayout({ children }) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/login-bg.png"
          alt=""
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/30" />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          min-h-screen
          w-full

          flex
          items-center
          justify-center

          px-5
          py-10

          lg:justify-end
          lg:px-[7%]
          xl:px-[8%]
        "
      >
        {children}
      </div>
    </main>
  );
}
