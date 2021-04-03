var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles, colors } from '../../styles';
export var StyledTabs = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), baseStyles);
export var StyledTabsListWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 1;\n  background-color: ", ";\n  width: 100%;\n  height: 4rem;\n"], ["\n  position: fixed;\n  z-index: 1;\n  background-color: ", ";\n  width: 100%;\n  height: 4rem;\n"])), colors.primary);
export var StyledTabsList = styled.ul(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  list-style: none;\n  margin: 1.25rem 0;\n  padding: 0.625rem 1.25rem 0;\n  box-shadow: 0 0.25rem 0.5rem -0.5rem ", ";\n"], ["\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  list-style: none;\n  margin: 1.25rem 0;\n  padding: 0.625rem 1.25rem 0;\n  box-shadow: 0 0.25rem 0.5rem -0.5rem ", ";\n"])), colors.shadow);
export var StyledTabsContent = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
export var StyledTabsSpacer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 4rem;\n  margin-bottom: 1rem;\n"], ["\n  height: 4rem;\n  margin-bottom: 1rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
