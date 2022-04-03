class JiLog {
  private logCount = 0
  private infoLogCount = 0
  private warnLogCount = 0
  private errorLogCount = 0
  private logTime: number = window.performance.now()
  private infoTime: number = window.performance.now()
  private warnTime: number = window.performance.now()
  private errorTime: number = window.performance.now()

  log(value: any, label = '', color = '') {
    console.log(
      `%c[${label}][LOG: ${this.logCount}][TIME: ${this.calcPerformance(
        this.logTime
      )}]\n${JSON.stringify(value)} `,
      `color: ${color}`
    )
    this.updateMeta('log')
  }

  info(value: any, label = '', color = 'green') {
    console.log(
      `%c[${label}][INFO: ${this.infoLogCount}][TIME: ${this.calcPerformance(
        this.infoTime
      )}]\n${JSON.stringify(value)} `,
      `color: ${color}`
    )
    this.updateMeta('info')
  }

  warn(value: any, label = '', color = 'yellow') {
    console.log(
      `%c[${label}][WARN: ${this.warnLogCount}][TIME: ${this.calcPerformance(
        this.warnTime
      )}]\n${JSON.stringify(value)} `,
      `color: ${color}`
    )
    this.warnLogCount += 1
    this.warnTime = window.performance.now()
    this.updateMeta('warn')
  }

  error(value: any, label = '', color = 'red') {
    console.log(
      `%c[${label}][ERROR: ${this.errorLogCount}][TIME: ${this.calcPerformance(
        this.errorTime
      )}]\n${JSON.stringify(value)} `,
      `color: ${color}`
    )
    this.errorLogCount += 1
    this.errorTime = window.performance.now()
    this.updateMeta('error')
  }

  private calcPerformance(time: number): string {
    const performance = window.performance.now()
    return `${performance - time} milliseconds`
  }

  private updateMeta(type: string) {
    switch (type) {
      case 'log':
        this.logCount += 1
        this.logTime = window.performance.now()
        return
      case 'info':
        this.infoLogCount += 1
        this.infoTime = window.performance.now()
        return
      case 'warn':
        this.warnLogCount += 1
        this.warnTime = window.performance.now()
        return
      case 'error':
        this.errorLogCount += 1
        this.errorTime = window.performance.now()
        return
    }
  }
}

const jilog = new JiLog()

const jiLog = (value: any, label?: string, color?: string) => {
  return jilog.log(value, label, color)
}

const jiInfo = (value: any, label?: string, color?: string) => {
  return jilog.info(value, label, color)
}

const jiWarn = (value: any, label?: string, color?: string) => {
  return jilog.warn(value, label, color)
}

const jiError = (value: any, label?: string, color?: string) => {
  return jilog.error(value, label, color)
}

export { jiLog, jiInfo, jiWarn, jiError }
