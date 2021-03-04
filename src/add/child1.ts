import { Value } from './context'

export function link(): Value {
  // This validates the return type. Could be check in 'debug' mode where we
  // proxy update calls to debug values.
  return {
    number: () => 10,
  }
}
