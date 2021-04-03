var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { keyframes, css } from 'styled-components';
import { baseStyles, colors } from '../../styles';
import { hexToRGB } from '../../utils/utils';
var scaleUp = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    width: 50vw;\n  } \n  100% {\n    width: 95vw;\n  }\n"], ["\n  0% {\n    width: 50vw;\n  } \n  100% {\n    width: 95vw;\n  }\n"])));
var scaleDown = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n   0% {\n    width: 100vw;\n  } \n  100% {\n    width: 100%;\n  }\n"], ["\n   0% {\n    width: 100vw;\n  } \n  100% {\n    width: 100%;\n  }\n"])));
export var StyledImageOverlay = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var isZoomedIn = _a.isZoomedIn;
    return isZoomedIn &&
        "\n      height: 100vh;\n      width: 100vw;\n      position: fixed;\n      top: 0;\n      left: 0;\n      background-color: " + hexToRGB(colors.shadow, 0.9) + ";\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      z-index: 100;\n    ";
});
export var StyledImage = styled.img(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  width: 100%;\n  box-shadow: 0 0.125rem 0.5rem ", ";\n  cursor: default;\n\n  ", "\n\n  ", "\n  \n  ", "\n      \n  ", "\n"], ["\n  ", "\n  width: 100%;\n  box-shadow: 0 0.125rem 0.5rem ", ";\n  cursor: default;\n\n  ", "\n\n  ",
    "\n  \n  ",
    "\n      \n  ",
    "\n"])), baseStyles, colors.shadow, function (_a) {
    var isLoaded = _a.isLoaded;
    return !isLoaded && "visibility: hidden;";
}, function (_a) {
    var isZoomedIn = _a.isZoomedIn, isZoomable = _a.isZoomable;
    return isZoomable &&
        (isZoomedIn
            ? css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          animation: ", " 1s forwards;\n          -webkit-animation: ", " 1s forwards;\n          cursor: zoom-out;\n        "], ["\n          animation: ", " 1s forwards;\n          -webkit-animation: ", " 1s forwards;\n          cursor: zoom-out;\n        "])), scaleUp, scaleUp) : "cursor: zoom-in;");
}, function (_a) {
    var wasImageClicked = _a.wasImageClicked, isZoomedIn = _a.isZoomedIn;
    return wasImageClicked &&
        !isZoomedIn && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      animation: ", " 0.3s forwards;\n      -webkit-animation: ", " 0.3s forwards;\n    "], ["\n      animation: ", " 0.3s forwards;\n      -webkit-animation: ", " 0.3s forwards;\n    "])), scaleDown, scaleDown);
}, function (_a) {
    var isClickable = _a.isClickable, isZoomable = _a.isZoomable;
    return isClickable && !isZoomable && "cursor: pointer;";
});
export var StyledImagePlaceholder = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: ", ";\n  position: relative;\n  overflow: hidden;\n  opacity: 0.5;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0.125rem 0.5rem ", ";\n"], ["\n  background-color: ", ";\n  position: relative;\n  overflow: hidden;\n  opacity: 0.5;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0.125rem 0.5rem ", ";\n"])), colors.secondary, colors.shadow);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
