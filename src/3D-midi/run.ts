import { run } from 'pawi'
import * as three from 'three'
import { Context } from 'pawi.types'

// We ensure the initial context we are passing respects our
// Context definition.
run<Context>('.', { THREE: three })
