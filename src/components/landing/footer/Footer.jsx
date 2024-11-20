import React from "react";
import logo1 from "../../../../project-assets/logo.png";
import logo2 from "../../../../project-assets/life-copilot-logo.png";
import Down from "../../../../project-assets/icons/Down";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "VAI OS", path: "/" },
    { name: "Vyvo Tech", path: "/" },
    { name: "Vyvo Smart Chain", path: "/" },
    { name: "SocialFi", path: "/" },
    { name: "Store", path: "/" },
    { name: "About us", path: "/" },
    { name: "News", path: "/" },
    { name: "Events", path: "/" },
    { name: "Support", path: "/" },
    { name: "X", path: "/" },
    { name: "Facebook", path: "/" },
    { name: "Instagram", path: "/" },
    { name: "Telegram", path: "/" },
    { name: "Discord", path: "/" },
  ];

  return (
    <>
      <div className="w-full flex flex-col justify-between p-5 lg:p-[80px]">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-5 flex-wrap">
          {/* logo */}
          <div className="w-[70px] h-[28px] flex flex-[0.3]">
            <img src={logo1} className="h-full" alt="logo" />
            <img src={logo2} className="h-[50%]" alt="life-copilot-logo" />
          </div>

          {/* links */}
          <div className="lg:h-[530px] lg:pb-[230px] flex flex-[0.7] flex-row lg:flex-col flex-wrap gap-6 text-2xl">
            {links.map((link, index) => (
              <div
                key={index}
                className="w-[30%] min-w-fit text-lg hover:radial-text"
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>

        <div className="my-[30px] font-bold text-xl block lg:hidden">
          Your Life CoPilot
        </div>

        <div className="w-full flex justify-between text-white/60">
          <div className="w-fit rounded-full rotate-180 p-2 py-3">
            <Down />
          </div>

          <div>© 2024 Vyvo</div>

          <div className="lg:flex gap-[55px] hidden">
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </>
  );
}
