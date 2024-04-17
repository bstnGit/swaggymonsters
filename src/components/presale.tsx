import { Copy } from "@/assets/copy";

export const Presale = () => {
  return (
    <section className="bg-[#FBD38D] h-screen flex-col gap-8 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-bold text-[3rem]">Presale</h1>
        <p>102.98 SOL has already been collected!</p>
      </div>
      <div className="w-fit flex flex-col gap-12 mx-auto">
        <div className="bg-[#FFE6BA] w-full h-auto  py-4 gap-4 px-12 items-center flex rounded-sm flex-col">
          <h1 className="font-bold">Copy & Send SOL</h1>
          <div className="flex items-center gap-4">
            <div>
              <div className="py-4 rounded-sm px-4 bg-[#FFA500]">
                <p>FPjsfF8wSyLaxVbfPKxmgKjiXyqr8U1zbUc5kx7QBvGu</p>
              </div>
              <p className="font-semibold px-2 mt-2">Token Address</p>
            </div>
            <div className=" block mb-auto cursor-pointer py-5 rounded-sm px-4 bg-[#FFA500]">
              <Copy />
            </div>
          </div>
        </div>

        <div className="bg-[#FFE6BA] w-full h-auto pb-8 pt-4 gap-4 px-12 items-center flex rounded-sm flex-col">
          <h1 className="font-bold">Connect your wallet now!</h1>
          <div className="py-4 rounded-sm px-4 bg-[#FFA500]">
            <h1>Connect Wallet</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
