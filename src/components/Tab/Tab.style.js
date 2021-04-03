var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles, disabledStyles, colors } from '../../styles';
export var StyledTab = styled.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  min-width: 3.125rem;\n  max-width: 4rem;\n  color: ", ";\n  padding: 0.3rem 0.625rem;\n  text-align: center;\n  position: relative;\n  user-select: none;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.75;\n  }\n\n  ", "\n\n  ", "\n"], ["\n  ", ";\n  min-width: 3.125rem;\n  max-width: 4rem;\n  color: ", ";\n  padding: 0.3rem 0.625rem;\n  text-align: center;\n  position: relative;\n  user-select: none;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.75;\n  }\n\n  ",
    "\n\n  ",
    "\n"])), baseStyles, colors.highlight, function (_a) {
    var disabled = _a.disabled;
    return disabled &&
        "\n    " + disabledStyles + "\n    ";
}, function (_a) {
    var isActive = _a.isActive;
    return isActive &&
        "font-weight: 700; \n        background-color: " + colors.primary + ";\n        box-shadow: 0 0 0.125rem " + colors.shadow + ";\n        border-top-left-radius: 0.625rem;\n        border-top-right-radius: 0.625rem;\n\n        :before {\n          content: \"\";\n          position: absolute;\n          width: 100%;\n          height: 0.3rem;\n          bottom: -0.3rem;\n          left: 0;\n          background-color: " + colors.primary + ";\n        }\n      ";
});
var templateObject_1;
