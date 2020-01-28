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
  maxSubSlides: 4,
  name: 'UseCase-Versioning'
}

export const TechnicalDetailsWorkflow: SlideConfig = {
  maxSubSlides: 9,
  name: 'TechnicalDetails-Workflow'
}

export const TechnicalDetailsWireFormat: SlideConfig = {
  maxSubSlides: 4,
  name: 'TechnicalDetails-WireFormat'
};

export const TechnicalDetailsLibraryStructure: SlideConfig = {
  maxSubSlides: 2,
  name: 'TechnicalDetails-LibraryStructure'
};

export const Limitations: SlideConfig = {
  maxSubSlides: 6,
  name: 'Limitations'
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
  Limitations,
];