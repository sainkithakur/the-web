import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const drops = [
    { name: "T- shirts" },
    { name: "Shirts" },
    { name: "Hoodies" },
    { name: "sweatshirts" },
    { name: "Cargos" },
    { name: "Jeans" },
    { name: "Shorts" },
    { name: "ACCESSORIES" },
  ];
  const [tog, setTog] = useState(false);
  return (
    <div className="bg-gray-100">
      <div className="flex">
        <div className="w-40 ml-20 py-6 flex">
          <svg id="logo-right" viewBox="0 0 349.054 54.411">
            <g id="blu_svg" transform="translate(-216.967 -104.886)">
              <g
                id="Group_100"
                data-name="Group 100"
                transform="translate(216.967 104.886)"
              >
                <g className="blu" id="Group_98" data-name="Group 98">
                  <path
                    className="b"
                    id="Path_44"
                    data-name="Path 44"
                    d="M216.967,150.336v-52.6h26.666q20.6,0,20.6,12.911,0,9.173-12.431,11.752,14.979,2.622,14.979,13.951,0,13.98-20.163,13.98Zm17.4-29.707h5.36q7.423,0,7.425-9.637,0-8.9-7.863-8.9h-4.922Zm0,25.353h4.961q9.75,0,9.752-9.786,0-11.216-10.059-11.216h-4.658Z"
                    transform="translate(-216.967 -96.811)"
                  ></path>
                </g>
              </g>
            </g>
            <g id="blu_svg" transform="translate(-216.967 -104.886)">
              <g
                id="Group_100"
                data-name="Group 100"
                transform="translate(216.967 104.886)"
              >
                <g className="blu" id="Group_98" data-name="Group 98">
                  <path
                    className="l"
                    id="Path_45"
                    data-name="Path 45"
                    d="M257.442,97.735v47.322h24.645v5.279H240.046v-52.6Z"
                    transform="translate(-188.007 -96.811)"
                  ></path>
                  <path
                    className="u"
                    id="Path_46"
                    data-name="Path 46"
                    d="M303.747,97.735v35.3q0,18.154-22.889,18.149-22.8,0-22.8-18.149v-35.3h17.4v35.773q0,6.938,2.255,9.482t8.37,2.541q11.815,0,11.815-12.485V97.735Z"
                    transform="translate(-165.402 -96.811)"
                  ></path>
                </g>
                <g id="Group_98" data-name="Group 98">
                  <path
                    className="o"
                    id="Path_47"
                    data-name="Path 47"
                    d="M306.49,97.325q26.188,0,26.188,27.209t-26.663,27.2q-26.661,0-26.666-27.82Q279.342,97.33,306.49,97.325Zm-.483,4.2a6.568,6.568,0,0,0-6.656,4.76q-1.732,4.758-1.734,18.248t1.734,18.244a7.035,7.035,0,0,0,13.3,0q1.732-4.76,1.734-18.244t-1.734-18.228A6.571,6.571,0,0,0,306.008,101.526Z"
                    transform="translate(-138.688 -97.325)"
                  ></path>
                </g>
                <g className="rng" id="Group_98" data-name="Group 98">
                  <path
                    className="r"
                    id="Path_48"
                    data-name="Path 48"
                    d="M304.412,150.355v-52.6H330.2a30.362,30.362,0,0,1,16.077,3.72,11.274,11.274,0,0,1,6.018,9.962q0,9.558-12.916,12.447a17.929,17.929,0,0,1,8.589,4.735,21.224,21.224,0,0,1,2.656,10.018q.834,8.866,3.382,11.725H335.118a20.616,20.616,0,0,1-1.8-9.132l-.088-3.121-.088-3.93q0-9.1-8.343-9.094h-2.988v25.277Zm17.4-29.633h3.515q9.883,0,9.883-9.055t-9.883-9.053h-3.515Z"
                    transform="translate(-107.239 -96.83)"
                  ></path>
                  <path
                    className="n"
                    id="Path_49"
                    data-name="Path 49"
                    d="M371.664,97.735v52.6h-13.3l-25.047-33.288V150.34h-5.842V97.735H338.5l27.324,35.955V97.735Z"
                    transform="translate(-78.302 -96.811)"
                  ></path>
                  <g
                    id="Group_99"
                    data-name="Group 99"
                    transform="translate(298.248 0.002)"
                  >
                    <path
                      className="g"
                      id="Path_50"
                      data-name="Path 50"
                      d="M373.933,127.73h-8.654v12.947q0,6.314,6.458,6.314a7.364,7.364,0,0,0,7.441-4.51q1.955-4.51,1.953-17.069,0-13.443-2.417-18.381a9.089,9.089,0,0,0-9.006-4.934q-8.958,0-9.793,9.288l-.133,2.852v1.272l-8.171-3.276q3.608-14.882,20.208-14.882A27.9,27.9,0,0,1,392.224,105a26.8,26.8,0,0,1,7.8,20.018q0,12.717-7.36,19.709t-20.668,6.99a28.569,28.569,0,0,1-15.333-4.51l-1.89,3.621h-5.533V122.418h24.695Z"
                      transform="translate(-349.238 -97.326)"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className=" ml-80 hidden lg:flex">
          <ul className="short-nav-list flex  space-x-8 py-6 nub">
            <li>
              <a href="/collections/all-products">NEW DROPS</a>
            </li>

            <li>
              <a>TOPS</a>
            </li>

            <li>
              <a>BOTTOMS</a>
            </li>

            <li>
              <a>ACCESSORIES</a>
            </li>
          </ul>
        </div>
        <div>
          <CiSearch className="ml-96 mt-4 text-2xl" />
        </div>
        <div>
          <svg
            className="ml-10 mt-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="26"
            viewBox="0 0 16 26"
          >
            <g
              id="Group_509"
              data-name="Group 509"
              transform="translate(-308 -6)"
            >
              <g
                id="Group_507"
                data-name="Group 507"
                transform="translate(6.594 -8.544)"
              >
                <g
                  id="Group_506"
                  data-name="Group 506"
                  transform="translate(301.406 14.465)"
                >
                  <g
                    id="Rectangle_127"
                    data-name="Rectangle 127"
                    transform="translate(0 0.079)"
                    fill="#040707"
                    stroke="#000"
                    stroke-width="0.5"
                  >
                    <rect width="16" height="26" stroke="none"></rect>
                    <rect
                      x="0.25"
                      y="0.25"
                      width="15.5"
                      height="25.5"
                      fill="none"
                    ></rect>
                  </g>
                  <ellipse
                    id="Ellipse_139"
                    data-name="Ellipse 139"
                    cx="3.5"
                    cy="1.5"
                    rx="3.5"
                    ry="1.5"
                    transform="translate(5 3.079)"
                    fill="#fff"
                  ></ellipse>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div>
          <svg
            className="hamopen mt-4 ml-12 "
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsxlink="http://www.w3.org/1999/xlink"
            xmlnssvgjs="http://svgjs.com/svgjs"
            width="30"
            height="30"
            x="0"
            y="0"
            viewBox="0 0 220 220"
            onClick={() => setTog(!tog)}
            // style={{enableBackground:new 0 0 512 512}}
            xmlspace="preserve"
          >
            <g>
              <path
                d="M176.54 112.18H43.46c-2.21 0-4-1.79-4-4s1.79-4 4-4h133.08c2.21 0 4 1.79 4 4s-1.79 4-4 4zM160 47.18H43c-2.21 0-4-1.79-4-4s1.79-4 4-4h117c2.21 0 4 1.79 4 4s-1.79 4-4 4zM135 181.18H43c-2.21 0-4-1.79-4-4s1.79-4 4-4h92c2.21 0 4 1.79 4 4s-1.79 4-4 4z"
                fill="#000000"
                data-original="#000000"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <hr />
      {tog && (
        <div
          className={`absolute top-16 ${
            tog ? "right-0" : "-right-full-hidden"
          }sidebar w-full transition-all duration-200`}
        >
          <div class="menu">
            <div class="menu__button">
              <button className="mt-9 ml-4 bg-red-600 rounded-lg px-2 font-semibold text-white">
                2023
              </button>
              <h1 className="font-bold text-xl ">NEW DROPS</h1>
            </div>
            <div className="text-[#929292] font-medium text-sm py-2.5">
              {drops.map((item) => {
                <div
                  key={item.name}
                  className="cursor-pointer hover:text-black"
                >
                  {item.name}
                </div>;
              })}
            </div>
            <div className="menu__content">
              <h6 className="menu__title">Social Share</h6>
              <ul className="menu__content__list">
                <li>
                  <i className="fa fa-facebook-square"></i> Facebook
                </li>
                <li>
                  <i className="fa fa-twitter-square"></i> Twitter
                </li>
                <li>
                  <i className="fa fa-google-plus-square"></i> Google+
                </li>
                <li>
                  <i className="fa fa-instagram"></i> Instagram
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
