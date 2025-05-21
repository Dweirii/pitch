export function Background() {
  return (
    <>
      {/* Abstract background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[100px]" />
        <div className="absolute top-[30%] left-[20%] h-[300px] w-[300px] rounded-full bg-indigo-700/10 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </>
  )
}
