var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles, disabledStyles, colors } from '../../styles';
export var StyledDropdownContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 10rem;\n  position: relative;\n"], ["\n  ", "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 10rem;\n  position: relative;\n"])), baseStyles);
export var StyledDropdown = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  position: relative;\n\n  img {\n    width: 0.8rem;\n    position: absolute;\n    top: 50%;\n    bottom: 50%;\n    right: 0.6rem;\n    margin: auto 0;\n    z-index: 1;\n    ", ";\n    -webkit-transition: transform 0.5s linear;\n    transition: transform 0.5s linear;\n\n    ", "\n\n    ", "\n  }\n  \n  /* :after {\n    position: absolute;\n    top: 50%;\n    bottom: 50%;\n    right: 0.8rem;\n    margin: auto 0;\n    content: '';\n    pointer-events: none;\n    width: 0.4em;\n    height: 0.4em;\n    border-right: 0.125rem solid ", ";\n    border-bottom: 0.125rem solid ", ";\n    transform: rotate(45deg);\n    -webkit-transition: transform 0.5s linear;\n    transition: transform 0.5s linear;\n\n    ", "\n  }*/\n"], ["\n  display: flex;\n  width: 100%;\n  position: relative;\n\n  img {\n    width: 0.8rem;\n    position: absolute;\n    top: 50%;\n    bottom: 50%;\n    right: 0.6rem;\n    margin: auto 0;\n    z-index: 1;\n    ", ";\n    -webkit-transition: transform 0.5s linear;\n    transition: transform 0.5s linear;\n\n    ", "\n\n    ",
    "\n  }\n  \n  /* :after {\n    position: absolute;\n    top: 50%;\n    bottom: 50%;\n    right: 0.8rem;\n    margin: auto 0;\n    content: '';\n    pointer-events: none;\n    width: 0.4em;\n    height: 0.4em;\n    border-right: 0.125rem solid ", ";\n    border-bottom: 0.125rem solid ", ";\n    transform: rotate(45deg);\n    -webkit-transition: transform 0.5s linear;\n    transition: transform 0.5s linear;\n\n    ", "\n  }*/\n"])), colors.icon, function (_a) {
    var isExpanded = _a.isExpanded;
    return isExpanded && "transform: rotate(180deg);";
}, function (_a) {
    var disabled = _a.disabled;
    return disabled &&
        " border-bottom-color: " + (disabled && colors.disabled) + ";\n      border-right-color: " + (disabled && colors.disabled) + ";\n      ";
}, colors.highlight, colors.highlight, function (_a) {
    var isExpanded = _a.isExpanded;
    return isExpanded && "transform: rotate(225deg);";
});
export var StyledDropdownLabel = styled.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  margin: 0 0.8rem 0.3rem 0.3rem;\n  font-size: 95%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  ", "\n"], ["\n  color: ", ";\n  margin: 0 0.8rem 0.3rem 0.3rem;\n  font-size: 95%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  ", "\n"])), colors.highlight, function (_a) {
    var disabled = _a.disabled;
    return disabled && "" + disabledStyles;
});
export var StyledDropdownHeader = styled.select(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  // reset of styles, including removing the default dropdown arrow\n  appearance: none;\n  border: none;\n  margin: 0;\n  width: 100%;\n  font-family: inherit;\n  line-height: inherit;\n  ", "\n  background-color: ", ";\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  padding: 0.3rem 2rem 0.3rem 0.8rem;\n  font-size: 95%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  position: relative;\n  cursor: pointer;\n \n\n  ::-ms-expand {\n    display: none;\n  }\n\n  ", "\n"], ["\n  // reset of styles, including removing the default dropdown arrow\n  appearance: none;\n  border: none;\n  margin: 0;\n  width: 100%;\n  font-family: inherit;\n  line-height: inherit;\n  ", "\n  background-color: ", ";\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  padding: 0.3rem 2rem 0.3rem 0.8rem;\n  font-size: 95%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  position: relative;\n  cursor: pointer;\n \n\n  ::-ms-expand {\n    display: none;\n  }\n\n  ", "\n"])), baseStyles, colors.primary, colors.shadow, function (_a) {
    var disabled = _a.disabled;
    return disabled && "" + disabledStyles;
});
export var StyledDropdownOption = styled.option(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0.625rem 0.3rem;\n  line-height: 4rem;\n  box-sizing: border-box;\n  cursor: pointer;\n\n  :hover {\n    background-color: ", " !important;\n  }\n\n  :checked {\n    font-weight: bold;\n  }\n"], ["\n  padding: 0.625rem 0.3rem;\n  line-height: 4rem;\n  box-sizing: border-box;\n  cursor: pointer;\n\n  :hover {\n    background-color: ", " !important;\n  }\n\n  :checked {\n    font-weight: bold;\n  }\n"])), colors.secondary);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
