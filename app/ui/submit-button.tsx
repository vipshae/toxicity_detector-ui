'use client'

export function SubmitButton(pending: any| Boolean) {
  return (
    <button type="submit" className="small" aria-disabled={pending}>
      Predict Toxicity
    </button>
  )
}