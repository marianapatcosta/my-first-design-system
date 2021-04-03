var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles, disabledStyles, colors, truncateStyles, } from '../../styles';
export var StyledCheckbox = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  display: flex;\n  width: 100%;\n  font-size: 95%;\n  color: ", ";\n\n  ", "\n"], ["\n  ", ";\n  ", ";\n  display: flex;\n  width: 100%;\n  font-size: 95%;\n  color: ", ";\n\n  ", "\n"])), baseStyles, truncateStyles, colors.highlight, function (_a) {
    var disabled = _a.disabled;
    return disabled && "color: " + colors.disabled + ";";
});
export var StyledCheckboxToggleTick = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 1rem;\n  height: 1rem;\n  ", ";\n"], ["\n  width: 1rem;\n  height: 1rem;\n  ", ";\n"])), colors.iconHighlight);
export var StyledCheckboxToggle = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  width: 1rem;\n  height: 1rem;\n  margin: 0.125rem;\n  margin-right: 0.5rem;\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  border-radius: 0.2rem;\n  background-color: ", ";\n  transition: background-color 0.5s ease-in-out;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.75;\n  }\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  position: relative;\n  width: 1rem;\n  height: 1rem;\n  margin: 0.125rem;\n  margin-right: 0.5rem;\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  border-radius: 0.2rem;\n  background-color: ", ";\n  transition: background-color 0.5s ease-in-out;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.75;\n  }\n\n  ",
    "\n"])), colors.shadow, colors.primary, function (_a) {
    var disabled = _a.disabled;
    return disabled &&
        "\n      background-color: " + colors.disabled + ";\n      " + disabledStyles + "\n    ";
});
export var StyledCheckboxInput = styled.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n\n  :checked + ", " {\n    background-color: ", ";\n  }\n\n  // when focus, adds a border to its sibling StyledCheckboxToggle\n  :focus-visible + ", " {\n    outline: 0.125rem solid ", ";\n  }\n\n  :focus:not(:focus-visible) + ", " {\n    outline: none;\n  }\n"], ["\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n\n  :checked + ", " {\n    background-color: ", ";\n  }\n\n  // when focus, adds a border to its sibling StyledCheckboxToggle\n  :focus-visible + ", " {\n    outline: 0.125rem solid ", ";\n  }\n\n  :focus:not(:focus-visible) + ", " {\n    outline: none;\n  }\n"])), StyledCheckboxToggle, colors.highlight, StyledCheckboxToggle, colors.highlight, StyledCheckboxToggle);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
