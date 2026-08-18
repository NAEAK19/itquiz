import { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "12345678") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("รหัสผ่านไม่ถูกต้อง — กรุณาลองใหม่");
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (!loggedIn) {
    return (
      <div className="login-page">
        <div className="scanlines"></div>

        <div className="login-glow glow-red"></div>
        <div className="login-glow glow-blue"></div>

        <div className="login-container">

          <div className="ace-symbol">
            A
          </div>

          <p className="system-text">
            ULTRA SYSTEM // ACCESS TERMINAL
          </p>

          <h1>
            ULTRAMAN <span>ACE</span>
          </h1>

          <p className="login-subtitle">
            CHARACTER DATABASE
          </p>

          <div className="login-line"></div>

          <form onSubmit={login}>

            <div className="input-group">
              <label>IDENTIFICATION</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>ACCESS CODE</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="error-message">
                ⚠ {error}
              </div>
            )}

            <button className="login-button">
              ENTER DATABASE
              <span>→</span>
            </button>

          </form>

          <div className="login-info">
            <span>DEMO ACCESS</span>
            <span>USER: ace</span>
            <span>CODE: 1972</span>
          </div>

        </div>

        <div className="corner top-left"></div>
        <div className="corner top-right"></div>
        <div className="corner bottom-left"></div>
        <div className="corner bottom-right"></div>

      </div>
    );
  }

  return (
    <div className="app">

      <div className="scanlines"></div>

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          <div className="logo-a">A</div>
          <div>
            <strong>ULTRAMAN</strong>
            <small>ACE DATABASE</small>
          </div>
        </div>

        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#profile">PROFILE</a>
          <a href="#abilities">ABILITIES</a>
          <a href="#history">HISTORY</a>
        </div>

        <button className="logout" onClick={logout}>
          LOGOUT
        </button>

      </nav>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-background"></div>

        <div className="hero-content">

          <p className="eyebrow">
            ULTRA WARRIOR / M78 NEBULA
          </p>

          <h1>
            ULTRAMAN
            <span>ACE</span>
          </h1>

          <p className="hero-description">
            นักรบแห่งแสงผู้ปกป้องโลกจากเหล่าสัตว์ประหลาด
            และภัยคุกคามจากอวกาศ
          </p>

          <div className="hero-buttons">
            <a href="#profile" className="primary-btn">
              EXPLORE PROFILE
              <span>→</span>
            </a>

            <a href="#abilities" className="secondary-btn">
              VIEW ABILITIES
            </a>
          </div>

        </div>

        <div className="hero-character">

          <div className="character-ring ring-one"></div>
          <div className="character-ring ring-two"></div>

          <div className="character-placeholder">
  <div className="character-image-frame">
    <img
      src="/ultraman-ace.png"
      alt="Ultraman Ace"
      className="character-image"
    />

    <div className="character-scan"></div>
    <div className="character-glow"></div>
  </div>
</div>

        </div>

        <div className="hero-stats">

          <div>
            <strong>1972</strong>
            <span>DEBUT</span>
          </div>

          <div>
            <strong>40m</strong>
            <span>HEIGHT</span>
          </div>

          <div>
            <strong>35,000t</strong>
            <span>WEIGHT</span>
          </div>

        </div>

      </section>

      {/* PROFILE */}
      <section id="profile" className="section profile">

        <div className="section-title">
          <p>// 01 — PROFILE</p>
          <h2>
            THE WARRIOR
            <span>OF LIGHT</span>
          </h2>
        </div>

        <div className="profile-grid">

          <div className="profile-card main-card">

            <div className="card-number">01</div>

            <h3>ULTRAMAN ACE</h3>

            <p>
              อุลตร้าแมนเอซ คือหนึ่งในนักรบแห่งแสงจาก
              Land of Light บนดาว M78 ผู้เดินทางมายังโลก
              เพื่อปกป้องมนุษยชาติจากสัตว์ประหลาดและ
              เอเลี่ยนที่คุกคามโลก
            </p>

            <p>
              เขาปรากฏตัวครั้งแรกในปี 1972 และเป็น
              อุลตร้าแมนที่มีความสามารถในการต่อสู้
              และใช้อาวุธพลังงานได้หลากหลาย
            </p>

          </div>

          <div className="info-list">

            <div className="info-row">
              <span>NAME</span>
              <strong>ULTRAMAN ACE</strong>
            </div>

            <div className="info-row">
              <span>ORIGIN</span>
              <strong>LAND OF LIGHT</strong>
            </div>

            <div className="info-row">
              <span>NEBULA</span>
              <strong>M78</strong>
            </div>

            <div className="info-row">
              <span>HEIGHT</span>
              <strong>40 METERS</strong>
            </div>

            <div className="info-row">
              <span>WEIGHT</span>
              <strong>35,000 TONS</strong>
            </div>

            <div className="info-row">
              <span>FIRST APPEARANCE</span>
              <strong>1972</strong>
            </div>

          </div>

        </div>

      </section>

      {/* ABILITIES */}
      <section id="abilities" className="section abilities">

        <div className="section-title center">
          <p>// 02 — COMBAT SYSTEM</p>

          <h2>
            SPECIAL
            <span>ABILITIES</span>
          </h2>
        </div>

        <div className="ability-grid">

          <div className="ability-card">
            <div className="ability-icon">01</div>
            <h3>METALLIUM BEAM</h3>
            <p>
              ลำแสงพลังงานหลักที่ปล่อยออกจากแขน
              สามารถใช้โจมตีศัตรูได้อย่างรุนแรง
            </p>
            <div className="ability-line"></div>
          </div>

          <div className="ability-card">
            <div className="ability-icon">02</div>
            <h3>ACE BLADE</h3>
            <p>
              อาวุธพลังงานรูปแบบใบมีดสำหรับการต่อสู้
              ระยะประชิดและการโจมตีศัตรู
            </p>
            <div className="ability-line"></div>
          </div>

          <div className="ability-card">
            <div className="ability-icon">03</div>
            <h3>SPACE Q</h3>
            <p>
              ท่าโจมตีพลังงานขั้นสูงที่มีพลังทำลายสูง
              ใช้ในการต่อสู้กับศัตรูระดับอันตราย
            </p>
            <div className="ability-line"></div>
          </div>

          <div className="ability-card">
            <div className="ability-icon">04</div>
            <h3>ULTRA CUTTER</h3>
            <p>
              ใบมีดพลังงานที่สามารถใช้โจมตีและ
              ตัดผ่านเป้าหมายได้อย่างแม่นยำ
            </p>
            <div className="ability-line"></div>
          </div>

        </div>

      </section>

      {/* HISTORY */}
      <section id="history" className="section history">

        <div className="section-title">
          <p>// 03 — TIMELINE</p>

          <h2>
            ACE
            <span>HISTORY</span>
          </h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-year">1972</div>

            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>THE ARRIVAL</h3>
              <p>
                Ultraman Ace ปรากฏตัวบนโลกและเริ่มต้น
                ภารกิจในการปกป้องมนุษยชาติ
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">T.A.C.</div>

            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>TACTICAL ASSISTANCE CENTER</h3>
              <p>
                เข้าร่วมการต่อสู้ร่วมกับหน่วย T.A.C.
                เพื่อต่อกรกับสัตว์ประหลาดและภัยคุกคาม
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">M78</div>

            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>WARRIOR OF LIGHT</h3>
              <p>
                Ace ยังคงเป็นหนึ่งในนักรบแห่งแสง
                ที่มีบทบาทสำคัญในจักรวาล Ultraman
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* QUOTE */}
      <section className="quote-section">

        <div className="quote-mark">"</div>

        <h2>
          NEVER STOP
          <span>FIGHTING.</span>
        </h2>

        <p>
          A WARRIOR OF LIGHT NEVER GIVES UP.
        </p>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          ULTRAMAN <span>ACE</span>
        </div>

        <p>
          CHARACTER DATABASE // ULTRA SYSTEM
        </p>

        <button onClick={logout}>
          RETURN TO LOGIN
        </button>

      </footer>

    </div>
  );
}

export default App;