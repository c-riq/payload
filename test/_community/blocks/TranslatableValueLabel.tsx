import React from 'react'

type TranslatableValueLabelProps = {
  formState: {
    de?: { value?: string }
    en?: { value?: string }
  }
}

export const TranslatableValueLabel: React.FC<TranslatableValueLabelProps> = ({ formState }) => {
  const label = formState.en?.value || formState.de?.value || 'Translatable Value'
  return <span>{label}</span>
}
