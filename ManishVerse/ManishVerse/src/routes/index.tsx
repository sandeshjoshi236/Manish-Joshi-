// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import siteCss from "../manishverse.css?url";
import freefireAsset from "@/assets/freefire-sandesh.jpg.asset.json";
import robloxAsset from "@/assets/roblox-sandesh.jpg.asset.json";
import manishPhoto from "@/assets/manish-photo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ManishVerse | Student • Gamer • Creator" },
      { name: "description", content: "Manish's digital world: a Class 6 student who loves Free Fire, Roblox and technology." },
      { property: "og:title", content: "ManishVerse | Student • Gamer • Creator" },
      { property: "og:description", content: "Manish's digital world: gaming, learning and big dreams." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#07091b" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap" },
      { rel: "stylesheet", href: siteCss },
    ],
  }),
  component: Index,
});

function runSiteScript() {

// Mobile navigation
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#nav");
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
  
  // Reveal sections as they enter the viewport
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
  
  // Gentle 3D tilt for game/project cards
  document.querySelectorAll(".game-card, .project-card, .stat-card").forEach(card => {
    card.addEventListener("mousemove", event => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => card.style.transform = "");
  });
  
  // Lightweight animated star particles
  const canvas = document.querySelector("#particles");
  const ctx = canvas.getContext("2d");
  let particles = [];
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + "px";
    canvas.style.height = innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles = Array.from({length: Math.min(75, Math.floor(innerWidth / 16))}, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      r: Math.random() * 1.5 + .3, speed: Math.random() * .35 + .08,
      alpha: Math.random() * .5 + .15
    }));
  }
  function animateParticles() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    particles.forEach(p => {
      p.y -= p.speed;
      if (p.y < -3) { p.y = innerHeight + 3; p.x = Math.random() * innerWidth; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(116, 198, 255, ${p.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#4b8fff";
      ctx.fill();
    });
    requestAnimationFrame(animateParticles);
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  animateParticles();
  
  // Active navigation link
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll("nav a");
  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => activeObserver.observe(section));
  
}

function Index() {
  useEffect(() => {
    (runSiteScript as () => void)();
  }, []);
  return (
    <>
<div className="ambient ambient-one"></div>
  <div className="ambient ambient-two"></div>
  <canvas id="particles" aria-hidden="true"></canvas>
  <header className="topbar">
    <a className="brand" href="#home"><span className="brand-icon">✦</span> Manish<span>Verse</span></a>
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
    <nav id="nav">
      <a href="#home" className="active">Home</a><a href="#about">About</a><a href="#games">My Games</a><a href="#goals">Goals</a><a href="#projects">Projects</a>
    </nav>
    <a className="nav-cta" href="#contact">Let's Play <span>↗</span></a>
  </header>

  <main>
    <section className="hero section" id="home">
      <div className="hero-copy reveal">
        <div className="status"><i></i> PLAYER PROFILE • ONLINE</div>
        <p className="eyebrow">HEY, I'M</p>
        <h1>MANISH<span>!</span></h1>
        <h2>Student <b>/</b> Gamer <b>/</b> Future Creator</h2>
        <p className="intro">Welcome to my digital world! I'm a Class 6 student who loves gaming, especially <strong>Free Fire</strong> and <strong>Roblox</strong>. I enjoy learning new things and exploring technology.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#games">Explore My World <span>→</span></a>
          <a className="button button-ghost" href="#about">About Me</a>
        </div>
        <div className="hero-note"><span>✦</span> PLAY • LEARN • GROW</div>
      </div>
      <div className="hero-art reveal">
        <div className="orbit orbit-a"></div><div className="orbit orbit-b"></div>
        <div className="avatar-frame"><img className="avatar-photo" src={freefireAsset.url} alt="SANDESH Free Fire Max character" /></div>
        <div className="floating-tag tag-top">LEVEL <b>68</b></div>
        <div className="floating-tag tag-bottom"><span className="pulse-dot"></span> PLAYER: MANISH</div>
        <div className="spark spark-one">✦</div><div className="spark spark-two">✧</div>
      </div>
    </section>

    <section className="stats section reveal">
      <article className="stat-card"><span className="stat-icon">🎓</span><div><small>MY STUDIES</small><strong>Class 6</strong><p>Learning & growing</p></div></article>
      <article className="stat-card"><span className="stat-icon">🎮</span><div><small>MY INTERESTS</small><strong>Gaming + Tech</strong><p>Play • Learn • Explore</p></div></article>
      <article className="stat-card"><span className="stat-icon">🏆</span><div><small>FAVORITE GAMES</small><strong>Free Fire & Roblox</strong><p>Ready for adventure</p></div></article>
      <article className="stat-card"><span className="stat-icon">🚀</span><div><small>MY BIG GOAL</small><strong>Future Creator</strong><p>Build amazing things</p></div></article>
    </section>

    <section className="section content-grid" id="about">
      <article className="panel about-panel reveal">
        <div className="section-heading"><span>01</span><h3>About <em>Me</em></h3></div>
        <img className="about-photo" src={manishPhoto.url} alt="Manish in a purple hoodie" />
        <p>Hi! I'm Manish. I'm a Class 6 student who enjoys gaming, discovering technology, and learning new things. My favorite games are Free Fire and Roblox. This website is my own little corner of the internet!</p>
        <div className="mini-pills"><span>🎮 Gamer</span><span>📚 Student</span><span>✨ Curious</span></div>
      </article>
      <article className="panel goals-panel reveal" id="goals">
        <div className="section-heading"><span>02</span><h3>My <em>Goals</em></h3></div>
        <ul className="goal-list"><li><i>✓</i> Keep learning at school</li><li><i>✓</i> Explore how games are made</li><li><i>✓</i> Learn beginner coding</li><li><i>✓</i> Make my family proud</li></ul>
        <div className="dream">DREAM<br /><b>BIG!</b></div>
      </article>
    </section>

    <section className="section" id="games">
      <div className="section-heading section-title reveal"><span>03</span><h3>My <em>Games</em></h3><p>Two worlds. Endless adventures.</p></div>
      <div className="game-grid">
        <article className="game-card freefire reveal">
          <div className="game-visual"><img className="game-photo" src={freefireAsset.url} alt="Free Fire Max character" /><span className="game-label">BATTLE ROYALE</span></div>
          <div className="game-info"><div><h4>Free Fire</h4><p>Fast matches and exciting adventures.</p></div><span className="card-arrow">↗</span></div>
          <ul className="game-stats">
            <li><small>PLAYER NAME</small><strong>Sandesh 🚩</strong></li>
            <li><small>LEVEL</small><strong>68</strong></li>
            <li><small>FAVOURITE MODE</small><strong>Battle Royale</strong></li>
            <li><small>FREE FIRE ID</small><strong>3233830217</strong></li>
          </ul>
        </article>
        <article className="game-card roblox reveal">
          <div className="game-visual"><img className="game-photo" src={robloxAsset.url} alt="Roblox avatar" /><span className="game-label">CREATE • EXPLORE</span></div>
          <div className="game-info"><div><h4>Roblox</h4><p>Explore different worlds and experiences.</p></div><span className="card-arrow">↗</span></div>
          <ul className="game-stats">
            <li><small>PLAYER NAME</small><strong>SANDESHH1239</strong></li>
            <li><small>FAVOURITE WORLDS</small><strong>Obbys</strong></li>
            <li><small>BEST AT</small><strong>Builders</strong></li>
            <li><small>VIBES</small><strong>Fun</strong></li>
          </ul>
        </article>
      </div>
    </section>

    <section className="section" id="projects">
      <div className="section-heading section-title reveal"><span>04</span><h3>My <em>Projects</em></h3><p>Little ideas, big imagination.</p></div>
      <div className="project-grid">
        <article className="project-card reveal"><div className="project-art art-blue">⌘</div><h4>My Gaming Profile</h4><p>A personal space for my favorite games.</p><span className="project-tag">IDEA PROJECT</span></article>
        <article className="project-card reveal"><div className="project-art art-purple">✦</div><h4>ManishVerse</h4><p>This portfolio website, made to share my world.</p><span className="project-tag">MY WEBSITE</span></article>
        <article className="project-card reveal"><div className="project-art art-pink">⌁</div><h4>Future Game Idea</h4><p>One day, I want to learn how games are built.</p><span className="project-tag">FUTURE GOAL</span></article>
      </div>
    </section>

    <section className="section contact-section reveal" id="contact">
      <div><div className="section-heading"><span>05</span><h3>Thanks for <em>visiting!</em></h3></div><p>Keep exploring, keep learning, and keep having fun.</p></div>
      <a className="button button-primary" href="#home">Back to top ↑</a>
    </section>
  </main>
  <footer><a className="brand" href="#home">✦ Manish<span>Verse</span></a><p>Made with <b>♥</b> and lots of imagination.</p><small>Student portfolio • Play responsibly</small></footer>
  
    </>
  );
}
