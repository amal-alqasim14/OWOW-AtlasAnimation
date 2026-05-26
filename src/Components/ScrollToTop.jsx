// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// export default ScrollToTop;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const content = document.getElementById("content");
    if (content) {
      content.scrollTo(0, 0);
    }

    const homePage = document.querySelector(".home-page");
    if (homePage) {
      homePage.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

export default ScrollToTop;