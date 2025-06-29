import { FeatureValue } from '@darkfeature/sdk-javascript'

export type { DarkFeatureConfig, DarkFeaturePlugin } from '@darkfeature/sdk-javascript'

export interface UseFeatureOptions<T extends FeatureValue = FeatureValue> {
  fallback?: T
  context?: Record<string, unknown>
  shouldFetch?: boolean
}

export interface UseFeaturesOptions<
  T extends Record<string, FeatureValue> = Record<string, FeatureValue>,
> {
  features: T
  context?: Record<string, unknown>
  shouldFetch?: boolean
}
