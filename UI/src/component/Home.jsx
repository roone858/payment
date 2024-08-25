import { Link } from "react-router-dom";
import "./Home.css";
// eslint-disable-next-line react/prop-types
const Home = () => {
  return (
    <div className="cards">
      <article className="information [ card ]">
        <span className="tag">Feature</span>
        <h2 className="title">Never miss your important meetings</h2>
        <p className="info">
          Elemenatary tracks all the events for the day as you scheduled and you
          will never have to worry.
        </p>
        <button className="button">
          <span>Learn more</span>
          <svg
            xmlns="http: //www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="none"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
              fill="currentColor"
            />
          </svg>
        </button>
      </article>
      <article className="plan [ card ]">
        <div className="inner">
          <span className="pricing">
            <span>
              $56 <small>/ m</small>
            </span>
          </span>
          <h2 className="title">Professional</h2>
          <p className="info">
            This plan is for those who have a team already and running a large
            business.
          </p>
          <ul className="features">
            <li>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                <strong>20</strong> team members
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                Plan <strong>team meetings</strong>
              </span>
            </li>
            <li>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>File sharing</span>
            </li>
          </ul>
          
          <Link to={"/plans"}>
            <button className="button">Choose plan</button>
          </Link>
        </div>
      </article>
      <article className="information [ card ]">
        <h2 className="title">The only tool you need to schedule your day</h2>
        <p className="info">
          Always keep updated with this simple tool on the go, when and where
          ever you need.
        </p>
        <dl className="details">
          <div>
            <dt>Satisfaction</dt>
            <dd>100%</dd>
          </div>
          <div>
            <dt>Customers</dt>
            <dd>4.5K</dd>
          </div>
        </dl>
      </article>
    </div>
  );
};

export default Home;
