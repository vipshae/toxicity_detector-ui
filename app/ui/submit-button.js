'use client'

export function SubmitButton(pending) {
  return (
    <button type="submit" aria-disabled={pending}>
      Predict
    </button>
  )
}