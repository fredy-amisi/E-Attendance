CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(255) NOT NULL,
    course_code VARCHAR(100) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    teacher_id INT NOT NULL,
    course_image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_teacher_id FOREIGN KEY (teacher_id) REFERENCES teachers(id) ON DELETE CASCADE
);

