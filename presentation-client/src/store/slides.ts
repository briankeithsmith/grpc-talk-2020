import { createModule } from "direct-vuex"
import { moduleActionContext } from "./index"
import { AllSlides, TitleConfig } from '@/components/slides/grpc/SlideConfigs';
import * as asyncLibs from '@/async-libs';

export interface LoadingErrorBase {
    error: boolean;
    loading: boolean;
}

export interface LoadingError<T> extends LoadingErrorBase {
    value: T;
    error: boolean;
    loading: boolean;
}

interface LoadingErrorWithMessage<T> extends LoadingError<T> {
    errorMessage: string;
}

type ThenArg<T> = T extends PromiseLike<infer U> ? U : never;
type PresClient = import("@/api").PresentationPromiseClient;

export interface SlideState {
    currentSlide: SlideConfig;
    currentSubSlide: number;
    currentSlideOrder: number;
    password: string;
    maxSlides: number;

    presentationActive: LoadingError<boolean>;
    isPresenting: boolean;
    isFollowing: LoadingError<boolean>;
    startingPresentation: LoadingErrorWithMessage<boolean>;

    client: PresClient | undefined;
    clientPromise: Promise<PresClient> | undefined;
    leaveCallback: (() => void) | undefined;
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
            password: '',
            presentationActive: {
                loading: false,
                error: false,
                value: false
            },
            isPresenting: false,
            isFollowing: {
                value: false,
                loading: false,
                error: false
            },
            startingPresentation: {
                loading: false,
                error: false,
                errorMessage: '',
                value: false,
            },
            clientPromise: undefined,
            client: undefined,
            leaveCallback: undefined,
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
        presentationClient(state) {
            if (state.client) {
                return Promise.resolve(state.client);
            }
            if (state.clientPromise) {
                return state.clientPromise;
            }

            state.clientPromise = new Promise<PresClient>(async (resolve, reject) => {
                try {
                    const api = await asyncLibs.api();
                    const client = new api.PresentationPromiseClient("/presentations/api");
                    resolve(client);
                } catch (e) {
                    reject(e);
                }
            });
            return state.clientPromise;
        }
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
            if (state.isPresenting) {
                state.isFollowing.value = false;
            }
        },
        SET_IsFollowing(state, payload: { value?: boolean, loading?: boolean, error?: boolean }) {
            if (payload.value !== undefined) {
                state.isFollowing.loading = false;
                state.isFollowing.error = false;
                state.isFollowing.value = payload.value;
                if (state.isFollowing.value) {
                    state.isPresenting = false;
                }
            } else if (payload.loading !== undefined) {
                state.isFollowing.loading = payload.loading;
                if (state.isFollowing.loading) {
                    state.isFollowing.error = false;
                }
            } else if (payload.error !== undefined) {
                state.isFollowing.error = payload.error;
                if (state.isFollowing.error) {
                    state.isFollowing.loading = false;
                }
            } else {
                // This is a validation error
            }
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
            if (context.state.isPresenting) {
                context.dispatch.updateServer();
            }
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
            if (context.state.isPresenting) {
                context.dispatch.updateServer();
            }
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
        async checkForActive(ctx): Promise<void> {
            const context = slidesActionContext(ctx);
            if (context.state.presentationActive.loading) {
                return;
            }

            try {
                context.state.presentationActive.loading = true;

                const presentationClient = await context.getters.presentationClient;
                const api = await asyncLibs.api();
                const empty = new api.Empty();
                const response = await presentationClient.getPresentation(empty, api.WithDeadline(3));

                context.state.presentationActive.error = response.getError();
                const currentPresentation = response.getCurrent();
                if (currentPresentation) {
                    context.state.presentationActive.value = currentPresentation.getIsactive();
                } else {
                    context.state.presentationActive.value = false;
                }
            } catch {
                context.state.presentationActive.error = true;
            } finally {
                context.state.presentationActive.loading = false;
            }
        },
        async startPresenting(ctx, payload: { password: string }): Promise<boolean> {
            const context = slidesActionContext(ctx);

            try {
                context.state.password = payload.password;
                context.commit.SET_IsPresenting(true);
                const response = await context.dispatch.updateServer();
                if (!response) {
                    context.commit.SET_IsPresenting(false);
                    return false;
                }
                return true;
            } catch (e) {
                context.state.startingPresentation.error = true;
                context.state.startingPresentation.errorMessage = typeof (e) === 'string' ? e : 'Error while calling api';
                context.commit.SET_IsPresenting(false);
                return false;
            } finally {
                context.state.startingPresentation.loading = false;
            }
        },
        stopPresentation(ctx): Promise<boolean> {
            const context = slidesActionContext(ctx);
            context.commit.SET_IsPresenting(false);
            return context.dispatch.updateServer();
        },
        async updateServer(ctx): Promise<boolean> {
            const context = slidesActionContext(ctx);
            try {
                const api = await asyncLibs.api();
                const client = await context.getters.presentationClient;
                const request = new api.UpdatePresentationRequest();
                request.setIsactive(context.state.isPresenting);
                request.setPassword(context.state.password);
                request.setSlidename(context.state.currentSlide.name);
                request.setSubslide(context.state.currentSubSlide);

                const response = await client.upsertPresentation(request, api.WithDeadline(1));
                return !response.getError();
            } catch (e) {
                return false;
            }
        },
        async joinPresentation(ctx) {
            const context = slidesActionContext(ctx);
            try {

                context.commit.SET_IsFollowing({loading: true});
                const client = await context.getters.presentationClient;
                const api = await asyncLibs.api();
                const presentationStream = await client.joinPresentation(new api.Empty());

                let allowUpdate = true;
                presentationStream.on('error', (error) => {
                    if (!allowUpdate) {
                        return;
                    }
                    setTimeout(() => {
                        context.dispatch.joinPresentation();
                    }, 1500);
                    context.commit.SET_IsFollowing({value: false});
                });
                presentationStream.on('data', (update) => {
                    if (!allowUpdate) {
                        return;
                    }

                    context.commit.SET_IsFollowing({value: true});
                    context.commit.SET_IsFollowing({loading: false});

                    context.dispatch.initializeOnSlide({
                        slide: update.getSlidename(),
                        subSlide: update.getSubslide()
                    });
                });
                presentationStream.on('end', () => {
                    if (!allowUpdate) {
                        return;
                    }
                    context.commit.SET_IsFollowing({value: false});
                });
                context.state.leaveCallback = () => {
                    allowUpdate = false;
                    context.commit.SET_IsFollowing({value: false});
                    context.state.leaveCallback = undefined;
                    presentationStream.cancel();
                }

            } catch {
                context.commit.SET_IsFollowing({error: true});
            }
        },
        async leavePresentation(ctx) {
            const context = slidesActionContext(ctx);
            if (context.state.leaveCallback) {
                context.state.leaveCallback();
            }
        }
    },
})

export default slides;
export const slidesActionContext = (context: any) => moduleActionContext(context, slides);