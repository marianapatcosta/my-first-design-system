var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles, disabledStyles, colors, typography } from '../../styles';
export var StyledSearchWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  margin: 1rem 0;\n  width: 100%;\n  max-width: 15rem;\n"], ["\n  ", "\n  margin: 1rem 0;\n  width: 100%;\n  max-width: 15rem;\n"])), baseStyles);
export var StyledLabel = styled.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  color: ", ";\n  margin-bottom: 0.3rem;\n  margin-left: 0.3rem;\n  ", "\n"], ["\n  display: block;\n  color: ", ";\n  margin-bottom: 0.3rem;\n  margin-left: 0.3rem;\n  ",
    "\n"])), colors.highlight, function (_a) {
    var disabled = _a.disabled;
    return disabled && disabledStyles + "; color: " + colors.disabled;
});
export var StyledSearchContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  margin-left: auto;\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  transition: width 0.3s ease-in-out;\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  width: 100%;\n  margin-left: auto;\n  background-color: ", ";\n\n  ", "\n"], ["\n  display: flex;\n  margin-left: auto;\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  transition: width 0.3s ease-in-out;\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  width: 100%;\n  margin-left: auto;\n  background-color: ", ";\n\n  ", "\n"])), colors.shadow, colors.shadow, colors.primary, function (_a) {
    var isExpanded = _a.isExpanded;
    return !isExpanded && "width: 2rem !important;";
});
export var StyledSearch = styled.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 95%;\n  width: 100%;\n  border: none;\n  box-sizing: border-box;\n  padding: 0.3rem 0.625rem;\n  position: relative;\n  display: block;\n  height: 2rem;\n  background-color: ", ";\n\n  :-webkit-autofill,\n  :-webkit-autofill:hover,\n  :-webkit-autofill:focus,\n  :-webkit-autofill:active {\n    -webkit-text-fill-color: ", ";\n    -webkit-box-shadow: 0 0 0 2rem ", " inset !important;\n  }\n\n  /* clears the default 'X' from Internet Explorer */\n  ::-ms-clear {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n  ::-ms-reveal {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n\n  /* clears the default 'X' from Chrome */\n  ::-webkit-search-decoration,\n  ::-webkit-search-cancel-button,\n  ::-webkit-search-results-button,\n  ::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  ", ";\n\n  ", ";\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: 95%;\n  width: 100%;\n  border: none;\n  box-sizing: border-box;\n  padding: 0.3rem 0.625rem;\n  position: relative;\n  display: block;\n  height: 2rem;\n  background-color: ", ";\n\n  :-webkit-autofill,\n  :-webkit-autofill:hover,\n  :-webkit-autofill:focus,\n  :-webkit-autofill:active {\n    -webkit-text-fill-color: ", ";\n    -webkit-box-shadow: 0 0 0 2rem ", " inset !important;\n  }\n\n  /* clears the default 'X' from Internet Explorer */\n  ::-ms-clear {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n  ::-ms-reveal {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n\n  /* clears the default 'X' from Chrome */\n  ::-webkit-search-decoration,\n  ::-webkit-search-cancel-button,\n  ::-webkit-search-results-button,\n  ::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  ", ";\n\n  ",
    ";\n"])), colors.font, typography.type.body, colors.primary, colors.font, colors.primary, function (_a) {
    var disabled = _a.disabled;
    return disabled && " " + disabledStyles;
}, function (_a) {
    var isExpanded = _a.isExpanded;
    return !isExpanded ? "display: none; caret-color: transparent;" : '';
});
export var StyledSearchIconWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  width: 2rem;\n  height: 2rem;\n  background-color: ", ";\n  ", "\n"], ["\n  position: relative;\n  width: 2rem;\n  height: 2rem;\n  background-color: ", ";\n  ",
    "\n"])), colors.primary, function (_a) {
    var isExpandable = _a.isExpandable, isExpanded = _a.isExpanded;
    return isExpandable && !isExpanded && "cursor: pointer;";
});
export var StyledSearchIcon = styled.img(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  top: 0.5rem;\n  right: 0.625rem;\n  ", ";\n\n  ", "\n  ", "\n\n  ", "\n"], ["\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  top: 0.5rem;\n  right: 0.625rem;\n  ", ";\n\n  ", "\n  ", "\n\n  ",
    "\n"])), colors.icon, function (_a) {
    var hasValue = _a.hasValue;
    return hasValue && "cursor: pointer;";
}, function (_a) {
    var isExpandable = _a.isExpandable;
    return isExpandable && "cursor: pointer;";
}, function (_a) {
    var isExpanded = _a.isExpanded;
    return !isExpanded &&
        "top: 0;\n      bottom: 0;\n      margin: auto;";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
