import React from "react";
import { useParams, Link } from "react-router-dom";
export default function CourseDetail() {
  let { course_id } = useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4 ">
          <img src="/logo192.png" className="thumbnail" alt="course_image" />
        </div>
        <div className="col-8">
          <h3>Course Title</h3>
          <p>
            The href attribute requires a valid value to be accessible. Provide
            a valid, navigable address as the href value. If you cannot provide
            a valid href, but still need the element to resemble a link, use a
            button and change it with appropriate styles. Learn more:
            https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
            jsx-a11y/anchor-is-valid
          </p>
          <p className="fw-bold">
            Course By:<Link to="/teacher-detail/1">Teacher 1</Link>
          </p>
          <p className="fw-bold">Duration:3 hours</p>
          <p className="fw-bold">Enrolled Students:334</p>
          <p className="fw-bold">Course Rating:4/5</p>
        </div>
      </div>

      <div className="card mt-4">
        <h5 className="card-header">Course Videos</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item ">
            Introduction
            <span className="float-end">
              <span className="me-5">1 Hour 30 Minutes</span>
              <button
                className="btn btn-sm btn-danger  "
                data-bs-toggle="modal"
                data-bs-target="#videomodal1"
              >
                Play Video<i class="bi bi-play-fill"></i>
              </button>
            </span>
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="videomodal1"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div class="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                        title="YouTube video"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item ">
            Introduction
            <span className="float-end">
              <span className="me-5">1 Hour 30 Minutes</span>
              <button className="btn btn-sm btn-danger  ">
                Play Video<i class="bi bi-play-fill"></i>
              </button>
            </span>
          </li>
        </ul>
      </div>
      <h3 className=" pb-1 mb-4 mt-5">Related Courses </h3>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <Link to="/detail/1">
              <img src="/logo512.png" className="card-img-top" alt="..." />
            </Link>

            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1"> Course title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#">
              <img src="/logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                <a href="#"> Course title</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#">
              <img src="/logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                <a href="#"> Course title</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <a href="#">
              <img src="/logo512.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                <a href="#"> Course title</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
