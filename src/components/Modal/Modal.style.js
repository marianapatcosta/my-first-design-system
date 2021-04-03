var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { baseStyles, colors } from '../../styles';
import { hexToRGB } from '../../utils/utils';
import { Button } from '../Button/Button';
var sizeStyles = {
    small: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 20rem;\n  "], ["\n    width: 20rem;\n  "]))),
    medium: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 35rem;\n  "], ["\n    width: 35rem;\n  "]))),
    large: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 50rem;\n  "], ["\n    width: 50rem;\n  "]))),
};
export var StyledModalOverlay = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 100;\n"], ["\n  ", "\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 100;\n"])), baseStyles, hexToRGB(colors.shadow, 0.9));
export var StyledModalContent = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  ", ";\n  background-color: ", ";\n  box-shadow: 0 0.125rem 0.5rem ", ";\n  border-radius: 0.5rem;\n  transform: translate(-50%, -50%);\n"], ["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  ", ";\n  background-color: ", ";\n  box-shadow: 0 0.125rem 0.5rem ", ";\n  border-radius: 0.5rem;\n  transform: translate(-50%, -50%);\n"])), function (_a) {
    var size = _a.size;
    return size && sizeStyles[size];
}, colors.primary, colors.shadow);
export var StyledModalHeader = styled.header(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.3rem;\n  background-color: ", ";\n  color: ", ";\n  z-index: 10;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.3rem;\n  background-color: ", ";\n  color: ", ";\n  z-index: 10;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n"])), colors.secondary, colors.highlight);
export var StyledModalHeaderTitle = styled.h2(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 0.5rem;\n  font-weight: 700;\n  font-size: 100%;\n"], ["\n  margin: 0.5rem;\n  font-weight: 700;\n  font-size: 100%;\n"])));
export var StyledModalHeaderClose = styled(Button)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  border: none;\n  img {\n    ", ";\n    transform: rotate(0deg);\n    transition: transform 0.3s ease-in-out;\n\n    &:hover {\n      transform: rotate(90deg);\n    }\n  }\n"], ["\n  border: none;\n  img {\n    ", ";\n    transform: rotate(0deg);\n    transition: transform 0.3s ease-in-out;\n\n    &:hover {\n      transform: rotate(90deg);\n    }\n  }\n"])), colors.icon);
export var StyledModalMessage = styled.p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  padding: 1rem;\n  text-align: center;\n"], ["\n  padding: 1rem;\n  text-align: center;\n"])));
export var StyledModalFooter = styled.footer(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  padding: 1.25rem 0.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  padding: 1.25rem 0.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
export var StyledModalFooterButton = styled(Button)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  background-color: ", ";\n  margin: 0 0.625rem;\n\n  ", "\n"], ["\n  background-color: ", ";\n  margin: 0 0.625rem;\n\n  ",
    "\n"])), colors.transparent, function (_a) {
    var isConfirmationModal = _a.isConfirmationModal;
    return isConfirmationModal &&
        "\n    border-color: " + colors.red + ";\n    color: " + colors.red + ";\n  ";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
