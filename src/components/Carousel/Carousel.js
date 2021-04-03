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
import { useEffect, useRef, useState, } from 'react';
import { Chevron } from '../../assets/icons';
import { ORIENTATION, PREVIEWS_POSITION } from '../../constants';
import { isEventValid } from '../../utils/utils';
import { StyledCarousel, StyledCarouselContent, StyledCarouselSelected, StyledCarouselHeader, StyledCarouselTitle, StyledCarouselToggle, StyledChevron, StyledIndicatorBar, StyledIndicatorBarItem, StyledImage, StyledImageWrapper, StyledPreviews, StyledImagePreview, } from './Carousel.style';
export var Carousel = function (_a) {
    var title = _a.title, items = _a.items, hasPreviews = _a.hasPreviews, orientation = _a.orientation, imageChangeInterval = _a.imageChangeInterval, allowAutomaticView = _a.allowAutomaticView, canControlAutomaticView = _a.canControlAutomaticView, props = __rest(_a, ["title", "items", "hasPreviews", "orientation", "imageChangeInterval", "allowAutomaticView", "canControlAutomaticView"]);
    var _b = useState(0), presentingItemIndex = _b[0], setPresentingItemIndex = _b[1];
    var _c = useState(allowAutomaticView || false), isAutomaticView = _c[0], setAutomaticView = _c[1];
    var chevronRef = useRef(null);
    useEffect(function () {
        var interval;
        if (isAutomaticView) {
            interval = window.setInterval(function () { var _a; return !!chevronRef && ((_a = chevronRef.current) === null || _a === void 0 ? void 0 : _a.click()); }, imageChangeInterval);
        }
        return function () { return clearInterval(interval); };
    }, [isAutomaticView, imageChangeInterval]);
    var toggleAutomaticView = function (event) {
        return !!event &&
            allowAutomaticView &&
            canControlAutomaticView &&
            setAutomaticView(event.target.checked);
    };
    var handleNextItemClick = function () {
        var newIndex = presentingItemIndex < items.length - 1 ? presentingItemIndex + 1 : 0;
        setPresentingItemIndex(newIndex);
    };
    var handlePreviousItemClick = function () {
        var newIndex = presentingItemIndex > 0 ? presentingItemIndex - 1 : items.length - 1;
        setPresentingItemIndex(newIndex);
    };
    var handleItemClick = function (index) { return setPresentingItemIndex(index); };
    var renderPreviews = function (previewPosition) {
        var nextIndex = presentingItemIndex < items.length - 1 ? presentingItemIndex + 1 : 0;
        var afterNextIndex = nextIndex < items.length - 1 ? nextIndex + 1 : 0;
        var previousIndex = presentingItemIndex > 0 ? presentingItemIndex - 1 : items.length - 1;
        var beforePreviousIndex = previousIndex > 0 ? previousIndex - 1 : items.length - 1;
        var isBefore = previewPosition === PREVIEWS_POSITION.BEFORE;
        return (_jsxs(StyledPreviews, { children: [_jsx(StyledImagePreview, { role: 'button', tabIndex: 0, isVertical: orientation === ORIENTATION.VERTICAL, isClickable: true, src: isBefore ? items[beforePreviousIndex].src : items[nextIndex].src, alt: "preview-" + (isBefore ? items[beforePreviousIndex].name : items[nextIndex].name), onClick: function () {
                        return handleItemClick(isBefore ? beforePreviousIndex : nextIndex);
                    } }, void 0),
                _jsx(StyledImagePreview, { role: 'button', tabIndex: 0, isClickable: true, isVertical: orientation === ORIENTATION.VERTICAL, src: isBefore ? items[previousIndex].src : items[afterNextIndex].src, alt: "preview-" + (isBefore ? items[previousIndex].name : items[afterNextIndex].name), onClick: function () {
                        return handleItemClick(isBefore ? previousIndex : afterNextIndex);
                    } }, void 0)] }, void 0));
    };
    return (_jsx(StyledCarousel, __assign({}, props, { role: 'listbox', "aria-label": 'images slider' }, { children: _jsxs(StyledCarouselContent, { children: [_jsxs(StyledCarouselHeader, { children: [_jsx(StyledCarouselTitle, { children: title }, void 0),
                        allowAutomaticView && canControlAutomaticView && (_jsx(StyledCarouselToggle, { "data-testid": 'carousel-toggle', leftLabel: 'off', rightLabel: 'on', checked: isAutomaticView, onChange: toggleAutomaticView }, void 0))] }, void 0),
                _jsxs(StyledCarouselSelected, { children: [hasPreviews && renderPreviews(PREVIEWS_POSITION.BEFORE), _jsxs(StyledImageWrapper, __assign({ isVertical: orientation === ORIENTATION.VERTICAL }, { children: [items.map(function (item, index) { return (_jsx(StyledImage, { role: 'option', src: item.src, alt: "image-" + item.name, isSelected: presentingItemIndex === index }, "slide-image-" + item.name)); }),
                                _jsx(StyledChevron, __assign({ "aria-label": 'click to select previous item', isLeftChevron: true, onClick: handlePreviousItemClick, onKeyDown: function (event) {
                                        return isEventValid(event) && handlePreviousItemClick();
                                    } }, { children: _jsx("img", { src: Chevron, alt: 'left-chevron' }, void 0) }), void 0),
                                _jsx(StyledChevron, __assign({ "aria-label": 'click to select next item', ref: chevronRef, onClick: handleNextItemClick, onKeyDown: function (event) {
                                        return isEventValid(event) && handleNextItemClick();
                                    } }, { children: _jsx("img", { src: Chevron, alt: 'right-chevron' }, void 0) }), void 0),
                                _jsx(StyledIndicatorBar, { children: items.map(function (item, index) { return (_jsx(StyledIndicatorBarItem, { "data-testid": "bar-item-" + index, "aria-label": "click to select item " + index, isFilled: index <= presentingItemIndex, onClick: function () { return handleItemClick(index); }, onKeyDown: function (event) {
                                            return isEventValid(event) && handleItemClick(index);
                                        } }, "carousel-item-" + index * Math.random())); }) }, void 0)] }), void 0), hasPreviews && renderPreviews(PREVIEWS_POSITION.AFTER)] }, void 0)] }, void 0) }), void 0));
};
Carousel.defaultProps = {
    id: '',
    className: '',
    style: {},
    title: '',
    items: [],
    hasPreviews: false,
    imageChangeInterval: 1500,
    allowAutomaticView: false,
    canControlAutomaticView: false,
    orientation: ORIENTATION.LANDSCAPE,
};
