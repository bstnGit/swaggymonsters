import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
  } from '@/components/ui/card'

export default function Roadmap() {
    <div className="flex justify-center">
    <div className="flex flex-col w-full max-w-7xl px-4">
      <p className="text-5xl">Roadmap</p>
      <div className="flex md:flex-row flex-col justify-center mt-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full px-0 sm:px-6 md:px-12 lg:px-40 xl:px-0 gap-5">
          <Card className="flex-1 bg-neutral-800/50 border-white/15 text-white">
            <CardHeader>
              <CardTitle className="tracking-wider">Phase 1</CardTitle>
              <CardDescription className="text-lg text-green-600">
                Completed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-400">
                • Token creation <span className="text-green-600">✓</span>
              </p>
              <p className="text-lg text-gray-400">
                • Telegram Launch <span className="text-green-600">✓</span>
              </p>
              <p className="text-lg text-gray-400">
                • Twitter Launch <span className="text-green-600">✓</span>
              </p>
              <p className="text-lg text-gray-400">
                • Token creation <span className="text-green-600">✓</span>
              </p>
            </CardContent>
          </Card>
          <Card className="flex-1 bg-neutral-800/50 border-white/15 text-white">
            <CardHeader>
              <CardTitle className="tracking-wider">Phase 2</CardTitle>
              <CardDescription className="text-yellow-600 text-lg">
                In progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-400">
                • End of Presale <span className="text-green-600">✓</span>
              </p>
              <p className="text-lg text-gray-400">
                • Website Launch <span className="text-green-600">✓</span>
              </p>
              <p className="text-lg text-gray-400">
                • Instagram Launch <span className="text-green-600">✓</span>
              </p>
              <p className="text-lg text-gray-400">
                • Start of organic Marketing <br /> &nbsp;&nbsp;&nbsp;& paid
                advertisments <span className="text-green-600">✓</span>
              </p>
              <br />
              <p className="text-lg text-gray-400">
                • Secret announcment <br /> &nbsp;&nbsp;&nbsp;(stay tuned!)
              </p>
            </CardContent>
          </Card>
          <Card className="flex-1 bg-neutral-800/50 border-white/15 text-white">
            <CardHeader>
              <CardTitle className="tracking-wider">Phase 3</CardTitle>
              <CardDescription className="opacity-0 pointer-events-none">
                To be determined
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-400">
                • Token launch&nbsp;
                <span className="text-green-600">✓</span>
              </p>
              <p className="text-lg text-gray-400">
                &nbsp;&nbsp;&nbsp; 10k Mc -&gt; Dex Update&nbsp;
                <span className="text-green-600">✓</span>
              </p>
              <p className="text-lg text-gray-400">
                • CG Fasttrack Application
              </p>
              <p className="text-lg text-gray-400">
                • CMC Fasttrack Application
              </p>
              <p className="text-lg text-gray-400">
                • Marketing through Callouts
              </p>
              <br />
              <p className="text-lg text-gray-400">Goals</p>
              <p className="text-lg text-gray-400">
                • 300 Telegram member&nbsp;
                <span className="text-green-600">✓</span>
              </p>
              <p className="text-lg text-gray-400">
                • 300 Instagram follower&nbsp;
                <span className="text-green-600">✓</span>
              </p>
              <p className="text-lg text-gray-400">
                • 150 Twitter follower&nbsp;
                <span className="text-green-600">✓</span>
              </p>
            </CardContent>
          </Card>
          <Card className="flex-1 bg-neutral-800/50 border-white/15 text-white">
            <CardHeader>
              <CardTitle className="tracking-wider">Phase 4</CardTitle>
              <CardDescription className="opacity-0 pointer-events-none">
                To be determined
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-400">
                • NFT Collection for increased <br />
                &nbsp;&nbsp;&nbsp;Liquidity Pool
              </p>
              <p className="text-lg text-gray-400">
                • Webbrowser game with <br /> &nbsp;&nbsp;&nbsp;community
                rewards
              </p>
              <p className="text-lg text-gray-400">
                • Special Events! <br /> &nbsp;&nbsp;&nbsp; (SOL Trending,
                Community <br /> &nbsp;&nbsp;&nbsp;giveaways, etc.)
              </p>

              <br />
              <p className="text-lg text-gray-400">Goals</p>
              <p className="text-lg text-gray-400">• 1000 Telegram member</p>
              <p className="text-lg text-gray-400">
                • 1000 Instagram follower
              </p>
              <p className="text-lg text-gray-400">• 500 Twitter follower</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
}
