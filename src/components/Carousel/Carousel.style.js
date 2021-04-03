var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles, colors } from '../../styles';
import { Image } from '../Image/Image';
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch';
export var StyledCarousel = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"], ["\n  ", "\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"])), baseStyles);
export var StyledCarouselContent = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n"])));
export var StyledCarouselHeader = styled.header(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem 0;\n  height: 1.25;\n  line-height: 1.25;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem 0;\n  height: 1.25;\n  line-height: 1.25;\n  width: 100%;\n"])));
export var StyledCarouselTitle = styled.h2(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 150%;\n  font-weight: 400;\n  margin: 0;\n"], ["\n  color: ", ";\n  font-size: 150%;\n  font-weight: 400;\n  margin: 0;\n"])), colors.highlight);
export var StyledCarouselToggle = styled(ToggleSwitch)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  align-self: flex-end;\n"], ["\n  align-self: flex-end;\n"])));
export var StyledChevron = styled.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border: none;\n  background: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  position: absolute;\n  border: 0.063rem solid ", ";\n  border-radius: 50%;\n  top: 50%;\n  bottom: 50%;\n  margin: auto 0;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  cursor: pointer;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n\n  :focus:not(:focus-visible) {\n    border-color: ", ";\n  }\n\n  ", ";\n\n  :hover {\n    ", ";\n  }\n"], ["\n  border: none;\n  background: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  position: absolute;\n  border: 0.063rem solid ", ";\n  border-radius: 50%;\n  top: 50%;\n  bottom: 50%;\n  margin: auto 0;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  cursor: pointer;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n\n  :focus:not(:focus-visible) {\n    border-color: ", ";\n  }\n\n  ",
    ";\n\n  :hover {\n    ",
    ";\n  }\n"])), colors.transparent, colors.transparent, function (_a) {
    var isLeftChevron = _a.isLeftChevron;
    return isLeftChevron
        ? "left: 0.125rem;\n    transform: rotate(90deg);\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    -o-transform: rotate(90deg);"
        : "right: 0.125rem; transform: rotate(-90deg);\n      -webkit-transform: rotate(-90deg);\n      -moz-transform: rotate(-90deg);\n      -ms-transform: rotate(-90deg);\n      -o-transform: rotate(-90deg);";
}, function (_a) {
    var isLeftChevron = _a.isLeftChevron;
    return isLeftChevron
        ? "left: 0.125rem;\n      transform: rotate(90deg) scale(1.3);\n      -webkit-transform: rotate(90deg) scale(1.3);\n      -moz-transform: rotate(90deg)scale(1.3);\n      -ms-transform: rotate(90deg)scale(1.3);\n      -o-transform: rotate(90deg)scale(1.3);"
        : "right: 0.125rem; transform: rotate(-90deg)scale(1.3);\n        -webkit-transform: rotate(-90deg)scale(1.3);\n        -moz-transform: rotate(-90deg)scale(1.3);\n        -ms-transform: rotate(-90deg)scale(1.3);\n        -o-transform: rotate(-90deg);";
});
export var StyledCarouselSelected = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
export var StyledImageWrapper = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: relative;\n  height: 15rem;\n  width: 21.25rem;\n\n  ", "\n"], ["\n  position: relative;\n  height: 15rem;\n  width: 21.25rem;\n\n  ",
    "\n"])), function (_a) {
    var isVertical = _a.isVertical;
    return isVertical &&
        "  height: 21.25rem;\n  width: 15rem;";
});
export var StyledImage = styled(Image)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  border-radius: 1rem;\n  -webkit-border-radius: 1rem;\n  -moz-border-radius: 1rem;\n  -ms-border-radius: 1rem;\n  -o-border-radius: 1rem;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 1.5s ease-in-out 0s;\n  ", ";\n"], ["\n  border-radius: 1rem;\n  -webkit-border-radius: 1rem;\n  -moz-border-radius: 1rem;\n  -ms-border-radius: 1rem;\n  -o-border-radius: 1rem;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 1.5s ease-in-out 0s;\n  ",
    ";\n"])), function (_a) {
    var isSelected = _a.isSelected;
    return isSelected &&
        "\n  opacity: 1;\n  visibility: visible; ";
});
export var StyledIndicatorBar = styled.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 0.5rem;\n  z-index: 1;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 0.5rem;\n  z-index: 1;\n"])));
export var StyledIndicatorBarItem = styled.button(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  border: none;\n  background: none;\n  display: inline;\n  border: 0.0625rem solid ", ";\n  height: 0.65rem;\n  width: 0.65rem;\n  margin: 0 0.2rem;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n\n  &:before {\n    position: absolute;\n    content: '';\n    width: 0;\n    height: 100%;\n    top: 0;\n    left: 0;\n    transition: width 0.5s ease-in-out;\n    background-color: ", ";\n\n    ", ";\n  }\n"], ["\n  border: none;\n  background: none;\n  display: inline;\n  border: 0.0625rem solid ", ";\n  height: 0.65rem;\n  width: 0.65rem;\n  margin: 0 0.2rem;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n\n  &:before {\n    position: absolute;\n    content: '';\n    width: 0;\n    height: 100%;\n    top: 0;\n    left: 0;\n    transition: width 0.5s ease-in-out;\n    background-color: ", ";\n\n    ",
    ";\n  }\n"])), colors.primary, colors.primary, function (_a) {
    var isFilled = _a.isFilled;
    return isFilled &&
        "\n        width: 100%; \n        transition: width 0.5s ease-in-out;";
});
export var StyledPreviews = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
export var StyledImagePreview = styled(Image)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  width: 8.75rem;\n  height: 6.25rem;\n  border-radius: 1rem;\n  margin: 0.5rem;\n  cursor: pointer;\n  opacity: 0.75;\n  box-shadow: 0 0.25rem 0.625rem ", ";\n  -webkit-border-radius: 1rem;\n  -moz-border-radius: 1rem;\n  -ms-border-radius: 1rem;\n  -o-border-radius: 1rem;\n  padding: 0;\n\n  ", "\n\n  :hover {\n    opacity: 1;\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -o-transform: scale(1.1);\n  }\n"], ["\n  width: 8.75rem;\n  height: 6.25rem;\n  border-radius: 1rem;\n  margin: 0.5rem;\n  cursor: pointer;\n  opacity: 0.75;\n  box-shadow: 0 0.25rem 0.625rem ", ";\n  -webkit-border-radius: 1rem;\n  -moz-border-radius: 1rem;\n  -ms-border-radius: 1rem;\n  -o-border-radius: 1rem;\n  padding: 0;\n\n  ",
    "\n\n  :hover {\n    opacity: 1;\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -o-transform: scale(1.1);\n  }\n"])), colors.shadow, function (_a) {
    var isVertical = _a.isVertical;
    return isVertical &&
        "  width: 6.25rem;\n    height: 8.75rem;";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
