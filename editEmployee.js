import { useState } from "react";

import "./EditEmployee.css"

export const EditEmployee = () => {
    const [formData, setFormData] = useState({
        name: '', // Change from name to f_name
        email: '', // Change from email to f_email
        mobileNumber: '', // Change from mobileNumber to f_mobile
        designation: '',
        gender: '',
        courses: [], // Change from courses to f_courses
        image: null,
        // Add f_resume field if needed
    });

    const handleChange = (e) => {

        const { name, value, type, checked, files } = e.target;
       

        if (type === 'checkbox') {
            if (checked) {
                setFormData({
                    ...formData,
                    courses: [...formData.courses, value]
                });
            } else {
                setFormData({
                    ...formData,
                    courses: formData.courses.filter(course => course !== value)
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
        if (type === 'file') {
            const file = files[0];
            setFormData({
                ...formData,
                [name]: file
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`/api/auth/edit/${formData.mobileNumber}`, { // Assuming your backend route is /api/auth/edit/:id
                method: 'PUT', // Assuming you're using PUT method to update employee data
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData) // formData contains the updated employee data
            });
    
            if (!response.ok) {
                throw new Error('Failed to edit employee');
            }
    
            alert("Employee data edited and submitted successfully");
            // Reset form fields after successful submission
            setFormData({
                name: '', 
                email: '', 
                mobileNumber: '', 
                designation: '',
                gender: '',
                courses: [], 
                image: null,
            });
        } catch (error) {
            console.error('Error editing employee:', error);
            // Handle error, e.g., show error message to the user
        }
    };
    

    return (
        <div className="create-employee">
            <h2>Edit Employee</h2>
            <form method='POST' onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="designation">Designation:</label>
                    <select
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Designation</option>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="Sales">Sales</option>
                    </select>
                </div>


                <div className="form-group">
                    <label>Gender:</label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === 'Male'}
                            onChange={handleChange}
                            required
                        /> Male
                    </label>


                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === 'Female'}
                            onChange={handleChange}
                            required
                        /> Female
                    </label>
                </div>
                <div className="form-group">
                    <label>Courses:</label>
                    <label>
                        <input
                            type="checkbox"
                            name="courses"
                            value="MBA"
                            checked={formData.courses.includes('MBA')}
                            onChange={handleChange}
                        /> MBA
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="courses"
                            value="BCA"
                            checked={formData.courses.includes('BCA')}
                            onChange={handleChange}
                        /> BCA
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="courses"
                            value="BSC"
                            checked={formData.courses.includes('BSC')}
                            onChange={handleChange}
                        /> BSC
                    </label>
                </div>





                <div className="form-group">
                    <label htmlFor="image">Image Upload:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/png, image/jpeg"
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

