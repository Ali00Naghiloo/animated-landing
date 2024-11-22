import TopsectionText from "./topsectionText/TopsectionText";
import Headers from "../../landing/chat/Header";
import Explore from "./explore/Explore";
import { useState } from "react";

export default function TopSection() {
  const [item, SetItem] = useState("Ring");
  return (
    <div
      className=" py-6 lg:px-16  px-10 flex items-center justify-between flex-col
    bg-[url('../../../../project-assets/black-back.gif')] bg-cover bg-center
    "
      style={{ height: "100vh" }}
    >
      <Headers />
      <TopsectionText item={item} />
      <Explore SetItem={SetItem} item={item} />
    </div>
  );
}
