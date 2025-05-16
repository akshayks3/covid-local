import './App.scss';
import Incidents from './components/Incidents';
import LoginPage from './components/Login';
import Navbar from './components/Navbar';
import {DataProvider} from './contexts/dataContext';
import {FilterProvider} from './contexts/filterContext';
import {retry} from './utils/commonFunctions';

import {lazy, useState, Suspense, useEffect} from 'react';
import {Route, Redirect, Switch, useLocation} from 'react-router-dom';

const Home = lazy(() => retry(() => import('./components/Home')));
const Feedback = lazy(() => retry(() => import('./components/Feedback')));
const About = lazy(() => retry(() => import('./components/About')));
const State = lazy(() => retry(() => import('./components/State')));
const LanguageSwitcher = lazy(() =>
  retry(() => import('./components/LanguageSwitcher'))
);

const App = () => {
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState({
    userName: '',
    loggedIn: false,
    userRole: '',
  });

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      setUser({
        userName: user.userName,
        loggedIn: true,
        userRole: user.userRole,
      });
    }
  }, []);

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      showInNavbar: true,
    },
    {
      pageLink: '/incidents',
      view: Incidents,
      displayName: 'Incidents',
      showInNavbar: true,
    },
    {
      pageLink: '/feedback',
      view: Feedback,
      displayName: 'Feedback',
      showInNavbar: true,
    },
    {
      pageLink: '/about',
      view: About,
      displayName: 'About',
      showInNavbar: true,
    },
    {
      pageLink: '/state/:stateCode',
      view: State,
      displayName: 'State',
      showInNavbar: false,
    },
  ];

  useEffect(() => {
    if (showLanguageSwitcher) {
      // For Chrome, Firefox, IE and Opera
      document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
      // For Safari
      document.body.scrollTo({top: 0, behavior: 'smooth'});
    }
  }, [showLanguageSwitcher]);

  return (
    <div className="App">
      {user.userRole && (
        <>
          <DataProvider>
            <FilterProvider>
              <Suspense fallback={<div />}>
                <LanguageSwitcher
                  {...{showLanguageSwitcher, setShowLanguageSwitcher}}
                />
              </Suspense>

              <Navbar
                {...{
                  pages,
                  showLanguageSwitcher,
                  setShowLanguageSwitcher,
                  setUser,
                  user,
                }}
              />

              {/* <Banner /> */}
              <Suspense fallback={<div />}>
                <Switch location={location}>
                  {pages
                    .filter((page) => {
                      return page.showInNavbar;
                    })
                    .map((page, index) => {
                      return (
                        <Route
                          exact
                          path={page.pageLink}
                          render={({match}) => <page.view />}
                          key={index}
                        />
                      );
                    })}
                  <Redirect to="/" />
                </Switch>
              </Suspense>
            </FilterProvider>
          </DataProvider>
        </>
      )}
      {!user.userRole && <LoginPage setUser={setUser} />}
    </div>
  );
};

export default App;
