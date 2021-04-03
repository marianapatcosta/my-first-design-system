var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles } from '../../styles';
export var StyledStep = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  width: 100%;\n\n  ", ";\n"], ["\n  ", ";\n  width: 100%;\n\n  ", ";\n"])), baseStyles, function (_a) {
    var isActive = _a.isActive;
    return !isActive && "display: none";
});
var templateObject_1;
