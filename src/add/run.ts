import { loadBranch } from 'pawi'
import { Context } from 'pawi.types'

async function run() {
  // This could go in the 'main' block but we are showing it
  // here to expose how a branch can be called from outside.
  const { value } = await loadBranch<Context>('.')
  // On live-reload, the branch updates itself if it
  // has top-level 'update' but here we query for
  // a return value so we would not see the new result
  // unless we re-run the calculation.
  setInterval(() => {
    const el = document.querySelector('#screen')
    if (el) {
      el.innerHTML = `<h1>${value.number!()}</h1>`
    } else {
      console.log('[ RUN ]', value.number!())
    }
  }, 300)
}

run()
