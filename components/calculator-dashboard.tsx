'use client'

import { useState, useMemo } from 'react'
import { InputForm } from './input-form'
import { ResultsPanel } from './results-panel'

interface CalculatorDashboardProps {
  onResults: (results: any) => void
  initialResults: any
}

export function CalculatorDashboard({
  onResults,
  initialResults,
}: CalculatorDashboardProps) {
  const [formData, setFormData] = useState({
    assetType: 'Character',
    category: 'Human',
    hardSurface: 'None',
    referenceQuality: 'Concept_Only',
    pipeline: 'Basic',
    gameScope: 'Mobile',
    artStyle: 'Stylised',
    startState: 'From_Scratch',
    conceptReadiness: 'Idea',
    schedulePressure: 'No',
  })

  const calculateResults = useMemo(() => {
    // Base time estimation (in days)
    let baseTime = 20

    // Asset type multiplier
    const assetTypeMultiplier: Record<string, number> = {
      Character: 1.0,
      Creature: 1.3,
      NPC: 0.8,
      Boss: 1.5,
    }
    baseTime *= assetTypeMultiplier[formData.assetType] || 1.0

    // Category multiplier
    const categoryMultiplier: Record<string, number> = {
      Human: 1.0,
      Creature: 1.2,
      Robot: 1.1,
      Alien: 1.3,
    }
    baseTime *= categoryMultiplier[formData.category] || 1.0

    // Hard surface complexity
    const hardSurfaceMultiplier: Record<string, number> = {
      None: 1.0,
      Low: 1.2,
      Medium: 1.5,
      High: 2.0,
    }
    baseTime *= hardSurfaceMultiplier[formData.hardSurface] || 1.0

    // Reference quality
    const referenceMultiplier: Record<string, number> = {
      Concept_Only: 1.4,
      Rough_Sketch: 1.2,
      Detailed_Concept: 1.0,
      Photo_Reference: 0.8,
    }
    baseTime *= referenceMultiplier[formData.referenceQuality] || 1.0

    // Pipeline complexity
    const pipelineMultiplier: Record<string, number> = {
      Basic: 1.0,
      Standard: 1.3,
      Advanced: 1.6,
      Complex: 2.0,
    }
    baseTime *= pipelineMultiplier[formData.pipeline] || 1.0

    // Game scope
    const gameMultiplier: Record<string, number> = {
      Mobile: 0.7,
      Console: 1.0,
      PC: 1.1,
      AAA: 1.4,
    }
    baseTime *= gameMultiplier[formData.gameScope] || 1.0

    // Art style
    const artStyleMultiplier: Record<string, number> = {
      Realistic: 1.3,
      Stylised: 1.0,
      Cartoon: 0.85,
      Minimal: 0.7,
    }
    baseTime *= artStyleMultiplier[formData.artStyle] || 1.0

    // Start state
    const startStateMultiplier: Record<string, number> = {
      From_Scratch: 1.0,
      Partial_Model: 0.7,
      Reference_Base: 0.5,
      Existing_Model: 0.3,
    }
    baseTime *= startStateMultiplier[formData.startState] || 1.0

    // Concept readiness
    const conceptMultiplier: Record<string, number> = {
      Idea: 1.3,
      Rough_Concept: 1.1,
      Detailed_Concept: 1.0,
      Production_Ready: 0.8,
    }
    baseTime *= conceptMultiplier[formData.conceptReadiness] || 1.0

    // Schedule pressure
    const scheduleMultiplier: Record<string, number> = {
      No: 1.0,
      Moderate: 1.1,
      High: 1.25,
      Critical: 1.5,
    }
    baseTime *= scheduleMultiplier[formData.schedulePressure] || 1.0

    // Round to nearest day
    const totalDays = Math.round(baseTime)

    // Calculate cost (€ per day is 400-600 depending on complexity)
    const baseDayRate = 500
    let dayRate = baseDayRate
    const complexityFactor =
      (assetTypeMultiplier[formData.assetType] || 1.0) *
      (categoryMultiplier[formData.category] || 1.0) *
      (hardSurfaceMultiplier[formData.hardSurface] || 1.0) *
      (pipelineMultiplier[formData.pipeline] || 1.0)

    if (complexityFactor > 1.5) {
      dayRate = 600
    } else if (complexityFactor < 1.0) {
      dayRate = 400
    }

    const estimatedCost = Math.round(totalDays * dayRate)

    // Production breakdown percentages
    let conceptPct = 15
    let modelingPct = 40
    let texturingPct = 35
    let exportPct = 10

    // Adjust based on hard surface complexity
    if (formData.hardSurface !== 'None') {
      modelingPct += 10
      texturingPct -= 5
    }

    // Adjust based on pipeline complexity
    if (formData.pipeline === 'Complex') {
      exportPct += 5
      modelingPct -= 3
    }

    const breakdown = {
      concept: Math.round((totalDays * conceptPct) / 100),
      modeling: Math.round((totalDays * modelingPct) / 100),
      texturing: Math.round((totalDays * texturingPct) / 100),
      export: Math.round((totalDays * exportPct) / 100),
    }

    return {
      totalDays,
      costMin: estimatedCost - 1000,
      costMax: estimatedCost + 1000,
      costEstimate: estimatedCost,
      breakdown,
    }
  }, [formData])

  const handleCalculate = () => {
    onResults(calculateResults)
  }

  return (
    <section className="relative border-b border-white/10 bg-background/50 px-4 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            Production Calculator
          </h2>
          <p className="text-base text-foreground/70">
            Configure your project parameters to generate accurate estimates.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <InputForm formData={formData} onChange={setFormData} />
          <ResultsPanel
            results={calculateResults}
            onCalculate={handleCalculate}
          />
        </div>
      </div>
    </section>
  )
}
