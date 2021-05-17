export interface IConfig {
  projectName: string
  version?: string
  reportCallback: Function
  immediatelyReport: Boolean
}

export interface IPerformanceNavigationTiming {
  dnsLookup?: number
  initialConnection?: number
  ssl?: number
  ttfb?: number
  contentDownload?: number
  domParse?: number
  resourceDownload?: number
}

export interface IMetrics {
  name: string
  value: any
}

export interface IWebVitals {}

export interface IReportHandler {
  (metrics: IMetrics | Array<IMetrics>): void
}
