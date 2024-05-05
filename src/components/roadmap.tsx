import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Roadmap() {
	return (
		<section className="my-[10rem]">
			<div className="flex justify-center">
				<div className="flex flex-col w-full max-w-7xl px-4">
					<p className="text-5xl">Roadmap</p>
					<div className="flex md:flex-row flex-col justify-center mt-10 w-full">
						<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full px-0 sm:px-6 md:px-12 lg:px-40 xl:px-0 gap-5">
							<Card className="flex-1 bg-neutral-800/50 border-white/15 text-white [&>p]:text-xl">
								<CardHeader>
									<CardTitle className="tracking-wider">
										Phase 1
									</CardTitle>
									<CardDescription className="text-lg text-green-600">
										Completed
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p>
										• Token creation <span>✓</span>
									</p>
									<p>• Telegram Launch </p>
									<p>• Twitter Launch </p>
									<p>• Token creation </p>
								</CardContent>
							</Card>
							<Card className="flex-1 bg-neutral-800/50 border-white/15 text-white">
								<CardHeader>
									<CardTitle className="tracking-wider">
										Phase 2
									</CardTitle>
									<CardDescription className="text-yellow-600 text-lg">
										In Progress
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p>• End of Presale </p>
									<p>• Website Launch </p>
									<p>• Instagram Launch </p>
									<p>
										• Start of organic Marketing <br />{" "}
										&nbsp;&nbsp;&nbsp;& paid advertisments{" "}
									</p>
									<br />
									<p>
										• Secret announcment <br />{" "}
										&nbsp;&nbsp;&nbsp;(stay tuned!)
									</p>
								</CardContent>
							</Card>
							<Card className="flex-1 bg-neutral-800/50 border-white/15 text-white">
								<CardHeader>
									<CardTitle className="tracking-wider">
										Phase 3
									</CardTitle>
									<CardDescription className="opacity-0 pointer-events-none">
										To be determined
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p>• Token launch&nbsp;</p>
									<p>
										&nbsp;&nbsp;&nbsp; 10k Mc -&gt; Dex
										Update&nbsp;
									</p>
									<p>• CG Fasttrack Application</p>
									<p>• CMC Fasttrack Application</p>
									<p>• Marketing through Callouts</p>
									<br />
									<p>Goals</p>
									<p>• 300 Telegram member&nbsp;</p>
									<p>• 300 Instagram follower&nbsp;</p>
									<p>• 150 Twitter follower&nbsp;</p>
								</CardContent>
							</Card>
							<Card className="flex-1 bg-neutral-800/50 border-white/15 text-white">
								<CardHeader>
									<CardTitle className="tracking-wider">
										Phase 4
									</CardTitle>
									<CardDescription className="opacity-0 pointer-events-none">
										To be determined
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p>
										• NFT Collection for increased <br />
										&nbsp;&nbsp;&nbsp;Liquidity Pool
									</p>
									<p>
										• Webbrowser game with <br />{" "}
										&nbsp;&nbsp;&nbsp;community rewards
									</p>
									<p>
										• Special Events! <br />{" "}
										&nbsp;&nbsp;&nbsp; (SOL Trending,
										Community <br />{" "}
										&nbsp;&nbsp;&nbsp;giveaways, etc.)
									</p>

									<br />
									<p>Goals</p>
									<p>• 1000 Telegram member</p>
									<p>• 1000 Instagram follower</p>
									<p>• 500 Twitter follower</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
