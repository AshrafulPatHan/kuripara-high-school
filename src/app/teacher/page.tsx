'use client';

import React, {
  useState,
  useRef,
  useEffect,
  MutableRefObject,
  ReactNode,
} from 'react';
import Footer from '@/components/navigation/footer';
import Navbar from '@/components/navigation/navbar';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import "./app.css";

gsap.registerPlugin(Observer);

// const slideImages = new Array(12).fill(
//   'https://i.ibb.co/Lds65XjH/Kamal-sir.jpg'
// );

const slideImages =[
    'https://i.ibb.co/Lds65XjH/Kamal-sir.jpg',
    'https://i.ibb.co/FbcWyYy7/Sahan-sir.jpg',
    'https://i.ibb.co/PJgWhgH/Sahid-sir.jpg',
    'https://i.ibb.co/R4gLTB6w/rosion-sir.jpg',
    'https://i.ibb.co/BKGDTXwc/babul-sir.jpg',
    'https://i.ibb.co/0yX2KFbf/Hojur-sir.jpg',
    'https://i.ibb.co/xS25FRmJ/mosad-sir.jpg',
    'https://i.ibb.co/tPC5WRyZ/sikel-sir.jpg',
    'https://i.ibb.co/0R6X2DGJ/lockdounsir.jpg',
    'https://i.ibb.co/hJ7gJSS3/madum2.jpg',
    'https://i.ibb.co/1t8h2f3S/madum.jpg'
]

const slideTitles = [
  'Cosmic Harmony',
  'Astral Journey',
  'Ethereal Vision',
  'Quantum Field',
  'Celestial Path',
  'Cosmic Whisper',
];

const NEXT = 1;
const PREV = -1;

export default function Teacher() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pendingNav, setPendingNav] = useState<
    { type: 'goto'; index: number } | { type: 'nav'; dir: number } | null
  >(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const dragLinesRef = useRef<HTMLDivElement>(null);

  const total = slideImages.length;

  /** Helper to update slide counter, title, drag lines */
  const updateUI = (next: number, direction: 1 | -1) => {
    updateCounter(next);
    updateTitle(next);
    updateThumbs(next);
    animateSlides(next, direction);
  };

  const updateCounter = (idx: number) => {
    const el = document.querySelector('.current-slide');
    if (el) el.textContent = String(idx + 1).padStart(2, '0');
    const totalEl = document.querySelector('.total-slides');
    if (totalEl) totalEl.textContent = String(total).padStart(2, '0');
  };

  const updateTitle = (idx: number) => {
    const container = document.querySelector('.slide-title-container');
    if (!container) return;

    const old = container.querySelector('.slide-title');
    const newDiv = document.createElement('div');
    newDiv.className = 'slide-title enter-up';
    newDiv.textContent = slideTitles[idx];
    container.append(newDiv);

    if (old) old.classList.add('exit-up');

    void newDiv.offsetWidth;

    setTimeout(() => newDiv.classList.remove('enter-up'), 10);
    setTimeout(() => old?.remove(), 500);
  };

  const updateThumbs = (idx: number) => {
    thumbsRef.current
      ?.querySelectorAll('.slide-thumb')
      .forEach((t, i) =>
        t.classList.toggle('active', i === idx)
      );
  };

  const animateSlides = (next: number, dir: 1 | -1) => {
    if (!slidesRef.current) return;
    setIsAnimating(true);
    const prev = current;
    const timeline = gsap.timeline({
      onStart: () => {
        setNavDisabled(true);
        const s = slidesRef.current!.children[next] as HTMLElement;
        gsap.set(s, { zIndex: 99 });
      },
      onComplete: () => {
        const prevSlide = slidesRef.current!.children[prev] as HTMLElement;
        prevSlide.classList.remove('slide--current');
        const newSlide = slidesRef.current!.children[next] as HTMLElement;
        gsap.set(newSlide, { zIndex: 1 });
        setCurrent(next);
        setIsAnimating(false);
        setNavDisabled(false);
        if (pendingNav) handlePending();
      },
    });

    const prevSlide = slidesRef.current.children[prev] as HTMLElement;
    const prevImg = prevSlide.querySelector('.slide__img') as HTMLElement;
    const nextSlide = slidesRef.current.children[next] as HTMLElement;
    const nextImg = nextSlide.querySelector('.slide__img') as HTMLElement;

    nextSlide.classList.add('slide--current');

    timeline
      .fromTo(
        nextSlide,
        {
          autoAlpha: 1,
          scale: 0.1,
          yPercent: dir === NEXT ? 100 : -100,
        },
        { duration: 0.7, ease: 'expo', scale: 0.4, yPercent: 0 },
        0
      )
      .fromTo(
        nextImg,
        {
          filter: 'contrast(100%) saturate(100%)',
          transformOrigin: '100% 50%',
          scaleY: 4,
        },
        { duration: 0.7, ease: 'expo', scaleY: 1 },
        0
      )
      .fromTo(
        prevImg,
        {
          filter: 'contrast(100%) saturate(100%)',
        },
        {
          duration: 0.7,
          ease: 'expo',
          filter: 'contrast(120%) saturate(140%)',
        },
        0
      )
      .addLabel('middle', 0.6)
      .to(nextSlide, { duration: 1, ease: 'power4.inOut', scale: 1 }, 'middle')
      .to(prevSlide, { duration: 1, ease: 'power4.inOut', scale: 0.98, autoAlpha: 0 }, 'middle');
  };

  const setNavDisabled = (disabled: boolean) => {
    [...document.querySelectorAll('.counter-nav'), ...Array.from(thumbsRef.current?.querySelectorAll('.slide-thumb') || [])].forEach(
      el => {
        (el as HTMLElement).style.opacity = disabled ? '0.3' : '';
        (el as HTMLElement).style.pointerEvents = disabled ? 'none' : '';
      }
    );
  };

  const handlePending = () => {
    if (!pendingNav) return;
    const nav = pendingNav;
    setPendingNav(null);
    setTimeout(() => {
      if (nav.type === 'goto') navigateTo(nav.index);
      else navigate(nav.dir);
    }, 50);
  };

  const navigate = (dir: 1 | -1) => {
    if (isAnimating) {
      setPendingNav({ type: 'nav', dir });
      return;
    }
    const next = dir === NEXT ? (current + 1) % total : (current - 1 + total) % total;
    updateUI(next, dir);
  };

  const navigateTo = (idx: number) => {
    if (isAnimating) {
      setPendingNav({ type: 'goto', index: idx });
      return;
    }
    const dir = idx > current ? NEXT : PREV;
    updateUI(idx, dir as 1 | -1);
  };

  useEffect(() => {
    // wheel and touch observers
    Observer.create({ type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      tolerance: 10,
      onDown: () => !isAnimating && navigate(PREV),
      onUp: () => !isAnimating && navigate(NEXT),
    });

    // keydown
    const handleKey = (e: KeyboardEvent) => {
      if (isAnimating) return;
      if (e.key === 'ArrowRight') navigate(NEXT);
      if (e.key === 'ArrowLeft') navigate(PREV);
    };
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [isAnimating, current]);

  // Initialize counter/title on mount
  useEffect(() => updateCounter(0), []);

  function renderSlides(): ReactNode {
    return slideImages.map((img, idx) => (
      <div key={idx} className={`slide${idx === 0 ? ' slide--current' : ''}`}>
        <div
          className="slide__img"
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
    ));
  }

  function renderThumbs(): ReactNode {
    return slideImages.map((img, idx) => (
      <div
        key={idx}
        className={`slide-thumb${idx === 0 ? ' active' : ''}`}
        style={{ backgroundImage: `url(${img})` }}
        onClick={() => navigateTo(idx)}
      />
    ));
  }

  function renderDragLines(): ReactNode {
    return Array.from({ length: 60 }).map((_, i) => (
      <div key={i} className="drag-line" />
    ));
  }

  return (
    <div>
      <Navbar />
      <div className='body-teacher'>
        <div className="scroll-hint">Scroll or Drag</div>
        <div className="bottom-ui-container">
          <div className="slide-section">Teacher</div>
          <div className="slide-counter">
            <div className="counter-nav prev-slide" onClick={() => navigate(PREV)}>⟪</div>
            <div className="counter-display">
              <span className="current-slide">01</span>
              <span className="counter-divider">0</span>
              <span className="total-slides">06</span>
            </div>
            <div className="counter-nav next-slide" onClick={() => navigate(NEXT)}>⟫</div>
          </div>
          <div className="slide-title-container">
            <div className="slide-title">{slideTitles[0]}</div>
          </div>
          <div className="drag-indicator" ref={dragLinesRef}>
            <div className="lines-container">{renderDragLines()}</div>
          </div>
          <div className="thumbs-container" ref={thumbsRef}>
            <div className="frost-bg" />
            <div className="slide-thumbs">{renderThumbs()}</div>
          </div>
        </div>
        <div className="slides" ref={slidesRef}>
          {renderSlides()}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
