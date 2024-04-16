import React from "react";
import Sidebar from "./TeacherSidebar";
import { Link } from "react-router-dom";
export default function TeacherChangePassword() {
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            {" "}
            <h5 className="card-header">Change Password</h5>
            <div className="card-body">
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  New Password
                </label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="staticEmail" />
                </div>
              </div>
              
              <hr/>
              <button className="btn btn-primary">Update</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
