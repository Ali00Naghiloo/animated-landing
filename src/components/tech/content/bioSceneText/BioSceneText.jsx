export default function BioSceneText() {
  return (
    <div
      className="flex items-center justify-center flex-col bg-[#ffffff] "
      style={{ height: "65vh", color: "#164e63" }}
    >
      <p className="text-center lg:text-6xl sm:text-4xl text-xl">
        <span
          style={{
            background:
              "var(--Radial, radial-gradient(29.68% 46.42% at 39.06% 38.97%, #2A5FDD 0%, #77A9E8 100%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          BioScene:
        </span>
        Wearable Wellness,
        <br />
        Anytime,Anywhere
      </p>
      <p className="text-gray-600 my-7 lg:text-xl sm:text-sm text-xs">
        Track every heartbeat, breath, and burrst of
        <br />
        energy with BioSense, Ring and Band
      </p>
      <button class="rounded-lg bg-[rgba(119,169,232,0.16)] shadow-[inset_6px_80px_80px_rgba(148,168,237,0.02),_inset_0px_-1px_1px_rgba(148,168,237,0.20),_inset_0px_1px_1px_rgba(148,168,237,0.20)] backdrop-blur-lg px-7 py-2
      sm:px-14 sm:py-3
      lg:px-14 lg:py-3
      text-xs
      sm:text-base
      ">
        Shop mow
      </button>
    </div>
  );
}
