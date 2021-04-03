var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from 'styled-components';
import { colors } from './colors';
import { typography } from './typography';
export var baseStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 1rem;\n  line-height: 1.2rem;\n\n  margin: 0;\n  padding: 0;\n\n  :focus:not(:focus-visible) {\n    outline: none;\n  }\n\n  :focus-visible {\n    outline: 0.125rem solid ", ";\n  }\n"], ["\n  font-family: ", ";\n  font-size: 1rem;\n  line-height: 1.2rem;\n\n  margin: 0;\n  padding: 0;\n\n  :focus:not(:focus-visible) {\n    outline: none;\n  }\n\n  :focus-visible {\n    outline: 0.125rem solid ", ";\n  }\n"])), typography.type.body, colors.highlight);
export var disabledStyles = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  opacity: 0.3;\n  pointer-events: none;\n  user-select: none;\n  cursor: default;\n"], ["\n  opacity: 0.3;\n  pointer-events: none;\n  user-select: none;\n  cursor: default;\n"])));
export var truncateStyles = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
