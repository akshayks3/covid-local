import {
  SLIDE_IN,
  SLIDE_OUT,
  SLIDE_IN_MOBILE,
  SLIDE_OUT_MOBILE,
} from '../animations';

import {useState, useCallback, useRef, useEffect} from 'react';
import {Book, HelpCircle, Home, Moon, Sun, Users} from 'react-feather';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {useTransition, animated} from 'react-spring';
import {useLockBodyScroll, usePageLeave, useWindowSize} from 'react-use';
import useDarkMode from 'use-dark-mode';

function Navbar({pages, setUser, user}) {
  const {t} = useTranslation();

  const [expand, setExpand] = useState(false);
  const darkMode = useDarkMode(true);

  useEffect(() => {
    if (darkMode.value === false) {
      darkMode.toggle();
    }
  }, [darkMode]);

  useLockBodyScroll(expand);
  const windowSize = useWindowSize();

  usePageLeave(() => setExpand(false));

  const navbarTransition = useTransition(true, {
    from: {opacity: 0},
    enter: {opacity: 1},
  });

  const expandTransition = useTransition(expand, {
    from: windowSize.width < 769 ? SLIDE_IN_MOBILE : SLIDE_IN,
    enter: windowSize.width < 769 ? SLIDE_OUT_MOBILE : SLIDE_OUT,
    leave: windowSize.width < 769 ? SLIDE_IN_MOBILE : SLIDE_IN,
    config: {mass: 1, tension: 210, friction: 26},
  });

  const handleMouseEnter = useCallback(() => {
    if (windowSize.width >= 769) {
      setExpand(true);
    }
  }, [windowSize.width]);

  const handleLogout = () => {
    setUser((st) => ({
      ...st,
      userName: '',
      loggedIn: false,
      userRole: '',
    }));
    sessionStorage.clear('user');
  };

  return navbarTransition((style, item) => (
    <animated.div className="Navbar" {...{style}}>
      <div className="navbar-left" onClick={handleLogout}>
        Logout
      </div>

      <div className="navbar-middle">
        <Link to="/" onClick={setExpand.bind(this, false)}>
          Sentimentally<span> Yours</span>
        </Link>
      </div>

      <div
        className="navbar-right"
        onMouseEnter={handleMouseEnter}
        {...(windowSize.width < 769 && {
          onClick: setExpand.bind(this, !expand),
        })}
      >
        {windowSize.width < 769 && (
          <span>{expand ? t('Close') : t('Menu')}</span>
        )}

        {windowSize.width >= 769 && (
          <>
            {user?.userRole === 'SA' && (
              <Link to="/">
                <span>
                  <Home {...activeNavIcon('/')} />
                </span>
              </Link>
            )}
            <Link to="/incidents">
              <span>
                <Book {...activeNavIcon('/incidents')} />
              </span>
            </Link>
            <Link to="/feedback">
              <span>
                <Users {...activeNavIcon('/feedback')} />
              </span>
            </Link>
            <Link to="/about">
              <span>
                <HelpCircle {...activeNavIcon('/about')} />
              </span>
            </Link>
            {/* <span> */}
            {/* <SunMoon {...{darkMode}} />
            </span> */}
          </>
        )}
      </div>

      {expandTransition(
        (style, item) =>
          item && (
            <animated.div {...{style}}>
              <Expand {...{pages, setExpand, darkMode, windowSize}} />
            </animated.div>
          )
      )}
    </animated.div>
  ));
}

function Expand({pages, setExpand, darkMode, windowSize}) {
  const expandElement = useRef(null);
  const {t} = useTranslation();

  const handleMouseLeave = useCallback(() => {
    windowSize.width >= 769 && setExpand(false);
  }, [setExpand, windowSize.width]);

  return (
    <div className="expand" ref={expandElement} onMouseLeave={handleMouseLeave}>
      {pages.map((page, i) => {
        if (page.showInNavbar === true) {
          return (
            <Link
              to={page.pageLink}
              key={i}
              {...(windowSize.width < 769 && {
                onClick: setExpand.bind(this, false),
              })}
            >
              <span
                {...navLinkProps(page.pageLink, page.animationDelayForNavbar)}
              >
                {t(page.displayName)}
              </span>
            </Link>
          );
        }
        return null;
      })}

      {windowSize.width < 769 && <SunMoon {...{darkMode}} />}
    </div>
  );
}

export default Navbar;

const navLinkProps = (path, animationDelay) => ({
  className: `${window.location.pathname === path ? 'focused' : ''}`,
});

const activeNavIcon = (path) => ({
  style: {
    stroke: window.location.pathname === path ? '#4c75f2' : '',
  },
});

const SunMoon = ({darkMode}) => {
  return (
    <div className="SunMoon" onClick={darkMode.toggle}>
      <div>{darkMode.value ? <Sun color={'#ffc107'} /> : <Moon />}</div>
    </div>
  );
};
