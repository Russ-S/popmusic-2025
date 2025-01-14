import { RecordingInputSchema } from '@/lib/validator'
import { z } from 'zod'

export type IRecordingInput = z.infer<typeof RecordingInputSchema>
export type Data = {
  recordings: IRecordingInput[]
  headerMenus: {
    name: string
    href: string
  }[]
  carousels: {
    image: string
    url: string
    title: string
    buttonCaption: string
  }[]
}
