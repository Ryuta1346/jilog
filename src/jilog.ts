class JiLog {
  private logCount = 0
  private infoLogCount = 0
  private warnLogCount = 0
  private errorLogCount = 0
  private logTime: number = this.calcTime()
  private infoTime: number = this.calcTime()
  private warnTime: number = this.calcTime()
  private errorTime: number = this.calcTime()

  log(value: any, label = '', color = '') {
    console.log(
      `%c[${label}][LOG: ${
        this.logCount
      }][TIME: ${this.calcPerformance()}]\n${JSON.stringify(value)} `,
      `color: ${color}`
    )
    this.updateMeta('log')
  }

  info(value: any, label = '', color = 'green') {
    console.log(
      `%c[${label}][INFO: ${
        this.infoLogCount
      }][TIME: ${this.calcPerformance()}]\n${JSON.stringify(value)} `,
      `color: ${color}`
    )
    this.updateMeta('info')
  }

  warn(value: any, label = '', color = 'yellow') {
    console.log(
      `%c[${label}][WARN: ${
        this.warnLogCount
      }][TIME: ${this.calcPerformance()}]\n${JSON.stringify(value)} `,
      `color: ${color}`
    )
    this.warnLogCount += 1
    this.warnTime = window.performance.now()
    this.updateMeta('warn')
  }

  error(value: any, label = '', color = 'red') {
    console.log(
      `%c[${label}][ERROR: ${
        this.errorLogCount
      }][TIME: ${this.calcPerformance()}]\n${JSON.stringify(value)} `,
      `color: ${color}`
    )
    this.errorLogCount += 1
    this.errorTime = window.performance.now()
    this.updateMeta('error')
  }

  private calcPerformance(): string {
    const performance = window.performance.now()
    return `${performance - this.errorTime} milliseconds`
  }

  private calcTime() {
    return typeof window !== 'undefined' ? window.performance.now() : Date.now()
  }

  private updateMeta(type: string) {
    switch (type) {
      case 'log':
        this.logCount += 1
        this.logTime = this.calcTime()
        break
      case 'info':
        this.infoLogCount += 1
        this.infoTime = this.calcTime()
        break
      case 'warn':
        this.warnLogCount += 1
        this.warnTime = this.calcTime()
        break
      case 'error':
        this.errorLogCount += 1
        this.errorTime = this.calcTime()
        break
      default:
        this.logCount += 1
        this.logTime = this.calcTime()
    }
  }
}

const jilog = new JiLog()

const jiLog = (value: any, label = '', color = '') => {
  return jilog.log(value, label, color)
}

const jiInfo = (value: any, label = '', color = '') => {
  return jilog.info(value, label, color)
}

const jiWarn = (value: any, label = '', color = '') => {
  return jilog.warn(value, label, color)
}

const jiError = (value: any, label = '', color = '') => {
  return jilog.error(value, label, color)
}

export { jiLog, jiInfo, jiWarn, jiError }
