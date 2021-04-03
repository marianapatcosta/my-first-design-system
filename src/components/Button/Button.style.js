var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { baseStyles, disabledStyles, truncateStyles, colors, } from '../../styles';
var sizeStyles = {
    small: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    max-width: 4rem;\n    font-size: 90%;\n    padding: 0.3rem 0.625rem;\n  "], ["\n    max-width: 4rem;\n    font-size: 90%;\n    padding: 0.3rem 0.625rem;\n  "]))),
    medium: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    max-width: 8rem;\n    font-size: 100%;\n    padding: 0.625rem 1.25rem;\n  "], ["\n    max-width: 8rem;\n    font-size: 100%;\n    padding: 0.625rem 1.25rem;\n  "]))),
    large: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    max-width: 12rem;\n    font-size: 100%;\n    padding: 0.625rem 1.25rem;\n  "], ["\n    max-width: 12rem;\n    font-size: 100%;\n    padding: 0.625rem 1.25rem;\n  "]))),
};
export var StyledButton = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  border: 0.063rem solid ", ";\n  border-radius: 0.2rem;\n  background-color: ", ";\n  color: ", ";\n  box-sizing: content-box;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.75;\n  }\n\n  :disabled,\n  :hover:disabled,\n  :active:disabled {\n    ", "\n  }\n\n  ", "\n\n  ", "\n"], ["\n  ", ";\n  ", ";\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  border: 0.063rem solid ", ";\n  border-radius: 0.2rem;\n  background-color: ", ";\n  color: ", ";\n  box-sizing: content-box;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.75;\n  }\n\n  :disabled,\n  :hover:disabled,\n  :active:disabled {\n    ", "\n  }\n\n  ",
    "\n\n  ",
    "\n"])), baseStyles, function (_a) {
    var size = _a.size;
    return size && sizeStyles[size];
}, colors.highlight, colors.transparent, colors.highlight, disabledStyles, function (_a) {
    var primary = _a.primary;
    return primary &&
        "\n      color: " + colors.white + ";\n      background-color: " + colors.highlight + ";\n    ";
}, function (_a) {
    var isFullLength = _a.isFullLength;
    return isFullLength &&
        " max-width: 100%;\n      width: 100%;\n      font-size: 100%;\n\n    ";
});
export var StyledButtonLabel = styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n  user-select: none;\n\n  ", "\n"], ["\n  ", ";\n  user-select: none;\n\n  ",
    "\n"])), truncateStyles, function (_a) {
    var hasIcon = _a.hasIcon;
    return hasIcon &&
        "\n  line-height: 1rem;";
});
export var StyledButtonIcon = styled.img(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 1rem;\n  user-select: none;\n\n  ", "\n"], ["\n  width: 1rem;\n  user-select: none;\n\n  ", "\n"])), function (_a) {
    var label = _a.label;
    return label && "margin-right: 0.5rem;";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
