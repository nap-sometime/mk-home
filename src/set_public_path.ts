import { setPublicPath } from 'systemjs-webpack-interop'
import { getEnv } from './utils/get_env'

const name = getEnv('VUE_APP_NAME')

setPublicPath(name, 2)