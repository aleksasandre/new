'use client'

import { useState } from 'react'
import { Hero } from './hero'
import { CalculatorDashboard } from './calculator-dashboard'
import { InformationSections } from './information-sections'

export function Calculator() {
  const [results, setResults] = useState<any>(null)

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CalculatorDashboard onResults={setResults} initialResults={results} />
      <InformationSections />
    </div>
  )
}
