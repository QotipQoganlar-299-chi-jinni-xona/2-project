import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronRight, FiChevronLeft, FiPlus, FiArrowRight, FiChevronDown, FiChevronUp, FiX, FiCheck } from 'react-icons/fi';
import { AiFillApple } from 'react-icons/ai';
import { HelloIllustration } from './mac-art.ibo';
import { lineup, perks, others, quizQuestions, quizResult } from './mac-data.ibo';

const slides = [
  { image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1900&q=90', alt: 'MacBook on a desk', title: 'MacBook. Made to move you.' },
  { image: 'https://images.unsplash.com/photo-1497256636129-1cf6e5c6e1f4?auto=format&fit=crop&w=1900&q=90', alt: 'Creative workspace with a computer', title: 'Big ideas start on Mac.' },
  { image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1900&q=90', alt: 'People working together on computers', title: 'Power through your day.' },
];
const stories = [
  { eyebrow: 'Getting Started', title: 'Easy to use. Easy to love.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85', theme: 'story-green' },
  { eyebrow: 'Performance and Battery Life', title: 'Go fast. Go far.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85', theme: 'story-photo' },
  { eyebrow: 'Mac and iPhone', title: 'Dream team.', image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=900&q=85', theme: 'story-purple' },
  { eyebrow: 'Compatibility', title: 'Mac runs your favorite apps.', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=900&q=85', theme: 'story-apps' },
];

/* Gorizontal karuselni tugmalar bilan aylantirish */
function useTrackNav() {
  const ref = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const frame = window.requestAnimationFrame(update);
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.cancelAnimationFrame(frame); el.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [update]);
  const go = (direction) => ref.current?.scrollBy({ left: direction * ref.current.clientWidth * 0.8, behavior: 'smooth' });
  return { ref, edge, go };
}

function GalleryNav({ nav, className = '' }) {
  return (
    <div className={`gallery-nav ${className}`}>
      <button aria-label="Previous" disabled={nav.edge.start} onClick={() => nav.go(-1)}><FiChevronLeft /></button>
      <button aria-label="Next" disabled={nav.edge.end} onClick={() => nav.go(1)}><FiChevronRight /></button>
    </div>
  );
}

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function MainIbo() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [expandedStory, setExpandedStory] = useState(null);
  const [tab, setTab] = useState('Laptops');
  const [picked, setPicked] = useState({});
  const [modal, setModal] = useState(null);
  const [added, setAdded] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [openPerk, setOpenPerk] = useState(null);
  const [openOther, setOpenOther] = useState(0);
  const storyNav = useTrackNav();
  const perkNav = useTrackNav();
  const isModalOpen = Boolean(modal || quiz);
  useEffect(() => {
    if (!isModalOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') { setModal(null); setQuiz(null); } };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [isModalOpen]);
  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, [paused]);
  const changeSlide = (direction) => setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  const items = lineup[tab];
  const colorOf = (product) => product.colors[picked[product.id] ?? 0];
  const openModal = (product, mode) => { setAdded(false); setModal({ product, mode }); };
  const answer = (option) => setQuiz((current) => ({ step: current.step + 1, answers: [...current.answers, option] }));
  const match = quiz && quiz.step >= quizQuestions.length ? quizResult[quiz.answers[0]][quiz.answers[1]] : null;
  const matchProduct = match ? lineup[match[0]].find((item) => item.id === match[1]) : null;
  const showMatch = () => { setTab(match[0]); setQuiz(null); window.setTimeout(() => goTo('lineup'), 60); };

  return (
    <main id="top" className="mac-main">
      <section className="mac-heading"><h1>Mac</h1><p>If you can dream it,<br />Mac can do it.</p></section>
      <section className="hero-carousel" aria-label="Mac highlights" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {slides.map((slide, index) => <div className={`hero-slide ${index === activeSlide ? 'is-active' : ''}`} key={slide.image} aria-hidden={index !== activeSlide}>
          <img src={slide.image} alt={slide.alt} />
          <div className="hero-slide-caption">{slide.title}</div>
        </div>)}
        <button className="hero-arrow hero-prev" aria-label="Previous slide" onClick={() => changeSlide(-1)}><FiChevronLeft /></button>
        <button className="hero-arrow hero-next" aria-label="Next slide" onClick={() => changeSlide(1)}><FiChevronRight /></button>
        <div className="hero-dots">{slides.map((slide, index) => <button key={slide.image} aria-label={`Go to slide ${index + 1}`} aria-current={index === activeSlide} className={index === activeSlide ? 'active' : ''} onClick={() => setActiveSlide(index)} />)}</div>
      </section>
      <section className="know-section" id="explore">
        <div className="section-title-row"><h2>Get to know Mac.</h2><a href="#stories">Explore all Mac features <FiArrowRight /></a></div>
        <div className="story-track" id="stories" ref={storyNav.ref}>
          {stories.map((story, index) => <article className={`story-card ${story.theme}`} key={story.title}>
            <img src={story.image} alt="" loading="lazy" />
            <div className="story-copy"><span>{story.eyebrow}</span><h3>{story.title}</h3></div>
            <button className="story-plus" aria-label={`Learn more: ${story.title}`} onClick={() => setExpandedStory(expandedStory === index ? null : index)}><FiPlus /></button>
            {expandedStory === index && <div className="story-detail"><p>{story.title} Discover what makes Mac a great tool for everything you do.</p><button onClick={() => setExpandedStory(null)}>Close</button></div>}
          </article>)}
        </div>
        <GalleryNav nav={storyNav} className="only-desktop" />
        <div className="scroll-hint">Scroll to explore <span>→</span></div>
      </section>

      <section className="help-section" id="help">
        <h2 className="block-title">Help me choose.</h2>
        <div className="help-card">
          <div className="help-copy">
            <h3>Answer a few questions to find the best Mac for you.</h3>
            <button className="pill-btn" onClick={() => setQuiz({ step: 0, answers: [] })}>Get started</button>
          </div>
          <div className="help-art"><HelloIllustration /></div>
        </div>
      </section>

      <section className="band band-light" id="lineup">
        <div className="section-title-row lineup-head">
          <h2 className="block-title">Explore the lineup.</h2>
          <div className="head-links">
            <a href="#help" onClick={(e) => { e.preventDefault(); goTo('help'); }}>Help me choose <FiChevronRight /></a>
            <a href="#lineup" onClick={(e) => { e.preventDefault(); goTo('lineup'); }}>Compare all models <FiChevronRight /></a>
          </div>
        </div>
        <div className="lineup-tabs" role="tablist" aria-label="Mac lineup">
          {Object.keys(lineup).map((name) => <button key={name} role="tab" aria-selected={tab === name} className={tab === name ? 'active' : ''} onClick={() => setTab(name)}>{name}</button>)}
        </div>
        <div className="lineup-scroll">
          <div className="lineup-grid" key={tab} style={{ '--cols': Math.max(items.length, 3), '--n': items.length }}>
            {items.map((product) => {
              const color = colorOf(product);
              return (
                <article className="lineup-item" key={product.id}>
                  <div className="lineup-art">{product.art(color.hex)}</div>
                  <div className="lineup-dots">
                    {product.colors.length > 1 && product.colors.map((c, index) => <button key={c.name} aria-label={c.name} aria-pressed={(picked[product.id] ?? 0) === index} className={(picked[product.id] ?? 0) === index ? 'active' : ''} style={{ background: c.hex }} onClick={() => setPicked((current) => ({ ...current, [product.id]: index }))} />)}
                  </div>
                  <div className="lineup-info">
                    <span className="new-label">{product.label}</span>
                    <h3>{product.name}</h3>
                    <strong>{product.chip}</strong>
                    <p className="desc">{product.desc}</p>
                    <p className="price">{product.price}<u>**</u></p>
                  </div>
                  <div className="lineup-actions">
                    <button className="pill-btn" onClick={() => openModal(product, 'learn')}>Learn more</button>
                    <button className="text-link" onClick={() => openModal(product, 'buy')}>Buy <FiChevronRight /></button>
                  </div>
                  {product.specs.map((spec, index) => (
                    <div className={`spec ${index === 0 ? 'spec-first' : ''}`} key={index}>
                      {spec.top && <small className="spec-top">{spec.top}</small>}
                      {spec.type === 'chips'
                        ? <div className="chips">{spec.chips.map((chip) => <span className="chip-badge" key={chip}><AiFillApple /><b>{chip}</b></span>)}</div>
                        : <h4>{spec.big}</h4>}
                      <p>{spec.small}</p>
                    </div>
                  ))}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="band band-gray">
        <div className="section-title-row">
          <h2 className="block-title">Why Apple is the best<br />place to buy Mac.</h2>
          <a href="#lineup" onClick={(e) => { e.preventDefault(); goTo('lineup'); }}>Shop Mac <FiChevronRight /></a>
        </div>
        <div className="perk-track" ref={perkNav.ref}>
          {perks.map((perk, index) => (
            <article className={`perk-card ${openPerk === index ? 'is-open' : ''}`} key={perk.title}>
              <span className="perk-icon">{perk.icon}</span>
              <h3>{perk.title}</h3>
              <p>{perk.text}</p>
              {openPerk === index && <p className="perk-more">{perk.more}</p>}
              <button className="story-plus perk-plus" aria-expanded={openPerk === index} aria-label={`Learn more: ${perk.title}`} onClick={() => setOpenPerk(openPerk === index ? null : index)}><FiPlus /></button>
            </article>
          ))}
        </div>
        <GalleryNav nav={perkNav} />
      </section>

      <section className="others-section">
        <h2 className="block-title">Significant others.</h2>
        <div className="others-card">
          <div className="others-list">
            {others.map((item, index) => (
              <div className={`other-item ${openOther === index ? 'is-open' : ''}`} key={item.id}>
                <button className="other-head" aria-expanded={openOther === index} onClick={() => setOpenOther(index)}>
                  <span>{item.title}</span>{openOther === index ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {openOther === index && <p>{item.text}</p>}
              </div>
            ))}
          </div>
          <div className="others-art" key={others[openOther].id}>{others[openOther].art}</div>
        </div>
      </section>

      {modal && (
        <div className="ibo-modal" role="dialog" aria-modal="true" aria-label={modal.product.name} onClick={() => setModal(null)}>
          <div className="ibo-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="ibo-modal-close" aria-label="Close" onClick={() => setModal(null)}><FiX /></button>
            <div className="ibo-modal-art">{modal.product.art(colorOf(modal.product).hex)}</div>
            <h3>{modal.product.name}</h3>
            <strong>{modal.product.chip}</strong>
            <p className="modal-price">{modal.product.price}<u>**</u></p>
            {modal.mode === 'learn' ? (
              <>
                <p>{modal.product.desc}</p>
                <ul className="modal-specs">
                  {modal.product.specs.map((spec, index) => <li key={index}><b>{spec.top ? `${spec.top} ` : ''}{spec.big ?? spec.chips.join(', ')}</b><span>{spec.small}</span></li>)}
                </ul>
                <div className="modal-actions"><button className="pill-btn" onClick={() => openModal(modal.product, 'buy')}>Buy</button><button className="text-link" onClick={() => setModal(null)}>Close</button></div>
              </>
            ) : (
              <>
                <p className="modal-color">Color: <b>{colorOf(modal.product).name}</b></p>
                <div className="modal-colors">
                  {modal.product.colors.map((c, index) => <button key={c.name} aria-label={c.name} className={(picked[modal.product.id] ?? 0) === index ? 'active' : ''} style={{ background: c.hex }} onClick={() => setPicked((current) => ({ ...current, [modal.product.id]: index }))} />)}
                </div>
                <div className="modal-actions">
                  <button className={`pill-btn ${added ? 'is-done' : ''}`} onClick={() => setAdded(true)}>{added ? <><FiCheck /> Added to Bag</> : 'Add to Bag'}</button>
                  <button className="text-link" onClick={() => openModal(modal.product, 'learn')}>Details <FiChevronRight /></button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {quiz && (
        <div className="ibo-modal" role="dialog" aria-modal="true" aria-label="Help me choose" onClick={() => setQuiz(null)}>
          <div className="ibo-modal-box quiz-box" onClick={(e) => e.stopPropagation()}>
            <button className="ibo-modal-close" aria-label="Close" onClick={() => setQuiz(null)}><FiX /></button>
            {!matchProduct ? (
              <>
                <small className="quiz-step">Question {quiz.step + 1} of {quizQuestions.length}</small>
                <h3>{quizQuestions[quiz.step].q}</h3>
                <div className="quiz-options">
                  {quizQuestions[quiz.step].options.map((option) => <button key={option} className="quiz-option" onClick={() => answer(option)}>{option}<FiChevronRight /></button>)}
                </div>
              </>
            ) : (
              <>
                <small className="quiz-step">Your best match</small>
                <div className="ibo-modal-art">{matchProduct.art(matchProduct.colors[0].hex)}</div>
                <h3>{matchProduct.name}</h3>
                <p>{matchProduct.desc}</p>
                <p className="modal-price">{matchProduct.price}<u>**</u></p>
                <div className="modal-actions">
                  <button className="pill-btn" onClick={showMatch}>See in the lineup</button>
                  <button className="text-link" onClick={() => setQuiz({ step: 0, answers: [] })}>Start over</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
