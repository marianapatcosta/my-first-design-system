var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { baseStyles, colors } from '../../styles';
import { Button } from '../Button/Button';
import { Close } from '../../assets/icons/';
export var StyledUpload = styled(Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  width: 100%;\n  padding: 0.3rem;\n"], ["\n  ", "\n  width: 100%;\n  padding: 0.3rem;\n"])), baseStyles);
export var StyledUploadInput = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  visibility: hidden;\n  position: absolute;\n  z-index: -1;\n  width: 0;\n  height: 0;\n"], ["\n  visibility: hidden;\n  position: absolute;\n  z-index: -1;\n  width: 0;\n  height: 0;\n"])));
export var StyledUploadPreview = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex: 2;\n  overflow: auto;\n  margin-left: 1.25rem;\n  height: 100%;\n\n  ", "\n"], ["\n  display: flex;\n  flex: 2;\n  overflow: auto;\n  margin-left: 1.25rem;\n  height: 100%;\n\n  ",
    "\n"])), function (_a) {
    var areThereFilesToPreview = _a.areThereFilesToPreview;
    return areThereFilesToPreview &&
        "display: block;\n  margin-left: 0;\n  height: 100%;";
});
export var StyledUploadPreviewContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n"])));
export var StyledUploadPreviewImage = styled.img(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 6.25rem;\n  height: 4.4rem;\n  margin-right: 0.3rem;\n"], ["\n  width: 6.25rem;\n  height: 4.4rem;\n  margin-right: 0.3rem;\n"])));
export var StyledUploadPreviewFile = styled.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 90%;\n  display: inline;\n  margin-right: 0.3rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  font-size: 90%;\n  display: inline;\n  margin-right: 0.3rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
export var StyledUploadPreviewButton = styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border: none;\n  position: absolute;\n  top: 0.3rem;\n  right: 0.8em;\n  width: 0.625rem;\n  height: 0.625rem;\n  padding: 0.063rem;\n  cursor: pointer;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  background: ", " url(", ") no-repeat center center;\n  background-size: 0.7rem 0.7rem;\n\n  :hover {\n    opacity: 0.75;\n  }\n\n  ", "\n"], ["\n  border: none;\n  position: absolute;\n  top: 0.3rem;\n  right: 0.8em;\n  width: 0.625rem;\n  height: 0.625rem;\n  padding: 0.063rem;\n  cursor: pointer;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -o-border-radius: 50%;\n  background: ", " url(", ") no-repeat center center;\n  background-size: 0.7rem 0.7rem;\n\n  :hover {\n    opacity: 0.75;\n  }\n\n  ",
    "\n"])), colors.white, Close, function (_a) {
    var areThereFilesToPreview = _a.areThereFilesToPreview;
    return areThereFilesToPreview &&
        "dposition: relative;\ntop: 0;\nright: 0;\n";
});
export var StyledUploadWrapper = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  overflow: hidden;\n  height: 5.6rem;\n  width: 100%;\n  max-width: 30rem;\n"], ["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  overflow: hidden;\n  height: 5.6rem;\n  width: 100%;\n  max-width: 30rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
