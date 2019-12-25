import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    customImage: require('../assets/img/bridge.jpg'),
    fitToWidth: true,
    fitToHeight: false,
    alignToTop: false,
    alignToBottom: false,
    alignToCenterVertical: true,
    alignToLeft: false,
    alignToRight: false,
    alignToCenterHorizontal: true,
    isLight: true,
    isDark: false,
  },
  mutations: {
    changeCustomImage(state, customImage) {
      state.customImage = customImage;
    },
    changeFitToWidth(state, fitToWidth) {
      state.fitToWidth = fitToWidth;
    },
    changeFitToHeight(state, fitToHeight) {
      state.fitToHeight = fitToHeight;
    },
    changeAlignToTop(state, alignToTop) {
      state.alignToTop = alignToTop;
    },
    changeAlignToBottom(state, alignToBottom) {
      state.alignToBottom = alignToBottom;
    },
    changeAlignToCenterVertical(state, alignToCenterVertical) {
      state.alignToCenterVertical = alignToCenterVertical;
    },
    changeAlignToLeft(state, alignToLeft) {
      state.alignToLeft = alignToLeft;
    },
    changeAlignToRight(state, alignToRight) {
      state.alignToRight = alignToRight;
    },
    changeAlignToCenterHorizontal(state, alignToCenterHorizontal) {
      state.alignToCenterHorizontal = alignToCenterHorizontal;
    },
    changeIsLight(state, isLight) {
      state.isLight = isLight;
    },
    changeIsDark(state, isDark) {
      state.isDark = isDark;
    },
  },
  getters: {
    customImage: state => state.customImage,
    alignToTop: state => state.alignToTop,
    alignToBottom: state => state.alignToBottom,
    alignToCenterVertical: state => state.alignToCenterVertical,
    alignToLeft: state => state.alignToLeft,
    alignToRight: state => state.alignToRight,
    alignToCenterHorizontal: state => state.alignToCenterHorizontal,
    isLight: state => state.isLight,
    isDark: state => state.isDark,
  }
});
