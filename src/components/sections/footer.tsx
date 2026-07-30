"use client";

export function Footer() {
  return (
    <footer className="w-full px-4 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between text-xs font-medium text-text-secondary bg-bg-primary">
      <div className="flex items-center gap-2 mb-4 sm:mb-0">
        <span>Built in Next.js</span>
        <span className="w-1 h-1 rounded-full bg-text-secondary"></span>
        <a href="#" className="flex items-center gap-1 bg-white px-2 py-1 rounded shadow-sm text-text-primary">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4-11l4-4 4 4h-8zm0 2h8l-4 4-4-4z"/>
          </svg>
          Made with Framer Motion
        </a>
      </div>
      <div>
        Template inspired by Daniel Cross
      </div>
    </footer>
  );
}
