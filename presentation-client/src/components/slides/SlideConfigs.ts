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

export const UseCasesMicroService: SlideConfig = {
  maxSubSlides: 22,
  name: 'UseCase-MicroService'
};

export const UseCasesVersioning: SlideConfig = {
  maxSubSlides: 3,
  name: 'UseCase-Versioning'
}

export const TechnicalDetailsWorkflow: SlideConfig = {
  maxSubSlides: 4,
  name: 'TechnicalDetailsWorkflow'
}

export const TechnicalDetailsWireFormat: SlideConfig = {
  maxSubSlides: 4,
  name: 'TechnicalDetailsWireFormat'
};

export const TechnicalDetailsLibraryStructure: SlideConfig = {
  maxSubSlides: 4,
  name: 'TechnicalDetailsLibraryStructure'
};

export const AllSlides: ReadonlyArray<SlideConfig> = [
  TitleConfig,
  GRPCConfig,
  FeaturesConfig,
  UseCasesMicroService,
  UseCasesVersioning,
  TechnicalDetailsWorkflow,
  TechnicalDetailsWireFormat,
  TechnicalDetailsLibraryStructure,
];