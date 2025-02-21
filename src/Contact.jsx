import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        let tempErrors = {};

        if (!/^[A-Za-z]{2,}$/.test(formData.firstName)) {
            tempErrors.firstName =
                "Enter a valid first name (letters only, min 2 chars).";
        }
        if (!/^[A-Za-z]{2,}$/.test(formData.lastName)) {
            tempErrors.lastName =
                "Enter a valid last name (letters only, min 2 chars).";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            tempErrors.email = "Enter a valid email.";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sanitizeInput = (input) => {
        return input.replace(/<[^>]+>/g, ""); // Removes HTML tags (prevents XSS)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;
        setIsSubmitting(true);

        const sanitizedData = {
            firstName: sanitizeInput(formData.firstName),
            lastName: sanitizeInput(formData.lastName),
            email: sanitizeInput(formData.email),
            subject: sanitizeInput(formData.subject),
            message: sanitizeInput(formData.message),
        };

        emailjs
            .send(
                "service_bphacgf",
                "template_5siw58k",
                sanitizedData,
                "lxV4fWFNpcApX6LhE"
            )
            .then(
                () => {
                    alert("Email sent successfully!");
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                },
                (error) => {
                    alert("Failed to send email: " + error.text);
                }
            )
            .finally(() => setIsSubmitting(false));
    };

    return (
        <>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact</h2>
                    <span className="para">
                        Looking forward to hearing from you
                    </span>
                    <span className="heading">Phone</span>
                    <span className="para">+91-9949350041</span>
                    <span className="heading">Email</span>
                    <span className="para">kasibhatlapragnya@gmail.com</span>
                </div>

                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name *</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.firstName && (
                                    <span className="error">
                                        {errors.firstName}
                                    </span>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Last Name *</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.lastName && (
                                    <span className="error">
                                        {errors.lastName}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && (
                                    <span className="error">
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                {errors.subject && (
                                    <span className="error">
                                        {errors.subject}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            {errors.message && (
                                <span className="error">{errors.message}</span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
