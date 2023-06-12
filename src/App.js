import { BrowserRouter } from "react-router-dom";
import {
	Hero,
	Navbar,
	About,
	Tech,
	Experience,
	Works,
	Contact,
	StarsCanvas,
	MobileHero,
} from "./components";
import { useState } from "react";
function App() {
	const [ismobile ,setMobile] =useState(false)
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div
					className="bg-hero-pattern bg-cover bg-no-repeat
        bg-center"
				>
					<Navbar />

<div className="sm:block xs:hidden">
						<Hero />

</div>
<div className="xs:block sm:hidden">
						<MobileHero />

</div>
				</div>

				<About />
				<Experience />
				<Tech />
				<Works />
				{/* <Feedbacks /> */}

				<div className="relative z-0 ">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
