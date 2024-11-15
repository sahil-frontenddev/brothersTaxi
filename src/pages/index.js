import React from "react";
import Layout from "../components/layout";
import NavbarArch from "../components/Navbar-arch/navbar-arch";
import Intro5 from "../components/Intro5/intro5";
import FooterArch from "../components/Footer-arch/footer-arch.jsx";


const Homepage = () => {
  const navbarRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <Layout useSkin>
      <NavbarArch navbarRef={navbarRef} />
      <Intro5 />
      {/* <AboutUs6 />
      <Services6 />
      <WorksStyle5 />
      <CaseStudy />
      <Team3 />
      <TestimonialsArch />
      <LatestNews />
      <ContactArch />*/}
     
      {/* Hello Landing Page  */}
  

        <FooterArch /> 
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <title>Home | pathankot to himachal and kasmir Taxi.</title>
      <link rel="stylesheet" href="/css/arch-skin-dark.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" />
    </>
  )
}

export default Homepage;
