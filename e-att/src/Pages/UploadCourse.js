import React, { useState } from 'react';
import axios from 'axios';

const UploadCourse = () => {
    const [courseData, setCourseData] = useState({
        course_name: '',
        course_code: '',
        description: '',
        teacher_id: '', // Assuming the admin knows the teacher ID or it's selected from a list
    });
    const [courseImage, setCourseImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
    };

    const handleImageChange = (e) => {
        setCourseImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('course_name', courseData.course_name);
        formData.append('course_code', courseData.course_code);
        formData.append('description', courseData.description);
        formData.append('teacher_id', courseData.teacher_id);
        formData.append('course_image', courseImage);

        try {
            const response = await axios.post('http://localhost/bridge/admin?action=upload_course', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert(response.data.message);
            if (response.data.success) {
                setCourseData({ course_name: '', course_code: '', description: '', teacher_id: '' });
                setCourseImage(null);
            }
        } catch (error) {
            alert('Error creating course: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Upload New Course</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="course_name"
                    placeholder="Course Name"
                    value={courseData.course_name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="course_code"
                    placeholder="Course Code"
                    value={courseData.course_code}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Course Description"
                    value={courseData.description}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <input
                    type="text"
                    name="teacher_id"
                    placeholder="Teacher ID"
                    value={courseData.teacher_id}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="file"
                    name="course_image"
                    onChange={handleImageChange}
                    required
                />
                <button type="submit">Upload Course</button>
            </form>
        </div>
    );
};

export default UploadCourse;
