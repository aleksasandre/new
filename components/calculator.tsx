'use client'

import { useState } from 'react'
import { Hero } from './hero'
import { CalculatorDashboard } from './calculator-dashboard'
import { InformationSectionsBefore } from './information-sections-before'
import { InformationSectionsAfter } from './information-sections-after'

export function Calculator() {
  const [results, setResults] = useState<any>(null)

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <InformationSectionsBefore />
      <CalculatorDashboard onResults={setResults} initialResults={results} />
      <InformationSectionsAfter />
    </div>
  )
}
