import "./Hero.css";
import { heroImageMobile, heroImageDesktop, partners } from "../data";
import { useRef } from "react";

const Hero = () => {
  const learnMoreButton = useRef();

  const handleMouseEnter = (event) => {
    const parentOffset = learnMoreButton.current.getBoundingClientRect();
    const relX = event.pageX - parentOffset.left;
    const relY = event.pageY - parentOffset.top;

    const circleElement = learnMoreButton.current.previousElementSibling;
    console.log(relX + " " + relY);

    circleElement.style.left = `${relX}px`;
    circleElement.style.top = `${relY}px`;

    circleElement.classList.remove("desplode-circle");
    circleElement.classList.add("explode-circle");
  };

  const handleMouseLeave = (event) => {
    const parentOffset = learnMoreButton.current.getBoundingClientRect();
    const relX = event.pageX - parentOffset.left;
    const relY = event.pageY - parentOffset.top;

    const circleElement = learnMoreButton.current.previousElementSibling;
    console.log(relX + " " + relY + " " + circleElement.className);

    circleElement.style.left = `${relX}px`;
    circleElement.style.top = `${relY}px`;

    circleElement.classList.remove("explode-circle");
    circleElement.classList.add("desplode-circle");
  };

  return (
    <main className="hero-section">
      <picture>
        <source
          media="(min-width: 48rem)"
          srcSet={heroImageDesktop}
          type="image/png"
        ></source>
        <img src={heroImageMobile} alt="hero image" aria-hidden="true" />
      </picture>

      <article className="hero-info flex" direction="col">
        <div className="info flex" direction="col">
          <h1 className="hero-title">Make remote work</h1>
          <p className="hero-text">
            Get your team in sync, no matter your location. Streamline
            processes. create team rituals, and watch productivity soar.
          </p>

          <div className="btn-learnMore">
            <span className="su_button_circle"></span>
            <a
              href="#"
              className="button_su_inner"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={learnMoreButton}
            >
              <span className="button_text_container">Learn more</span>
            </a>
          </div>
        </div>

        <ul className="out-partners flex" direction="row">
          {partners.map((partner, index) => (
            <li key={index}>
              <img src={partner} alt="Partner Logo" />
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export default Hero;
