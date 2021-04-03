var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles, disabledStyles, colors, typography } from '../../styles';
export var StyledInputWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  margin: 1rem 0;\n  width: 100%;\n  max-width: 15rem;\n"], ["\n  ", "\n  margin: 1rem 0;\n  width: 100%;\n  max-width: 15rem;\n"])), baseStyles);
export var StyledInputField = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  ", ";\n"], ["\n  position: relative;\n  ", ";\n"])), function (_a) {
    var disabled = _a.disabled;
    return disabled && " " + disabledStyles;
});
export var StyledInput = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  display: block;\n  color: ", ";\n  font-family: ", ";\n  font-size: 95%;\n  width: 100%;\n  border: 0.0625rem solid ", ";\n  background-color: ", ";\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  box-sizing: border-box;\n  padding: 0.3rem 2rem 0.3rem 0.625rem;\n  height: 2rem;\n\n  :-webkit-autofill,\n  :-webkit-autofill:hover,\n  :-webkit-autofill:focus,\n  :-webkit-autofill:active {\n    -webkit-text-fill-color: ", ";\n    -webkit-box-shadow: 0 0 0 2rem ", " inset !important;\n  }\n\n  ", "\n"], ["\n  ", "\n  display: block;\n  color: ", ";\n  font-family: ", ";\n  font-size: 95%;\n  width: 100%;\n  border: 0.0625rem solid ", ";\n  background-color: ", ";\n  box-shadow: 0 0.063rem 0.25rem ", ";\n  box-sizing: border-box;\n  padding: 0.3rem 2rem 0.3rem 0.625rem;\n  height: 2rem;\n\n  :-webkit-autofill,\n  :-webkit-autofill:hover,\n  :-webkit-autofill:focus,\n  :-webkit-autofill:active {\n    -webkit-text-fill-color: ", ";\n    -webkit-box-shadow: 0 0 0 2rem ", " inset !important;\n  }\n\n  ",
    "\n"])), baseStyles, colors.font, typography.type.body, colors.transparent, colors.primary, colors.shadow, colors.font, colors.primary, function (_a) {
    var errorMessage = _a.errorMessage;
    return !!errorMessage &&
        "border-color: " + colors.red + ";\n    box-shadow: none;\n    ";
});
export var StyledLabel = styled.label(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  color: ", ";\n  margin-bottom: 0.3rem;\n  margin-left: 0.3rem;\n  ", "\n"], ["\n  display: block;\n  color: ", ";\n  margin-bottom: 0.3rem;\n  margin-left: 0.3rem;\n  ",
    "\n"])), colors.highlight, function (_a) {
    var disabled = _a.disabled;
    return disabled && disabledStyles + "; color: " + colors.disabled;
});
export var StyledInputIcon = styled.img(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  right: 0.625rem;\n  ", ";\n"], ["\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  right: 0.625rem;\n  ", ";\n"])), colors.icon);
export var StyledInputError = styled.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 95%;\n  margin-top: 0.3rem;\n"], ["\n  color: ", ";\n  font-size: 95%;\n  margin-top: 0.3rem;\n"])), colors.red);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
