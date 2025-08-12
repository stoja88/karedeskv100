interface LogLevel {
  ERROR: 'error'
  WARN: 'warn'
  INFO: 'info'
  DEBUG: 'debug'
}

const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug'
}

interface LogEntry {
  level: keyof LogLevel
  message: string
  timestamp: string
  context?: Record<string, any>
  userId?: string
  requestId?: string
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'
  private logLevel = process.env.LOG_LEVEL || 'info'

  private shouldLog(level: keyof LogLevel): boolean {
    const levels = ['error', 'warn', 'info', 'debug']
    const currentLevelIndex = levels.indexOf(this.logLevel)
    const messageLevelIndex = levels.indexOf(level)
    
    return messageLevelIndex <= currentLevelIndex
  }

  private formatLog(entry: LogEntry): string {
    const { level, message, timestamp, context, userId, requestId } = entry
    
    let logMessage = `[${timestamp}] ${level.toUpperCase()}: ${message}`
    
    if (userId) logMessage += ` | User: ${userId}`
    if (requestId) logMessage += ` | Request: ${requestId}`
    if (context) logMessage += ` | Context: ${JSON.stringify(context)}`
    
    return logMessage
  }

  private log(level: keyof LogLevel, message: string, context?: Record<string, any>, userId?: string, requestId?: string) {
    if (!this.shouldLog(level)) return

    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      context,
      userId,
      requestId
    }

    const formattedLog = this.formatLog(entry)

    // Console output
    switch (level) {
      case 'error':
        console.error(formattedLog)
        break
      case 'warn':
        console.warn(formattedLog)
        break
      case 'info':
        console.info(formattedLog)
        break
      case 'debug':
        console.debug(formattedLog)
        break
    }

    // In production, send to external logging service
    if (!this.isDevelopment && level === 'error') {
      this.sendToExternalService(entry)
    }
  }

  private async sendToExternalService(entry: LogEntry) {
    // TODO: Implement external logging service integration
    // Examples: Sentry, LogRocket, DataDog, etc.
    try {
      // await externalLogger.send(entry)
    } catch (error) {
      console.error('Failed to send log to external service:', error)
    }
  }

  error(message: string, context?: Record<string, any>, userId?: string, requestId?: string) {
    this.log('ERROR', message, context, userId, requestId)
  }

  warn(message: string, context?: Record<string, any>, userId?: string, requestId?: string) {
    this.log('WARN', message, context, userId, requestId)
  }

  info(message: string, context?: Record<string, any>, userId?: string, requestId?: string) {
    this.log('INFO', message, context, userId, requestId)
  }

  debug(message: string, context?: Record<string, any>, userId?: string, requestId?: string) {
    this.log('DEBUG', message, context, userId, requestId)
  }
}

export const logger = new Logger()

// Request logging middleware helper
export function logRequest(request: Request, userId?: string) {
  const requestId = crypto.randomUUID()
  const method = request.method
  const url = new URL(request.url).pathname
  
  logger.info(`${method} ${url}`, { method, url }, userId, requestId)
  
  return requestId
}

// Error logging helper
export function logError(error: Error, context?: Record<string, any>, userId?: string, requestId?: string) {
  logger.error(error.message, {
    ...context,
    stack: error.stack,
    name: error.name
  }, userId, requestId)
}