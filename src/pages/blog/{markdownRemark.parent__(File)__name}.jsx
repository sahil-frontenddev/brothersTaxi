import * as React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout"
import NavbarArch from "components/Navbar-arch/navbar-arch"

export default function BlogPostTemplate({data}) {
  
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
      <section class="page-header undefined">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 col-md-9">
              <div class="cont text-center">
              <h1 class="mb-10 color-font">{data.markdownRemark.frontmatter.title}</h1>
              </div>
      </div>
      </div>
      </div>
      </section>
      <section className="blog-pg single section-padding pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
                <div className="post">
                    <div className="img">
                      <img src={data.markdownRemark.frontmatter.thumbnail} />
                    </div>
                    <div class="content pt-60">
                      <div class="row justify-content-center">
                        <div class="col-lg-10"><div class="cont">
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}>
        </div></div></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    </Layout>

  )
}

export const Head = ({data}) => {
  return (
    <>
      <title>Dk Tour & Travel - Blog detail | {data.markdownRemark.frontmatter.title}</title>
      <link rel="stylesheet" href="/css/arch-skin-dark.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" />
      <link rel="stylesheet" href="/css/customcss.css" />
    </>
  )
}
export const pageQuery = graphql`
  query MyQuery($id: String) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      date
      slug
      thumbnail
      title
    }
    html
  }
}
`