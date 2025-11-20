import type { Block } from 'payload'

export const TranslatableValueBlock: Block = {
  slug: 'translatableValue',
  interfaceName: 'TranslatableValueBlock',
  labels: {
    singular: 'Translatable Value',
    plural: 'Translatable Values',
  },
  admin: {
    components: {
      Label: {
        path: '/blocks/TranslatableValueLabel.tsx#TranslatableValueLabel',
      },
    },
  },
  fields: [
    {
      name: 'en',
      type: 'text',
      label: 'English',
      required: true,
    },
    {
      name: 'de',
      type: 'text',
      label: 'German (Deutsch)',
      required: true,
    },
  ],
}
