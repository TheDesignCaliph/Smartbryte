const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Sparkle = ({ className = '' }: { className?: string }) => (
  <svg className={className} aria-hidden="true" viewBox="0 0 32 32" fill="none">
    <path d="M16 1.5c1.7 8.7 5.8 12.8 14.5 14.5C21.8 17.7 17.7 21.8 16 30.5 14.3 21.8 10.2 17.7 1.5 16 10.2 14.3 14.3 10.2 16 1.5Z" fill="currentColor" />
  </svg>
);

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 640 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M111 108C169 42 285 39 379 65c95 26 181 88 190 181 9 91-41 204-122 260-81 56-202 64-285 20-83-43-125-144-113-229 10-71-4-118 62-189Z"
          fill="#B5D600"
          fillOpacity=".22"
        />
        <path d="M85 178c-34 57-39 132-12 189" stroke="#183A32" strokeOpacity=".32" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 11" />
        <path d="M495 403c32-28 51-70 55-111" stroke="#183A32" strokeOpacity=".32" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 11" />

        <circle cx="531" cy="104" r="55" fill="#FFD45D" />
        <path d="m531 73 8 22 23 9-23 8-8 23-9-23-23-8 23-9 9-22Z" fill="#183A32" />

        <g className="hero-art__float hero-art__float--one">
          <rect x="55" y="220" width="102" height="124" rx="29" transform="rotate(-12 55 220)" fill="#7652E8" />
          <path d="m94 253 7 20 20 7-20 7-7 20-7-20-20-7 20-7 7-20Z" fill="white" />
          <circle cx="115" cy="315" r="5" fill="#FFD45D" />
        </g>

        <g className="hero-art__board">
          <rect x="116" y="104" width="410" height="394" rx="43" transform="rotate(-4 116 104)" fill="white" />

          <rect x="165" y="143" width="310" height="231" rx="26" fill="#183A32" />
          <rect x="181" y="159" width="278" height="191" rx="14" fill="#F5F1E7" />
          <circle cx="320" cy="151" r="2.5" fill="#F5F1E7" />

          <path d="M227 206c34-35 101-48 148-19 29 18 42 53 32 83" stroke="#1CB0F6" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 10" />
          <circle cx="227" cy="206" r="8" fill="#1CB0F6" />
          <circle cx="405" cy="273" r="8" fill="#7652E8" />
          <path d="m320 179 8.5 24 24 8.5-24 8.5-8.5 24-8.5-24-24-8.5 24-8.5 8.5-24Z" fill="#FFD45D" />
          <path d="m320 190 5.8 16.2 16.2 5.8-16.2 5.8-5.8 16.2-5.8-16.2-16.2-5.8 16.2-5.8 5.8-16.2Z" fill="#B5D600" />

          <path d="M318 268c-25-18-58-23-91-14v67c34-9 67-3 91 15V268Z" fill="white" stroke="#183A32" strokeWidth="5" strokeLinejoin="round" />
          <path d="M322 268c25-18 58-23 91-14v67c-34-9-67-3-91 15V268Z" fill="white" stroke="#183A32" strokeWidth="5" strokeLinejoin="round" />
          <path d="M320 269v65" stroke="#183A32" strokeWidth="5" strokeLinecap="round" />
          <path d="M244 274c18-3 35 0 51 8M244 291c18-3 35 0 51 8M345 282c16-8 33-11 51-8M345 299c16-8 33-11 51-8" stroke="#B5D600" strokeWidth="4" strokeLinecap="round" />

          <path d="M140 374h360l-34 39c-5 6-13 9-21 9H195c-8 0-16-3-21-9l-34-39Z" fill="white" stroke="#183A32" strokeWidth="7" strokeLinejoin="round" />
          <path d="M287 389h66" stroke="#183A32" strokeWidth="6" strokeLinecap="round" />

          <path d="M184 452c28 12 61 17 92 15" stroke="#7652E8" strokeWidth="5" strokeLinecap="round" />
          <circle cx="294" cy="465" r="5" fill="#7652E8" />
        </g>

        <g className="hero-art__float hero-art__float--two">
          <rect x="484" y="294" width="98" height="116" rx="28" transform="rotate(11 484 294)" fill="#FFD45D" />
          <rect x="510" y="323" width="19" height="19" rx="5" transform="rotate(11 510 323)" fill="#183A32" />
          <rect x="537" y="327" width="19" height="19" rx="9.5" transform="rotate(11 537 327)" fill="#7652E8" />
          <path d="m518 367 14-14 14 14 14-14" stroke="#183A32" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g className="hero-art__float hero-art__float--three">
          <circle cx="106" cy="422" r="38" fill="#1CB0F6" />
          <path d="M106 401v42M85 422h42M91 407l30 30M121 407l-30 30" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </g>

        <path d="m463 69 5 14 14 5-14 5-5 14-5-14-14-5 14-5 5-14Z" fill="#7652E8" />
        <circle cx="553" cy="465" r="9" fill="#B5D600" />
        <circle cx="578" cy="443" r="5" fill="#183A32" />
      </svg>
    </div>
  );
}

function IntroductionArtwork() {
  return (
    <div className="introduction-art" aria-hidden="true">
      <svg viewBox="0 0 540 610" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="516" height="586" rx="54" fill="#F5F1E7" />
        <path d="M347 12h127c31 0 54 23 54 54v135c-59-7-115-43-150-91-20-28-31-61-31-98Z" fill="#7652E8" fillOpacity=".13" />
        <path d="M12 426c59 4 108 32 139 77 20 29 30 62 31 95H66c-30 0-54-24-54-54V426Z" fill="#B5D600" fillOpacity=".2" />

        <g opacity=".45" fill="#183A32">
          <circle cx="62" cy="89" r="2.5" /><circle cx="82" cy="89" r="2.5" /><circle cx="102" cy="89" r="2.5" />
          <circle cx="62" cy="109" r="2.5" /><circle cx="82" cy="109" r="2.5" /><circle cx="102" cy="109" r="2.5" />
          <circle cx="62" cy="129" r="2.5" /><circle cx="82" cy="129" r="2.5" /><circle cx="102" cy="129" r="2.5" />
        </g>

        <path d="M105 418c-20-108 23-230 121-285 79-44 164-26 209 29" stroke="#183A32" strokeOpacity=".28" strokeWidth="2" strokeDasharray="2 11" strokeLinecap="round" />
        <circle cx="105" cy="418" r="8" fill="#1CB0F6" />
        <circle cx="433" cy="163" r="8" fill="#B5D600" />

        <g className="introduction-art__card">
          <rect x="89" y="102" width="362" height="406" rx="40" fill="white" />
          <rect x="126" y="139" width="288" height="332" rx="29" fill="#F5F1E7" />

          <circle cx="270" cy="229" r="68" fill="#FFD45D" />
          <path d="m270 167 9.5 27 27 9.5-27 9.5-9.5 27-9.5-27-27-9.5 27-9.5 9.5-27Z" fill="#183A32" />
          <path d="m270 181 6.8 19.2 19.2 6.8-19.2 6.8-6.8 19.2-6.8-19.2-19.2-6.8 19.2-6.8 6.8-19.2Z" fill="#F5F1E7" />

          <path d="M156 369a48 48 0 0 1 96 0v62h-96v-62Z" fill="#B5D600" />
          <path d="M173 369a31 31 0 0 1 62 0v62h-62v-62Z" fill="#F5F1E7" />
          <rect x="251" y="321" width="110" height="110" rx="25" fill="#7652E8" />
          <circle cx="306" cy="376" r="28" fill="white" />
          <path d="m306 354 6.4 15.6L328 376l-15.6 6.4L306 398l-6.4-15.6L284 376l15.6-6.4 6.4-15.6Z" fill="#183A32" />

          <path d="M143 431h254" stroke="#183A32" strokeWidth="7" strokeLinecap="round" />
          <path d="m147 302 18-18 18 18 18-18" stroke="#1CB0F6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="380" cy="280" r="12" fill="#1CB0F6" />
          <circle cx="384" cy="250" r="5" fill="#183A32" />
        </g>

        <g className="introduction-art__sticker">
          <path d="M59 233c0-18 15-33 33-33h52v66H92c-18 0-33-15-33-33Z" fill="#1CB0F6" />
          <path d="M86 233h34M103 216v34" stroke="white" strokeWidth="5" strokeLinecap="round" />
        </g>

        <g className="introduction-art__sticker introduction-art__sticker--two">
          <rect x="401" y="368" width="91" height="91" rx="26" transform="rotate(10 401 368)" fill="#B5D600" />
          <path d="m439 390 6 16 16 6-16 6-6 16-6-16-16-6 16-6 6-16Z" fill="#183A32" />
        </g>

        <path d="M421 535c17-12 36-12 53 0M427 552c13-8 27-8 40 0" stroke="#7652E8" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="hero-surface">
        <header className="site-header page-shell">
          <div className="wordmark">SmartBryte</div>
          <button className="button button--header" type="button">
            Apply Now
            <ArrowUpRight />
          </button>
        </header>

        <main>
          <section className="hero page-shell" aria-labelledby="hero-title">
            <div className="hero__copy">
              <h1 id="hero-title">
                Turn Your Child Into a{' '}
                <span className="hero__highlight">
                  Future-Ready
                  <svg className="hero__underline" aria-hidden="true" viewBox="0 0 340 18" preserveAspectRatio="none">
                    <path d="M4 12C83 3 226 2 336 8" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </span>{' '}
                Genius.
              </h1>
              <p className="hero__description">
                Give your child the knowledge and skills to excel in school, understand technology, solve problems and create opportunities in the world ahead.
              </p>
              <div className="hero__actions">
                <button className="button button--primary" type="button">
                  Explore Our Programmes
                  <ArrowUpRight />
                </button>
                <button className="button button--secondary" type="button">
                  Apply Now
                  <ArrowUpRight />
                </button>
              </div>
              <p className="hero__age">
                <span className="hero__age-icon" aria-hidden="true">
                  <Sparkle />
                </span>
                For learners aged 7–22.
              </p>
            </div>
            <HeroArtwork />
          </section>

          <section className="introduction page-shell" aria-labelledby="introduction-title">
            <h2 id="introduction-title">Education should prepare children for more than examinations.</h2>
            <IntroductionArtwork />
            <div className="introduction__content">
              <p>
                The world is changing, and the knowledge and skills that young people need to succeed are changing with it. Gone are the days when good grades alone were enough to make a young person ready for the world of work. Today, especially in the age of AI, children need to know how to use technology, think through problems, develop ideas and turn what they know into something the world values.
              </p>
              <p className="introduction__emphasis">That's what SmartBryte brings to your child's education.</p>
              <p>
                Alongside their regular academic learning, our students explore technology, learn how to use AI, develop practical digital skills and work on projects that help them put their knowledge to use. They get to discover their interests, build confidence in their abilities and develop skills that can open doors to future opportunities.
              </p>
            </div>
          </section>
        </main>
      </div>

      <footer className="site-footer">
        <div className="site-footer__inner page-shell">
          <div className="wordmark">SmartBryte</div>
          <div className="site-footer__shapes" aria-hidden="true">
            <span />
            <Sparkle />
            <span />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
