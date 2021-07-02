import './App.scss';
import Header from '../src/components/header/header'
import Form from '../src/forms/subscription/form'
import MidSection from './components/mid-section/MidSection';
import Accordion from "./components/accordion/accordion";
import Footer from "./components/footer/footer";

import tvImg from "./assets/tv.png"
import mobileImg from "./assets/mobile.jpg"
import devicesImg from "./assets/devices.png"

function App() {
  return (
    <div className="App">
      <div className="top-section">
        <img className='bkg' alt='netflix-bkg' />
        <Header />
        <article>
          <h1>Unlimited movies, TV<br /> shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <Form />
        </article>
      </div>

      <div className="middle-section">
        <MidSection
          title="Enjoy on your TV."
          subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          img={tvImg}
          alt="netflix-on-tv"
        />
        <MidSection
          title="Download your shows to watch offline."
          subtitle="Save your favorites easily and always have something to watch."
          img={mobileImg}
          alt="netflix-on-mobile"
        />
        <MidSection
          title="Watch everywhere."
          subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
          img={devicesImg}
          alt="netflix-on-devices"
        />
      </div>

      <div className="faq-section">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion-wrapper">
          <Accordion
            title="What is Netflix?"
            content="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
          />
          <Accordion
            title="How much does Netflix cost?"
            content="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from BRL21.90 to BRL45.90 a month. No extra costs, no contracts."
          />
          <Accordion
            title="Where can I watch?"
            content="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
          />
          <Accordion
            title="How do I cancel?"
            content="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
          />
          <Accordion
            title="What can I watch on Netflix?"
            content="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
          />
        </div>
        <div className="form-bottom">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
