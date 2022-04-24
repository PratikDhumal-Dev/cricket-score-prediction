import Sidebar from "./Sidebar";

export const Header = (props) => {
  return (
    <div className="header">
      <Sidebar />
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <a
                    href="http://127.0.0.1:5000"
                    target="_blank"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Make Prediction
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
