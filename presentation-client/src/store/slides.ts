import { createModule } from "direct-vuex"
import { moduleActionContext } from "./index"

export interface SlideState {
    currentSlide: number;
    currentSubSlide: number;
    maxSubSlides: number;
    maxSlides: number;
}
const SubSlideLengths: number[] = [
    0, // 1
    4, // 2
    9, // 3
    0, // 4
    0, // 5
    0, // 6
    0, // 7
    0, // 8
    0, // 9
    0, // 10
];

const slides = createModule({
    namespaced: true,
    state: (): SlideState => {
        return {
            currentSlide: 1,
            currentSubSlide: 0,
            maxSubSlides: 0,
            maxSlides: 10,
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
            return state.currentSlide < state.maxSlides;
        },
        canNavigateBackwards(state) {
            return state.currentSlide > 1;
        },
        currentSlideRoute(state) {
            return `/slides/${state.currentSlide.toFixed(0)}/${state.currentSubSlide.toFixed(0)}`;
        },
        nextSlideRoute(state) {
            if (state.currentSlide >= state.maxSlides) {
                return `/slides/${state.maxSlides.toFixed(0)}}/0`;
            }

            return `/slides/${(state.currentSlide + 1).toFixed(0)}/0`;
        },
        previousSlideRoute(state) {
            if (state.currentSlide <= 1) {
                return '/slides/1/0';
            }

            return `/slides/${(state.currentSlide - 1).toFixed(0)}/0`;
        }
    },
    mutations: {
        SET_CurrentSlide(state, slideNumber: number) {
            state.currentSlide = slideNumber;
            state.maxSubSlides = SubSlideLengths[slideNumber - 1];
        },
        SET_CurrentSubSlide(state, subSlide: number) {
            state.currentSubSlide = subSlide;
        }
    },
    actions: {
        async navigateSubSlide(ctx, payload: {forward: boolean}): Promise<false | string> {
            const context = slidesActionContext(ctx);
            const currentSubSlide = context.state.currentSubSlide;
            
            if (!payload.forward && context.state.currentSubSlide >= 0 && !context.getters.canNavigateBackwards) {
                return false;
            }

            let nextSubSlide = currentSubSlide + (payload.forward ? 1 : -1);
            if (nextSubSlide > context.state.maxSubSlides) {
                return context.dispatch.navigateOne({forward: true});
            }
            if (nextSubSlide < 0) {
                return context.dispatch.navigateOne({forward: false, subSlideEnd: true});
            }

            context.commit.SET_CurrentSubSlide(nextSubSlide);
            return context.getters.currentSlideRoute;
        },

        navigateOne(ctx, payload: {forward: boolean, subSlideEnd?: boolean}): false | string {
            const context = slidesActionContext(ctx);
            const currentSlide = context.state.currentSlide;

            if (payload.forward && !context.getters.canNavigateForward) {
                return false;
            } else if (!payload.forward && !context.getters.canNavigateBackwards) {
                return false;
            }
            const nextSlide = currentSlide + (payload.forward ? 1 : -1);

            context.commit.SET_CurrentSlide(nextSlide);
            context.commit.SET_CurrentSubSlide(payload.subSlideEnd ? context.state.maxSubSlides : 0);
            return context.getters.currentSlideRoute;
        },
        navigateToSlide(ctx, payload: { slideNumber: number }): false | string {
            const context = slidesActionContext(ctx);
            if (payload.slideNumber < 0 || payload.slideNumber > context.state.maxSlides) {
                return false;
            }

            context.commit.SET_CurrentSlide(payload.slideNumber);
            return context.getters.currentSlideRoute;
        },
        initializeOnSlide(ctx, payload: { slide: number, subSlide: number}) {
            const context = slidesActionContext(ctx);
            if (context.state.currentSlide !== payload.slide) {
                context.commit.SET_CurrentSlide(payload.slide);
            }
            if (context.state.currentSubSlide !== payload.subSlide) {
                context.commit.SET_CurrentSubSlide(payload.subSlide);
            }
        }
    },
})

export default slides
export const slidesActionContext = (context: any) => moduleActionContext(context, slides)