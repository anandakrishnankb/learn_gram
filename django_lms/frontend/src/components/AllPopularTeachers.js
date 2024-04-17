import React ,{ useEffect, useState }from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api'
export default function AllPopularTeachers() {
useEffect(() => {
  document.title = "Popular Teaches";
}, []);

const [teacher, setTeacher] = useState(null);
useEffect(() => {
  axios.get(baseUrl + "/teacher/", {
    headers: {
      Authorization: 'Token 88fff77f4f250cf1f58e7e6c059e58e583d36dc4'
    }}).then((response) => {
    console.log(response.data);
  });
}, []);
  return (
    <div className="container mt-3">
      {/* Popular Teachers*/}
      <h3 className=" pb-1 mb-4"> Popular Teachers </h3>
      <div className="row mb-4">
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/teacher-detail/1">
              <img src="js.png" className="card-img-top" alt="..." />
            </Link>

            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/1"> Teacher Name</Link>
              </h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4/5</span>
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
                <Link to="/teacher-detail/1"> Teacher Name</Link>
              </h5>
            </div>{" "}
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4/5</span>
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
                <Link to="/teacher-detail/1"> Teacher Name</Link>
              </h5>
            </div>{" "}
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4/5</span>
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
                <Link to="/teacher-detail/1"> Teacher Name</Link>
              </h5>
            </div>{" "}
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4/5</span>
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
                <Link to="/teacher-detail/1"> Teacher Name</Link>
              </h5>
            </div>{" "}
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4/5</span>
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
                <Link to="/teacher-detail/1"> Teacher Name</Link>
              </h5>
            </div>{" "}
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4/5</span>
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
                <Link to="/teacher-detail/1"> Teacher Name</Link>
              </h5>
            </div>{" "}
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4/5</span>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/teacher-detail/1">
              <img src="js.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/teacher-detail/1"> Teacher Name</Link>
              </h5>
            </div>{" "}
            <div className="card-footer">
              <div className="title">
                <span>Rating: 4/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Popular Teachers*/}

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
