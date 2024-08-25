// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./plansStyle.css";
const Plans = () => {
  const navigation = useNavigate();
  return (
    <div className="cards">
      <article className="plan [ card ]">
        <div className="inner">
          <span className="pricing">
            <span>
              $20 <small>/ m</small>
            </span>
          </span>
          <h2 className="title">Normal</h2>
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
          <button
            onClick={() => navigation("checkout?amount=20")}
            className="button"
          >
            Get Started
          </button>
        </div>
      </article>
      <article className="plan [ card ]">
        <div className="inner">
          <span className="pricing">
            <span>
              $50 <small>/ m</small>
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
          <button
            onClick={() => navigation("../checkout?amount=50")}
            className="button"
          >
            Get Started
          </button>
        </div>
      </article>
      <article className="plan [ card ]">
        <div className="inner">
          <span className="pricing">
            <span>
              $100 <small>/ m</small>
            </span>
          </span>
          <h2 className="title">Super</h2>
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
          <button
            onClick={() => navigation("checkout?amount=100")}
            className="button"
          >
            Get Started
          </button>
        </div>
      </article>
    </div>
  );
};

export default Plans;
