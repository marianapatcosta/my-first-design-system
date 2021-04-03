var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css, keyframes } from 'styled-components';
import { baseStyles, colors } from '../../styles';
import { Button } from '../Button/Button';
var typeClass = function (type) {
    var toastTypesClasses = {
        alert: colors.red,
        info: colors.blue,
        success: colors.green,
        warning: colors.yellow,
    };
    return toastTypesClasses[type];
};
var fadeIn = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var fadeOut = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"])));
export var StyledToast = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n ", "\n  box-shadow: 0 0.0625rem 0.2rem ", ";\n  width: 85%;\n  max-width: 20rem;\n  position: fixed;\n  top: 4rem;\n  right: 1rem;\n  padding: 1rem;\n  z-index: 30;\n  display: flex;\n  align-items: flex-start;\n  border-radius: 0.2rem;\n  animation: ", " 0.5s;\n  -webkit-animation: ", " 0.5s;\n  background-color: ", ";\n\n  ", "\n\n  @media (min-width: 480px) {\n    width: 75%;\n  }\n\n  @media (min-width: 768px) {\n   width: 50%;\n  }\n\n  @media (min-width: 1023px) {\n   width: 30%;\n  }\n"], ["\n ", "\n  box-shadow: 0 0.0625rem 0.2rem ", ";\n  width: 85%;\n  max-width: 20rem;\n  position: fixed;\n  top: 4rem;\n  right: 1rem;\n  padding: 1rem;\n  z-index: 30;\n  display: flex;\n  align-items: flex-start;\n  border-radius: 0.2rem;\n  animation: ", " 0.5s;\n  -webkit-animation: ", " 0.5s;\n  background-color: ", ";\n\n  ",
    "\n\n  @media (min-width: 480px) {\n    width: 75%;\n  }\n\n  @media (min-width: 768px) {\n   width: 50%;\n  }\n\n  @media (min-width: 1023px) {\n   width: 30%;\n  }\n"])), baseStyles, colors.disabled, fadeIn, fadeIn, function (_a) {
    var type = _a.type;
    return !!type && typeClass(type);
}, function (_a) {
    var willBeDeleted = _a.willBeDeleted;
    return willBeDeleted && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      animation: ", " 0.5s;\n      -webkit-animation: ", " 0.5s;\n    "], ["\n      animation: ", " 0.5s;\n      -webkit-animation: ", " 0.5s;\n    "])), fadeOut, fadeOut);
});
export var StyledToastClose = styled(Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  border: none;\n  img {\n    width: 0.7rem;\n    transform: rotate(0deg);\n    transition: transform 0.3s ease-in-out;\n\n    &:hover {\n      transform: rotate(90deg);\n    }\n  }\n"], ["\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  border: none;\n  img {\n    width: 0.7rem;\n    transform: rotate(0deg);\n    transition: transform 0.3s ease-in-out;\n\n    &:hover {\n      transform: rotate(90deg);\n    }\n  }\n"])));
export var StyledToastIcon = styled.img(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 1.5rem;\n  height: 1.5rem;\n"], ["\n  width: 1.5rem;\n  height: 1.5rem;\n"])));
export var StyledToastMessage = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: 95%;\n  color: ", ";\n  line-height: 1.5rem;\n  padding: 0 1rem;\n"], ["\n  font-size: 95%;\n  color: ", ";\n  line-height: 1.5rem;\n  padding: 0 1rem;\n"])), colors.white);
export var StyledToastMessageWrapper = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 0.5rem;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 0.5rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
