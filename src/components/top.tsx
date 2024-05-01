import Navbar from "../components/navbar";

export default function Top() {
  return (
    <section className="relative bg-[#000] h-screen">
      <Navbar />
      <iframe
        className="absolute z-[300]"
        src="https://www.firemove.de/swag/hero/1/index.html"
        title="Layer 3"
        width="100%"
        height="100%"
      />
      <iframe
        className="absolute z-[200]"
        src="https://www.firemove.de/swag/hero/2/index.html"
        title="Layer 2"
        width="100%"
        height="100%"
      />
      <iframe
        className="absolute z-[100]"
        src="https://www.firemove.de/swag/hero/3/index.html"
        title="Layer 1"
        width="100%"
        height="100%"
      />
      <div className="absolute top-0 left-0 w-full h-screen z-[1000]"></div>
    </section>
  );
}
