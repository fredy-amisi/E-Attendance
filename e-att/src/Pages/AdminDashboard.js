import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Users from '../Pages/Users';
import Enrollments from './Enrollments';
import Attendance from './Attendance';
import UploadCourse from './UploadCourse';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <nav>
                <ul>
                    <li><NavLink to="users" activeClassName="active"><span>Users</span></NavLink></li>
                    <li><NavLink to="enrollments" activeClassName="active"><span>Enrollments</span></NavLink></li>
                    <li><NavLink to="attendance" activeClassName="active"><span>Attendance Records</span></NavLink></li>
                    <li><NavLink to="upload-course" activeClassName="active"><span>Upload New Course</span></NavLink></li>
                </ul>
            </nav>
            <div className="admin-content">
                <Routes>
                    <Route path="users" element={<Users />} />
                    <Route path="enrollments" element={<Enrollments />} />
                    <Route path="attendance" element={<Attendance />} />
                    <Route path="upload-course" element={<UploadCourse />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard;
