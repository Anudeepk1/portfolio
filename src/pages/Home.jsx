function Home() {
  return (
    <div>
      <h1>My Portfolio</h1>

      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Ccircle cx='100' cy='100' r='100' fill='%234A90E2'/%3E%3Ctext x='100' y='110' font-size='48' font-weight='bold' text-anchor='middle' fill='white'%3ENA%3C/text%3E%3C/svg%3E"
        alt="Profile"
        style={{ borderRadius: "50%", width: "200px", height: "200px" }}
      />

      <h2>About Me</h2>
      <p>
        I am a Java Developer skilled in Spring Boot, Microservices, and WebFlux.
      </p>

      <h2>Research Interests</h2>
      <p>
        Distributed Systems, Reactive Programming, System Design
      </p>

      <h2>Personal Details</h2>
      <ul>
        <li>Name: Anudeep K</li>
        <li>Phone: 7799712412</li>
        <li>Email: anudeepkone@gmail.com</li>
        <li>Skills: Java, Spring Boot, React, MongoDB</li>
      </ul>
    </div>
  );
}

export default Home;