import { Arg, Value } from 'pawi.types'

export function link({ number: x }: Arg, { number: y }: Arg): Value {
  if (!x || !y) {
    return { number: () => 0 }
  }

  return {
    // This gives the return type
    number: () => x() + y(),
  }
}
