'use client'

import { useEffect, useState } from 'react'

interface ResultsPanelProps {
  results: {
    totalDays: number
    costMin: number
    costMax: number
    costEstimate: number
    breakdown: {
      blockout: number
      highPoly: number
      lowPoly: number
      uvBaking: number
      texturing: number
      export: number
    }
  } | null
  onCalculate: () => void
}

const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function ResultsPanel({ results, onCalculate }: ResultsPanelProps) {
  const [displayResults, setDisplayResults] = useState<typeof results>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) {
      setDisplayResults(results)
    }
  }, [results, isHydrated])

  // If not hydrated yet or no results, show initial state
  if (!isHydrated || !displayResults) {
    return (
      <div className="rounded-xl bg-card/30 border border-white/10 backdrop-blur-md shadow-lg flex flex-col items-center justify-center p-4 sm:p-5 min-h-[500px]">
        <div className="mb-6 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-3">
          <svg
            className="h-10 w-10 text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white text-center">
          Production Estimate
        </h3>
        <p className="mb-6 text-center text-foreground/70 max-w-xs text-sm">
          Configure your project parameters and click Calculate to generate detailed production estimates.
        </p>
        <button
          onClick={onCalculate}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:shadow-indigo-500/30"
        >
          Calculate
          <svg
            className="h-4 w-4"
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
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Results Card */}
      <div className="rounded-xl bg-card/30 border border-white/10 backdrop-blur-md shadow-lg p-4 sm:p-5">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Estimated Results
        </h3>

        <div className="space-y-4">
          {/* Time Estimate */}
          <div className="rounded-lg border border-indigo-500/30 bg-indigo-500/10 p-5">
            <p className="mb-2 text-sm font-medium text-indigo-300/80">
              Estimated Production Time
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-white">
                {displayResults.totalDays}
              </span>
              <span className="text-base font-medium text-foreground/70">days</span>
            </div>
            <p className="mt-3 text-xs text-foreground/60">
              ≈ {Math.ceil(displayResults.totalDays / 5)} weeks of production
            </p>
          </div>

          {/* Cost Estimate */}
          <div className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-5">
            <p className="mb-2 text-sm font-medium text-purple-300/80">
              Estimated Cost Range
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-white">
                €{formatNumber(displayResults.costMin)}
              </span>
              <span className="text-foreground/60">–</span>
              <span className="text-3xl font-bold text-white">
                €{formatNumber(displayResults.costMax)}
              </span>
            </div>
            <p className="text-xs text-foreground/60">
              Base estimate: €{formatNumber(displayResults.costEstimate)}
            </p>
          </div>
        </div>
      </div>

      {/* Production Breakdown */}
      <div className="rounded-xl bg-card/30 border border-white/10 backdrop-blur-md shadow-lg p-4 sm:p-5">
        <h4 className="mb-4 text-base font-semibold text-white">
          Production Breakdown
        </h4>

        <div className="space-y-4">
          {[
            {
              label: 'Blockout',
              days: displayResults.breakdown.blockout,
              color: 'from-indigo-500 to-indigo-600',
            },
            {
              label: 'High Poly',
              days: displayResults.breakdown.highPoly,
              color: 'from-purple-500 to-purple-600',
            },
            {
              label: 'Low Poly',
              days: displayResults.breakdown.lowPoly,
              color: 'from-pink-500 to-rose-600',
            },
            {
              label: 'UV & Baking',
              days: displayResults.breakdown.uvBaking,
              color: 'from-cyan-500 to-blue-600',
            },
            {
              label: 'Texturing',
              days: displayResults.breakdown.texturing,
              color: 'from-orange-500 to-red-600',
            },
            {
              label: 'Export',
              days: displayResults.breakdown.export,
              color: 'from-green-500 to-emerald-600',
            },
          ].map((phase) => (
            <div key={phase.label}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground/90">
                  {phase.label}
                </span>
                <span className="text-sm font-semibold text-white">
                  {phase.days}d
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <div
                  className={`h-full bg-gradient-to-r ${phase.color} transition-all duration-500`}
                  style={{
                    width: `${(phase.days / displayResults.totalDays) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground/70">
              Total Production Time
            </span>
            <span className="font-semibold text-white">
              {displayResults.totalDays} days
            </span>
          </div>
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={onCalculate}
        className="w-full rounded-lg border border-indigo-500/50 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 px-6 py-3 font-semibold text-white transition-all duration-200 hover:from-indigo-600/40 hover:to-purple-600/40 hover:border-indigo-500/80 hover:shadow-lg hover:shadow-indigo-500/20"
      >
        Recalculate
      </button>
    </div>
  )
}
