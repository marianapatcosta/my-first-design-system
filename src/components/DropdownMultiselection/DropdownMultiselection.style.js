var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { keyframes } from 'styled-components';
import { baseStyles, disabledStyles, colors } from '../../styles';
var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: rotateX(-90deg);\n  }\n  70% {\n    transform: rotateX(20deg);\n  }\n  100% {\n    transform: rotateX(0deg);\n  }\n"], ["\n  0% {\n    transform: rotateX(-90deg);\n  }\n  70% {\n    transform: rotateX(20deg);\n  }\n  100% {\n    transform: rotateX(0deg);\n  }\n"])));
export var StyledDropdownMultiselection = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n  max-width: 10rem;\n"], ["\n  ", "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n  max-width: 10rem;\n"])), baseStyles);
export var StyledDropdownMultiselectionHeader = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.3rem 0.625rem;\n  font-size: 95%;\n  cursor: pointer;\n  box-shadow: 0 0.063rem 0.25rem ", ";\n\n  ", "\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.3rem 0.625rem;\n  font-size: 95%;\n  cursor: pointer;\n  box-shadow: 0 0.063rem 0.25rem ", ";\n\n  ", "\n"])), colors.shadow, function (_a) {
    var disabled = _a.disabled;
    return !!disabled && "" + disabledStyles;
});
export var StyledDropdownMultiselectionArrow = styled.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 0.8rem;\n  ", ";\n  transition: transform 0.5s ease-in-out;\n\n  ", "\n"], ["\n  width: 0.8rem;\n  ", ";\n  transition: transform 0.5s ease-in-out;\n\n  ",
    "\n"])), colors.icon, function (_a) {
    var isExpanded = _a.isExpanded;
    return !!isExpanded &&
        "transform: rotate(180deg);\n  transition: transform 0.5s linear;";
});
export var StyledDropdownMultiselectionOptions = styled.ul(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  border-top: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0.3rem;\n  width: 100%;\n  list-style: none;\n  max-height: 12.5rem;\n  overflow: auto;\n  animation: ", " 700ms ease-in forwards;\n  -webkit-animation: ", " 700ms ease-in forwards;\n  transform-origin: top center;\n  position: absolute;\n  z-index: 1;\n  top: 2rem;\n"], ["\n  background-color: ", ";\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  border-top: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0.3rem;\n  width: 100%;\n  list-style: none;\n  max-height: 12.5rem;\n  overflow: auto;\n  animation: ", " 700ms ease-in forwards;\n  -webkit-animation: ", " 700ms ease-in forwards;\n  transform-origin: top center;\n  position: absolute;\n  z-index: 1;\n  top: 2rem;\n"])), colors.primary, colors.shadow, rotate, rotate);
export var StyledDropdownMultiselectionOption = styled.li(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 0.3rem;\n  cursor: pointer;\n"], ["\n  padding: 0.3rem;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
