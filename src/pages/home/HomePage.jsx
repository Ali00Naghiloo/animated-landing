import React from "react";
import TopSection from "../../components/home/topSection/TopSection";
import CardsSection from "../../components/home/cardsSection/CardsSection";
import Footer from "../../components/landing/footer/Footer";

export default function HomePage() {
  return (
    <div>
      <div
        className=" pt-9
    bg-[url('../../../../project-assets/black-back.gif')] bg-cover bg-center
    "
      >
        <TopSection />
        <CardsSection />
      </div>
      <Footer />
    </div>
  );
}
