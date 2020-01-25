import { createModule } from "direct-vuex"
import { moduleActionContext } from "./index"
import { AllSlides, TitleConfig } from '@/components/slides/grpc/SlideConfigs';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export interface LoadingError<T> {
    value: T;
    error: boolean;
    loading: boolean;
}

export interface SlideState {
    currentSlide: SlideConfig;
    currentSubSlide: number;
    currentSlideOrder: number;
    maxSlides: number;

    presentationActive: LoadingError<boolean>;
    isPresenting: boolean;
    isFollowing: boolean;
}

export interface SlideConfig {
    maxSubSlides: number;
    name: string;
}

const slides = createModule({
    namespaced: true,
    state: (): SlideState => {
        return {
            currentSlide: TitleConfig,
            currentSubSlide: 0,
            currentSlideOrder: 0,
            maxSlides: AllSlides.length - 1,
            presentationActive: {
                loading: false,
                error: false,
                value: false
            },
            isPresenting: false,
            isFollowing: false,
        }
    },
    getters: {
        currentSlide(state) {
            return state.currentSlide;
        },
        currentSub(state) {
            return state.currentSubSlide;
        },
        canNavigateForward(state) {
            return state.currentSlideOrder < state.maxSlides;
        },
        canNavigateBackwards(state) {
            return state.currentSlideOrder > 0;
        },
        canNavigateSubForward(state) {
            if (state.currentSlideOrder < state.maxSlides) {
                return true;
            }
            return state.currentSubSlide < state.currentSlide.maxSubSlides;
        },
        canNavigateSubBackwards(state) {
            if (state.currentSlideOrder > 0) {
                return true;
            }

            return state.currentSubSlide > 0;
        },
        currentSlideRoute(state) {
            return `/slides/${state.currentSlide.name}/${state.currentSubSlide.toFixed(0)}`;
        },
        nextSlideRoute(state) {
            if (state.currentSlideOrder >= state.maxSlides) {
                return `/slides/${AllSlides[AllSlides.length - 1].name}/${AllSlides[AllSlides.length - 1].maxSubSlides}`;
            }

            return `/slides/${AllSlides[state.currentSlideOrder + 1].name}/0`;
        },
        nextSubSlideRoute(state) {
            if (state.currentSlideOrder >= state.maxSlides) {
                return `/slides/${AllSlides[AllSlides.length - 1].name}/${AllSlides[AllSlides.length - 1].maxSubSlides}`;
            }

            if (state.currentSubSlide >= state.currentSlide.maxSubSlides) {
                return `/slides/${AllSlides[state.currentSlideOrder + 1].name}/0`;
            }

            return `/slides/${AllSlides[state.currentSlideOrder + 1].name}/${state.currentSubSlide + 1}`;
        },
        previousSlideRoute(state) {
            if (state.currentSlideOrder <= 1) {
                return `/slides/${AllSlides[0].name}/0`;
            }

            return `/slides/${AllSlides[state.currentSlideOrder - 1].name}/0`;
        },
        previousSubSlideRoute(state) {
            if (state.currentSubSlide <= 0) {
                if (state.currentSlideOrder <= 0) {
                    return `/slides/${AllSlides[0].name}/0`;
                } else {
                    return `/slides/${AllSlides[state.currentSlideOrder - 1].name}/${AllSlides[state.currentSlideOrder - 1].maxSubSlides}`;
                }

            }

            return `/slides/${AllSlides[state.currentSlideOrder].name}/${state.currentSubSlide - 1}`;
        },
        slideOrder(state) {
            return (name: string) => {
                return AllSlides.findIndex(x => x.name === name);
            }
        },
        slideConfig(state) {
            return (name: string) => {
                return AllSlides.find(x => x.name === name);
            }
        },
        presentationActive(state) {
            return state.presentationActive;
        },
        isPresenting(state) {
            return state.isPresenting;
        },
        isFollowing(state) {
            return state.isFollowing;
        },
    },
    mutations: {
        SET_CurrentSlide(state, slide: SlideConfig) {
            state.currentSlide = slide;
        },
        SET_CurrentSlideOrder(state, slideOrder: number) {
            state.currentSlideOrder = slideOrder;
        },
        SET_CurrentSubSlide(state, subSlide: number) {
            state.currentSubSlide = subSlide;
        },
        SET_IsPresenting(state, value: boolean) {
            state.isPresenting = value;
        },
        SET_PresentationActive(state, payload: { value?: boolean, loading?: boolean, error?: boolean }) {
            if (payload.value !== undefined) {
                state.presentationActive.loading = false;
                state.presentationActive.error = false;
                state.presentationActive.value = payload.value;
            } else if (payload.loading !== undefined) {
                state.presentationActive.loading = payload.loading;
                if (state.presentationActive.loading) {
                    state.presentationActive.error = false;
                }
            } else if (payload.error !== undefined) {
                state.presentationActive.error = payload.error;
                if (state.presentationActive.error) {
                    state.presentationActive.loading = false;
                }
            } else {
                // This is a validation error
            }
        },
    },
    actions: {
        async navigateSubSlide(ctx, payload: { forward?: boolean, value?: number }): Promise<false | string> {
            if (payload.forward !== undefined && payload.value !== undefined) {
                return false;
            }
            const context = slidesActionContext(ctx);
            const currentSubSlide = context.state.currentSubSlide;

            if (payload.forward !== undefined) {
                if (!payload.forward && context.state.currentSubSlide >= 0 && !context.getters.canNavigateBackwards) {
                    return false;
                }
            }

            let nextSubSlide = 0;
            if (payload.forward !== undefined) {
                nextSubSlide = currentSubSlide + (payload.forward ? 1 : -1);
            } else if (payload.value !== undefined) {
                nextSubSlide = payload.value;
            } else {
                return false;
            }

            if (nextSubSlide > context.state.currentSlide.maxSubSlides) {
                return context.dispatch.navigateOne({ forward: true });
            }
            if (nextSubSlide < 0) {
                return context.dispatch.navigateOne({ forward: false, subSlideEnd: true });
            }

            if (context.state.currentSubSlide === nextSubSlide) {
                return false;
            }
            context.commit.SET_CurrentSubSlide(nextSubSlide);
            return context.getters.currentSlideRoute;
        },
        navigateOne(ctx, payload: { forward: boolean, subSlideEnd?: boolean }): false | string {
            const context = slidesActionContext(ctx);
            const currentSlide = context.state.currentSlideOrder;

            if (payload.forward && !context.getters.canNavigateForward) {
                return false;
            } else if (!payload.forward && !context.getters.canNavigateBackwards) {
                return false;
            }
            const nextSlideIndex = currentSlide + (payload.forward ? 1 : -1);
            let slideConfig: SlideConfig;
            if (nextSlideIndex < 0) {
                slideConfig = AllSlides[0];
            } else if (nextSlideIndex >= AllSlides.length) {
                slideConfig = AllSlides[AllSlides.length - 1];
            } else {
                slideConfig = AllSlides[nextSlideIndex];
            }

            context.commit.SET_CurrentSlide(slideConfig);
            const slideOrder = context.getters.slideOrder(slideConfig.name);
            context.commit.SET_CurrentSlideOrder(slideOrder);
            context.commit.SET_CurrentSubSlide(payload.subSlideEnd ? slideConfig.maxSubSlides : 0);
            return context.getters.currentSlideRoute;
        },
        initializeOnSlide(ctx, payload: { slide: string, subSlide: number }) {
            const context = slidesActionContext(ctx);
            let slideConfig = context.getters.slideConfig(payload.slide);
            if (!slideConfig) {
                slideConfig = AllSlides[0];
            }
            if (context.state.currentSlide.name !== payload.slide) {
                context.commit.SET_CurrentSlide(slideConfig);
            }
            let slideOrder = context.getters.slideOrder(payload.slide);
            context.commit.SET_CurrentSlideOrder(slideOrder);
            if (context.state.currentSubSlide !== payload.subSlide) {
                context.commit.SET_CurrentSubSlide(payload.subSlide);
            }
        },
        async getIsLoading(ctx): Promise<void> {
            const context = slidesActionContext(ctx);
            if (context.state.presentationActive.loading) {
                return;
            }

            try {
                context.state.presentationActive.loading = true;

                const api = await import(/* webpackChunkName: "api" */ "@/api/presentation_grpc_web_pb");
                const presentationClient = new api.PresentationPromiseClient("/presentations/");
                const empty = new google_protobuf_empty_pb.Empty();
                const response = await presentationClient.activePresentation(empty, {
                    'deadline': '3000'
                });

                context.state.presentationActive.error = response.getError();
                context.state.presentationActive.value = response.getIsactive();
            } catch {
                context.state.presentationActive.error = true;
            } finally {
                context.state.presentationActive.loading = false;
            }
        },
    },
})

export default slides;
export const slidesActionContext = (context: any) => moduleActionContext(context, slides);