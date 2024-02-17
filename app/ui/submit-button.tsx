'use client'

export function SubmitButton(pending: any) {
  return (
    <button type="submit" aria-disabled={pending}>
      Predict
    </button>
  )
}