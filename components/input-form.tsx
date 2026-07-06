'use client'

interface InputFormProps {
  formData: Record<string, string>
  onChange: (data: Record<string, string>) => void
}

const formFields = [
  {
    name: 'assetType',
    label: 'Asset Type',
    options: ['Character', 'Creature', 'NPC', 'Boss'],
  },
  {
    name: 'category',
    label: 'Category',
    options: ['Human', 'Creature', 'Robot', 'Alien'],
  },
  {
    name: 'hardSurface',
    label: 'Hard Surface Complexity',
    options: ['None', 'Low', 'Medium', 'High'],
  },
  {
    name: 'referenceQuality',
    label: 'Reference Quality',
    options: ['Concept_Only', 'Rough_Sketch', 'Detailed_Concept', 'Photo_Reference'],
  },
  {
    name: 'pipeline',
    label: 'Pipeline',
    options: ['Basic', 'Standard', 'Advanced', 'Complex'],
  },
  {
    name: 'gameScope',
    label: 'Game Scope',
    options: ['Mobile', 'Console', 'PC', 'AAA'],
  },
  {
    name: 'artStyle',
    label: 'Art Style',
    options: ['Realistic', 'Stylised', 'Cartoon', 'Minimal'],
  },
  {
    name: 'startState',
    label: 'Start State',
    options: ['From_Scratch', 'Partial_Model', 'Reference_Base', 'Existing_Model'],
  },
  {
    name: 'conceptReadiness',
    label: 'Concept Readiness',
    options: ['Idea', 'Rough_Concept', 'Detailed_Concept', 'Production_Ready'],
  },
  {
    name: 'schedulePressure',
    label: 'Schedule Pressure',
    options: ['No', 'Moderate', 'High', 'Critical'],
  },
]

function formatLabel(text: string) {
  return text
    .replace(/_/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export function InputForm({ formData, onChange }: InputFormProps) {
  const handleChange = (fieldName: string, value: string) => {
    onChange({
      ...formData,
      [fieldName]: value,
    })
  }

  return (
    <div className="rounded-xl bg-card/30 border border-white/10 backdrop-blur-md shadow-lg">
      <div className="p-4 sm:p-5">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Project Configuration
        </h3>

        <div className="space-y-4">
          {formFields.map((field) => (
            <div key={field.name}>
              <label className="mb-2 block text-sm font-medium text-foreground/90">
                {field.label}
              </label>
              <select
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-black transition-all duration-200 hover:bg-white/10 hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50"
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {formatLabel(option)}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
