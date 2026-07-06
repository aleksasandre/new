export function InformationSections() {
  const sections = [
    {
      title: 'Project Summary',
      description:
        'This tool supports early-stage production planning for 3D game art assets by providing production time and cost estimates based on pipeline complexity and production factors.',
    },
    {
      title: 'Business Problem',
      description:
        'Game studios often struggle to understand how asset complexity and production requirements affect timelines and costs. This creates challenges in planning budgets, resources, and delivery expectations.',
    },
    {
      title: 'Scope',
      description:
        'In scope: character production estimation.\n\nOut of scope: animation, VFX, and studio scheduling.',
    },
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
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            About This Tool
          </h2>
          <p className="text-base text-foreground/70">
            Complete documentation and methodologies behind our production calculator.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-xl bg-card/30 border border-white/10 backdrop-blur-md shadow-lg group relative overflow-hidden p-6 sm:p-7 transition-all duration-300 hover:border-white/20"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-3 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
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

                <h3 className="mb-3 text-lg font-semibold text-white">
                  {section.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/75 whitespace-pre-line">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Risks & Mitigation Section - Special Two Column Layout */}
        <div className="mt-6 rounded-xl bg-card/30 border border-white/10 backdrop-blur-md shadow-lg group relative overflow-hidden p-6 sm:p-7 transition-all duration-300 hover:border-white/20">
          {/* Gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative">
            <div className="mb-3 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
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

            <h3 className="mb-6 text-lg font-semibold text-white">
              Risks & Mitigation
            </h3>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Risks Column */}
              <div>
                <h4 className="mb-4 font-semibold text-white flex items-center gap-2">
                  Risks
                  <span className="text-indigo-400 text-xl">→</span>
                </h4>
                <p className="text-sm leading-relaxed text-foreground/75 whitespace-pre-line">
                  {`• Limited workflow coverage
• Character production only
• Single currency support`}
                </p>
              </div>

              {/* Mitigation Column */}
              <div>
                <h4 className="mb-4 font-semibold text-white">Mitigation</h4>
                <p className="text-sm leading-relaxed text-foreground/75 whitespace-pre-line">
                  {`• Clear scope definition
• Future pipeline expansion
• Multi-currency support`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
