import * as React from "react";
import { Link } from "gatsby";
import Toggle from "./Toggle";
/**
 *
 */
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDownloadBtn: true,
    };
  }

  render() {
    return (
      <React.Fragment>
        <nav className="bg-blue-900 shadow-lg border-b border-black">
          <div className="container mx-auto">
            <div className="sm:flex justify-center">
              <ul className="text-white sm:self-center text-xl border-t sm:border-none">
                {/* Menu Items */}
                <li className="sm:inline-block">
                  <Link className="hover:text-green-300 p-4" to="/">
                    {/* Home */}
                    Home
                  </Link>
                </li>
                <li className="sm:inline-block">
                  <Link className="hover:text-green-300 p-4" to="/Resume">
                    Resume
                  </Link>
                </li>
                <li className="sm:inline-block">
                  <Link className="hover:text-green-300 p-4" to="/CoverLetter">
                    Cover Letter
                  </Link>
                </li>
                <li className="sm:inline-block">
                  <Link className="hover:text-green-300 p-4" to="/Tips">
                    Career Tips
                  </Link>
                </li>
                <li className="sm:inline-block">
                  <Link className="hover:text-green-300 p-4" to="/About">
                    <button>About</button>
                  </Link>
                </li>
              </ul>
              <div className="sm:flex p-4">
                <Toggle />
              </div>
              <div className="sm:flex p-4">
                {this.props.showDownloadBtn ? (
                  <button
                    className="z-10 rounded bg-black text-blue m-2 p-2 text-center hover:shadow-xl print:hidden"
                    onClick={e => {
                      e.preventDefault();
                      window.print();
                    }}
                  >
                    <svg
                      className="w-5 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>{" "}
                    Download PDF
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
