'use client';

import { useState } from 'react';

const links = [
  ['GXD', 'top'], ['THE DUALITY', 'duality'], ['THE UNIVERSE', 'universe'], ['THE COIN', 'coin'],
  ['ROADMAP', 'roadmap'], ['TOKEN', 'token'], ['DOCUMENTATION', 'documentation'], ['COMMUNITY', 'community'],
];

function Coin({ large = false }: { large?: boolean }) {
  return <div className={`${large ? 'coin-float' : ''} relative flex items-center justify-center`}>
    <div className="coin-halo absolute h-[110%] w-[110%] rounded-full bg-[#c9a66b]/10 blur-3xl" />
    <div className="coin coin-spin"><span className="coin-side left">GOD</span><span className="coin-side right">DEVIL</span><div className="coin-center"><b>&amp;</b><span>GXD</span></div></div>
  </div>;
}

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="mb-14 max-w-3xl"><div className="eyebrow">{eyebrow}</div><h2 className="display section-title">{title}</h2>{children && <p className="max-w-xl text-lg leading-8 muted">{children}</p>}</div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('top');
  const go = (id: string) => { setMenu(false); setActive(id); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return <main id="top" className="overflow-hidden bg-[#070707]">
    <div className="site-noise" />
    <header className="fixed top-0 z-30 w-full border-b border-white/10 bg-[#070707]/80 backdrop-blur-md">
      <div className="container flex h-[72px] items-center justify-between">
        <button onClick={() => go('top')} className="flex items-center gap-3 text-left"><span className="text-xl gold">✦</span><span className="text-xs font-bold tracking-[.25em]">GXD <span className="font-normal text-white/50">UNIVERSE</span></span></button>
        <nav className="desktop-nav flex items-center gap-5">{links.map(([label, id]) => <button key={id} onClick={() => go(id)} className={`nav-link ${active === id ? 'active' : ''}`}>{label}</button>)}</nav>
        <button aria-label="Toggle navigation" onClick={() => setMenu(!menu)} className="mobile-nav text-xl gold">{menu ? '×' : '☰'}</button>
      </div>
      {menu && <nav className="mobile-nav border-t border-white/10 bg-[#090909] px-7 py-5">{links.map(([label, id]) => <button key={id} onClick={() => go(id)} className="block w-full py-3 text-left nav-link">{label}</button>)}</nav>}
    </header>

    <section className="hero-vignette grid-lines relative min-h-screen pt-20" aria-label="GXD Universe hero">
      <div className="container hero-main relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center text-center">
        <div className="eyebrow mb-7">GOD &amp; DEVIL / EST. 2026</div>
        <div className="mb-9 flex w-full items-center justify-center gap-12"><div className="hero-side text-right"><div className="display text-4xl text-[#d8d6cd]">GOD</div><div className="mt-4 text-[9px] leading-6 tracking-[.3em] text-white/45">CREATION<br/>ORDER<br/>DISCIPLINE<br/>VISION</div></div><Coin large /><div className="hero-side text-left"><div className="display text-4xl text-[#8d3d3d]">DEVIL</div><div className="mt-4 text-[9px] leading-6 tracking-[.3em] text-white/45">CHAOS<br/>AMBITION<br/>RISK<br/>EXPERIMENTATION</div></div></div>
        <h1 className="display text-5xl leading-none sm:text-7xl">GOD <span className="gold">&amp;</span> DEVIL</h1><p className="mt-5 text-xs tracking-[.65em] text-white/60">GXD / THE DUALITY</p><p className="mt-7 text-sm tracking-[.45em] gold">BUILD. RISK. CHOOSE.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3"><button className="btn" onClick={() => go('universe')}>Enter the universe <span className="ml-4">↗</span></button><button className="btn btn-ghost" onClick={() => go('duality')}>Explore GXD</button></div>
      </div><div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] tracking-[.3em] text-white/35">SCROLL TO ENTER ↓</div>
    </section>

    <section id="duality" className="section"><div className="container"><SectionHeading eyebrow="01 / The philosophy" title="THE DUALITY">There is creation. There is destruction. There is discipline. There is chaos. There is GOD. There is DEVIL. And between them stands &amp;.</SectionHeading><div className="grid border-y border-white/10 md:grid-cols-[1fr_110px_1fr]"><div className="py-12 md:pr-12"><div className="display text-5xl">GOD</div><p className="mt-5 text-xs leading-8 tracking-[.25em] text-white/55">CREATION<br/>ORDER<br/>DISCIPLINE<br/>VISION</p></div><div className="flex items-center justify-center border-y border-white/10 py-8 md:border-x md:border-y-0"><span className="display text-7xl gold">&amp;</span></div><div className="py-12 md:pl-12"><div className="display text-5xl text-[#a55454]">DEVIL</div><p className="mt-5 text-xs leading-8 tracking-[.25em] text-white/55">CHAOS<br/>AMBITION<br/>RISK<br/>EXPERIMENTATION</p></div></div><p className="display mt-14 max-w-2xl text-3xl leading-tight text-white/80">Not a wall.<br/><span className="gold">Not a war.</span><br/>A connection.</p></div></section>

    <section id="universe" className="section bg-[#0b0b0b]"><div className="container"><SectionHeading eyebrow="02 / The ecosystem" title="THE GXD UNIVERSE">An evolving universe built around duality.</SectionHeading><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[['01','GXD TOKEN','The core digital asset.'],['02','THE COMMUNITY','A community built around the idea of duality.'],['03','DIGITAL EXPERIENCES','Future digital products and experiences.'],['04','THE COIN','A physical collectible representation of GXD.'],['05','THE FUTURE','An evolving ecosystem.']].map(([n,t,d]) => <article key={n} className="card glass"><div className="card-num">{n} / 05</div><div className="mt-14 text-xl tracking-[.08em]">{t}</div><p className="mt-4 text-sm leading-6 muted">{d}</p></article>)}</div></div></section>

    <section id="coin" className="section"><div className="container grid items-center gap-16 lg:grid-cols-[1fr_1fr]"><div><SectionHeading eyebrow="03 / The artifact" title="THE COIN">One coin. Two forces. One choice.</SectionHeading><p className="max-w-md leading-8 muted">The GXD coin is the physical visual representation of the GOD &amp; DEVIL concept. An intact object, marked by a surface fracture — never divided.</p><div className="mt-9 flex items-center gap-5"><span className="h-px w-10 bg-[#c9a66b]"/><span className="text-xs tracking-[.3em] gold">GXD GENESIS / COMING SOON</span></div></div><div className="flex justify-center"><Coin /></div></div></section>

    <section id="roadmap" className="section bg-[#0b0b0b]"><div className="container"><SectionHeading eyebrow="04 / The path" title="ROADMAP">A direction, not a promise. Every future stage is planned and subject to evolution.</SectionHeading><div className="grid gap-px bg-white/10 md:grid-cols-5">{[['01','BIRTH','GXD identity and concept.'],['02','AWAKENING','Website, community and documentation.'],['03','DUALITY','GXD token launch and ecosystem foundations.'],['04','UNIVERSE','Digital experiences, collectibles and community expansion.'],['05','EXPANSION','Future products, partnerships and integrations.']].map(([n,t,d],i) => <article key={n} className="bg-[#0b0b0b] p-6"><div className="card-num">{n} / {i < 2 ? 'NOW' : 'PLANNED'}</div><h3 className="mt-16 text-lg tracking-widest">{t}</h3><p className="mt-5 text-sm leading-6 muted">{d}</p></article>)}</div></div></section>

    <section id="token" className="section"><div className="container grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><SectionHeading eyebrow="05 / The asset" title="GXD TOKEN">The core digital asset of the GXD Universe.</SectionHeading><div className="glass p-7 sm:p-10">{[['BLOCKCHAIN','COMING SOON'],['CONTRACT ADDRESS','NOT YET AVAILABLE'],['TOTAL SUPPLY','TO BE ANNOUNCED'],['LIQUIDITY','TO BE ANNOUNCED'],['TOKEN STATUS','IN DEVELOPMENT'],['OFFICIAL MARKET','COMING SOON']].map(([a,b]) => <div className="field" key={a}><span className="text-white/55">{a}</span><span>{b}</span></div>)}<p className="mt-7 text-xs leading-6 muted">Official token information will be published here after verification.</p><button disabled className="btn mt-7 cursor-not-allowed border-white/10 text-white/30">View on explorer</button></div></div></section>

    <section id="documentation" className="section bg-[#0b0b0b]"><div className="container"><SectionHeading eyebrow="06 / The record" title="DOCUMENTATION">The ideas, architecture and principles behind GXD.</SectionHeading><div className="grid gap-3 md:grid-cols-3">{[['GXD GENESIS','The foundation and philosophy of GXD.'],['TOKENOMICS','Supply, allocation and token structure.'],['MANIFESTO','The principles behind GOD & DEVIL.']].map(([t,d]) => <article className="card glass" key={t}><div className="text-lg tracking-widest">{t}</div><p className="mt-5 text-sm leading-6 muted">{d}</p><div className="mt-12 text-[10px] tracking-[.3em] gold">COMING SOON ↗</div></article>)}</div></div></section>

    <section id="community" className="section"><div className="container text-center"><div className="eyebrow">07 / The collective</div><h2 className="display section-title mx-auto">JOIN THE GXD<br/><span className="gold">UNIVERSE</span></h2><p className="mx-auto max-w-lg leading-8 muted">GXD is being built as an evolving universe around the idea of duality.</p><div className="mt-10 flex flex-wrap justify-center gap-3">{['X','TELEGRAM','COMMUNITY'].map(x => <button disabled className="btn cursor-not-allowed border-white/10 text-white/40" key={x}>{x} / COMING SOON</button>)}</div></div></section>

    <footer className="border-t border-white/10 py-12"><div className="container grid gap-10 md:grid-cols-[1fr_2fr]"><div><div className="text-xs tracking-[.25em]">✦ GXD UNIVERSE</div><div className="display mt-5 text-3xl">GOD <span className="gold">&amp;</span> DEVIL</div><p className="mt-4 text-xs tracking-[.3em] gold">BUILD. RISK. CHOOSE.</p></div><div className="flex flex-wrap gap-x-6 gap-y-4 md:justify-end">{links.map(([label,id]) => <button onClick={() => go(id)} className="nav-link" key={id}>{label}</button>)}</div></div><div className="container mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] tracking-[.15em] text-white/35 sm:flex-row"><span>© 2026 GXD UNIVERSE</span><span>BUILT AROUND THE IDEA OF DUALITY.</span></div></footer>
  </main>;
}
