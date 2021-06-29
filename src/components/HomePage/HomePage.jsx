import React, { useState, useEffect, useRef } from "react";
import About from "../About/about";
import Game from "../Game/Game";
import { VideoContainer, BackDrop, Heading } from "./styles";
import NavBar from "../NavBar/navbar";
import Typed from "typed.js";
import game from "../../assets/video/game.mp4";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import ScrollToTop from "../../ScrollToTop";

const HomePage = () => {
  const [click, setclick] = useState(false);

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Welcome To Infinity", "The Game Finder"],
      typeSpeed: 60,
      backSpeed: 70,
      loop: true,
    };
    if (el !== null) {
      typed.current = new Typed(el.current, options);

      return () => {
        typed.current.destroy();
      };
    }
  }, []);
  useEffect(() => {
    const options = {
      rootMargin: "-150px 0px 0px 0px",
    };
    const home = document.getElementById("home");
    const observer1 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          if (!entry.isIntersecting) {
            document.getElementById("navbar").classList.add("animate");
          } else {
            document.getElementById("navbar").classList.remove("animate");
          }
        }
      });
    }, options);
    observer1.observe(home);
  }, []);

  return (
    <React.Fragment>
      <VideoContainer name="home" id="home">
        <NavBar click={click} setclick={setclick} />
        <video autoPlay loop muted>
          <source src={game} type="video/mp4" />
        </video>
        <BackDrop>
          <Heading>
            <span className="welcome" ref={el} />
          </Heading>
        </BackDrop>
      </VideoContainer>
      <Game />
      <About />
    </React.Fragment>
  );
};

export default HomePage;
