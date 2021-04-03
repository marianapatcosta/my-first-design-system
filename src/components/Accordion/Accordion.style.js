var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles, disabledStyles, colors } from '../../styles';
export var StyledAccordion = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  max-height: 15rem;\n  max-width: 15rem;\n"], ["\n  ", ";\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  max-height: 15rem;\n  max-width: 15rem;\n"])), baseStyles);
export var StyledAccordionTitle = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ", ";\n  padding: 0.4rem 1rem;\n  border-radius: 0.2rem;\n  box-shadow: 0 0.0625rem 0.3rem ", ";\n  cursor: pointer;\n  z-index: 1;\n  margin: 0.125rem;\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ", ";\n  padding: 0.4rem 1rem;\n  border-radius: 0.2rem;\n  box-shadow: 0 0.0625rem 0.3rem ", ";\n  cursor: pointer;\n  z-index: 1;\n  margin: 0.125rem;\n\n  ", "\n\n  ",
    "\n"])), colors.primary, colors.shadow, function (_a) {
    var disabled = _a.disabled;
    return disabled && " " + disabledStyles;
}, function (_a) {
    var isExpanded = _a.isExpanded;
    return isExpanded &&
        "border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;";
});
export var StyledAccordionArrow = styled.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 0.8rem;\n  margin-left: 0.5rem;\n  ", ";\n  transition: transform 0.5s ease-in-out;\n\n  ", "\n"], ["\n  width: 0.8rem;\n  margin-left: 0.5rem;\n  ", ";\n  transition: transform 0.5s ease-in-out;\n\n  ",
    "\n"])), colors.icon, function (_a) {
    var isExpanded = _a.isExpanded;
    return isExpanded &&
        "border-bottom-left-radius: 0;\n    transform: rotate(180deg);";
});
export var StyledAccordionContent = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 0;\n  max-height: 0;\n  border: 0.125rem solid transparent;\n  overflow: auto;\n  transition: all 0.5s ease-in-out;\n  visibility: hidden;\n  padding: 0 1rem;\n\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  ", "\n"], ["\n  height: 0;\n  max-height: 0;\n  border: 0.125rem solid transparent;\n  overflow: auto;\n  transition: all 0.5s ease-in-out;\n  visibility: hidden;\n  padding: 0 1rem;\n\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  ",
    "\n"])), function (_a) {
    var isExpanded = _a.isExpanded;
    return isExpanded &&
        "border-color: " + colors.primary + ";\n      border-bottom-left-radius: 0.2rem;\n      border-bottom-right-radius: 0.2rem;\n      padding: 0.4rem 1rem;\n      height: 100%;  \n      max-height: 13rem;\n      visibility: visible;\n      ";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
