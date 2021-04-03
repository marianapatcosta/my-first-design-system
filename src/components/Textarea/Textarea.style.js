var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles, disabledStyles, colors, typography } from '../../styles';
export var StyledTextareaWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  margin: 1rem 0;\n  position: relative;\n  width: 100%;\n"], ["\n  ", "\n  margin: 1rem 0;\n  position: relative;\n  width: 100%;\n"])), baseStyles);
export var StyledTextarea = styled.textarea(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  color: ", ";\n  font-family: ", ";\n  font-size: 95%;\n  width: 100%;\n  width: 100%;\n  background-color: ", ";\n  border: 0.0625rem solid ", ";\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  box-sizing: border-box;\n  padding: 0.3rem 0.625rem;\n  position: relative;\n  resize: none;\n\n  :-webkit-autofill,\n  :-webkit-autofill:hover,\n  :-webkit-autofill:focus,\n  :-webkit-autofill:active {\n    -webkit-text-fill-color: ", ";\n    -webkit-box-shadow: 0 0 0 2rem ", " inset !important;\n  }\n\n  ", "\n\n  ", "\n\n  :focus-visible {\n    outline: 0.125rem solid ", ";\n  }\n\n  :focus:not(:focus-visible) {\n    outline: none;\n  }\n"], ["\n  display: block;\n  color: ", ";\n  font-family: ", ";\n  font-size: 95%;\n  width: 100%;\n  width: 100%;\n  background-color: ", ";\n  border: 0.0625rem solid ", ";\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  box-sizing: border-box;\n  padding: 0.3rem 0.625rem;\n  position: relative;\n  resize: none;\n\n  :-webkit-autofill,\n  :-webkit-autofill:hover,\n  :-webkit-autofill:focus,\n  :-webkit-autofill:active {\n    -webkit-text-fill-color: ", ";\n    -webkit-box-shadow: 0 0 0 2rem ", " inset !important;\n  }\n\n  ", "\n\n  ",
    "\n\n  :focus-visible {\n    outline: 0.125rem solid ", ";\n  }\n\n  :focus:not(:focus-visible) {\n    outline: none;\n  }\n"])), colors.font, typography.type.body, colors.primary, colors.primary, colors.shadow, colors.font, colors.primary, function (_a) {
    var disabled = _a.disabled;
    return disabled && " " + disabledStyles;
}, function (_a) {
    var errorMessage = _a.errorMessage;
    return !!errorMessage &&
        "border-color: " + colors.red + ";\n      box-shadow: none;\n  ";
}, colors.highlight);
export var StyledLabel = styled.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  color: ", ";\n  margin-bottom: 0.3rem;\n  margin-left: 0.3rem;\n  font-size: 95%;\n  ", "\n"], ["\n  display: block;\n  color: ", ";\n  margin-bottom: 0.3rem;\n  margin-left: 0.3rem;\n  font-size: 95%;\n  ",
    "\n"])), colors.highlight, function (_a) {
    var disabled = _a.disabled;
    return disabled && disabledStyles + "; color: " + colors.disabled;
});
export var StyledTextareaError = styled.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 95%;\n  margin-top: 0.3rem;\n"], ["\n  color: ", ";\n  font-size: 95%;\n  margin-top: 0.3rem;\n"])), colors.red);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
