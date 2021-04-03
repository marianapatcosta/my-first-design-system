var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { createGlobalStyle } from 'styled-components';
import { colors, typography } from './styles';
export var GlobalStyle = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  body {\n    font-family: ", ";\n    font-size: 0.9rem;\n    line-height: 1.2rem;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n  }\n  \n  * :focus {\n    outline: 0.125rem solid ", ";\n  }\n\n  * :focus:not(:focus-visible) {\n    outline: none;\n  }\n"], ["\n  body {\n    font-family: ", ";\n    font-size: 0.9rem;\n    line-height: 1.2rem;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n  }\n  \n  * :focus {\n    outline: 0.125rem solid ", ";\n  }\n\n  * :focus:not(:focus-visible) {\n    outline: none;\n  }\n"])), typography.type.body, colors.highlight);
export default GlobalStyle;
var templateObject_1;
