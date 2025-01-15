import React from "react";
import { Link } from "gatsby";
import tooltipEffect from "common/tooltipEffect";

const WorksStyle1 = ({data,itsType}) => {
  const urls = data.allMarkdownRemark.nodes.map(node => node.parent.name);

  console.log(urls,"data");
  React.useEffect(() => {
    setTimeout(() => {
      tooltipEffect();
    }, 100);
  }, []);
console.log(data);
  return (
    <section className="works section-padding pb-70">
      <h2 style={{ display: 'none' }}>&nbsp;</h2>
      <div className="container">
        <div className="row lg-space">
        {data.allMarkdownRemark.nodes.map((node,index)=>{
          return (<div className={`col-lg-4 col-md-6 ${(index%2 === 0)? '':'valign'}`}>
            <div className="item">
              <Link to={`/${itsType}/${node.parent.name}`}>
                <div className="img" data-tooltip-tit="Work image" data-tooltip-sub="Design">
                  <img src={node.frontmatter.image} alt={node.frontmatter.title} />
                </div>
              </Link>
            </div>
          </div>);
        })}

          
          {/* <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link to={`blog/`}>
                <div className="img" data-tooltip-tit="Work image" data-tooltip-sub="Design">
                  <img src="/img/portfolio/portfolio/2/1.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link to={`/project-details2/project-details2-dark`}>
                <div className="img" data-tooltip-tit="Work image" data-tooltip-sub="Design">
                  <img src="/img/portfolio/portfolio/1/2.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link to={`/project-details2/project-details2-dark`}>
                <div className="img" data-tooltip-tit="Work image" data-tooltip-sub="Design">
                  <img src="/img/portfolio/portfolio/2/3.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link to={`/project-details2/project-details2-dark`}>
                <div className="img" data-tooltip-tit="Work image" data-tooltip-sub="Design">
                  <img src="/img/portfolio/portfolio/1/3.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link to={`/project-details2/project-details2-dark`}>
                <div className="img" data-tooltip-tit="Work image" data-tooltip-sub="Design">
                  <img src="/img/portfolio/portfolio/2/4.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link to={`/project-details2/project-details2-dark`}>
                <div className="img" data-tooltip-tit="Work image" data-tooltip-sub="Design">
                  <img src="/img/portfolio/portfolio/1/4.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link to={`/project-details2/project-details2-dark`}>
                <div className="img" data-tooltip-tit="Work image" data-tooltip-sub="Design">
                  <img src="/img/portfolio/portfolio/2/5.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link to={`/project-details2/project-details2-dark`}>
                <div className="img" data-tooltip-tit="Work image" data-tooltip-sub="Design">
                  <img src="/img/portfolio/portfolio/1/5.jpg" alt="" />
                </div>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WorksStyle1;
