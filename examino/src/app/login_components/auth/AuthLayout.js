export default function AuthLayout({ children }) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        >
          <source
            src="https://res.cloudinary.com/ozxfkvzd/video/upload/v1785814802/10720792-hd_1920_1080_30fps_rk3krx.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
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
