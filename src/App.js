import './App.css';
import Contact from './Components/Contact';
import Header from './Components/Header';
import MainFrom from './Components/MainFrom';
import bg from "./images/bg_1.jpg";

function App() {
  
  return (
    <>
      <section className="ftco-section img bg-hero" style={{ 
      backgroundImage: `url(${bg})` 
    }}>
		<div className="container">

		<Header />

			<div className="row justify-content-center">
				<div className="col-lg-12">
					<div className="wrapper">
						<div className="row no-gutters justify-content-between">
							<div className="col-lg-4 d-flex align-items-stretch">
								<Contact />
							</div>
							<div className="col-lg-8">
								<MainFrom />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  );
}

export default App;
