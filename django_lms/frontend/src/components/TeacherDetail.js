import React from "react";
import { Link } from "react-router-dom";
export default function TeacherDetail() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4 ">
          <img src="/logo192.png" className="thumbnail" alt="teacher_image" />
        </div>
        <div className="col-8">
          <h3>John Doe</h3>
          <p>
            The href attribute requires a valid value to be accessible. Provide
            a valid, navigable address as the href value. If you cannot provide
            a valid href, but still need the element to resemble a link, use a
            button and change it with appropriate styles. Learn more:
            https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
            jsx-a11y/anchor-is-valid
          </p>
          <p className="fw-bold">
            Skills:<Link to="/category/php">Java</Link>,
            <Link to="/category/php">C++</Link>,
            <Link to="/category/php">Python</Link>
          </p>
          <p className="fw-bold">
            Recent Course:<Link to="/teacher-detail/1">Web Development</Link>
          </p>
          <p className="fw-bold">Course Rating:4/5</p>
        </div>
      </div>

      <div className="card mt-4">
        <h5 className="card-header">Course List</h5>
        <div className="list-group list-group-flush">
          <Link
            to="/detail/1"
            className="list-group-item list-group-item-action"
          >
            Course 2
          </Link>
          <Link
            to="/detail/1"
            className="list-group-item list-group-item-action"
          >
            Course 3
          </Link>
          <Link
            to="/detail/1"
            className="list-group-item list-group-item-action"
          >
            Course 1
          </Link>
          <Link
            to="/detail/1"
            className="list-group-item list-group-item-action"
          >
            Course 4
          </Link>
        </div>
      </div>
    </div>
  );
}
