import React from "react";

const About = () => {
  return (
    <div className="about-container py-8 px-4">
      <h1 className="about-title text-3xl font-bold text-center mb-6 text-blue-600">
        About Our Food App
      </h1>
      <div className="about-content max-w-3xl mx-auto">
        <p className="mb-4">
          Welcome to our food app! We're passionate about bringing delicious
          meals right to your doorstep.
        </p>
        <p className="mb-4">
          At our food app, we strive to offer a diverse range of cuisines to
          satisfy every craving. Whether you're in the mood for savory pizza,
          spicy Indian curry, or refreshing salads, we've got you covered.
        </p>
        <p className="mb-4">
          With user-friendly features and a seamless ordering process, our app
          makes it easy for you to explore menus, customize your orders, and
          track deliveries in real-time.
        </p>
        <p>
          Join us on a culinary journey and discover new flavors with every
          bite. Download our app today and experience the convenience of
          delicious food delivered straight to you!
        </p>
      </div>
    </div>
  );
};

export default About;
