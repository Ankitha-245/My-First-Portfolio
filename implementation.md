# Implementation Specification: Ankitha — Professional Portfolio Website

**Document Version:** 1.0.0  
**Project:** Ankitha — AI & Machine Learning Student Portfolio  
**Author:** Antigravity Senior Engineering & Design Team  
**Primary Source of Truth:** `Ankitha.pdf` (Verified Resume)  
**Status:** Approved for Implementation  

---

## 1. Project Overview & Objectives

### 1.1 Purpose
The purpose of this portfolio website is to present a modern, highly polished, and developer-focused digital presence for **Ankitha**, an undergraduate student specializing in Artificial Intelligence and Machine Learning at A J Institute of Engineering and Technology, Mangaluru.

### 1.2 Target Audience
- Technical recruiters, engineering hiring managers, and internship coordinators seeking high-potential candidates in AI, Machine Learning, and Data Science.
- Academic mentors, research collaborators, and peer developers.
- Industry professionals looking for motivated student developers with rigorous foundational knowledge.

### 1.3 Professional Impression & Goals
- **Authenticity & Integrity:** Every single detail (education scores, internship responsibilities, project scope, certifications, and contact channels) strictly mirrors the verified source of truth (`Ankitha.pdf`). No invented metrics, exaggerated claims, or placeholder links.
- **Modern Engineering Excellence:** Demonstrates clean architecture, typed data models, modular components, responsive layouts, fast rendering, and accessible web standards.
- **Visual Sophistication:** Conveys technical depth through a sleek dark aesthetic, electric violet and cyan accents, clean typography, tasteful glassmorphic cards, and subtle micro-interactions without noisy clutter or generic templates.

---

## 2. Profile and Resume Content (Verified Source of Truth)

All data points below are extracted directly from `Ankitha.pdf`:

### 2.1 Personal & Contact Details
- **Full Name:** Ankitha
- **Professional Title / Role:** AI & Machine Learning Student
- **Tagline:** Exploring AI, data, and technology — one project at a time.
- **Email:** `ankithaashoknagar02@gmail.com`
- **Phone:** `+91 8904316101`
- **Location:** Mangaluru, Karnataka, India
- **LinkedIn Profile:** `https://www.linkedin.com/in/ankitha-ashoknagar-62a36840b`
- **GitHub Profile:** `https://github.com/Ankitha-245`
- **Resume Document:** `Ankitha.pdf` (available in `/public/Ankitha.pdf`)

### 2.2 Career Objective / Professional Narrative
> *"Enthusiastic and motivated Artificial Intelligence and Machine Learning undergraduate student who is at the beginning of my technical journey. Interested in software development, data analysis, databases, algorithms and problem solving. Eager to learn new skills, work on practical projects, and gain real-world experience. A curious learner with a positive attitude and willingness to improve."*

### 2.3 Education History
1. **Bachelor of Engineering (B.E.) in Artificial Intelligence & Machine Learning**
   - **Institution:** A J Institute of Engineering and Technology, Mangaluru, Karnataka, India
   - **Expected Graduation:** 2027
   - **Academic Performance:** CGPA: 8.38 / 10
2. **Pre-University Course (PCMC — Physics, Chemistry, Mathematics, Computer Science)**
   - **Institution:** St. Aloysius PU College, Kodialbail, Mangaluru, Karnataka, India
   - **Academic Performance:** Percentage: 91.67%
3. **Secondary School Leaving Certificate (SSLC)**
   - **Institution:** Ladyhill Victoria Girls High School, Urwa, Mangaluru, Karnataka, India
   - **Board:** Karnataka State Board
   - **Academic Performance:** Percentage: 95.04%

### 2.4 Technical Skills
- **Programming Languages:** Python, Java (Basics), C, C++
- **Web Technologies:** HTML (Advanced), CSS
- **Data & Analysis Tools:** SQL, Pandas, NumPy, Matplotlib, Seaborn, Google Colab
- **Machine Learning (Applied):** Scikit-learn, Data Preprocessing, Exploratory Data Analysis (EDA), Regression Techniques

*(Note: Proficiency percentages are strictly omitted to maintain authenticity).*

### 2.5 Internship Experience
- **Company:** Thiranex
- **Role:** Data Science Intern
- **Duration:** August 2026 – September 2026
- **Location:** Mangaluru, Karnataka, India
- **Verified Responsibilities:**
  - Worked on exploratory data analysis (EDA) and data preprocessing.
  - Performed data cleaning, visualization, and analysis using Python.
  - Created visualizations to identify patterns and generate insights.
  - Documented project methodology and results.

### 2.6 Projects
1. **Supermarket Sales Analysis**
   - **Domain:** Data Analytics & Exploratory Data Analysis (EDA)
   - **Technologies:** Python, Pandas, NumPy, Matplotlib, Seaborn, Google Colab
   - **Verified Description:** Analyzed supermarket sales data to identify trends and meaningful business insights. Handled missing values, duplicates, text, dates, and outliers. Conducted exploratory data analysis, created graphs and visualizations, and prepared reports summarizing key findings.
2. **Used Car Price Prediction**
   - **Domain:** Machine Learning Regression
   - **Technologies:** Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Google Colab
   - **Verified Description:** Developed a machine learning model to predict used-car prices based on relevant vehicle features. Performed data preprocessing, cleaning, and exploratory data analysis. Applied regression techniques and evaluated model performance. Created visualizations to understand relationships between car features and prices.

### 2.7 Certifications (7 Completed Courses)
1. **Python Fundamentals** — Infosys Springboard
2. **Python Data Structures and Algorithms** — Infosys Springboard
3. **HTML – Advanced** — Infosys Springboard
4. **Artificial Intelligence for All** — Infosys Springboard
5. **Introduction to MS Excel** — Microsoft / Simplilearn
6. **Introduction to Gen AI Studio** — Google Cloud / Simplilearn
7. **Data Essentials with Python** — Cisco Networking Academy

### 2.8 Languages
- **English:** Fluent (Professional & Technical Communication)
- **Kannada:** Fluent (Regional Communication)
- **Hindi:** Fluent (National & Conversational Fluency)
- **Tulu:** Native (Mother Tongue)

---

## 3. Website Information Architecture

The website is architected as an interactive single-page application with smooth section scrolling, sticky header navigation, modal dialogs, and a clean footer.

### Order of Sections
1. **Header / Navbar:** Sticky bar with animated monogram logo, desktop navigation anchors, "Resume" action, "Let's Connect" action, and mobile hamburger drawer.
2. **Hero Section (`#home`):**
   - Name: `ANKITHA`
   - Headline: `"AI & Machine Learning Student"`
   - Supporting Line: `"Exploring AI, data, and technology — one project at a time."`
   - Short professional introduction.
   - Action buttons: "Explore My Work", "Get In Touch", "View Resume".
   - Direct social icon links: GitHub, LinkedIn, Email.
   - Abstract AI/neural nodes generative SVG visual (no fake photos).
3. **About Me Section (`#about`):**
   - Background narrative covering engineering enthusiasm, algorithms, data analysis, and problem-solving.
   - 4 focus pillar cards: AI & Machine Learning, Data Analysis, Problem-Solving, Continuous Learning.
   - Academic metadata badges: Institution, Degree, Expected Graduation (2027), Location.
4. **Education Section (`#education`):**
   - Elegant interactive timeline featuring AJIET (CGPA 8.38/10), St. Aloysius PU College (91.67%), and Ladyhill Victoria Girls High School (95.04%).
   - Explicit percentage and CGPA displays with subject focus notes.
5. **Technical Skills Section (`#skills`):**
   - Categorized card grid:
     1. Programming Languages (Python, Java basics, C, C++)
     2. Web Technologies (HTML, CSS)
     3. Data & Analysis Tools (SQL, Pandas, NumPy, Matplotlib, Seaborn, Google Colab)
     4. Machine Learning (Scikit-learn, Data Preprocessing, EDA, Regression Techniques)
   - Verified technology badges with applied context descriptions.
6. **Internship Experience Section (`#experience`):**
   - Dedicated card for Thiranex (August 2026 – September 2026).
   - Clear badge indicators for role, duration, and location.
   - Bulleted breakdown of verified responsibilities in data cleaning, visualization, and documentation.
   - Applied tool stack badges.
7. **Projects Section (`#projects`):**
   - 2 comprehensive project cards (Supermarket Sales Analysis, Used Car Price Prediction).
   - Themed vector visuals for EDA trend analysis and regression modeling.
   - Technology badges and status pill ("Completed Academic Project").
   - Interactive "View Details" trigger opening a rich modal dialog with Objective, Methodology, Tech Stack, and Key Learnings.
8. **Certifications Section (`#certifications`):**
   - Card grid for all 7 verified certifications.
   - Issuer badges (Infosys Springboard, Microsoft / Simplilearn, Google Cloud / Simplilearn, Cisco Networking Academy).
   - Interactive filter buttons to filter by course provider or view all.
9. **Languages Section (`#languages`):**
   - Grid cards for English (Fluent), Kannada (Fluent), Hindi (Fluent), and Tulu (Native).
   - Clean badges highlighting communication domains.
10. **Contact Section (`#contact`):**
    - Two-column split:
      - Left: Direct contact cards (Email, Phone, Location) with 1-click clipboard copy buttons, plus direct LinkedIn and GitHub links.
      - Right: Contact message form with client-side field validation and transparent `mailto:` dispatch (honestly pre-filling the user's email client, with no deceptive simulated database success).
11. **Footer:**
    - Monogram logo, copyright notice, quick anchor links, social links, and a "Back to Top" trigger.
12. **Modals & Overlays:**
    - **Resume Modal:** Full interactive resume preview, print/save PDF trigger, copy plain text trigger, and direct download/view of `Ankitha.pdf`.
    - **Project Details Modal:** Comprehensive deep-dive on project objectives, step-by-step methodology, tech stack, and key takeaways.
    - **Floating Back to Top Button:** Smooth scroll indicator when scrolled down.

---

## 4. UI/UX Design System

### 4.1 Color Palette
- **Background Deep Charcoal:** `#0B0D13` (Main Canvas), `#121522` (Card Surface), `#161B2E` (Card Hover / Accent Surface)
- **Primary Text:** `#FFFFFF` (Headlines), `#F3F4F6` (Body High Contrast), `#9CA3AF` (Muted / Subtitles)
- **Electric Violet Accent:** `#8B5CF6` (Base), `#7C3AED` (Deep), `#A78BFA` (Light / Gradient stop)
- **Cyan Accent:** `#06B6D4` (Base), `#22D3EE` (Light Glow), `#0891B2` (Dark)
- **Status & Badges:** `#10B981` (Emerald / Availability & Verification), `#F43F5E` (Error)
- **Borders & Dividers:** `rgba(255, 255, 255, 0.08)` default, `rgba(139, 92, 246, 0.35)` on hover

### 4.2 Typography
- **Display Font:** `'Space Grotesk'`, sans-serif (Headings, titles, numbers, monograms)
- **Body Font:** `'Inter'`, system-ui, sans-serif (Clean legibility, paragraph text, buttons)
- **Code & Metadata:** `ui-monospace`, monospace (Badges, dates, file extensions)

### 4.3 Spacing & Rhythm
- Strict 8-point spacing grid (`p-2`, `p-4`, `p-6`, `p-8`, `p-12`, `py-24`).
- Section padding: 6rem (96px) on desktop, 4rem (64px) on mobile.
- Max container width: `7xl` (`1280px`) with responsive horizontal gutters (`px-4 sm:px-6 lg:px-8`).

### 4.4 Elevation & Cards
- Glassmorphic translucent surfaces (`backdrop-blur-md bg-[#121522]/85`).
- Fine 1px border styling with subtle ambient box shadows (`shadow-xl shadow-black/40`).
- Interactive hover effects: slight elevation lift (`-translate-y-1`), border illumination (`border-violet-500/40`), and radial ambient glow.

### 4.5 Motion Principles
- Subdued, purposeful transitions (200ms–300ms cubic-bezier).
- No distracting bouncy elements; respects `prefers-reduced-motion`.
- Micro-interactions on buttons, tags, copy triggers, and timeline nodes.

---

## 5. Technology Stack & Dependencies

- **Runtime & Bundler:** Vite 8+
- **Core Library:** React 19+
- **Language:** TypeScript 5.8+ (Strict mode, `verbatimModuleSyntax: true`)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`, `@import "tailwindcss";`)
- **Icons:** Custom SVG components for reliable brand icons (GitHub, LinkedIn) and Lucide React for UI glyphs.
- **Micro-effects:** Canvas Confetti (contact action feedback).

---

## 6. Component Architecture & Props Specification

```
src/
├── components/
│   ├── Navbar.tsx           # Sticky navigation, active anchor tracking, mobile drawer
│   ├── Hero.tsx             # Intro, headline, abstract AI graphic, action buttons
│   ├── About.tsx            # Background story, 4 focus pillars, quick fact badges
│   ├── Education.tsx        # Responsive alternating timeline for 3 educational milestones
│   ├── Skills.tsx           # 4 skill domain categories with structured items
│   ├── Experience.tsx       # Thiranex internship showcase with verified contributions
│   ├── Projects.tsx         # Academic project cards with thematic visuals
│   ├── ProjectModal.tsx     # Rich modal for project methodology, objective & learnings
│   ├── Certifications.tsx   # Coursework grid with interactive provider filter
│   ├── Languages.tsx        # Language fluency cards
│   ├── Contact.tsx          # Direct contact info, copy actions & validated contact form
│   ├── Footer.tsx           # Monogram, quick navigation, copyright & back-to-top
│   ├── ResumeModal.tsx      # In-app interactive resume viewer & PDF download trigger
│   ├── BackToTop.tsx        # Floating scroll-to-top button
│   └── SocialIcons.tsx      # Clean inline SVG icons for GitHub & LinkedIn
├── data/
│   └── portfolioData.ts     # Centralized, strictly verified resume content
├── types/
│   └── index.ts             # Strict TypeScript interfaces
├── App.tsx                  # Root layout, modal state orchestration
├── main.tsx                 # React DOM mount point
└── index.css                # Tailwind CSS v4 imports, custom utilities, fonts
```

---

## 7. Functional Requirements

1. **Smooth Scrolling & Active Section Highlighting:**
   - Nav links smooth-scroll to `#home`, `#about`, `#education`, `#skills`, `#experience`, `#projects`, `#certifications`, `#contact`.
   - Scroll listener updates the active state in the navbar with 120px offset calculation.
2. **Resume Viewing & Download:**
   - "View Resume" button in hero, navbar, and mobile menu opens the `ResumeModal`.
   - Modal contains a direct link/button to open or download `public/Ankitha.pdf`.
   - "Copy Text" button copies the structured text resume to the clipboard with visual confirmation ("Copied Text!").
   - "Print / Save PDF" triggers native browser print view.
3. **Interactive Project Details:**
   - Clicking "View Details" on any project card opens `ProjectModal` with full objectives, methodology, and key learnings.
   - Modal closes via Escape key, close button, or backdrop click.
4. **Copy Contact Information:**
   - Email (`ankithaashoknagar02@gmail.com`) and phone (`+91 8904316101`) have 1-click copy buttons with state feedback.
5. **Contact Form Validation & Real Dispatch:**
   - Validates required name, valid email address format, and message content.
   - On valid submit, launches confetti and creates an honest pre-filled `mailto:` URL opening the user's default email client.
   - Clearly notifies the user of the client-side dispatch mechanism without deceiving them with fake backend success states.
6. **Provider Filter for Certifications:**
   - Filter pills allow filtering between "All", "Infosys Springboard", "Microsoft / Simplilearn", "Google Cloud / Simplilearn", and "Cisco Networking Academy".

---

## 8. Responsive Design Requirements

- **Mobile Viewports (<640px / 375px):**
  - Single-column stacked layouts.
  - Hamburger drawer for full navigation.
  - Full-width touch-friendly buttons (`min-height: 44px`).
  - Education timeline adapts to single left-aligned vertical rule.
- **Tablet Viewports (640px – 1024px / 768px):**
  - 2-column grids for Skills, Projects, and Certifications.
  - Compact navbar with resume action.
- **Desktop Viewports (>=1024px / 1440px):**
  - Generous 12-column grid arrangements in Hero and About sections.
  - Full pill-style desktop navigation bar.
  - Balanced alternating timeline in Education section.

---

## 9. Accessibility & SEO Guidelines

- **Semantic HTML:** `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` tags.
- **Heading Hierarchy:** Single `<h1>` in Hero, `<h2>` for each section, `<h3>` for cards.
- **ARIA Attributes:** `aria-label` on icon-only buttons, `role="dialog"` and `aria-modal="true"` on modal overlays.
- **Keyboard Navigation:** Full focus trap in modals, `Escape` key close listener, visible focus rings.
- **Color Contrast:** All body text meets WCAG AA standards (>= 4.5:1 ratio against `#0B0D13`).
- **SEO Metadata:** Descriptive `<title>`, meta description, Open Graph tags, canonical link, and responsive viewport settings.

---

## 10. Implementation Roadmap

1. **Phase A — Fix TypeScript & Lucide Dependencies:**
   - Create dedicated clean SVG components for GitHub and LinkedIn to resolve `lucide-react` missing export errors.
   - Correct all `type` imports to `import type { ... }` to satisfy `verbatimModuleSyntax`.
   - Remove any unused variable or icon imports to satisfy `noUnusedLocals`.
2. **Phase B — Resume & Asset Integration:**
   - Verify `Ankitha.pdf` exists in `public/Ankitha.pdf`.
   - Add explicit direct download and new-tab PDF view actions to `ResumeModal` and `Hero`.
3. **Phase C — Visual & Section Polishing:**
   - Ensure the Hero section displays exact name (`ANKITHA`), headline, and supporting line as specified.
   - Ensure About, Education, Skills, Experience, Projects, Certifications, Languages, and Contact sections perfectly adhere to all verified facts.
4. **Phase D — Build Verification:**
   - Run `npm run build` (`tsc -b && vite build`) and confirm 0 errors.
5. **Phase E — Browser & Responsive Testing:**
   - Start the Vite development server.
   - Launch browser testing across 375px, 768px, and 1440px widths.
   - Verify all modal open/close actions, mobile menus, resume triggers, copy actions, and form validations.
6. **Phase F — Documentation & Final Delivery:**
   - Complete `README.md` with full execution instructions.

---

## 11. Testing & Validation Checklist

- [x] Verified resume `Ankitha.pdf` extracted and copied to `public/Ankitha.pdf`.
- [ ] TypeScript compilation (`tsc -b`) passes with zero errors.
- [ ] Production build (`vite build`) completes cleanly.
- [ ] Dev server starts without runtime warnings.
- [ ] Navigation smooth-scrolling works for all anchor links.
- [ ] Mobile navigation opens, displays links, and closes on item click.
- [ ] "View Resume" modal opens, renders formatted resume, allows text copying, and offers direct PDF access.
- [ ] "View Details" opens project modal with objective, methodology, and key learnings.
- [ ] Certifications filter correctly shifts between providers.
- [ ] Contact email & phone clipboard copying works with feedback.
- [ ] Contact form validates empty or invalid fields and triggers honest mailto.
- [ ] Responsive layout validated at 375px, 768px, and 1440px viewports.
- [ ] No horizontal scrollbar overflow on mobile.

---

## 12. Run and Deployment Instructions

### Local Development
```bash
# Navigate to the project root
cd C:\Users\PC-61\.gemini\antigravity-ide\scratch\ankitha-portfolio

# Install dependencies (if needed)
npm install

# Start development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---
*End of Implementation Specification (`implementation.md`).*
