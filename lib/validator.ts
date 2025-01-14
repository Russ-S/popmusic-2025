import { z } from 'zod'
import { formatNumberWithDecimal } from './utils'

// Common
const Value = (field: string) =>
  z.coerce
    .number()
    .refine(
      (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
      `${field} must have exactly two decimal places (e.g., 49.99)`
    )
export const RecordingInputSchema = z.object({
  artists: z.string().min(3, 'Artists must be at least 3 characters'),
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  category: z.string().min(1, 'Category is required'),
  coverImage: z
    .array(z.string())
    .min(1, 'Recording must have at last one image'),
  label: z.string().min(1, 'Label is required'),
  number: z.string().min(1, 'Catalog Number is required'),
  year: z.string().min(4, 'Year is required'),
  media: z.string().min(1, 'Media is required'),
  value: Value('Value'),
  number_in_set: z.string().min(1, 'Number in Set is required'),
  num_tracks: z.string().min(1, 'Number of tracks is required'),
  location: z.string().min(1, 'Location is required'),
})
