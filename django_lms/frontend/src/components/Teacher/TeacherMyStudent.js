import React from 'react'
import TeacherSidebar from './TeacherSidebar'
import { Link } from 'react-router-dom'
export default function TeacherMyStudent() {
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header"> My Students</h5>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Enrolled Student</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <td>Web Development</td>
                  <td>
                    <Link to="/">Jhon Doe</Link>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm active">
                      Delete
                    </button>
                  </td>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
