class JiLog {
  private logCount = 0
  private infoLogCount = 0
  private warnLogCount = 0
  private errorLogCount = 0
  private logTime: number = performance.now()
  private infoTime: number = performance.now()
  private warnTime: number = performance.now()
  private errorTime: number = performance.now()
  /* ログの外部出力機能実装
  - ログを貯める箱を用意する
  - 外部出力を ON にするためのフラグ対応
    - 引数に待ち時間を渡して、それをフラグにする?
  - 一定時間経過後に指定ファイルへの書き出しを実行
    - 貯めたログを一括で書き出すようにして動作自体への影響抑える

   */

  // FIXME: this.logCount / 2
  log(value: any, label = '', color = '') {
    const labelContent = label && `[${label}]`
    console.log(
      `%c${labelContent}[LOG: ${
        this.logCount / 2
      }][TIME: ${JiLog.calcPerformance(this.logTime)}]\n${JSON.stringify(
        value
      )} `,
      `color: ${color}`
    )
    this.updateMeta('log')
  }

  // FIXME: this.infoLogCount / 2
  info(value: any, label = '', color = 'green') {
    const labelContent = label && `[${label}]`
    console.log(
      `%c${labelContent}[INFO: ${
        this.infoLogCount / 2
      }][TIME: ${JiLog.calcPerformance(this.infoTime)}]\n${JSON.stringify(
        value
      )} `,
      `color: ${color}`
    )
    this.updateMeta('info')
  }

  // FIXME: this.warnLogCount / 2
  warn(value: any, label = '', color = 'yellow') {
    const labelContent = label && `[${label}]`
    console.log(
      `%c${labelContent}[WARN: ${
        this.warnLogCount / 2
      }][TIME: ${JiLog.calcPerformance(this.warnTime)}]\n${JSON.stringify(
        value
      )} `,
      `color: ${color}`
    )
    this.updateMeta('warn')
  }

  // FIXME: this.errorLogCount / 2
  error(value: any, label = '', color = 'red') {
    const labelContent = label && `[${label}]`
    console.log(
      `%c${labelContent}[ERROR: ${
        this.errorLogCount / 2
      }][TIME: ${JiLog.calcPerformance(this.errorTime)}]\n${JSON.stringify(
        value
      )} `,
      `color: ${color}`
    )
    this.updateMeta('error')
  }

  private static calcPerformance(time: number): string {
    const performance = window.performance.now()
    return `${Math.floor(performance - time)} milliseconds`
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

const jiLog = (value?: any, label?: string, color?: string) => {
  return jilog.log(value, label, color)
}

const jiInfo = (value?: any, label?: string, color?: string) => {
  return jilog.info(value, label, color)
}

const jiWarn = (value?: any, label?: string, color?: string) => {
  return jilog.warn(value, label, color)
}

const jiError = (value?: any, label?: string, color?: string) => {
  return jilog.error(value, label, color)
}

export { jiLog, jiInfo, jiWarn, jiError }
