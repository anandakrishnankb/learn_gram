import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { Routes as Switch, Route } from "react-router-dom";
import About from "./About";
import CourseDetail from "./CourseDetail";
import TeacherDetail from "./TeacherDetail";

// User Imports
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import MyCourses from "./User/MyCourses";
import FavouriteCourses from "./User/FavouriteCourses";
import RecommendedCourses from "./User/RecommendedCourses";
import ProfileSetting from "./User/ProfileSetting";
import ChangePassword from "./User/ChangePassword";


// Teacher Imports
import TeacherMyCourses from "./Teacher/TeacherMyCourses";
import TeacherLogin from "./Teacher/TeacherLogin";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherProfileSetting from "./Teacher/TeacherProfileSetting";
import TeacherAddCourses from "./Teacher/TeacherAddCourses";
import TeacherMyStudent from "./Teacher/TeacherMyStudent";
import TeacherChangePassword from "./Teacher/TeacherChangePassword";

// List Pages
import AllCourses from "./AllCourses";

function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />

{/* Users */}

        <Route path="/user-login" element={<Login />} />
        <Route path="/user-register" element={<Register />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/favourite-courses" element={<FavouriteCourses />} />
        <Route path="/recommended-courses" element={<RecommendedCourses />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route path="/change-password" element={<ChangePassword />} />

{/* Teachers */}
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/teacher-register" element={<TeacherRegister />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher-profile-setting" element={<TeacherProfileSetting />} />
        <Route path="/teacher-change-password" element={<TeacherChangePassword />} />
        <Route path="/my-students" element={<TeacherMyStudent />} />
        <Route path="/add-courses" element={<TeacherAddCourses />} />
        <Route path="/teacher-my-courses" element={<TeacherMyCourses />} />


{/* List Pages */}
<Route path="/all-courses" element={<AllCourses />} />

      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
