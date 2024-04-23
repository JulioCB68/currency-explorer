export function formatCurrency(value: number, code: string): string {
  const formatter = new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: code,
    maximumFractionDigits: 2,
  }).format(value)

  return formatter
}
