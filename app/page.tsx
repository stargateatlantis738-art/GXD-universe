'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import tokenImage from '../1a76dde12a4057d4a76e875ab72d8928a5a899783d6a2478e347391493eeb06c.png';
import designOne from '../50691da3607190b9950d540b01f6da9c9159d27b24897819ab0b60680bdaeac7.png';
import designTwo from '../6f5acfc45726dbc57776b306cd81500bee5098034d883994d318849e9765382f.png';
import designThree from '../8880e3f6f2953856d7f6b62fa2c22b74de303f001384ece4465a34ffb3b81cd2.png';
import designFour from '../ac5da52c13ed75a49b50c1f749a714142b452c2a9d69c1dbe60fd1e88fadeca2.png';
import designFive from '../bec22ee1f701664d3b5e08009351cfe7027079a33973fa5661891192a454153f.png';
import designSix from '../ee5c209a09fa8964b056420c239467fa594b7baa5d285f7123a54b6c54b0df76.png';

const links = [['THE DUALITY', 'duality'], ['THE UNIVERSE', 'universe'], ['THE COIN', 'coin'], ['ROADMAP', 'roadmap'], ['TOKEN', 'token'], ['DOCUMENTATION', 'documentation'], ['COMMUNITY', 'community']];
const sides = { god: ['CREATION', 'DISCIPLINE', 'ORDER', 'VISION', 'PATIENCE'], devil: ['CHAOS', 'AMBITION', 'RISK', 'EXPERIMENTATION', 'FREEDOM'] };
const universeCards: { image: StaticImageData; number: string; title: string; text: string }[] = [
  { image: designOne, number: '01', title: 'GXD TOKEN', text: 'The asset at the centre of the universe.' },
  { image: designTwo, number: '02', title: 'THE COMMUNITY', text: 'A collective built around choice and contrast.' },
  { image: designThree, number: '03', title: 'DIGITAL EXPERIENCES', text: 'A world that expands beyond the screen.' },
  { image: designFour, number: '04', title: 'THE COIN', text: 'One artifact. Two forces. One choice.' },
  { image: designFive, number: '05', title: 'THE FUTURE', text: 'The next chapter remains unwritten.' },
];
const roadmap = ['BIRTH', 'AWAKENING', 'DUALITY', 'UNIVERSE', 'EXPANSION'];

function Artwork({ image, alt, className = '', priority = false }: { image: StaticImageData; alt: string; className?: string; priority?: boolean }) {
  return <div className={`artwork ${className}`}><Image src={image} alt={alt} fill priority={priority} sizes="(max-width: 760px) 92vw, 560px" className="artwork-image" /></div>;
}
function Heading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="section-heading"><div className="eyebrow">{eyebrow}</div><h2 className="display section-title">{title}</h2>{children && <p className="section-lede">{children}</p>}</div>;
}
function Side({ name, items, type }: { name: string; items: string[]; type: 'god' | 'devil' }) {
  return <div className={`force force-${type}`}><div className="force-mark">{type === 'god' ? '✦' : '◈'}</div><h3 className="display">{name}</h3><div className="force-line" />{items.map((item) => <span key={item}>{item}</span>)}</div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('top');
  const go = (id: string) => { setMenu(false); setActive(id); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  return <main id="top">
    <div className="site-noise" />
    <header className="site-header"><div className="container header-inner"><button className="brand" onClick={() => go('top')}><span className="brand-symbol">✦</span><span>GXD <i>UNIVERSE</i></span></button><nav className="desktop-nav">{links.map(([label, id]) => <button key={id} onClick={() => go(id)} className={active === id ? 'active' : ''}>{label}</button>)}</nav><button className="menu-toggle" aria-label="Open navigation" onClick={() => setMenu(!menu)}>{menu ? '×' : '☰'}</button></div>{menu && <nav className="mobile-menu">{links.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</nav>}</header>

    <section className="hero grid-lines"><div className="hero-glow" /><div className="container hero-inner"><div className="eyebrow">GOD &amp; DEVIL — EST. 2026</div><div className="hero-forces"><div className="hero-word hero-word-left">GOD</div><div className="hero-coin"><div className="coin-rings" /><div className="coin-aura" /><Artwork image={tokenImage} alt="GXD single metallic coin" priority /></div><div className="hero-word hero-word-right">DEVIL</div></div><h1 className="display hero-title">GOD <span>&amp;</span> DEVIL</h1><div className="hero-subtitle">GXD UNIVERSE</div><p className="hero-tagline">BUILD. RISK. CHOOSE.</p><div className="hero-actions"><button className="btn" onClick={() => go('universe')}>ENTER THE UNIVERSE <b>↗</b></button><button className="btn btn-ghost" onClick={() => go('token')}>EXPLORE GXD</button></div></div><div className="scroll-cue">SCROLL TO ENTER <span>↓</span></div></section>

    <section id="duality" className="section duality-section"><div className="container"><Heading eyebrow="01 / THE PHILOSOPHY" title="THE DUALITY">Two forces. One universe. The tension between creation and destruction is where GXD begins.</Heading><div className="duality-stage"><Side name="GOD" items={sides.god} type="god" /><div className="duality-ampersand display">&amp;</div><Side name="DEVIL" items={sides.devil} type="devil" /></div></div></section>

    <section className="manifesto"><div className="manifesto-orb" /><div className="container manifesto-inner"><div className="eyebrow">THE GXD MANIFESTO</div><div className="manifesto-lines"><p>THERE IS <em>LIGHT.</em></p><p>THERE IS <strong>DARKNESS.</strong></p><p>THERE IS <em>CREATION.</em></p><p>THERE IS <strong>DESTRUCTION.</strong></p><p>THERE IS <em>DISCIPLINE.</em></p><p>THERE IS <strong>CHAOS.</strong></p></div><p className="manifesto-end">THERE IS GOD. THERE IS DEVIL.<br /><span>AND BETWEEN THEM STANDS <b>&amp;</b>.</span></p><p className="manifesto-close">NOT A WALL. NOT A WAR.<br />A CONNECTION.<br /><strong>GXD IS BORN FROM THAT DUALITY.</strong></p><div className="manifesto-cta">BUILD. <span>RISK.</span> CHOOSE.</div></div></section>

    <section id="universe" className="section universe-section"><div className="container"><Heading eyebrow="02 / THE ECOSYSTEM" title="THE GXD UNIVERSE">A premium fictional universe built around contrast, consequence and choice.</Heading><div className="universe-grid">{universeCards.map((card) => <article className="universe-card" key={card.number}><Artwork image={card.image} alt={card.title} /><div className="card-overlay" /><div className="universe-card-copy"><span>{card.number}</span><h3 className="display">{card.title}</h3><p>{card.text}</p></div></article>)}</div></div></section>

    <section id="coin" className="section coin-section"><div className="container coin-layout"><div><Heading eyebrow="03 / THE ARTIFACT" title="THE COIN">ONE COIN.<br />TWO FORCES.<br /><span>ONE CHOICE.</span></Heading><p className="section-lede">The physical coin is a visual and collectible representation of GXD. It is one intact artifact — the duality is engraved into its surface.</p></div><div className="coin-showcase"><div className="coin-shadow" /><Artwork image={tokenImage} alt="The GXD physical coin" /></div></div></section>

    <section id="roadmap" className="section roadmap-section"><div className="container"><Heading eyebrow="04 / THE PATH" title="ROADMAP">A direction, not a promise. Every stage is built in public.</Heading><div className="timeline">{roadmap.map((item, index) => <div className="timeline-item" key={item}><div className="timeline-number">0{index + 1}</div><div className="timeline-dot" /><h3 className="display">{item}</h3><p>{index === 0 ? 'The first spark.' : index === 1 ? 'The world wakes.' : index === 2 ? 'The forces emerge.' : index === 3 ? 'The universe opens.' : 'The story expands.'}</p></div>)}</div></div></section>

    <section id="token" className="section token-section"><div className="container token-layout"><div><Heading eyebrow="05 / THE ASSET" title="GXD TOKEN">The core digital asset of the GXD universe. Details will be revealed when they are ready.</Heading><div className="token-facts"><div><span>SYMBOL</span><b>GXD</b></div><div><span>IDENTITY</span><b>GOD / DEVIL</b></div><div><span>STATUS</span><b>COMING SOON</b></div></div></div><Artwork image={tokenImage} alt="GXD token" /></div></section>

    <section id="documentation" className="section documentation-section"><div className="container"><Heading eyebrow="06 / THE RECORD" title="DOCUMENTATION">The ideas, architecture and principles behind the universe.</Heading><div className="doc-grid">{['WHITEPAPER', 'TOKENOMICS', 'ARCHITECTURE', 'ROADMAP'].map((item, index) => <div className="doc-card" key={item}><span>0{index + 1}</span><h3 className="display">{item}</h3><p>COMING SOON</p><b>↗</b></div>)}</div></div></section>

    <section id="community" className="section community-section"><div className="container community-inner"><div className="eyebrow">07 / THE COLLECTIVE</div><h2 className="display section-title">CHOOSE YOUR SIDE.</h2><div className="choice-marks"><span>GOD</span><b>&amp;</b><span>DEVIL</span></div><p>GXD is a fictional universe about duality, choice and creative tension — not a religious or ideological movement.</p><button className="btn btn-ghost" disabled>COMMUNITY — COMING SOON</button></div></section>
    <footer className="site-footer"><div className="container footer-inner"><div><div className="brand"><span className="brand-symbol">✦</span><span>GXD <i>UNIVERSE</i></span></div><p>GOD &amp; DEVIL<br />BUILD. RISK. CHOOSE.</p></div><div className="footer-links">{['DOCUMENTATION', 'COMMUNITY', 'TOKEN', 'THE COIN'].map((label) => <button key={label} onClick={() => go(label === 'THE COIN' ? 'coin' : label.toLowerCase())}>{label}</button>)}</div><div className="footer-note">© 2026 GXD UNIVERSE<br />NO FINANCIAL PROMISES.</div></div></footer>
  </main>;
}
