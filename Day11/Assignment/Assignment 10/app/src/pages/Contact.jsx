function Services() {
  const services = [
    "React Development",
    "Node.js Backend",
    "Full Stack Web Development",
    "Database Management"
  ];

  return (
    <div className="container mt-4">
      <h1>Our Services</h1>
      <ul className="list-group mt-3">
        {services.map((service, index) => (
          <li key={index} className="list-group-item">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;