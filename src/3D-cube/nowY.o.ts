import { Context, Block } from 'pawi.types'

export async function init({ time }: Context): Block {
  return {
    link: () => ({
      number: () => time.now * 0.2,
    }),
  }
}
