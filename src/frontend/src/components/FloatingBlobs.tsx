export default function FloatingBlobs() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Purple blob top-left */}
      <div
        className="absolute rounded-full opacity-25 animate-blob"
        style={{
          width: "600px",
          height: "600px",
          top: "-200px",
          left: "-200px",
          background:
            "radial-gradient(circle, oklch(0.68 0.22 296) 0%, oklch(0.68 0.22 296 / 0) 70%)",
          animationDelay: "0s",
          filter: "blur(60px)",
        }}
      />
      {/* Blue blob top-right */}
      <div
        className="absolute rounded-full opacity-20 animate-blob"
        style={{
          width: "500px",
          height: "500px",
          top: "-100px",
          right: "-150px",
          background:
            "radial-gradient(circle, oklch(0.7 0.2 220) 0%, oklch(0.7 0.2 220 / 0) 70%)",
          animationDelay: "5s",
          filter: "blur(70px)",
        }}
      />
      {/* Cyan blob center */}
      <div
        className="absolute rounded-full opacity-15 animate-blob"
        style={{
          width: "700px",
          height: "700px",
          top: "40%",
          left: "30%",
          background:
            "radial-gradient(circle, oklch(0.72 0.18 200) 0%, oklch(0.72 0.18 200 / 0) 70%)",
          animationDelay: "10s",
          filter: "blur(80px)",
        }}
      />
      {/* Purple blob bottom-right */}
      <div
        className="absolute rounded-full opacity-20 animate-blob"
        style={{
          width: "450px",
          height: "450px",
          bottom: "-100px",
          right: "-100px",
          background:
            "radial-gradient(circle, oklch(0.65 0.19 310) 0%, oklch(0.65 0.19 310 / 0) 70%)",
          animationDelay: "7s",
          filter: "blur(60px)",
        }}
      />
      {/* Blue blob bottom-left */}
      <div
        className="absolute rounded-full opacity-15 animate-blob"
        style={{
          width: "400px",
          height: "400px",
          bottom: "10%",
          left: "-100px",
          background:
            "radial-gradient(circle, oklch(0.68 0.2 240) 0%, oklch(0.68 0.2 240 / 0) 70%)",
          animationDelay: "3s",
          filter: "blur(70px)",
        }}
      />
    </div>
  );
}
