import React from "react";
import { Link } from "react-router-dom";
export default function AllPopularCourses() {
  return (
    <div className="container mt-3">
      {/* Latest Courses*/}
      <h3 className=" pb-1 mb-4">Popular Courses </h3>
      <div className="row mb-4">
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/detail/1">
              <img src="js.png" className="card-img-top" alt="..." />
            </Link>

            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1"> Course title</Link>
              </h5>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4/5</span>
                  <span className="float-end">Views: 3,12,47</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <a href="#">
              <img src="js.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                <a href="#"> Course title</a>
              </h5>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4/5</span>
                  <span className="float-end">Views: 3,12,47</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <a href="#">
              <img src="js.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                <a href="#"> Course title</a>
              </h5>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4/5</span>
                  <span className="float-end">Views: 3,12,47</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <a href="#">
              <img src="js.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                <a href="#"> Course title</a>
              </h5>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4/5</span>
                  <span className="float-end">Views: 3,12,47</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/detail/1">
              <img src="js.png" className="card-img-top" alt="..." />
            </Link>

            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1"> Course title</Link>
              </h5>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4/5</span>
                  <span className="float-end">Views: 3,12,47</span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/detail/1">
              <img src="js.png" className="card-img-top" alt="..." />
            </Link>

            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1"> Course title</Link>
              </h5>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4/5</span>
                  <span className="float-end">Views: 3,12,47</span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/detail/1">
              <img src="js.png" className="card-img-top" alt="..." />
            </Link>

            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1"> Course title</Link>
              </h5>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4/5</span>
                  <span className="float-end">Views: 3,12,47</span>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/detail/1">
              <img src="js.png" className="card-img-top" alt="..." />
            </Link>

            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1"> Course title</Link>
              </h5>
              <div className="card-footer">
                <div className="title">
                  <span>Rating: 4/5</span>
                  <span className="float-end">Views: 3,12,47</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Latest Courses*/}

      {/* Pagination Start */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/* Pagination End */}
    </div>
  );
}
