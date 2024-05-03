import Navbar from "./navbar";

export default function Top() {
  return (
    <section className="flex flex-col bg-[#000] h-screen">
      <Navbar />
      <div className="relative">
      <iframe
        className="absolute top-0 left-0 z-[300] overflow-hidden h-screen"
        src="https://www.firemove.de/swag/hero/1/index.html"
        title="Layer 3"
        width="100%"
        height="100%"
      />
      <iframe
        className="absolute top-0 left-0 z-[200] h-screen"
        src="https://www.firemove.de/swag/hero/2/index.html"
        title="Layer 2"
        width="100%"
        height="100%"
      />
      <iframe
        className="absolute top-0 left-0 z-[100] h-screen border-1"
        src="https://www.firemove.de/swag/hero/3/index.html"
        title="Layer 1"
        width="100%"
        height="100%"
      />

      <div className="absolute top-0 left-0 w-full h-screen z-[1000]"></div>
      </div>
    </section>
  );
}
