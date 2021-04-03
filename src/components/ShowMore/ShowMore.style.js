var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles, colors } from '../../styles';
export var StyledShowMore = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), baseStyles);
export var StyledShowMoreLink = styled.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-decoration: none;\n  color: ", ";\n  font-size: 90%;\n  font-weight: 700;\n  margin: 1rem 0;\n  float: right;\n  cursor: pointer;\n"], ["\n  text-decoration: none;\n  color: ", ";\n  font-size: 90%;\n  font-weight: 700;\n  margin: 1rem 0;\n  float: right;\n  cursor: pointer;\n"])), colors.highlight);
export var StyledShowMoreIcon = styled.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  transition: transform 0.5s ease-in-out;\n  margin-left: 0.3rem;\n\n  ", "\n"], ["\n  ", ";\n  transition: transform 0.5s ease-in-out;\n  margin-left: 0.3rem;\n\n  ", "\n"])), colors.icon, function (_a) {
    var showMore = _a.showMore;
    return showMore && "transform: rotate(-180deg);";
});
export var ShowMoreContent = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  overflow: hidden;\n  /* display: -webkit-box;\n  -webkit-box-orient: vertical; \n -webkit-line-clamp: 3;*/\n  padding-right: 1rem;\n  padding-bottom: 0.3rem;\n\n  ", "\n"], ["\n  ", "\n  overflow: hidden;\n  /* display: -webkit-box;\n  -webkit-box-orient: vertical; \n -webkit-line-clamp: 3;*/\n  padding-right: 1rem;\n  padding-bottom: 0.3rem;\n\n  ",
    "\n"])), function (_a) {
    var showMore = _a.showMore;
    return showMore && "";
}, function (_a) {
    var showMore = _a.showMore;
    return showMore && " overflow: auto; /* -webkit-line-clamp: inherit;*/";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
