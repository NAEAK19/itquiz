import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loggedIn) return;

    const sections = ["home", "profile", "abilities", "history"];

    const handleScroll = () => {
      const position = window.scrollY + 200;

      for (const id of sections) {
        const section = document.getElementById(id);

        if (
          section &&
          position >= section.offsetTop &&
          position < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loggedIn]);

  const login = (e) => {
    e.preventDefault();

    if (username === "ace" && password === "1972") {
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
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="boot-screen">
        <div className="boot-grid"></div>

        <div className="boot-glow"></div>

        <div className="boot-content">
          <div className="boot-symbol">
            A
          </div>

          <div className="boot-system">
            ULTRA SYSTEM
          </div>

          <div className="boot-title">
            ACE DATABASE
          </div>

          <div className="boot-status">
            <span className="status-dot"></span>
            SYSTEM INITIALIZING
          </div>

          <div className="boot-progress">
            <div></div>
          </div>

          <div className="boot-log">
            <span>[ OK ]</span> POWER SYSTEM
            <br />
            <span>[ OK ]</span> M78 CONNECTION
            <br />
            <span>[ OK ]</span> COMBAT DATABASE
            <br />
            <span>[ OK ]</span> ULTRA NETWORK
          </div>
        </div>

        <div className="boot-corner boot-corner-1"></div>
        <div className="boot-corner boot-corner-2"></div>
        <div className="boot-corner boot-corner-3"></div>
        <div className="boot-corner boot-corner-4"></div>
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <div className="login-page">
        <div className="scanlines"></div>
        <div className="noise"></div>
        <div className="login-grid"></div>

        <div className="login-glow glow-red"></div>
        <div className="login-glow glow-blue"></div>

        <div className="floating-particle p1"></div>
        <div className="floating-particle p2"></div>
        <div className="floating-particle p3"></div>
        <div className="floating-particle p4"></div>
        <div className="floating-particle p5"></div>

        <div className="login-hud hud-top">
          <span>ULTRA DEFENSE SYSTEM</span>
          <span>SECURE CHANNEL // 1972</span>
        </div>

        <div className="login-container">

          <div className="login-corner lc1"></div>
          <div className="login-corner lc2"></div>
          <div className="login-corner lc3"></div>
          <div className="login-corner lc4"></div>

          <div className="ace-symbol">
            <span>A</span>
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

          <div className="login-line">
            <span></span>
          </div>

          <div className="security-status">
            <span className="status-dot"></span>
            DATABASE ONLINE
          </div>

          <form onSubmit={login}>

            <div className="input-group">
              <label>
                <span>01</span> IDENTIFICATION
              </label>

              <div className="input-wrapper">
                <span className="input-icon">&gt;</span>

                <input
                  type="text"
                  placeholder="ENTER USERNAME"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <label>
                <span>02</span> ACCESS CODE
              </label>

              <div className="input-wrapper">
                <span className="input-icon">&gt;</span>

                <input
                  type="password"
                  placeholder="ENTER ACCESS CODE"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="error-message">
                <span>⚠</span>
                {error}
              </div>
            )}

            <button className="login-button">
              <span>ENTER DATABASE</span>
              <b>→</b>
            </button>

          </form>

          <div className="login-info">
            <span>DEMO ACCESS</span>
            <span>USER: ACE</span>
            <span>CODE: 1972</span>
          </div>

        </div>

        <div className="login-hud hud-bottom">
          <span>STATUS: STANDBY</span>
          <span>ENCRYPTION: ACTIVE</span>
        </div>

      </div>
    );
  }

  return (
    <div className="app">

      <div className="scanlines"></div>
      <div className="noise"></div>

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          <div className="logo-a">
            <span>A</span>
          </div>

          <div>
            <strong>ULTRAMAN</strong>
            <small>ACE DATABASE // 02</small>
          </div>
        </div>

        <div className="nav-links">
          {["home", "profile", "abilities", "history"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={activeSection === item ? "active" : ""}
            >
              <span>0{["home", "profile", "abilities", "history"].indexOf(item) + 1}</span>
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        <div className="nav-status">
          <span className="status-dot"></span>
          ONLINE
        </div>

        <button className="logout" onClick={logout}>
          LOGOUT
        </button>

      </nav>

      {/* HERO */}

      <section id="home" className="hero">

        <div className="hero-background"></div>
        <div className="hero-grid"></div>

        <div className="hero-light red-light"></div>
        <div className="hero-light blue-light"></div>

        <div className="hero-particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="hud-corner hero-hud-left">
          <span>SYSTEM / 01</span>
          <strong>ULTRA WARRIOR</strong>
          <small>M78 NEBULA</small>
        </div>

        <div className="hud-corner hero-hud-right">
          <span>THREAT LEVEL</span>
          <strong className="green-text">LOW</strong>
          <small>STATUS: ACTIVE</small>
        </div>

        <div className="hero-content">

          <div className="hero-scan">
            <span></span>
            TARGET ACQUIRED
          </div>

          <p className="eyebrow">
            ULTRA WARRIOR / M78 NEBULA
          </p>

          <h1>
            ULTRAMAN
            <span>ACE</span>
          </h1>

          <div className="hero-line"></div>

          <p className="hero-description">
            นักรบแห่งแสงผู้ปกป้องโลกจากเหล่าสัตว์ประหลาด
            และภัยคุกคามจากอวกาศ
          </p>

          <div className="hero-buttons">

            <a href="#profile" className="primary-btn">
              <span>EXPLORE PROFILE</span>
              <b>→</b>
            </a>

            <a href="#abilities" className="secondary-btn">
              VIEW ABILITIES
            </a>

          </div>

        </div>

        {/* CHARACTER */}

        <div className="hero-character">

          <div className="target-ring ring-one"></div>
          <div className="target-ring ring-two"></div>
          <div className="target-ring ring-three"></div>

          <div className="target-crosshair cross-top"></div>
          <div className="target-crosshair cross-bottom"></div>
          <div className="target-crosshair cross-left"></div>
          <div className="target-crosshair cross-right"></div>

          <div className="character-energy"></div>

          <div className="character-placeholder">

            <img
              src={`${import.meta.env.BASE_URL}ultraman-ace.png`}
              alt="Ultraman Ace"
              className="character-image"
            />

            <div className="character-scan"></div>

          </div>

          <div className="character-label">
            <span>01</span>
            <strong>ULTRAMAN ACE</strong>
            <small>COMBAT UNIT</small>
          </div>

        </div>

        {/* HERO STATS */}

        <div className="hero-stats">

          <div>
            <strong>1972</strong>
            <span>DEBUT</span>
          </div>

          <div>
            <strong>40<span className="unit">m</span></strong>
            <span>HEIGHT</span>
          </div>

          <div>
            <strong>35,000<span className="unit">t</span></strong>
            <span>WEIGHT</span>
          </div>

          <div className="power-status">
            <strong>
              <span className="status-dot blue-dot"></span>
              ACTIVE
            </strong>
            <span>COMBAT STATUS</span>
          </div>

        </div>

      </section>

      {/* PROFILE */}

      <section id="profile" className="section profile">

        <div className="section-grid-bg"></div>

        <div className="section-title">

          <p>// 01 — PROFILE</p>

          <h2>
            THE WARRIOR
            <span>OF LIGHT</span>
          </h2>

          <div className="title-decoration">
            <span></span>
            <b>DATABASE RECORD 001</b>
          </div>

        </div>

        <div className="profile-grid">

          <div className="profile-card main-card">

            <div className="card-glow"></div>

            <div className="card-number">01 / BIOGRAPHY</div>

            <h3>ULTRAMAN ACE</h3>

            <div className="card-line"></div>

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

            <div className="scan-bar">
              <span></span>
            </div>

            <small className="card-footer">
              BIOMETRIC DATA VERIFIED
            </small>

          </div>

          <div className="info-list">

            <div className="info-header">
              <span>SYSTEM DATA</span>
              <b>VERIFIED</b>
            </div>

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

            <div className="info-row status-row">
              <span>CURRENT STATUS</span>
              <strong>
                <i></i> ACTIVE
              </strong>
            </div>

          </div>

        </div>

      </section>

      {/* ABILITIES */}

      <section id="abilities" className="section abilities">

        <div className="ability-bg"></div>

        <div className="section-title center">

          <p>// 02 — COMBAT SYSTEM</p>

          <h2>
            SPECIAL
            <span>ABILITIES</span>
          </h2>

          <div className="title-decoration centered">
            <span></span>
            <b>WEAPON DATABASE // 04 ENTRIES</b>
          </div>

        </div>

        <div className="ability-grid">

          <div className="ability-card">

            <div className="ability-top">
              <span>01</span>
              <b>ENERGY</b>
            </div>

            <div className="ability-icon">
              ⚡
            </div>

            <h3>METALLIUM BEAM</h3>

            <p>
              ลำแสงพลังงานหลักที่ปล่อยออกจากแขน
              สามารถใช้โจมตีศัตรูได้อย่างรุนแรง
            </p>

            <div className="ability-power">
              <span>POWER</span>
              <div>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>

            <div className="ability-line"></div>

          </div>

          <div className="ability-card">

            <div className="ability-top">
              <span>02</span>
              <b>WEAPON</b>
            </div>

            <div className="ability-icon">
              ◇
            </div>

            <h3>ACE BLADE</h3>

            <p>
              อาวุธพลังงานรูปแบบใบมีดสำหรับการต่อสู้
              ระยะประชิดและการโจมตีศัตรู
            </p>

            <div className="ability-power">
              <span>POWER</span>
              <div>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>

            <div className="ability-line"></div>

          </div>

          <div className="ability-card">

            <div className="ability-top">
              <span>03</span>
              <b>ENERGY</b>
            </div>

            <div className="ability-icon">
              ✦
            </div>

            <h3>SPACE Q</h3>

            <p>
              ท่าโจมตีพลังงานขั้นสูงที่มีพลังทำลายสูง
              ใช้ในการต่อสู้กับศัตรูระดับอันตราย
            </p>

            <div className="ability-power">
              <span>POWER</span>
              <div>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>

            <div className="ability-line"></div>

          </div>

          <div className="ability-card">

            <div className="ability-top">
              <span>04</span>
              <b>WEAPON</b>
            </div>

            <div className="ability-icon">
              ╱
            </div>

            <h3>ULTRA CUTTER</h3>

            <p>
              ใบมีดพลังงานที่สามารถใช้โจมตีและ
              ตัดผ่านเป้าหมายได้อย่างแม่นยำ
            </p>

            <div className="ability-power">
              <span>POWER</span>
              <div>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>

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

          <div className="timeline-line"></div>

          <div className="timeline-item">

            <div className="timeline-year">
              1972
            </div>

            <div className="timeline-dot">
              <span></span>
            </div>

            <div className="timeline-content">

              <div className="timeline-tag">
                EVENT / 001
              </div>

              <h3>THE ARRIVAL</h3>

              <p>
                Ultraman Ace ปรากฏตัวบนโลกและเริ่มต้น
                ภารกิจในการปกป้องมนุษยชาติ
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-year">
              T.A.C.
            </div>

            <div className="timeline-dot">
              <span></span>
            </div>

            <div className="timeline-content">

              <div className="timeline-tag">
                EVENT / 002
              </div>

              <h3>TACTICAL ASSISTANCE CENTER</h3>

              <p>
                เข้าร่วมการต่อสู้ร่วมกับหน่วย T.A.C.
                เพื่อต่อกรกับสัตว์ประหลาดและภัยคุกคาม
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-year">
              M78
            </div>

            <div className="timeline-dot">
              <span></span>
            </div>

            <div className="timeline-content">

              <div className="timeline-tag">
                EVENT / 003
              </div>

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

        <div className="quote-grid"></div>

        <div className="quote-orbit"></div>

        <div className="quote-mark">
          "
        </div>

        <h2>
          NEVER STOP
          <span>FIGHTING.</span>
        </h2>

        <p>
          A WARRIOR OF LIGHT NEVER GIVES UP.
        </p>

        <div className="quote-status">
          <span></span>
          ULTRA SPIRIT // ACTIVE
        </div>

      </section>

      {/* FOOTER */}

      <footer>

        <div className="footer-logo">
          <span className="footer-a">A</span>
          ULTRAMAN <span>ACE</span>
        </div>

        <p>
          CHARACTER DATABASE // ULTRA SYSTEM // M78
        </p>

        <button onClick={logout}>
          RETURN TO LOGIN
        </button>

      </footer>

    </div>
  );
}

export default App;