// Alperen Sevinç — Personal Portfolio
// Auto-generated design export. Do not edit by hand.
// TR/EN bilingual support via lang="tr"|"en" attribute on #portfolio-root.

export const DESIGN_HTML = `<div id="portfolio-root" lang="tr" style="position:relative;min-height:100vh;background:#0a0a0a;color:#fff;font-family:'Space Grotesk',sans-serif;overflow-x:hidden;line-height:1.4;letter-spacing:-0.01em;">

  <!-- Scroll Progress Bar -->
  <div id="scroll-bar" style="position:fixed;top:0;left:0;right:0;height:2px;transform:scaleX(0);transform-origin:0 50%;background:linear-gradient(90deg,#7C5CFF,#4ECDC4);z-index:60;"></div>

  <!-- Background -->
  <div style="position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;">
    <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:80px 80px;animation:gridPan 14s linear infinite;mask-image:radial-gradient(ellipse 80% 60% at 50% 25%,#000 30%,transparent 80%);"></div>
    <div style="position:absolute;top:-5%;left:5%;width:55vw;height:55vw;border-radius:50%;background:radial-gradient(circle,rgba(124,92,255,.16),transparent 65%);filter:blur(50px);animation:blobDrift 24s ease-in-out infinite;"></div>
    <div style="position:absolute;bottom:-20%;right:5%;width:40vw;height:40vw;border-radius:50%;background:radial-gradient(circle,rgba(78,205,196,.12),transparent 65%);filter:blur(40px);animation:blobDrift2 28s ease-in-out infinite;"></div>
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 50% at 50% 0%,transparent,rgba(10,10,10,.5) 70%,#0a0a0a);"></div>
  </div>

  <!-- Navigation -->
  <nav style="position:fixed;top:0;left:0;right:0;z-index:50;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:18px 28px;backdrop-filter:blur(16px);background:linear-gradient(180deg,rgba(10,10,10,.85),rgba(10,10,10,.2));border-bottom:1px solid rgba(255,255,255,.07);">
    <a href="#top" style="display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;">
      <span style="font-size:15px;font-weight:600;letter-spacing:-0.02em;color:#fff;">as<span style="color:#7C5CFF">.</span></span>
    </a>
    <div class="nav-chips" style="display:flex;align-items:center;gap:22px;font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.08em;color:rgba(255,255,255,.5);text-transform:uppercase;">
      <a href="#about" style="color:rgba(255,255,255,.5);text-decoration:none;transition:color .2s;" style-hover="color:#fff;">
        <span class="tr-text">Hakkımda</span><span class="en-text" style="display:none;">About</span>
      </a>
      <a href="#skills" style="color:rgba(255,255,255,.5);text-decoration:none;transition:color .2s;" style-hover="color:#fff;">
        <span class="tr-text">Yetenekler</span><span class="en-text" style="display:none;">Skills</span>
      </a>
      <a href="#projects" style="color:rgba(255,255,255,.5);text-decoration:none;transition:color .2s;" style-hover="color:#fff;">
        <span class="tr-text">Projeler</span><span class="en-text" style="display:none;">Projects</span>
      </a>
      <a href="#contact" style="color:rgba(255,255,255,.5);text-decoration:none;transition:color .2s;" style-hover="color:#fff;">
        <span class="tr-text">İletişim</span><span class="en-text" style="display:none;">Contact</span>
      </a>
    </div>
    <div style="display:flex;align-items:center;gap:12px;">
      <button id="lang-toggle" style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.6);background:none;border:1px solid rgba(255,255,255,.15);padding:7px 13px;cursor:pointer;border-radius:2px;transition:border-color .2s,color .2s;" style-hover="border-color:#7C5CFF;color:#fff;">TR / EN</button>
    </div>
  </nav>

  <main id="top" style="position:relative;z-index:1;">

    <!-- Hero -->
    <section id="hero" style="min-height:100vh;display:flex;align-items:center;padding:120px 28px 80px;max-width:1200px;margin:0 auto;">
      <div>
        <div data-reveal="" style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.25em;color:#7C5CFF;text-transform:uppercase;margin-bottom:26px;">
          <span class="tr-text">// yazılım_mühendisi</span><span class="en-text" style="display:none;">// software_engineer</span>
        </div>
        <h1 style="font-size:clamp(40px,7vw,100px);font-weight:600;line-height:1.0;letter-spacing:-0.03em;margin:0;">
          <span data-hero-line="" data-hd="0" style="display:block;overflow:hidden;">Alperen</span>
          <span data-hero-line="" data-hd="80" style="display:block;overflow:hidden;background:linear-gradient(100deg,#7C5CFF,#4ECDC4);-webkit-background-clip:text;background-clip:text;color:transparent;background-size:220% auto;animation:shimmer 7s linear infinite;">Sevinç</span>
        </h1>
        <p data-reveal="" style="font-size:clamp(16px,1.6vw,22px);color:rgba(255,255,255,.6);max-width:50ch;margin:32px 0 0;line-height:1.65;">
          <span class="tr-text">Full-stack odaklı bir yazılım mühendisi. Temiz kod, ölçeklenebilir mimari ve kullanıcı odaklı ürünler inşa ediyorum.</span>
          <span class="en-text" style="display:none;">Full-stack focused software engineer. I build clean code, scalable architecture and user-centered products.</span>
        </p>
        <div data-reveal="" style="display:flex;flex-wrap:wrap;gap:14px;margin-top:40px;">
          <a href="#projects" style="display:inline-flex;align-items:center;gap:10px;font-size:15px;font-weight:500;color:#0a0a0a;background:#fff;padding:14px 26px;text-decoration:none;border-radius:3px;transition:transform .2s;" style-hover="transform:translateY(-2px);">
            <span class="tr-text">Projeleri Gör →</span><span class="en-text" style="display:none;">View Projects →</span>
          </a>
          <a href="#contact" style="display:inline-flex;align-items:center;gap:10px;font-size:15px;font-weight:500;color:#fff;padding:14px 26px;text-decoration:none;border:1px solid rgba(255,255,255,.2);border-radius:3px;transition:border-color .2s;" style-hover="border-color:#7C5CFF;">
            <span class="tr-text">İletişim</span><span class="en-text" style="display:none;">Get In Touch</span>
          </a>
        </div>
        <div data-reveal="" style="display:flex;flex-wrap:wrap;gap:28px;margin-top:56px;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.08em;color:rgba(255,255,255,.35);text-transform:uppercase;">
          <span>Karabük Üniversitesi</span>
          <span style="color:rgba(255,255,255,.15);">·</span>
          <span>27 <span class="tr-text">yaşında</span><span class="en-text" style="display:none;">years old</span></span>
          <span style="color:rgba(255,255,255,.15);">·</span>
          <span style="display:flex;align-items:center;gap:7px;"><span style="width:6px;height:6px;border-radius:50%;background:#4ECDC4;box-shadow:0 0 8px #4ECDC4;animation:pulseDot 1.6s ease-in-out infinite;"></span><span class="tr-text">Açık pozisyon</span><span class="en-text" style="display:none;">Open to work</span></span>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" style="max-width:1200px;margin:0 auto;padding:110px 28px;border-top:1px solid rgba(255,255,255,.07);">
      <div class="split2" style="display:grid;grid-template-columns:.85fr 1.15fr;gap:56px;align-items:start;">
        <div>
          <div data-reveal="" style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.18em;color:#7C5CFF;text-transform:uppercase;margin-bottom:24px;">01 :: <span class="tr-text">Hakkımda</span><span class="en-text" style="display:none;">About</span></div>
          <div data-reveal="" style="display:flex;gap:24px;flex-direction:column;margin-top:8px;">
            <div style="text-align:center;">
              <div style="width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,#7C5CFF 0%,#4ECDC4 100%);display:inline-flex;align-items:center;justify-content:center;font-size:40px;font-weight:600;letter-spacing:-0.03em;color:#fff;border:2px solid rgba(255,255,255,.1);">AS</div>
            </div>
          </div>
        </div>
        <div data-reveal="">
          <p style="font-size:clamp(18px,1.9vw,24px);font-weight:400;line-height:1.55;margin:0;color:rgba(255,255,255,.92);">
            <span class="tr-text">Karabük Üniversitesi mezunu, yazılım mühendisliği tutkusuyla hareket eden bir geliştirici.</span>
            <span class="en-text" style="display:none;">A developer driven by a passion for software engineering, graduated from Karabük University.</span>
          </p>
          <p style="font-size:16px;line-height:1.7;margin:22px 0 0;color:rgba(255,255,255,.55);max-width:58ch;">
            <span class="tr-text">Backend sistemlerden frontend arayüzlere, veritabanı tasarımından API entegrasyonlarına uzanan geniş bir perspektifle çalışıyorum. Teknolojiyi karmaşıklığı gizlemek için değil, işleri gerçekten kolaylaştırmak için kullanıyorum.</span>
            <span class="en-text" style="display:none;">I work across a wide spectrum — from backend systems to frontend interfaces, from database design to API integrations. I use technology not to hide complexity, but to genuinely simplify things.</span>
          </p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:36px;">
            <div data-reveal="" style="border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:18px;">
              <div style="font-size:clamp(28px,3vw,42px);font-weight:600;letter-spacing:-0.03em;"><span data-count="3">0</span><span style="font-size:0.55em;color:rgba(255,255,255,.5);">+</span></div>
              <div style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-top:8px;"><span class="tr-text">Yıl Deneyim</span><span class="en-text" style="display:none;">Years Exp.</span></div>
            </div>
            <div data-reveal="" data-reveal-delay="80" style="border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:18px;">
              <div style="font-size:clamp(28px,3vw,42px);font-weight:600;letter-spacing:-0.03em;"><span data-count="12">0</span><span style="font-size:0.55em;color:rgba(255,255,255,.5);">+</span></div>
              <div style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-top:8px;"><span class="tr-text">Proje</span><span class="en-text" style="display:none;">Projects</span></div>
            </div>
            <div data-reveal="" data-reveal-delay="160" style="border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:18px;">
              <div style="font-size:clamp(28px,3vw,42px);font-weight:600;letter-spacing:-0.03em;background:linear-gradient(100deg,#7C5CFF,#4ECDC4);-webkit-background-clip:text;background-clip:text;color:transparent;">∞</div>
              <div style="font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-top:8px;"><span class="tr-text">Merak</span><span class="en-text" style="display:none;">Curiosity</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" style="padding:110px 0;border-top:1px solid rgba(255,255,255,.07);overflow:hidden;">
      <div style="max-width:1200px;margin:0 auto;padding:0 28px;">
        <div class="split2" style="display:grid;grid-template-columns:.85fr 1.15fr;gap:48px;align-items:start;">
          <div>
            <div data-reveal="" style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.18em;color:#7C5CFF;text-transform:uppercase;">02 :: <span class="tr-text">Yetenekler</span><span class="en-text" style="display:none;">Skills</span></div>
          </div>
          <div data-reveal="">
            <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:24px;">
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.12);border-radius:2px;padding:7px 13px;">TypeScript</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.12);border-radius:2px;padding:7px 13px;">JavaScript</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:rgba(255,255,255,.7);border:1px solid rgba(124,92,255,.4);border-radius:2px;padding:7px 13px;color:#a78bfa;">React</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.12);border-radius:2px;padding:7px 13px;">Node.js</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.12);border-radius:2px;padding:7px 13px;">Python</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.12);border-radius:2px;padding:7px 13px;">PostgreSQL</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.12);border-radius:2px;padding:7px 13px;">Docker</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:rgba(124,205,196,.6);border:1px solid rgba(78,205,196,.3);border-radius:2px;padding:7px 13px;color:#4ECDC4;">Next.js</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.12);border-radius:2px;padding:7px 13px;">Redis</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.12);border-radius:2px;padding:7px 13px;">Git</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.12);border-radius:2px;padding:7px 13px;">REST API</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.06em;color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.12);border-radius:2px;padding:7px 13px;">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Marquee skills -->
      <div style="margin-top:48px;white-space:nowrap;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);">
        <div style="display:inline-flex;gap:0;animation:marquee 22s linear infinite;font-size:clamp(22px,3vw,42px);font-weight:600;letter-spacing:-0.02em;">
          <span style="padding:0 28px;">Backend</span><span style="padding:0 28px;color:#7C5CFF;">✦</span><span style="padding:0 28px;color:rgba(255,255,255,.3);">Frontend</span><span style="padding:0 28px;color:#7C5CFF;">✦</span><span style="padding:0 28px;">Full Stack</span><span style="padding:0 28px;color:#7C5CFF;">✦</span><span style="padding:0 28px;color:rgba(255,255,255,.3);">DevOps</span><span style="padding:0 28px;color:#7C5CFF;">✦</span><span style="padding:0 28px;">API Design</span><span style="padding:0 28px;color:#7C5CFF;">✦</span><span style="padding:0 28px;color:rgba(255,255,255,.3);">Database</span><span style="padding:0 28px;color:#7C5CFF;">✦</span>
          <span style="padding:0 28px;">Backend</span><span style="padding:0 28px;color:#7C5CFF;">✦</span><span style="padding:0 28px;color:rgba(255,255,255,.3);">Frontend</span><span style="padding:0 28px;color:#7C5CFF;">✦</span><span style="padding:0 28px;">Full Stack</span><span style="padding:0 28px;color:#7C5CFF;">✦</span><span style="padding:0 28px;color:rgba(255,255,255,.3);">DevOps</span><span style="padding:0 28px;color:#7C5CFF;">✦</span><span style="padding:0 28px;">API Design</span><span style="padding:0 28px;color:#7C5CFF;">✦</span><span style="padding:0 28px;color:rgba(255,255,255,.3);">Database</span><span style="padding:0 28px;color:#7C5CFF;">✦</span>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" style="max-width:1200px;margin:0 auto;padding:110px 28px;border-top:1px solid rgba(255,255,255,.07);">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:48px;">
        <div>
          <div data-reveal="" style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.18em;color:#7C5CFF;text-transform:uppercase;margin-bottom:16px;">03 :: <span class="tr-text">Projeler</span><span class="en-text" style="display:none;">Projects</span></div>
          <h2 data-reveal="" style="font-size:clamp(26px,3.4vw,48px);font-weight:600;letter-spacing:-0.02em;margin:0;">
            <span class="tr-text">Öne çıkan çalışmalar</span>
            <span class="en-text" style="display:none;">Featured work</span>
          </h2>
        </div>
      </div>
      <div class="split2" style="display:grid;grid-template-columns:repeat(2,1fr);gap:18px;">

        <!-- Project 1 -->
        <div data-reveal="" class="proj" style="position:relative;border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:28px;background:rgba(10,10,12,.5);transition:transform .3s cubic-bezier(.16,1,.3,1),border-color .3s,background .3s;overflow:hidden;" style-hover="transform:translateY(-4px);border-color:rgba(124,92,255,.5);background:rgba(124,92,255,.06);">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:36px;">
            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,.4);">AS_01</span>
            <span style="display:inline-flex;align-items:center;gap:6px;font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#4ECDC4;"><span style="width:6px;height:6px;border-radius:50%;background:#4ECDC4;box-shadow:0 0 8px #4ECDC4;animation:pulseDot 1.6s ease-in-out infinite;"></span><span class="tr-text">Canlı</span><span class="en-text" style="display:none;">Live</span></span>
          </div>
          <div style="font-size:28px;font-weight:600;letter-spacing:-0.02em;margin-bottom:8px;">E-Ticaret Platformu</div>
          <div style="font-size:14px;color:rgba(255,255,255,.5);line-height:1.6;margin-bottom:20px;">
            <span class="tr-text">Çoklu satıcı destekli tam stack e-ticaret uygulaması. Sepet, ödeme ve stok yönetimi.</span>
            <span class="en-text" style="display:none;">Full-stack e-commerce platform with multi-vendor support. Cart, payment and inventory management.</span>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.08);border-radius:2px;padding:4px 9px;">React</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.08);border-radius:2px;padding:4px 9px;">Node.js</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.08);border-radius:2px;padding:4px 9px;">PostgreSQL</span>
          </div>
        </div>

        <!-- Project 2 -->
        <div data-reveal="" data-reveal-delay="70" class="proj" style="position:relative;border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:28px;background:rgba(10,10,12,.5);transition:transform .3s cubic-bezier(.16,1,.3,1),border-color .3s,background .3s;overflow:hidden;" style-hover="transform:translateY(-4px);border-color:rgba(78,205,196,.5);background:rgba(78,205,196,.05);">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:36px;">
            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,.4);">AS_02</span>
            <span style="display:inline-flex;align-items:center;gap:6px;font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#FFB43C;"><span style="width:6px;height:6px;border-radius:50%;background:#FFB43C;"></span><span class="tr-text">Geliştirme</span><span class="en-text" style="display:none;">Dev</span></span>
          </div>
          <div style="font-size:28px;font-weight:600;letter-spacing:-0.02em;margin-bottom:8px;">Task Manager API</div>
          <div style="font-size:14px;color:rgba(255,255,255,.5);line-height:1.6;margin-bottom:20px;">
            <span class="tr-text">RESTful görev yönetimi API'si. JWT kimlik doğrulama, rol tabanlı erişim kontrolü.</span>
            <span class="en-text" style="display:none;">RESTful task management API with JWT authentication and role-based access control.</span>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.08);border-radius:2px;padding:4px 9px;">Node.js</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.08);border-radius:2px;padding:4px 9px;">Express</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.08);border-radius:2px;padding:4px 9px;">JWT</span>
          </div>
        </div>

        <!-- Project 3 -->
        <div data-reveal="" data-reveal-delay="140" class="proj" style="position:relative;border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:28px;background:rgba(10,10,12,.5);transition:transform .3s cubic-bezier(.16,1,.3,1),border-color .3s,background .3s;overflow:hidden;" style-hover="transform:translateY(-4px);border-color:rgba(124,92,255,.5);background:rgba(124,92,255,.06);">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:36px;">
            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,.4);">AS_03</span>
            <span style="display:inline-flex;align-items:center;gap:6px;font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#7C5CFF;"><span style="width:6px;height:6px;border-radius:50%;background:#7C5CFF;"></span><span class="tr-text">Tamamlandı</span><span class="en-text" style="display:none;">Done</span></span>
          </div>
          <div style="font-size:28px;font-weight:600;letter-spacing:-0.02em;margin-bottom:8px;">Portföy CMS</div>
          <div style="font-size:14px;color:rgba(255,255,255,.5);line-height:1.6;margin-bottom:20px;">
            <span class="tr-text">Kişisel içerik yönetim sistemi. Markdown destekli blog, proje showcase ve admin paneli.</span>
            <span class="en-text" style="display:none;">Personal content management system with Markdown blog, project showcase and admin panel.</span>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.08);border-radius:2px;padding:4px 9px;">Next.js</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.08);border-radius:2px;padding:4px 9px;">TypeScript</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.08);border-radius:2px;padding:4px 9px;">Prisma</span>
          </div>
        </div>

        <!-- Project 4 -->
        <div data-reveal="" data-reveal-delay="210" class="proj" style="position:relative;border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:28px;background:rgba(10,10,12,.5);transition:transform .3s cubic-bezier(.16,1,.3,1),border-color .3s,background .3s;overflow:hidden;" style-hover="transform:translateY(-4px);border-color:rgba(78,205,196,.5);background:rgba(78,205,196,.05);">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:36px;">
            <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(255,255,255,.4);">AS_04</span>
            <span style="display:inline-flex;align-items:center;gap:6px;font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#4ECDC4;"><span style="width:6px;height:6px;border-radius:50%;background:#4ECDC4;box-shadow:0 0 8px #4ECDC4;animation:pulseDot 1.6s ease-in-out infinite;"></span><span class="tr-text">Canlı</span><span class="en-text" style="display:none;">Live</span></span>
          </div>
          <div style="font-size:28px;font-weight:600;letter-spacing:-0.02em;margin-bottom:8px;">Chat Uygulaması</div>
          <div style="font-size:14px;color:rgba(255,255,255,.5);line-height:1.6;margin-bottom:20px;">
            <span class="tr-text">WebSocket tabanlı gerçek zamanlı sohbet. Oda yönetimi, dosya paylaşımı, bildirimler.</span>
            <span class="en-text" style="display:none;">WebSocket-based real-time chat with room management, file sharing and notifications.</span>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.08);border-radius:2px;padding:4px 9px;">React</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.08);border-radius:2px;padding:4px 9px;">Socket.io</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.08);border-radius:2px;padding:4px 9px;">Redis</span>
          </div>
        </div>

      </div>
    </section>

    <!-- Contact -->
    <section id="contact" style="max-width:1200px;margin:0 auto;padding:120px 28px 60px;border-top:1px solid rgba(255,255,255,.07);">
      <div data-reveal="" style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.18em;color:#7C5CFF;text-transform:uppercase;margin-bottom:32px;">04 :: <span class="tr-text">İletişim</span><span class="en-text" style="display:none;">Contact</span></div>
      <h2 data-reveal="" style="font-size:clamp(26px,4vw,56px);font-weight:600;letter-spacing:-0.025em;line-height:1.12;margin:0 0 20px;max-width:22ch;">
        <span class="tr-text">Birlikte bir şeyler yapalım.</span>
        <span class="en-text" style="display:none;">Let's build something together.</span>
      </h2>
      <p data-reveal="" style="font-size:16px;color:rgba(255,255,255,.55);max-width:52ch;line-height:1.65;margin:0 0 48px;">
        <span class="tr-text">Yeni fırsatlara açığım — iş teklifleri, açık kaynak işbirlikleri veya sadece selamlaşmak için yazabilirsiniz.</span>
        <span class="en-text" style="display:none;">I'm open to new opportunities — job offers, open source collaborations, or just to say hello.</span>
      </p>
      <a data-reveal="" href="mailto:alperen@example.com" style="display:inline-block;font-size:clamp(20px,2.8vw,44px);font-weight:600;letter-spacing:-0.02em;text-decoration:none;color:rgba(255,255,255,.6);line-height:1.1;transition:color .3s;" style-hover="color:#7C5CFF;">alperen@example.com</a>
      <div data-reveal="" style="display:flex;flex-wrap:wrap;gap:12px;margin-top:40px;">
        <a href="https://github.com/alperen" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:9px;font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:#fff;text-decoration:none;padding:13px 18px;border:1px solid rgba(255,255,255,.14);border-radius:3px;transition:border-color .25s,background .25s,transform .25s;" style-hover="border-color:#7C5CFF;background:rgba(124,92,255,.1);transform:translateY(-2px);"><span style="color:rgba(255,255,255,.4);">↗</span> GitHub</a>
        <a href="https://linkedin.com/in/alperensevinc" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:9px;font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:#fff;text-decoration:none;padding:13px 18px;border:1px solid rgba(255,255,255,.14);border-radius:3px;transition:border-color .25s,background .25s,transform .25s;" style-hover="border-color:#7C5CFF;background:rgba(124,92,255,.1);transform:translateY(-2px);"><span style="color:rgba(255,255,255,.4);">↗</span> LinkedIn</a>
        <a href="https://twitter.com/alperensevinc" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:9px;font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:#fff;text-decoration:none;padding:13px 18px;border:1px solid rgba(255,255,255,.14);border-radius:3px;transition:border-color .25s,background .25s,transform .25s;" style-hover="border-color:#7C5CFF;background:rgba(124,92,255,.1);transform:translateY(-2px);"><span style="color:rgba(255,255,255,.4);">↗</span> X / Twitter</a>
      </div>
      <div data-reveal="" style="display:flex;flex-wrap:wrap;gap:32px;margin-top:36px;font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.06em;color:rgba(255,255,255,.4);">
        <span>KARABÜK, TR</span><span style="color:rgba(255,255,255,.2);">·</span><span style="color:rgba(255,255,255,.25);">EST. 1997</span>
      </div>
    </section>

    <footer style="max-width:1200px;margin:0 auto;padding:36px 28px 44px;border-top:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px;">
      <span style="font-size:15px;font-weight:600;letter-spacing:-0.02em;color:rgba(255,255,255,.7);">as<span style="color:#7C5CFF">.</span></span>
      <div style="font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.1em;color:rgba(255,255,255,.35);text-transform:uppercase;">
        <span class="tr-text">© 2024 Alperen Sevinç — Tüm hakları saklıdır</span>
        <span class="en-text" style="display:none;">© 2024 Alperen Sevinç — All rights reserved</span>
      </div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.1em;color:rgba(255,255,255,.35);text-transform:uppercase;">TR · EN</div>
    </footer>

  </main>
</div>`;
