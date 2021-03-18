import { Block } from 'pawi.types'

export async function init(): Block {
  const el = document.querySelector('#route') as HTMLInputElement
  return {
    route(now, sliders) {
      if (!now || !sliders) {
        return
      }
      if (!el || el.checked) {
        now()
      } else {
        sliders()
      }
    },
  }
}
