import { SlideConfig } from '@/store/slides';

export const TitleConfig: SlideConfig = {
  maxSubSlides: 0,
  name: 'Title'
};

export const GRPCConfig: SlideConfig = {
  maxSubSlides: 4,
  name: 'GRPC'
};

export const FeaturesConfig: SlideConfig = {
  maxSubSlides: 21,
  name: 'Features'
};

export const UseCasesConfig: SlideConfig = {
  maxSubSlides: 4,
  name: 'UseCases'
};

export const AllSlides: ReadonlyArray<SlideConfig> = [
  TitleConfig,
  GRPCConfig,
  FeaturesConfig,
  UseCasesConfig,
];