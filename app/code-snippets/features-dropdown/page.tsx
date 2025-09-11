import ContentBlock from "@/app/components/content-block";
import Main from "@/app/js/main";
import "@/app/styles/code-snippets.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Snippets - Featured Dropdown - Latino Web Studio",
  description: "Code snippet for features dropdown menu.",
  alternates: {
    canonical: "https://latinowebstudio.com/get-started",
  },
  openGraph: {
    title: "Code Snippets - Featured Dropdown - Latino Web Studio",
    description: "Code snippet for features dropdown menu.",
    url: "https://latinowebstudio.com/code-snippets/features-dropdown",
    type: "website",
  },
};

function FeatureDropdownPage() {
  return (
    <>
      <Main />
      <main>
        <div className="pt-[50px]"></div>
        <ContentBlock
          sectionClassName="text-black pb-[100px] blog single-post"
          containerClassName="max-w-screen-lg mx-auto"
          rowClassName="flex flex-col items-center"
          columnClassName="w-full"
        >
          <h2>HTML</h2>
          <pre>
            {`    <div class="features-dropdown">
        <div class="dropdown-header">
            <h3 class="dropdown-title">All Research Methods in One Platform</h3>
            <p class="dropdown-subtitle">Comprehensive user research tools to gather actionable insights</p>
        </div>
        
        <div class="features-grid">
            <a href="/unmoderated-testing" class="feature-item">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="3"/>
                        <path d="M12 14c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z"/>
                    </svg>
                </div>
                <div class="feature-title">Unmoderated Testing</div>
                <div class="feature-description">Fast, scalable video feedback on prototypes and live sites</div>
            </a>

            <a href="/moderated-interviews" class="feature-item">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24">
                        <circle cx="8" cy="8" r="3"/>
                        <path d="M8 14c-3 0-5 1.5-5 4v1h10v-1c0-2.5-2-4-5-4z"/>
                        <circle cx="16" cy="8" r="3"/>
                        <path d="M16 14c3 0 5 1.5 5 4v1H11v-1c0-2.5 2-4 5-4z"/>
                        <path d="M10 12h4"/>
                    </svg>
                </div>
                <div class="feature-title">Moderated Interviews</div>
                <div class="feature-description">One-on-one sessions with real-time interaction and probing</div>
            </a>

            <a href="/card-sorting" class="feature-item">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24">
                        <rect x="4" y="4" width="6" height="4" rx="1"/>
                        <rect x="12" y="4" width="6" height="4" rx="1"/>
                        <rect x="4" y="10" width="6" height="4" rx="1"/>
                        <rect x="12" y="10" width="6" height="4" rx="1"/>
                        <rect x="8" y="16" width="6" height="4" rx="1"/>
                    </svg>
                </div>
                <div class="feature-title">Card Sorting</div>
                <div class="feature-description">Optimize information architecture with open, closed & hybrid sorts</div>
            </a>

            <a href="/tree-testing" class="feature-item">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="4" r="2"/>
                        <path d="M12 6v6"/>
                        <path d="M8 12h8"/>
                        <circle cx="6" cy="16" r="2"/>
                        <circle cx="12" cy="16" r="2"/>
                        <circle cx="18" cy="16" r="2"/>
                        <path d="M6 14v-2"/>
                        <path d="M12 14v-2"/>
                        <path d="M18 14v-2"/>
                    </svg>
                </div>
                <div class="feature-title">Tree Testing</div>
                <div class="feature-description">Validate navigation structure and findability paths</div>
            </a>

            <a href="/surveys" class="feature-item">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24">
                        <rect x="6" y="4" width="12" height="16" rx="2"/>
                        <path d="M9 8h6"/>
                        <path d="M9 12h6"/>
                        <path d="M9 16h4"/>
                    </svg>
                </div>
                <div class="feature-title">Surveys</div>
                <div class="feature-description">Quantitative research with advanced logic and real-time analysis</div>
            </a>

            <a href="/first-click-testing" class="feature-item">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                        <path d="M13 13l6 6"/>
                    </svg>
                </div>
                <div class="feature-title">First-Click Testing</div>
                <div class="feature-description">Track initial user interactions with heatmaps and click analysis</div>
            </a>

            <a href="/five-second-testing" class="feature-item">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </div>
                <div class="feature-title">Five-Second Testing</div>
                <div class="feature-description">Test first impressions and immediate user reactions</div>
            </a>

            <a href="/preference-testing" class="feature-item">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24">
                        <rect x="3" y="6" width="7" height="7" rx="1"/>
                        <rect x="14" y="6" width="7" height="7" rx="1"/>
                        <path d="M5 11h3M16 11h3" stroke-width="1"/>
                        <path d="M6.5 9v4M17.5 9v4" stroke-width="1"/>
                    </svg>
                </div>
                <div class="feature-title">Preference Testing</div>
                <div class="feature-description">Compare up to 20 designs to understand user preferences</div>
            </a>

            <a href="/participant-panel" class="feature-item">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24">
                        <circle cx="8" cy="8" r="2"/>
                        <circle cx="16" cy="8" r="2"/>
                        <circle cx="8" cy="16" r="2"/>
                        <circle cx="16" cy="16" r="2"/>
                    </svg>
                </div>
                <div class="feature-title">Participant Panel</div>
                <div class="feature-description">Access 5+ million vetted consumer and professional participants</div>
            </a>

            <a href="/figma-testing" class="feature-item">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2h7A3.5 3.5 0 0 1 19 5.5v0A3.5 3.5 0 0 1 15.5 9H12V5.5A3.5 3.5 0 0 0 8.5 2v0A3.5 3.5 0 0 0 5 5.5v0z"/>
                        <path d="M5 12A3.5 3.5 0 0 1 8.5 8.5H12v7A3.5 3.5 0 0 1 8.5 19v0A3.5 3.5 0 0 1 5 15.5V12z"/>
                        <circle cx="15.5" cy="12" r="3.5"/>
                    </svg>
                </div>
                <div class="feature-title">Figma Testing</div>
                <div class="feature-description">Test prototypes directly from Figma with seamless integration</div>
            </a>

            <a href="/ai-powered-research" class="feature-item">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24">
                        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
                    </svg>
                </div>
                <div class="feature-title">AI-Powered Research</div>
                <div class="feature-description">Accelerate insights with intelligent automation and analysis</div>
            </a>
        </div>

        <div class="cta-section">
            <a href="/features" class="cta-button cta-primary">View All Features</a>
            <a href="/demo" class="cta-button cta-secondary">Schedule Demo</a>
        </div>
</div>`}
          </pre>
          <h2>CSS</h2>
          <pre>
            {`.features-dropdown {
    position: relative;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    padding: 32px;
    width: 920px;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    z-index: 1000;
    margin-top: 8px;
}

.dropdown-header {
    text-align: center;
    margin-bottom: 32px;
}

.dropdown-title {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 8px;
}

.dropdown-subtitle {
    color: #6b7280;
    font-size: 16px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-bottom: 32px;
}

.feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 24px 16px;
    border-radius: 12px;
    transition: all 0.2s ease;
    text-decoration: none;
    color: inherit;
}

.feature-item:hover {
    background: #f8faff;
    transform: translateY(-2px);
}

.feature-icon {
    width: 72px;
    height: 72px;
    margin-bottom: 16px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
}

.feature-icon svg {
    width: 36px;
    height: 36px;
    fill: none;
    stroke: #477ae9;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.feature-title {
    font-size: 14px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 4px;
}

.feature-description {
    font-size: 12px;
    color: #6b7280;
    line-height: 1.4;
}

.cta-section {
    border-top: 1px solid #e5e7eb;
    padding-top: 24px;
    display: flex;
  flex-wrap:wrap;
    justify-content: center;
    gap: 16px;
}

.cta-button {
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.2s;
}

.cta-primary {
    background: #477ae9;
    color: white;
}

.cta-primary:hover {
    background: #3b6fd4;
}

.cta-secondary {
    background: transparent;
    color: #477ae9;
    border: 1px solid #e5e7eb;
}

.cta-secondary:hover {
    background: #f8faff;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .features-dropdown {
        width: 90vw;
        max-width: 800px;
    }
    
    .features-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
    
    .features-dropdown {
        padding: 24px;
    }
    
    .feature-item {
        padding: 16px 12px;
    }
    
    .feature-icon {
        width: 56px;
        height: 56px;
    }
    
    .feature-icon svg {
        width: 28px;
        height: 28px;
    }
}

@media (max-width: 480px) {
    .features-grid {
        grid-template-columns: 1fr;
    }
}
    `}
          </pre>
        </ContentBlock>
      </main>
    </>
  );
}

export default FeatureDropdownPage;
