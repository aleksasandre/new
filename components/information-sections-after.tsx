export function InformationSectionsAfter() {
  const sections = [
    {
      title: 'Estimation Assumptions',
      description:
        '• Single asset estimation\n• 8-hour production day\n• Animation excluded\n• Estimates are based on production complexity factors',
    },
    {
      title: 'Calculation Logic',
      description:
        'Final estimate = base effort × production multipliers.\n\nEach production factor modifies the base effort to reflect complexity and project requirements.',
    },
    {
      title: 'Production Factors Explained',
      description:
        'Asset complexity, references, pipeline requirements, game scope, art style, start state, concept readiness, and schedule pressure determine production effort.',
    },
    {
      title: 'User Flow',
      description:
        'Select inputs → Calculate → Review estimates.',
    },
    {
      title: 'Success Criteria',
      description:
        'Transparent estimates and support for budgeting and production planning decisions.',
    },
  ]

  return (
    <section className="bg-background/50 px-4 py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-xl bg-card/30 border border-white/10 backdrop-blur-md shadow-lg group relative overflow-hidden p-4 sm:p-5 transition-all duration-300 hover:border-white/20"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-2 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                  <svg
                    className="h-5 w-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <h3 className="mb-2 text-base font-semibold text-white">
                  {section.title}
                </h3>
                <p className="text-base leading-relaxed text-foreground/75 whitespace-pre-line">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Risks & Mitigation Section - Compact Two Column Layout */}
        <div className="mt-5 rounded-xl bg-card/30 border border-white/10 backdrop-blur-md shadow-lg group relative overflow-hidden p-4 sm:p-5 transition-all duration-300 hover:border-white/20">
          {/* Gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative">
            <div className="mb-2 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
              <svg
                className="h-5 w-5 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <h3 className="mb-4 text-base font-semibold text-white">
              Risks & Mitigation
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Risks Column */}
              <div>
                <h4 className="mb-2 text-xs font-semibold text-white uppercase tracking-wide">
                  Risks
                </h4>
                <p className="text-base leading-relaxed text-foreground/75 whitespace-pre-line">
                  {`• Model does not cover all game types and workflows
• Only character production is supported
• No technical constraints (engine, pipeline specs)
• Limited input structure for complex assets
• Single currency support only (€)`}
                </p>
              </div>

              {/* Mitigation Column */}
              <div>
                <h4 className="mb-2 text-xs font-semibold text-white uppercase tracking-wide">
                  Mitigation
                </h4>
                <p className="text-base leading-relaxed text-foreground/75 whitespace-pre-line">
                  {`• Scope limited to character production only
• Clear documentation of supported asset type
• Tool positioned as early estimation, not technical planning
• Optional component-level complexity extension
• Future support for multiple currencies (USD, local currencies)`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
