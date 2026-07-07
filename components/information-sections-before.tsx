export function InformationSectionsBefore() {
  const sections = [
    {
      title: 'Project Summary',
      description:
        'This tool provides a structured approach for estimating 3D character production timelines and costs. It helps users understand how different production factors influence the expected effort and budget during early-stage planning.',
    },
    {
      title: 'Business Problem',
      description:
        'First-time game developers and teams with limited production experience often struggle to understand how asset complexity, pipeline requirements, and production scope affect timelines and budgets. Without a structured estimation approach, projects may face unrealistic expectations, unexpected costs, and planning challenges.',
    },
    {
      title: 'Solution Approach',
      description:
        'The calculator provides a structured estimation framework that helps stakeholders evaluate production requirements and better understand how different project decisions influence expected timelines and costs.',
    },
    {
      title: 'Scope',
      description:
        'In scope:\nCharacter production estimation, including asset complexity, pipeline requirements, and production factors.\n\nOut of scope:\nAnimation, VFX, engine-specific technical requirements, and team scheduling.',
    },
    {
      title: 'User Flow',
      description:
        'Select project parameters → Calculate estimate → Review timeline and cost breakdown.',
    },
    {
      title: 'Success Criteria',
      description:
        'Improve the early planning process by reducing estimation uncertainty, helping stakeholders better understand production complexity, and creating clearer alignment between project expectations, timelines, and budgets. The goal is to reduce misunderstandings during early discussions and provide a shared reference point that supports better collaboration between production teams and stakeholders.',
    },
  ]

  return (
    <section className="bg-background/50 px-4 py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
            About This Tool
          </h2>
          <p className="text-base text-foreground/70">
            Understanding the approach, assumptions, and limitations behind the production estimation model.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-xl bg-card/30 border border-white/10 backdrop-blur-md shadow-lg group relative overflow-hidden p-4 sm:p-5 transition-all duration-300 hover:border-white/20"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-1.5 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
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

                <h3 className="mb-1.5 text-base font-semibold text-white">
                  {section.title}
                </h3>
                <p className="text-base leading-relaxed text-foreground/75 whitespace-pre-line">
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
