import React from "react";

const Category = () => {
  return (
    <>
      <div className="Category-area pt-100 pb-75">
        <div className="container">
          <ul className="Category-boxes-list">
            <li>
              <div className="Category-list-box">
                <div className="icon">
                  <i className="fa fa-user-friends"></i>
                </div>
                <h3>Social Science </h3>
              </div>
            </li>
            <li>
              <div className="Category-list-box">
                <div className="icon bg2">
                  <i className="fa fa-leaf"></i>
                </div>
                <h3>Environmental Science</h3>
              </div>
            </li>
            <li>
              <div className="Category-list-box">
                <div className="icon bg3">
                  <i className="fa fa-brain"></i>
                </div>
                <h3>Innovation Science</h3>
              </div>
            </li>
            <li>
              <div className="Category-list-box">
                <div className="icon">
                  <i className="fa fa-virus"></i>
                </div>
                <h3>Life Sciences</h3>
              </div>
            </li>
            <li>
              <div className="Category-list-box">
                <div className="icon bg4">
                  <i className="fa fa-tools"></i>
                </div>
                <h3>Engineering</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
