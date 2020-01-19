import { createModule } from "direct-vuex"
import { moduleActionContext } from "./index"

export interface Mod1State {
    currentSlide: number;
    maxSlides: number;
}

const slides = createModule({
    namespaced: true,
    state: (): Mod1State => {
        return {
            currentSlide: 1,
            maxSlides: 10,
        }
    },
    getters: {
        currentSlide(state) {
            return state.currentSlide;
        },
        canNavigateForward(state) {
            return state.currentSlide < state.maxSlides;
        },
        canNavigateBackwards(state) {
            return state.currentSlide > 1;
        },
        currentSlideRoute(state) {
            return `/slides/${state.currentSlide.toFixed(0)}`;
        },
        nextSlideRoute(state) {
            if (state.currentSlide >= state.maxSlides) {
                return `/slides/${state.maxSlides.toFixed(0)}}`;
            }

            return `/slides/${(state.currentSlide + 1).toFixed(0)}`;
        },
        previousSlideRoute(state) {
            if (state.currentSlide <= 1) {
                return '/slides/1';
            }

            return `/slides/${(state.currentSlide - 1).toFixed(0)}`;
        }
    },
    mutations: {
        SET_CurrentSlide(state, slideNumber: number) {
            state.currentSlide = slideNumber;
        }
    },
    actions: {
        navigateOne(ctx, payload: {forward: boolean}): false | string {
            const context = slidesActionContext(ctx);
            const currentSlide = context.state.currentSlide;

            if (payload.forward && !context.getters.canNavigateForward) {
                return false;
            } else if (!payload.forward && !context.getters.canNavigateBackwards) {
                return false;
            }
            const nextSlide = currentSlide + (payload.forward ? 1 : -1);

            context.commit.SET_CurrentSlide(nextSlide);
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
        initializeOnSlide(ctx, payload: { slideNumber: number}) {
            const context = slidesActionContext(ctx);
            context.commit.SET_CurrentSlide(payload.slideNumber);
        }
    },
})

export default slides
export const slidesActionContext = (context: any) => moduleActionContext(context, slides)