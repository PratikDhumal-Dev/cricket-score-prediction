export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll"
            href="/"
            style={{ marginLeft: "-300px" }}
          >
            CrickMagic
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/upcomingMatches" className="page-scroll">
                Live Score
              </a>
            </li>
            <li>
              <a href="/upcomingMatches" className="page-scroll">
                Schedule
              </a>
            </li>
            <li>
              <a
                href="http://127.0.0.1:5000"
                target="_blank"
                className="page-scroll"
              >
                cricke-score-prediction
              </a>
            </li>
            <li>
              <a href="/latestNews" className="page-scroll">
                latest news
              </a>
            </li>
            <li>
              <a href="/login" className="page-scroll">
                login
              </a>
            </li>
            <li>
              <a href="/login" className="page-scroll">
                sign-up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
