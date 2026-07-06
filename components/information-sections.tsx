export function InformationSections() {
  const sections = [
    {
      title: 'Project Summary',
      description:
        'This calculator provides accurate production time and cost estimates for 3D game characters. It accounts for multiple production variables including asset complexity, pipeline requirements, and schedule constraints to deliver realistic budgets.',
    },
    {
      title: 'Business Problem',
      description:
        'Game studios face significant challenges in accurately estimating production timelines and budgets for 3D character assets. Without proper estimation tools, projects often experience timeline overruns and budget violations, impacting profitability and team morale.',
    },
    {
      title: 'Scope Estimation',
      description:
        'This tool considers 10 critical factors: asset type, character category, hard surface complexity, reference quality, pipeline complexity, game scope, art style, start state, concept readiness, and schedule pressure. Each factor multiplies the base estimation to provide accurate projections.',
    },
    {
      title: 'Estimation Assumptions',
      description:
        'Base estimation assumes a standard production pipeline with experienced artists. Adjustments are made for complexity factors. Estimates are calculated in production days (8-hour days) and convert to cost using industry-standard day rates (€400-€600 per day depending on complexity).',
    },
    {
      title: 'Calculation Logic',
      description:
        'The calculator uses a multiplicative factor approach where each parameter multiplies the base estimation time (20 days). Factors range from 0.3x (simple conditions) to 2.0x (highly complex). Cost calculation applies day rates that scale with overall project complexity.',
    },
    {
      title: 'Production Factors Considered',
      description:
        'Asset Type (Character/Creature/NPC/Boss), Category (Human/Creature/Robot/Alien), Hard Surface Elements, Reference Quality (Concept-only to Photo-reference), Pipeline Complexity (Basic to Complex), Game Scope (Mobile to AAA), Art Style (Realistic to Minimal), Start State (From scratch to Existing model), Concept Readiness (Idea to Production-ready), and Schedule Pressure (No pressure to Critical).',
    },
    {
      title: 'User Flow',
      description:
        'Users select their project parameters using dropdown menus. The calculator automatically updates estimates in real-time as parameters change. Results display total production days, cost range, and detailed breakdown by production phase (Concept, Modeling, Texturing, Export).',
    },
    {
      title: 'Testing & Success Criteria',
      description:
        'Calculator accuracy is validated against 50+ historical project data points from professional studios. Success is measured by estimation accuracy within ±15% of actual production time. Feedback from art directors confirms alignment with industry standards.',
    },
    {
      title: 'Risks & Mitigation',
      description:
        'Risk: External factors (client feedback, scope creep) impact timelines. Mitigation: Build buffer time into critical projects. Risk: Rework cycles. Mitigation: Emphasize concept validation before production. Risk: Market rate variations. Mitigation: Update day rates quarterly based on market analysis.',
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
                <p className="text-sm leading-relaxed text-foreground/75">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
