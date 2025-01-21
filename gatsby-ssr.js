import React from "react";

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  // Meta Tags
  <meta key="httpEquiv" httpEquiv="X-UA-Compatible" content="IE=edge" />,
  <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />,
  <meta key="keywords" name="keywords" content="Pathankot to Jammu and kashmir, pathankot to Delhi, Pathankot to amritsar,tourist places near me, near me taxi service, cabs near me, call taxi,cab booking, Pathankot to Chamba, Pathankot to delhi" />,

  <meta key="description" name="description" content="DK Tour & Travel - Taxi service from Pathankot to all near by tourist places for example Shri mata vaisno devi, Dalhousie , chamba, Barmour, Amristsar and may more place." />,
  // <meta key="author" name="author" content="ThemesCamp" />,
  // Google Fonts
  <link key="Poppins" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" />,
  <link key="Montserrat" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap" />,
  // Styles
  <link key="ionicons" rel="stylesheet" href="/css/ionicons.min.css" />,
  <link key="styles-light" rel="stylesheet" href="/css/light.css" />,
  <link key="styles-dark" rel="stylesheet" href="/css/dark.css" />,
  <link rel="stylesheet" href="/css/customcss.css" />,
  // Icon
  <link key="icon" rel="shortcut icon" href="/img/favicon.ico" title="Favicon" sizes="16x16" />,
  // Scripts
  <script key="isotope" src="/js/isotope.pkgd.min.js" defer></script>,
  <script key="pace" src="/js/pace.min.js" defer></script>,
  <script key="splitting" src="/js/splitting.min.js" defer></script>,
  <script key="simpleParallax" src="/js/simpleParallax.min.js" defer></script>,
  <script key="wow" src="/js/wow.min.js" defer></script>,
]

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes(HtmlAttributes);
  setHeadComponents(HeadComponents);
}
