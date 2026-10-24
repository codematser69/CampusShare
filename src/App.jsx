
import { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#" onClick={() => setPage("home")}>
          <span className="brand-icon">C</span>
          CampusShare
        </a>

        <nav>
          <button className="nav-link" onClick={() => setPage("home")}>
            Home
          </button>
          <button className="nav-link" onClick={() => setPage("items")}>
            Browse Items
          </button>
          <button className="nav-link" onClick={() => setPage("login")}>
            Log In
          </button>
          <button className="primary-button" onClick={() => setPage("register")}>
            Join CampusShare
          </button>
        </nav>
      </header>

      <main>
        {page === "home" && (
          <>
            <section className="hero">
              <div className="hero-content">
                <span className="eyebrow">SHARE MORE. WASTE LESS.</span>
                <h1>Your campus.<br />A community that <span>shares.</span></h1>
                <p>
                  Borrow what you need, share what you have, and help your
                  campus community make more of what it already owns.
                </p>
                <div className="hero-actions">
                  <button className="primary-button" onClick={() => setPage("items")}>
                    Explore Items →
                  </button>
                  <button className="secondary-button" onClick={() => setPage("register")}>
                    Join the Community
                  </button>
                </div>
                <div className="hero-note">Built for students, powered by sharing.</div>
              </div>

              <div className="hero-art">
                <div className="art-circle">
                  <div className="art-card card-book">📚<span>Books</span></div>
                  <div className="art-card card-laptop">💻<span>Electronics</span></div>
                  <div className="art-card card-sports">🏸<span>Sports</span></div>
                  <div className="art-card card-tools">🧰<span>Essentials</span></div>
                  <div className="center-symbol">C</div>
                </div>
              </div>
            </section>

            <section className="features">
              <div>
                <span className="feature-icon">♧</span>
                <h3>Share resources</h3>
                <p>Give useful items a second life in your campus community.</p>
              </div>
              <div>
                <span className="feature-icon">⌕</span>
                <h3>Find what you need</h3>
                <p>Discover items shared by fellow students around you.</p>
              </div>
              <div>
                <span className="feature-icon">♡</span>
                <h3>Build community</h3>
                <p>Save money and make sharing part of campus life.</p>
              </div>
            </section>
          </>
        )}

        {page === "items" && (
          <section className="simple-page">
            <span className="eyebrow">CAMPUS MARKETPLACE</span>
            <h1>Browse shared items</h1>
            <p>Your campus community's shared resources will appear here.</p>
            <div className="empty-state">📦<h3>Let's find something useful</h3>
              <p>Item listings will appear here once we connect your backend.</p>
            </div>
          </section>
        )}

        {(page === "login" || page === "register") && (
          <section className="simple-page">
            <span className="eyebrow">WELCOME TO CAMPUSSHARE</span>
            <h1>{page === "login" ? "Welcome back" : "Join your community"}</h1>
            <p>
              {page === "login"
                ? "Log in to connect with your campus."
                : "Create an account to start sharing."}
            </p>
            <div className="form-card">
              {page === "register" && (
                <label>Full name<input placeholder="Enter your name" /></label>
              )}
              <label>Student email<input type="email" placeholder="you@college.edu" /></label>
              {page === "register" && (
                <label>Student ID<input placeholder="Enter your student ID" /></label>
              )}
              <label>Password<input type="password" placeholder="Enter your password" /></label>
              <button className="primary-button full-button" onClick={() =>
                alert("Account functionality will be connected to the backend in a later step.")
              }>
                {page === "login" ? "Log In" : "Create Account"}
              </button>
              <p className="switch-page">
                {page === "login" ? "New to CampusShare?" : "Already have an account?"}
                {" "}
                <button onClick={() => setPage(page === "login" ? "register" : "login")}>
                  {page === "login" ? "Register" : "Log in"}
                </button>
              </p>
            </div>
          </section>
        )}
      </main>

      <footer>
        <a className="brand" href="#" onClick={() => setPage("home")}>
          <span className="brand-icon">C</span> CampusShare
        </a>
        <p>Sharing resources. Strengthening campus communities.</p>
        <span>© {new Date().getFullYear()} CampusShare</span>
      </footer>
    </div>
  );
}
