import Navbar from "../components/navbar";

export default function Top() {
  return (
    <section className="relative bg-[#FFA500] h-screen">
      <Navbar />
      <div className="overflow-auto h-full">
        <iframe
          className="z-[100]"
          src="https://www.firemove.de/firemove-de/sm-web/maenner/index.htm"
          title="External Page"
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
}
