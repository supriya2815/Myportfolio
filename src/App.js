import React from "react";

export default function Portfolio() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email) {
      alert("Please provide name and email");
      return;
    }

    alert(`Thanks, ${name}! Your message was "sent" in demo mode.`);
    e.target.reset();
  };

  const containerStyle = {
    background: "linear-gradient(180deg,#071022 0%,#0f1724 100%)",
    color: "#e6eef8",
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    minHeight: "100vh",
    padding: "0",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 32px",
    background: "rgba(255, 255, 255, 0.02)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    flexWrap: "wrap", // <-- responsive wrap
  };

  const mainStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const heroStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "0 20px",
    textAlign: "center",
  };

  const projectGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  };

  const contactGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr", // mobile default 1 column
    gap: "24px",
    padding: "24px",
    borderRadius: "16px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
  };

  // Media Queries for larger screens
  const mediaQueryLarge = `@media(min-width: 768px) { 
    .contactGrid { grid-template-columns: 1fr 1fr; }
  }`;

  return (
    <div style={containerStyle}>
      <style>{mediaQueryLarge}</style>
      {/* Header */}
      <header style={headerStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="./images/self.jpg"
            alt="Supriya Pawar"
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #7c3aed",
            }}
          />
          <div>
            <div style={{ fontWeight: 800, fontSize: "18px" }}>Supriya Pawar</div>
            <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "2px" }}>
              • React • CSS • HTML
            </div>
          </div>
        </div>

        <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "8px" }}>
          {["About", "Projects", "Resume", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                position: "relative",
                color: "#94a3b8",
                fontWeight: 600,
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#06b6d4")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main style={mainStyle}>
        {/* Hero Section */}
        <section style={heroStyle}>
          <h1 style={{ fontSize: "36px", lineHeight: 1.2, marginBottom: "16px" }}>
            Hi — I'm Supriya. I explore programming, algorithms, and web development
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "16px", maxWidth: "500px", marginBottom: "24px" }}>
            I'm a student passionate about learning HTML, CSS, JavaScript, React, Java, and modern web technologies. I enjoy building small projects and solving coding challenges.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="#projects"
              style={{
                padding: "12px 18px",
                borderRadius: "10px",
                fontWeight: 700,
                background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
                color: "white",
                textDecoration: "none",
              }}
            >
              See Projects
            </a>
            <a
              href="#contact"
              style={{
                padding: "12px 18px",
                borderRadius: "10px",
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.06)",
                color: "#94a3b8",
                textDecoration: "none",
              }}
            >
              Let's talk
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ marginTop: "60px" }}>
          <h2 style={{ textAlign: "center", fontSize: "28px", marginBottom: "20px" }}>My Projects</h2>
          <div style={projectGridStyle}>
            {[
              {
                title: "Jewellery Shop",
                desc: "Elegant jewellery e-commerce site with collections, product pages, and cart system.",
                tech: "HTML • CSS • JavaScript",
                img: "./images/3.jpg",
                live: "https://jewellery-shop-website.onrender.com",
              },
              {
                title: "Flower Shop",
                desc: "Simple e-commerce frontend with cart, filtering, and Razorpay integration for payments.",
                tech: "PHP • MySQL • JavaScript",
                img: "./images/1.jpg",
                live: "https://flower-shop-website-demo.onrender.com",
              },
              {
                title: "Recipe Finder",
                desc: "Searchable recipe app using Edamam API with saved favourites and responsive layout.",
                tech: "React • Bootstrap • API",
                img: "./images/22.jpg",
                live: "https://recipe-finder-demo.onrender.com",
              },
            ].map((proj) => (
              <div
                key={proj.title}
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.03)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                />
                <div style={{ padding: "18px" }}>
                  <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{proj.title}</h3>
                  <p style={{ color: "#94a3b8", marginBottom: "8px" }}>{proj.desc}</p>
                  <div style={{ color: "#06b6d4", marginBottom: "12px" }}>Tech: {proj.tech}</div>
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "10px 0",
                      borderRadius: "8px",
                      background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
                      color: "white",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ marginTop: "60px" }}>
          <h2 style={{ textAlign: "center", fontSize: "28px", marginBottom: "20px" }}>Get in Touch</h2>
          <div className="contactGrid" style={contactGridStyle}>
            <div>
              <h3 style={{ marginBottom: "12px" }}>Let’s build something amazing 🚀</h3>
              <p style={{ color: "#94a3b8", marginBottom: "20px" }}>
                Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
              </p>
              <p><strong>Email:</strong> <br /><a href="mailto:pawarsupriya19787@gmail.com" style={{ color: "#06b6d4" }}>pawarsupriya19787@gmail.com</a></p>
              <p><strong>Phone:</strong> <br /> +91-9876543210</p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", background: "rgba(255,255,255,0.02)", padding: "20px", borderRadius: "12px" }}>
              <input name="name" placeholder="Your Name" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: "transparent", color: "inherit" }} />
              <input name="email" type="email" placeholder="Your Email" required style={{ padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: "transparent", color: "inherit" }} />
              <textarea name="message" placeholder="Your Message" rows={4} style={{ padding: "12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: "transparent", color: "inherit" }} />
              <button type="submit" style={{ padding: "12px 16px", borderRadius: "10px", fontWeight: 700, border: 0, cursor: "pointer", background: "linear-gradient(90deg,#7c3aed,#06b6d4)", color: "white" }}>
                Send Message
              </button>
            </form>
          </div>
        </section>

        <footer style={{ margin: "40px 0 80px", color: "#94a3b8", textAlign: "center" }}>
          © {new Date().getFullYear()} Supriya Pawar — Built with ❤
        </footer>
      </main>
    </div>
  );
}
