'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import tokenImage from '../1a76dde12a4057d4a76e875ab72d8928a5a899783d6a2478e347391493eeb06c.png';
import designOne from '../50691da3607190b9950d540b01f6da9c9159d27b24897819ab0b60680bdaeac7.png';
import designTwo from '../6f5acfc45726dbc57776b306cd81500bee5098034d883994d318849e9765382f.png';
import designThree from '../8880e3f6f2953856d7f6b62fa2c22b74de303f001384ece4465a34ffb3b81cd2.png';
import designFour from '../ac5da52c13ed75a49b50c1f749a714142b452c2a9d69c1dbe60fd1e88fadeca2.png';
import designFive from '../bec22ee1f701664d3b5e080093d23ff2fa01.png';
import designSix from '../ee5c209a09fa8964b056420c239467fa594b7baa5d285f7123a54b6c54b0df76.png';

const links = [
  ['GXD', 'top'], ['THE DUALITY', 'duality'], ['THE UNIVERSE', 'universe'],
  ['THE COIN', 'coin'], ['ROADMAP', 'roadmap'], ['TOKEN', 'token'],
  ['DOCUMENTATION', 'documentation'], ['COMMUNITY', 'community'],
];

const visuals: { image: StaticImageData; label: string; title: string }[] = [
  { image: designOne, label: '01 / ORIGIN', title: 'THE FIRST CHAPTER' },
  { image: designTwo, label: '02 / DUALITY', title: 'TWO FORCES' },
  { image: designThree, label: '03 / RISK', title: 'CHOOSE YOUR SIDE' },
  { image: designFour, label: '04 / POWER', title: 'BUILD THE FUTURE' },
  { image: designFive, label: '05 / LEGACY', title: 'BEYOND THE VEIL' },
  { image: designSix, label: '06 / UNIVERSE', title: 'THE WORLD EXPANDS' },
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="mb-14 max-w-3xl"><div className="eyebrow">{eyebrow}</div><h2 className="display section-title">{title}</h2>{children && <p className="max-w-xl text-lg leading-8 muted">{children}</p>}</div>;
}

function Artwork({ image, alt, priority = false, className = '' }: { image: StaticImageData; alt: string; priority?: boolean; className?: string }) {
  return <div className={`artwork ${className}`}><Image src={image} alt={alt} fill sizes="(max-width: 760px) 92vw, 560px" priority={priority} className="artwork-image" /></div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('top');
  const go = (id: string) => { setMenu(false); setActive(id); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return <main id="top" className="overflow-hidden bg-[#070707]">
    <div className="site-noise" />
    <header className="fixed top-0 z-30 w-full border-b border-white/10 bg-[#070707]/80 backdrop-blur-md">
      <div className="container flex h-[72px] items-center justify-between">
        <button onClick={() => go('top')} className="flex items-center gap-3 text-left"><span className="text-xl gold">✦</span><span className="text-xs font-bold tracking-[.25em]">GXD <span className="font-normal text-white/40">UNIVERSE</span></span></button>
        <nav className="desktop-nav flex items-center gap-5">{links.map(([label, id]) => <button key={id} onClick={() => go(id)} className={`nav-link ${active === id ? 'active' : ''}`}>{label}</button>)}</nav>
        <button aria-label="Toggle navigation" onClick={() => setMenu(!menu)} className="mobile-nav text-xl gold">{menu ? '×' : '☰'}</button>
      </div>
      {menu && <nav className="mobile-nav border-t border-white/10 bg-[#090909] px-7 py-5">{links.map(([label, id]) => <button key={id} onClick={() => go(id)} className="block w-full py-3 text-left nav-link">{label}</button>)}</nav>}
    </header>

    <section className="hero-vignette grid-lines relative min-h-screen pt-20" aria-label="GXD Universe hero">
      <div className="container hero-main relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center text-center">
        <div className="eyebrow mb-7">GOD &amp; DEVIL / EST. 2026</div>
        <Artwork image={tokenImage} alt="GXD token" priority className="hero-art" />
        <h1 className="display mt-8 text-5xl leading-none sm:text-7xl">GOD <span className="gold">&amp;</span> DEVIL</h1>
        <p className="mt-5 text-xs tracking-[.65em] text-white/60">GXD / THE DUALITY</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3"><button className="btn" onClick={() => go('universe')}>Enter the universe <span className="ml-4">↗</span></button><button className="btn btn-quiet" onClick={() => go('token')}>Discover the token</button></div>
      </div><div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] tracking-[.3em] text-white/35">SCROLL TO ENTER ↓</div>
    </section>

    <section id="duality" className="section"><div className="container"><SectionHeading eyebrow="01 / The philosophy" title="THE DUALITY">There is creation. There is destruction. GXD exists in the tension between both.</SectionHeading><div className="rule" /></div></section>

    <section id="universe" className="section bg-[#0b0b0b]"><div className="container"><SectionHeading eyebrow="02 / The ecosystem" title="THE GXD UNIVERSE">A visual universe built around choice, contrast and consequence.</SectionHeading><div className="visual-grid">{visuals.map((visual) => <article className="visual-card" key={visual.label}><Artwork image={visual.image} alt={visual.title} /><div className="mt-5"><div className="eyebrow">{visual.label}</div><h3 className="display mt-2 text-3xl">{visual.title}</h3></div></article>)}</div></div></section>

    <section id="coin" className="section"><div className="container grid items-center gap-16 lg:grid-cols-[.85fr_1.15fr]"><div><SectionHeading eyebrow="03 / The artifact" title="THE COIN">A physical symbol of the choice at the heart of GXD. One face creates. The other destroys.</SectionHeading><button className="btn" onClick={() => go('token')}>View the token ↗</button></div><Artwork image={tokenImage} alt="The GXD coin" /></div></section>

    <section id="roadmap" className="section bg-[#0b0b0b]"><div className="container"><SectionHeading eyebrow="04 / The path" title="ROADMAP">A direction, not a promise. Every stage is built in public.</SectionHeading><div className="roadmap"><div><span>01</span><b>FOUNDATION</b><small>Identity, lore and the first artifact.</small></div><div><span>02</span><b>EXPANSION</b><small>Community, utility and new worlds.</small></div><div><span>03</span><b>ASCENSION</b><small>The universe becomes interactive.</small></div></div></div></section>

    <section id="token" className="section"><div className="container grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHeading eyebrow="05 / The asset" title="GXD TOKEN">The coin is the only visual language the token needs: direct, rare and unmistakable.</SectionHeading><div className="field"><span>SYMBOL</span><span className="gold">GXD</span></div><div className="field"><span>IDENTITY</span><span>GOD / DEVIL</span></div><div className="field"><span>STATUS</span><span className="gold">COMING SOON</span></div></div><Artwork image={tokenImage} alt="GXD token coin" /></div></section>

    <section id="documentation" className="section bg-[#0b0b0b]"><div className="container"><SectionHeading eyebrow="06 / The record" title="DOCUMENTATION">The ideas, architecture and principles behind the GXD universe.</SectionHeading><div className="glass card max-w-xl"><div className="card-num">GXD / ARCHIVE</div><h3 className="display mt-5 text-4xl">THE DUALITY, DOCUMENTED.</h3><p className="mt-4 leading-7 muted">The story is still being written. Enter early and watch the world take shape.</p></div></div></section>

    <section id="community" className="section"><div className="container text-center"><div className="eyebrow">07 / The collective</div><h2 className="display section-title mx-auto">JOIN THE GXD UNIVERSE</h2><p className="mx-auto max-w-xl leading-7 muted">Build. Risk. Choose. The next chapter is yours to shape.</p><button className="btn mt-10">Enter the community ↗</button></div></section>
    <footer className="border-t border-white/10 py-12"><div className="container flex flex-wrap items-center justify-between gap-6"><div className="text-xs tracking-[.25em]">✦ GXD UNIVERSE</div><div className="text-[10px] tracking-[.2em] text-white/40">GOD &amp; DEVIL / THE DUALITY</div></div></footer>
  </main>;
}
