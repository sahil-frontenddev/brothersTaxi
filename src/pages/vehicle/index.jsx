import React from "react";
import Layout from "components/layout";
import FooterArch from "components/Footer-arch/footer-arch";
import WorksHeader from "components/Works-header/works-header";
import WorksStyle1 from "components/Works-style1/works-style1";
import { graphql } from "gatsby"
import NavbarArch from "components/Navbar-arch/navbar-arch";

export default  function WorksDark ({data}) {
  console.log(data,"blogs data")
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);

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

  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <Layout>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <NavbarArch navbarRef={navbarRef } />
      <WorksHeader sliderRef={fixedHeader} headerText={'Blogs'} />
      <div ref={MainContent} className="main-content">
        <WorksStyle1 data={data} itsType={'vehicles'} />
        <FooterArch />
      </div>
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <title>DKTour and Travel  - Blogs</title>
      <link rel="stylesheet" href="/css/arch-skin-dark.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" />
      <link rel="stylesheet" href="/css/customcss.css" />
    </>
  )
}

export const pageQuery = graphql`
  query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(_vehicles)/"}}) {
    nodes {
      frontmatter {
        date
        title
        thumbnail
      }
      id
      html
      parent {
        ... on File {
          name
        }
      }
    }
  }
}
`