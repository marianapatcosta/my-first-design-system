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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState, } from 'react';
import { isEventValid } from '../../utils/utils';
import { StyledImageOverlay, StyledImage, StyledImagePlaceholder, } from './Image.style';
export var Image = function (_a) {
    var placeholderClass = _a.placeholderClass, isClickable = _a.isClickable, isZoomable = _a.isZoomable, className = _a.className, onClick = _a.onClick, props = __rest(_a, ["placeholderClass", "isClickable", "isZoomable", "className", "onClick"]);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    var _c = useState(false), isZoomedIn = _c[0], setIsZoomedIn = _c[1];
    var _d = useState(false), wasImageClicked = _d[0], setWasImageClicked = _d[1];
    var handleImageClick = function (event /* MouseEvent<HTMLImageElement> | KeyboardEvent<HTMLImageElement> */) {
        if (!isEventValid(event) || (!isClickable && !isZoomable))
            return;
        if (isZoomable) {
            setIsZoomedIn(function (prevIsZoomedIn) { return !prevIsZoomedIn; });
            !wasImageClicked && setWasImageClicked(true);
            return;
        }
        onClick && onClick(event);
    };
    useEffect(function () {
        if (isZoomedIn) {
            // document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            return;
        }
        // document.getElementsByTagName('body')[0].style.overflow = 'scroll';
        document.documentElement.style.overflow = 'scroll';
    }, [isZoomedIn]);
    return isZoomable ? (_jsxs(StyledImageOverlay, __assign({ isZoomedIn: isZoomedIn }, { children: [!isLoaded && (_jsx(StyledImagePlaceholder, { "data-testid": 'image-placeholder', className: placeholderClass || className }, void 0)),
            _jsx(StyledImage, __assign({ "aria-label": "click to " + (!isZoomedIn ? 'zoom in' : 'zoom out'), tabIndex: isClickable ? 0 : -1, "data-testid": 'image', isClickable: isClickable, isLoaded: isLoaded, isZoomedIn: isZoomedIn, isZoomable: isZoomable, wasImageClicked: wasImageClicked, className: placeholderClass || className, loading: 'lazy', onClick: handleImageClick, onKeyDown: handleImageClick, onLoad: function () { return setIsLoaded(true); } }, props), void 0)] }), void 0)) : (_jsxs(_Fragment, { children: [!isLoaded && (_jsx(StyledImagePlaceholder, { "data-testid": 'image-placeholder', className: placeholderClass || className }, void 0)),
            _jsx(StyledImage, __assign({ "data-testid": 'image', "aria-label": isClickable ? 'click me' : 'image', tabIndex: isClickable ? 0 : -1, className: className, isClickable: isClickable, isLoaded: isLoaded, isZoomedIn: isZoomedIn, isZoomable: isZoomable, wasImageClicked: wasImageClicked, loading: 'lazy', onClick: handleImageClick, onKeyDown: handleImageClick, onLoad: function () { return setIsLoaded(true); } }, props), void 0)] }, void 0));
};
Image.defaultProps = {
    id: '',
    className: '',
    style: {},
    placeholderClass: '',
    isClickable: false,
    isZoomable: false,
    src: '',
    alt: '',
    onClick: function () { return null; },
};
