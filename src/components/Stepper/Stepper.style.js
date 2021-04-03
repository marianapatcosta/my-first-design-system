var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles, colors } from '../../styles';
import { Button } from '../Button/Button';
export var StyledStepper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  display: flex;\n  flex-direction: column;\n  width: auto;\n  margin: 2rem auto;\n  padding: 1.5rem;\n  background-color: ", ";\n\n    ", ";\n"], ["\n  ", ";\n  display: flex;\n  flex-direction: column;\n  width: auto;\n  margin: 2rem auto;\n  padding: 1.5rem;\n  background-color: ", ";\n\n    ",
    ";\n"])), baseStyles, colors.primary, function (_a) {
    var isVertical = _a.isVertical;
    return isVertical &&
        "display: flex;\n  flex-direction: row;\n  justify-content: space-between;";
});
export var StyledStepperIndicator = styled.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  list-style: none;\n  background-color: inherit;\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  list-style: none;\n  background-color: inherit;\n\n  ",
    "\n"])), function (_a) {
    var isVertical = _a.isVertical;
    return isVertical &&
        "  flex-direction: column;\n    margin: 2rem;\n    margin-bottom: 0;\n    ";
});
export var StyledStepperIndicatorItem = styled.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: inherit;\n  border: 0.125rem solid ", ";\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  z-index: 1;\n  transition: background-color 0.5s ease-in;\n  -webkit-transition: background-color 0.5s ease-in;\n  -moz-transition: background-color 0.5s ease-in;\n  -ms-transition: background-color 0.5s ease-in;\n  -o-transition: background-color 0.5s ease-in;\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: inherit;\n  border: 0.125rem solid ", ";\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  z-index: 1;\n  transition: background-color 0.5s ease-in;\n  -webkit-transition: background-color 0.5s ease-in;\n  -moz-transition: background-color 0.5s ease-in;\n  -ms-transition: background-color 0.5s ease-in;\n  -o-transition: background-color 0.5s ease-in;\n\n  ",
    "\n"])), colors.secondary, function (_a) {
    var isFilled = _a.isFilled;
    return isFilled &&
        " background-color: " + colors.secondary + ";  transition: all 0.5s ease-in;\n  -webkit-transition: all 0.5s ease-in;\n  -moz-transition: all 0.5s ease-in;\n  -ms-transition: background-color 0.5s ease-in;\n  -o-transition: background-color 0.5s ease-in;\n}";
});
export var StyledStepperProgressBar = styled.progress(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  height: 0.125rem;\n  width: 100%;\n\n  ", "\n\n  &::-webkit-progress-bar {\n    background-color: ", ";\n  }\n\n  &::-webkit-progress-value {\n    background-color: ", ";\n    transition: width 0.3s ease-in, height 0.3s ease-in;\n    -webkit-transition: width 0.3s ease-in, height 0.3s ease-in;\n    -moz-transition: width 0.3s ease-in, height 0.3s ease-in;\n    -ms-transition: width 0.3s ease-in, height 0.3s ease-in;\n    -o-transition: width 0.3s ease-in, height 0.3s ease-in;\n  }\n\n  &[value] {\n    appearance: none;\n    border: 0;\n    color: ", ";\n    transition: width 0.3s ease-in, height 0.3s ease-in;\n    -webkit-transition: width 0.3s ease-in, height 0.3s ease-in;\n    -moz-transition: width 0.3s ease-in, height 0.3s ease-in;\n    -ms-transition: width 0.3s ease-in, height 0.3s ease-in;\n    -o-transition: width 0.3s ease-in, height 0.3s ease-in;\n  }\n"], ["\n  position: absolute;\n  left: 0;\n  height: 0.125rem;\n  width: 100%;\n\n  ",
    "\n\n  &::-webkit-progress-bar {\n    background-color: ", ";\n  }\n\n  &::-webkit-progress-value {\n    background-color: ", ";\n    transition: width 0.3s ease-in, height 0.3s ease-in;\n    -webkit-transition: width 0.3s ease-in, height 0.3s ease-in;\n    -moz-transition: width 0.3s ease-in, height 0.3s ease-in;\n    -ms-transition: width 0.3s ease-in, height 0.3s ease-in;\n    -o-transition: width 0.3s ease-in, height 0.3s ease-in;\n  }\n\n  &[value] {\n    appearance: none;\n    border: 0;\n    color: ", ";\n    transition: width 0.3s ease-in, height 0.3s ease-in;\n    -webkit-transition: width 0.3s ease-in, height 0.3s ease-in;\n    -moz-transition: width 0.3s ease-in, height 0.3s ease-in;\n    -ms-transition: width 0.3s ease-in, height 0.3s ease-in;\n    -o-transition: width 0.3s ease-in, height 0.3s ease-in;\n  }\n"])), function (_a) {
    var isVertical = _a.isVertical;
    return isVertical &&
        "left: revert;\n    bottom: 0;\n    top: 0;\n    margin: auto 0;\n    width: revert;\n    transform: rotate(90deg);";
}, colors.white, colors.secondary, colors.secondary);
export var StyledStepperContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var isVertical = _a.isVertical;
    return isVertical && " width: 100%;";
});
export var StyledStepperContent = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin: 1rem auto;\n  width: 100%;\n"], ["\n  margin: 1rem auto;\n  width: 100%;\n"])));
export var StyledStepperFooter = styled.footer(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
export var StyledStepperButton = styled(Button).attrs({ size: 'small' })(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-right: auto;\n  flex-direction: column;\n  img {\n    ", ";\n    padding: 0.15rem;\n    transform: rotate(90deg);\n  }\n"], ["\n  margin-right: auto;\n  flex-direction: column;\n  img {\n    ", ";\n    padding: 0.15rem;\n    transform: rotate(90deg);\n  }\n"])), colors.icon);
export var StyledStepperButtonRight = styled(StyledStepperButton)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-right: 0;\n  margin-left: auto;\n  img {\n    transform: rotate(-90deg);\n  }\n"], ["\n  margin-right: 0;\n  margin-left: auto;\n  img {\n    transform: rotate(-90deg);\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
