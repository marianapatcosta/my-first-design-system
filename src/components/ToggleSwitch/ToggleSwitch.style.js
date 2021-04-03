var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles, disabledStyles, truncateStyles, colors, } from '../../styles';
export var StyledToggleSwitch = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  display: flex;\n  align-items: center;\n  height: auto;\n  width: auto;\n  font-size: 95%;\n  color: ", ";\n  font-style: italic;\n  ", ";\n\n  ", "\n"], ["\n  ", "\n  display: flex;\n  align-items: center;\n  height: auto;\n  width: auto;\n  font-size: 95%;\n  color: ", ";\n  font-style: italic;\n  ", ";\n\n  ", "\n"])), baseStyles, colors.highlight, truncateStyles, function (_a) {
    var disabled = _a.disabled;
    return disabled && disabledStyles + " color: " + colors.disabled;
});
export var StyledToggleSwitchLabel = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  line-height: 0.75rem;\n  padding: 0 0.125rem;\n  align-self: center;\n  white-space: nowrap;\n  user-select: none;\n  cursor: pointer;\n  font-size: 90%;\n  font-weight: 700;\n\n  ", "\n"], ["\n  line-height: 0.75rem;\n  padding: 0 0.125rem;\n  align-self: center;\n  white-space: nowrap;\n  user-select: none;\n  cursor: pointer;\n  font-size: 90%;\n  font-weight: 700;\n\n  ", "\n"])), function (_a) {
    var disabled = _a.disabled;
    return disabled && "" + disabledStyles;
});
export var StyledToggleSwitchSlider = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  border-radius: 2rem;\n  border: 0.063rem solid ", ";\n  cursor: pointer;\n  height: 1rem;\n  width: 2.4rem;\n  line-height: 85%;\n  position: relative;\n  padding: 0.125rem;\n  margin: 0.125rem;\n  transition: 0.4s;\n  -webkit-transition: 0.4s;\n\n  :hover {\n    opacity: 0.75;\n  }\n\n  :before {\n    background-color: ", ";\n    opacity: 0.5;\n    border-radius: 50%;\n    content: '';\n    height: 1.25rem;\n    width: 1.25rem;\n    left: -0.063rem;\n    bottom: 0.015rem;\n    position: absolute;\n    transition: 0.4s;\n    -webkit-transition: 0.4s;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    -ms-border-radius: 50%;\n    -o-border-radius: 50%;\n  }\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  border-radius: 2rem;\n  border: 0.063rem solid ", ";\n  cursor: pointer;\n  height: 1rem;\n  width: 2.4rem;\n  line-height: 85%;\n  position: relative;\n  padding: 0.125rem;\n  margin: 0.125rem;\n  transition: 0.4s;\n  -webkit-transition: 0.4s;\n\n  :hover {\n    opacity: 0.75;\n  }\n\n  :before {\n    background-color: ", ";\n    opacity: 0.5;\n    border-radius: 50%;\n    content: '';\n    height: 1.25rem;\n    width: 1.25rem;\n    left: -0.063rem;\n    bottom: 0.015rem;\n    position: absolute;\n    transition: 0.4s;\n    -webkit-transition: 0.4s;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    -ms-border-radius: 50%;\n    -o-border-radius: 50%;\n  }\n\n  ", "\n\n  ",
    "\n"])), colors.highlight, colors.highlight, function (_a) {
    var label = _a.label;
    return label && "margin-left: 0.5rem;";
}, function (_a) {
    var checked = _a.checked;
    return checked &&
        "\n      background-color: " + colors.secondary + ";\n\n      :before {\n        opacity: 1;\n        transform: translateX(1.5rem);\n      }\n    ";
});
export var StyledToggleInput = styled.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n\n  // when focus, adds a border to its sibling StyledToggleSwitchSlider\n  :focus-visible + ", " {\n    outline: 0.125rem solid ", ";\n  }\n\n  :focus:not(:focus-visible) + ", " {\n    outline: none;\n  }\n"], ["\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n\n  // when focus, adds a border to its sibling StyledToggleSwitchSlider\n  :focus-visible + ", " {\n    outline: 0.125rem solid ", ";\n  }\n\n  :focus:not(:focus-visible) + ", " {\n    outline: none;\n  }\n"])), StyledToggleSwitchSlider, colors.highlight, StyledToggleSwitchSlider);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
