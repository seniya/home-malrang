import log from 'loglevel'
import dayjs from 'dayjs'

const isProduction = import.meta.env.NODE_ENV === 'prod'

log.setLevel(isProduction ? 'info' : 'debug')

enum LOG_LEVEL {
  TRACE = 'trace',
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error'
}
const LOG_LEVEL_STYLE = {
  [LOG_LEVEL.TRACE]: 'color: #be38d9',
  [LOG_LEVEL.DEBUG]: 'color: #51a2cf',
  [LOG_LEVEL.INFO]: 'color: #384ed9',
  [LOG_LEVEL.WARN]: 'color: #d9d938',
  [LOG_LEVEL.ERROR]: 'color: #c71f16'
}

function wrapLoggerColor(level: LOG_LEVEL): any {
  const colorStyle = LOG_LEVEL_STYLE[level]

  return (...args: unknown[]) => {
    const timestamp = dayjs().format('HH:mm:ss')
    const prefix = `%c[${timestamp}] ${level}`

    log[level](prefix, colorStyle, ...args)
  }
}

const logger = {
  debug: wrapLoggerColor(LOG_LEVEL.DEBUG),
  info: wrapLoggerColor(LOG_LEVEL.INFO),
  warn: wrapLoggerColor(LOG_LEVEL.WARN),
  error: wrapLoggerColor(LOG_LEVEL.ERROR)
}

export { logger }
