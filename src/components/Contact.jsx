import React from "react";

const Contact = () => {
  return (
    <div className="contact-container py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Contact Us
      </h1>
      <div className="contact-info max-w-md mx-auto">
        <p className="mb-4">
          Have a question or feedback? We'd love to hear from you! Contact our
          support team via email or phone, and we'll get back to you as soon as
          possible.
        </p>
        <div className="contact-details">
          <p className="mb-2">
            Email:{" "}
            <a href="mailto:support@example.com" className="text-blue-600">
              support@example.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:123-456-7890" className="text-blue-600">
              123-456-7890
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
