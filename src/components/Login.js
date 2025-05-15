import {useState} from 'react';

const DUMMY_USERS = [
  {
    username: 'admin@gmail.com',
    password: 'Admin1234',
    userRole: 'SA' /* Super Admin */,
  },
  {
    username: 'propertyadmin@ymail.com',
    password: 'Property1234',
    userRole: 'PA' /* Property Admin */,
    propertyId: 'MAQ',
  },
  {
    username: 'user@gmail.com',
    password: 'User1234',
    userRole: 'RA' /* Regional Admin */,
    region: ['WA', 'AT'],
  },
];

export default function LoginPage({setUser}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let loggedInUser = null;
    for (const user of DUMMY_USERS) {
      if (user.username === username && user.password === password) {
        loggedInUser = user;
        break;
      }
    }
    if (!loggedInUser) {
      setWrongPassword(true);
      setTimeout(() => {
        setWrongPassword(false);
      }, 6000);
    } else {
      sessionStorage.setItem('user', JSON.stringify(loggedInUser));
      setUser((st) => ({
        ...st,
        username: loggedInUser.username,
        loggedIn: true,
        userRole: loggedInUser.userRole,
      }));
    }
  };

  return (
    <div className="login-page">
      {/* Background SVG */}
      <div className="svg-background">
        <svg
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="blobGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGradient)"
            opacity="0.1"
            d="M438.5,591Q310,682,198,591Q86,500,92,366Q98,232,206,155.5Q314,79,448.5,128Q583,177,613,323.5Q643,470,526.5,530Q410,590,438.5,591Z"
          />
        </svg>
      </div>

      {/* Top Right Brand */}
      <div className="top-right-brand">Sentimentally Yours, Feedback Inc</div>

      <div className="login-box">
        <h2 className="login-title">Welcome Back</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
          {console.log('this is the wrong password', wrongPassword)}
          {wrongPassword && (
            <div style={{textAlign: 'center', color: 'red'}}>
              Invalid Credentials
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
