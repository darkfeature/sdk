import { DarkFeaturePlugin } from './plugins/types'

export interface DarkFeatureConfig {
  apiKey: string
  baseUrl?: string
  context?: FeatureContext
  retry?: RetryConfig
  plugins?: DarkFeaturePlugin[]
}

export interface FeatureContext {
  [key: string]: unknown
}

export interface RetryConfig {
  enabled?: boolean
  maxAttempts?: number
  backoff?: number
}

export interface FeatureOptions<T extends FeatureValue = FeatureValue> {
  fallback?: T
  context?: FeatureContext
}

export interface FeaturesOptions<
  T extends Record<string, FeatureValue> = Record<string, FeatureValue>,
> {
  features: T
  context?: FeatureContext
}

export type FeatureValue = string | number | boolean | null
