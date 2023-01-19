import tokenImg from "/img/token.gif";

export default function HomePage() {
	return (
		<div>
			<div className="containerHomePage">
			    <img
				    src={tokenImg}
				    className="token"
			    />
			    <div className="home-container">
					<h2 className="title">How to Buy</h2>
					<div className="line-home"></div>
					<p className="home-text">1. Click the "Buy Dopefish Token" button</p>
					<p className="home-text">2. Connect your wallet to Uniswap</p>
					<p className="home-text">3. Select the amount of Dopefish you want to buy</p>
					<p className="home-text">4. Click "Swap"</p>
					<p className="home-text">5. Confirm the transaction</p>
					<p className="home-text bold">HAPPY FISHING</p>
					<p className="home-text">Contract adress:</p>
					<div className="home-link">
						<a 
							href="https://goerli.etherscan.io/token/0xC9e70015eDAa8E714743f24F71AdC61217369B69"
							target="_blank">
							0xC9e70015eDAa8E714743f24F71AdC61217369B69
						</a>
					</div>
				</div>
				<a
					href="https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x1f9840a85d5af5bf1d1762f925bdaddc4201f984&exactField=output&outputCurrency=0xC9e70015eDAa8E714743f24F71AdC61217369B69"
					target="_blank">
					<button className="buyBtn">Buy Dopefish Token</button>
				</a>
				
			</div>
			
			<div className="NavbarBackground">
				<button
					className="backgroundColorHomeBtn"
					style={{
						backgroundColor: "rgb(255, 136, 0, 0.1)",
						borderRadius: "10px 10px 10px 10px",
					}}></button>
				<button className="backgroundColorTeamBtn"></button>
				<button className="backgroundColorRoadmapBtn"></button>
				<button className="backgroundColorNftBtn"></button>
				<button className="backgroundColorMerchBtn"></button>
			</div>
		</div>
	)
}
