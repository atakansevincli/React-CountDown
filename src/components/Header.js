import CounterSection from "./CounterSection";

const Header = () => {
  return (
    <header
      id="up"
      class="bg-fixed bg-no-repeat  bg-cover h-screen relative"
      style={{
        "background-image":
          "url('https://www.kulturportali.gov.tr/contents/images/Bodrum%20Sualt%20Arkeoloji%20M%C3%BCzesi%20-%20Bodrum%20Kalesi%20(2).jpg')",
      }}
    >
      <div
        class="h-screen bg-opacity-50 bg-black flex items-center justify-center h-360"
        style={{ backGround: "rgba(0,0,0,0.5)}" }}
      >
        <div class="mx-2 text-center grid grid-rows-2 gap-4 content-between h-60">
          <div className="mb-96">
            <h1 class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl tracking-widest">
              Bodrum
            </h1>
            <h2 class="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
              Tatili
            </h2>
          </div>

          <div class="inline-flex row-start-2 row-span-2">
            <CounterSection />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
