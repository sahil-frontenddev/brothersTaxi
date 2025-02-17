import React from "react";
import Layout from "components/layout";
import Navbar from "components/Navbar/navbar";
import FooterArch from "components/Footer-arch/footer-arch";
import WorksHeader from "components/Works-header/works-header";
import WorksStyle1 from "components/Works-style1/works-style1";
import { graphql,Link } from "gatsby"
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
      <section className="blog-pg blog-list section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts mt-80">
              {data.allMarkdownRemark.nodes.map((node)=>{
                return (<div
                  className="item mb-80 wow fadeInUp"
                  key={node.frontmatter.id}
                  data-wow-delay=".3s"
                >
                  <div className="row">
                    <div className="col-lg-6 valign">
                      <div className="img md-mb50">
                        <img src={node.frontmatter.thumbnail} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 valign">
                      <div className="cont">
                        <div>
                          <div className="info">
                            <Link to="javascript:void();" className="date">
                            Publish Date &nbsp;&nbsp; - &nbsp;&nbsp;
                              <span>
                                <i>{new Date(node.frontmatter.date).getDay()}</i>
                                <span>/</span>
                                {new Date(node.frontmatter.date).toLocaleString('default', { month: 'long' })}
                                <span>/</span>
                                <i>{new Date(node.frontmatter.date).getFullYear()}</i>
                              </span>
                            </Link>
                            
                            {/* {
                              blogItem.tags.map((tag, index) => (
                                <Link key={index} to="/blog/blog-dark" className="tag">
                                  <span>{tag}</span>
                                </Link>
                              ))
                            } */}
                          </div>
                          <h5>
                            <Link to="/blog-details/blog-details-dark">
                              {node.frontmatter.title}
                            </Link>
                          </h5>
                          <p className="mt-10">
                            {node.frontmatter.description + '...'}
                          </p>
                          <div className="btn-more mt-30">
                            <Link to={`/blog/${node.parent.name}`} className="simple-btn">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)
              })}
              </div>
            </div>
          </div>
        </div>
        </section>
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
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(_posts)/"}}) {
    nodes {
      frontmatter {
        date
        title
        thumbnail
        description
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