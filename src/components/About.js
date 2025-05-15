import Footer from './Footer';

import {useEffect} from 'react';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="About"></div>

      <Footer />
    </>
  );
}

export default About;
