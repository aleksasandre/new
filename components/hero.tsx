export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-background via-background to-background/80 px-4 py-12 sm:py-16 md:py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="mb-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          <span className="gradient-text">Game Character</span>
          <br />
          <span>Production Calculator</span>
        </h1>

        <p className="mx-auto max-w-2xl text-base text-foreground/80 leading-relaxed">
          Estimate production time and cost for 3D game characters based on asset complexity, pipeline requirements, and production factors. Designed to support early-stage planning and budgeting for game studios and teams with limited game production experience.
        </p>
      </div>
    </section>
  )
}
