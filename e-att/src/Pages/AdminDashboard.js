import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Users from '../Pages/Users';
import Attendance from './Attendance';
import UploadCourse from './UploadCourse';
import Getenrollers from './Getenrollers';
import Addteachers from './Addteachers'

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <nav>
                <ul>
                    <li><NavLink to="users" activeclasname="active"><span>Users</span></NavLink></li>
                    <li><NavLink to="getenrollers" activeclasname="active"><span>Enrollments</span></NavLink></li>
                    <li><NavLink to="attendance" activeclasname="active"><span>Attendance Records</span></NavLink></li>
                    <li><NavLink to="upload-course" activeclasname="active"><span>Upload New Course</span></NavLink></li>
                    <li><NavLink to="addTeachers" activeclasname="active"><span>Add Lectures</span></NavLink></li>

                </ul>
            </nav>
            <div className="admin-content">
                <Routes>
                    <Route path="users" element={<Users />} />
                    <Route path="getenrollers" element={<Getenrollers />} />
                    <Route path="attendance" element={<Attendance />} />
                    <Route path="upload-course" element={<UploadCourse />} />
                    <Route path="addteachers" element={<Addteachers />} />

                </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard;
