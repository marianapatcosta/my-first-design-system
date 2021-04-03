var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, } from 'react';
import { DoubleChevron } from '../../assets/icons';
import { StyledShowMore, ShowMoreContent, StyledShowMoreLink, StyledShowMoreIcon, } from './ShowMore.style';
export var ShowMore = function (_a) {
    var content = _a.content, numberOfPreviewLines = _a.numberOfPreviewLines, props = __rest(_a, ["content", "numberOfPreviewLines"]);
    var _b = useState(false), showMore = _b[0], setShowMore = _b[1];
    var toggleShowMore = function (event) {
        event.preventDefault();
        setShowMore(function (prevShowMore) { return !prevShowMore; });
    };
    var label = showMore ? 'show less' : 'show more';
    var lineHeight = 1.2; // in rem
    return (_jsxs(StyledShowMore, __assign({}, props, { children: [_jsx(ShowMoreContent, __assign({ showMore: showMore, style: {
                    maxHeight: "" + (!showMore
                        ? (numberOfPreviewLines &&
                            numberOfPreviewLines * lineHeight - 0.4) + "rem"
                        : 'inherit'),
                } }, { children: content }), void 0),
            _jsxs(StyledShowMoreLink, __assign({ "data-testid": 'show-more-link', onClick: toggleShowMore, href: '' }, { children: [label, ' ', _jsx(StyledShowMoreIcon, { showMore: showMore, src: DoubleChevron, alt: label + " icon" }, void 0)] }), void 0)] }), void 0));
};
ShowMore.defaultProps = {
    id: '',
    className: '',
    style: {},
    content: '',
    numberOfPreviewLines: 5,
};
