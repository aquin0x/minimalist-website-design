import { useEffect, useRef } from 'react';
import { DESIGN_HTML } from './design';

/**
 * Alperen Sevinç — Personal Portfolio
 * Re-implements the design's vanilla-JS motion layer:
 * scroll reveals, count-ups, heading splits, hero entrance,
 * scroll progress + hero parallax, magnetic buttons, card tilt,
 * smooth-scroll anchors, declarative style-hover interactions,
 * and TR/EN language toggle.
 */
export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const q = <T extends Element = HTMLElement>(sel: string) =>
      Array.from(root.querySelectorAll(sel)) as unknown as T[];

    const timers: number[] = [];
    const observers: IntersectionObserver[] = [];
    let raf = 0;

    // --- TR/EN language toggle ---
    const portfolioRoot = root.querySelector<HTMLElement>('#portfolio-root');
    const langToggle = root.querySelector<HTMLButtonElement>('#lang-toggle');
    const savedLang = (localStorage.getItem('portfolio-lang') as 'tr' | 'en') || 'tr';

    const applyLang = (lang: 'tr' | 'en') => {
      if (!portfolioRoot) return;
      portfolioRoot.setAttribute('lang', lang);
      q<HTMLElement>('.tr-text').forEach((el) => {
        el.style.display = lang === 'tr' ? '' : 'none';
      });
      q<HTMLElement>('.en-text').forEach((el) => {
        el.style.display = lang === 'en' ? '' : 'none';
      });
      localStorage.setItem('portfolio-lang', lang);
    };

    applyLang(savedLang);

    let currentLang = savedLang;
    if (langToggle) {
      const toggleFn = () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        applyLang(currentLang);
      };
      langToggle.addEventListener('click', toggleFn);
      timers.push(0); // placeholder to track cleanup
      // store cleanup separately
      const originalCleanup = () => langToggle.removeEventListener('click', toggleFn);
      (langToggle as any).__cleanup = originalCleanup;
    }

    // --- count-up numbers ---
    const countUp = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute('data-count') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      const dur = 1400;
      const t0 = performance.now();
      const isInt = target % 1 === 0;
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        const val = target * e;
        el.textContent = (isInt ? Math.round(val) : val.toFixed(1)) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    // --- word-split reveal for headings ---
    const splitHeadings = () => {
      q<HTMLElement>('h2').forEach((h) => {
        if ((h as any).__split || h.children.length > 0) return;
        if (h.parentElement && h.parentElement.closest('[data-reveal]')) return;
        (h as any).__split = 1;
        h.removeAttribute('data-reveal');
        (h as any).__rev = 1;
        const words = (h.textContent || '').split(/(\s+)/);
        h.textContent = '';
        const inners: HTMLElement[] = [];
        words.forEach((w) => {
          if (/^\s*$/.test(w)) {
            h.appendChild(document.createTextNode(w));
            return;
          }
          const o = document.createElement('span');
          o.style.cssText =
            'display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:0.16em;margin-bottom:-0.16em;';
          const i = document.createElement('span');
          i.style.cssText =
            'display:inline-block;transform:translateY(115%);transition:transform 1s cubic-bezier(.16,1,.3,1);';
          i.textContent = w;
          o.appendChild(i);
          h.appendChild(o);
          inners.push(i);
        });
        const io = new IntersectionObserver(
          (es) => {
            es.forEach((en) => {
              if (en.isIntersecting) {
                inners.forEach((s, k) =>
                  setTimeout(() => {
                    s.style.transform = 'translateY(0)';
                  }, k * 52)
                );
                io.unobserve(h);
              }
            });
          },
          { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
        );
        io.observe(h);
        observers.push(io);
      });
    };

    // --- hero headline entrance ---
    const revealHero = () => {
      q<HTMLElement>('[data-hero-line]').forEach((el) => {
        if ((el as any).__hl) return;
        (el as any).__hl = 1;
        el.style.opacity = '0';
        el.style.transform = 'translateY(110%)';
        el.style.transition = 'opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)';
        const d = parseInt(el.getAttribute('data-hd') || '0', 10);
        const t = window.setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 120 + d);
        timers.push(t);
      });
    };

    // --- generic scroll reveal ---
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
            const t = window.setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'none';
              el.style.clipPath = 'inset(0 0 0% 0)';
            }, delay);
            timers.push(t);
            revealIO.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    observers.push(revealIO);

    const setup = () => {
      splitHeadings();
      q<HTMLElement>('[data-reveal]').forEach((el) => {
        if ((el as any).__rev) return;
        (el as any).__rev = 1;
        el.style.opacity = '0';
        el.style.transform = 'translateY(42px)';
        el.style.clipPath = 'inset(0 0 16% 0)';
        el.style.transition =
          'opacity 1s cubic-bezier(.16,1,.3,1), transform 1.1s cubic-bezier(.16,1,.3,1), clip-path 1.1s cubic-bezier(.16,1,.3,1)';
        revealIO.observe(el);
      });
      q<HTMLElement>('[data-count]').forEach((el) => {
        if ((el as any).__cnt) return;
        (el as any).__cnt = 1;
        const cio = new IntersectionObserver(
          (es) => {
            es.forEach((en) => {
              if (en.isIntersecting) {
                countUp(el);
                cio.unobserve(el);
              }
            });
          },
          { threshold: 0.4 }
        );
        cio.observe(el);
        observers.push(cio);
      });
      revealHero();
    };
    const setupT = window.setTimeout(setup, 60);
    timers.push(setupT);

    // --- scroll progress bar + hero parallax fade ---
    const bar = root.querySelector<HTMLElement>('#scroll-bar');
    const hero = root.querySelector<HTMLElement>('#hero');
    let eased = window.scrollY || 0;
    const render = (y: number, realY: number) => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${(max > 0 ? Math.min(1, realY / max) : 0).toFixed(4)})`;
      if (hero) {
        const vh = window.innerHeight;
        const p = Math.min(1, y / (vh * 0.95));
        hero.style.opacity = String(Math.max(0, 1 - p * 1.05));
        hero.style.transform = `translateY(${(-y * 0.12).toFixed(1)}px) scale(${(1 - p * 0.05).toFixed(3)})`;
      }
    };
    const loop = () => {
      const real = window.scrollY || window.pageYOffset || 0;
      eased += (real - eased) * 0.14;
      if (Math.abs(real - eased) < 0.08) eased = real;
      render(eased, real);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // --- smooth-scroll for in-page anchors ---
    const anchorHandlers: Array<{ el: HTMLElement; fn: (e: Event) => void }> = [];
    q<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const fn = (e: Event) => {
        const t = root.querySelector(id);
        if (!t) return;
        e.preventDefault();
        const top = (t as HTMLElement).getBoundingClientRect().top + (window.scrollY || 0) - 76;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      };
      a.addEventListener('click', fn);
      anchorHandlers.push({ el: a, fn });
    });

    // --- magnetic pull on white (primary) buttons ---
    q<HTMLElement>('a,button').forEach((el) => {
      if (getComputedStyle(el).backgroundColor !== 'rgb(255, 255, 255)') return;
      el.style.willChange = 'transform';
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        el.style.transition = 'transform .12s ease-out';
        el.style.transform = `translate(${(mx * 0.3).toFixed(1)}px,${(my * 0.45).toFixed(1)}px)`;
      });
      el.addEventListener('pointerleave', () => {
        el.style.transition = 'transform .45s cubic-bezier(.16,1,.3,1)';
        el.style.transform = 'translate(0,0)';
      });
    });

    // --- 3D tilt on project cards ---
    q<HTMLElement>('.proj').forEach((el) => {
      el.style.willChange = 'transform';
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transition = 'transform .1s ease-out';
        el.style.transform = `perspective(900px) rotateY(${(px * 6).toFixed(2)}deg) rotateX(${(-py * 6).toFixed(2)}deg) translateY(-6px)`;
      });
      el.addEventListener('pointerleave', () => {
        el.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)';
        el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)';
      });
    });

    // --- declarative style-hover attributes from the design ---
    q<HTMLElement>('[style-hover]').forEach((el) => {
      const decls = (el.getAttribute('style-hover') || '')
        .split(';')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => {
          const i = s.indexOf(':');
          return [s.slice(0, i).trim(), s.slice(i + 1).trim()] as [string, string];
        });
      let prev: Record<string, string> = {};
      el.addEventListener('pointerenter', () => {
        prev = {};
        decls.forEach(([p, v]) => {
          prev[p] = el.style.getPropertyValue(p);
          el.style.setProperty(p, v);
        });
      });
      el.addEventListener('pointerleave', () => {
        decls.forEach(([p]) => el.style.setProperty(p, prev[p] || ''));
      });
    });

    return () => {
      timers.forEach((t) => clearTimeout(t));
      if (raf) cancelAnimationFrame(raf);
      observers.forEach((o) => o.disconnect());
      anchorHandlers.forEach(({ el, fn }) => el.removeEventListener('click', fn));
      if (langToggle && (langToggle as any).__cleanup) {
        (langToggle as any).__cleanup();
      }
    };
  }, []);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: DESIGN_HTML }} />;
}

