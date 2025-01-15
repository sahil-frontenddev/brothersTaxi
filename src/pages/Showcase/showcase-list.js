import React from "react";
import ShowcasesFullScreenCircleSlide from "components/Showcases-full-screen-circle-slide/showcases-full-screen-circle-slide.jsx";
// import La from "layouts/Dark";
import Layout from "components/layout";
import NavbarArch from "components/Navbar-arch/navbar-arch";
import FooterArch from "components/Footer-arch/footer-arch";

const ShowcaseList = () => {
  return (
    <Layout>
      {/* <NavbarFullMenu /> */}
      <NavbarArch />
      <ShowcasesFullScreenCircleSlide />
      <FooterArch />
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <title>DK Tour & Travel | Pathankot to katra, dharamshala, amritsar and dalhausie.</title>
    </>
  )
}

export default ShowcaseList;
