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
import { ORIENTATION } from '../../constants';
import { Step } from '../Step/Step';
import { DoubleChevron } from '../../assets/icons';
import { StyledStepper, StyledStepperContainer, StyledStepperIndicator, StyledStepperIndicatorItem, StyledStepperProgressBar, StyledStepperContent, StyledStepperFooter, StyledStepperButton, StyledStepperButtonRight, } from './Stepper.style';
export var Stepper = function (_a) {
    var _b;
    var orientation = _a.orientation, stepsMetadata = _a.stepsMetadata, buttonLabel = _a.buttonLabel, onSubmit = _a.onSubmit, props = __rest(_a, ["orientation", "stepsMetadata", "buttonLabel", "onSubmit"]);
    var _c = useState(0), activeStepIndex = _c[0], setActiveStepIndex = _c[1];
    var progressPerStep = 100 / (stepsMetadata.length - 1);
    var isVertical = orientation === ORIENTATION.VERTICAL;
    var handleNextStepClick = function () {
        if (activeStepIndex === stepsMetadata.length - 1)
            return;
        setActiveStepIndex(function (prevActiveStepIndex) { return prevActiveStepIndex + 1; });
    };
    var handlePreviousStepClick = function () {
        if (activeStepIndex === 0)
            return;
        setActiveStepIndex(function (prevActiveStepIndex) { return prevActiveStepIndex - 1; });
    };
    var getProgressBarPercentage = function () {
        return activeStepIndex * progressPerStep;
    };
    return (_jsxs(StyledStepper, __assign({ "data-steps": stepsMetadata.length, isVertical: isVertical }, props, { children: [_jsxs(StyledStepperIndicator, __assign({ role: 'list', "aria-label": 'progress', isVertical: isVertical }, { children: [_jsx(StyledStepperProgressBar, { value: getProgressBarPercentage(), max: '100', isVertical: isVertical }, void 0),
                    stepsMetadata.map(function (step, index) { return (_jsx(StyledStepperIndicatorItem, __assign({ "aria-current": 'step', isFilled: index <= activeStepIndex }, { children: index + 1 }), "step-indicator-" + (index + Math.random()))); })] }), void 0),
            _jsxs(StyledStepperContainer, __assign({ isVertical: isVertical }, { children: [_jsx(StyledStepperContent, { children: stepsMetadata.map(function (_a, index) {
                            var content = _a.content;
                            return (_jsx(Step, { content: content, isActive: index === activeStepIndex }, "step-" + (index + Math.random())));
                        }) }, void 0),
                    _jsxs(StyledStepperFooter, { children: [activeStepIndex > 0 && (_jsx(StyledStepperButton, { "data-testid": 'prev-button', "aria-label": 'previous button', icon: DoubleChevron, onClick: handlePreviousStepClick }, void 0)),
                            _jsx(StyledStepperButtonRight, { "data-testid": 'next-button', "aria-label": activeStepIndex === stepsMetadata.length - 1
                                    ? buttonLabel + " button"
                                    : 'next button', label: activeStepIndex === stepsMetadata.length - 1 ? buttonLabel : '', icon: "" + (activeStepIndex !== stepsMetadata.length - 1 ? DoubleChevron : ''), disabled: !((_b = stepsMetadata[activeStepIndex].isValid) !== null && _b !== void 0 ? _b : true), onClick: activeStepIndex === stepsMetadata.length - 1
                                    ? onSubmit
                                    : handleNextStepClick }, void 0)] }, void 0)] }), void 0)] }), void 0));
};
Stepper.defaultProps = {
    id: '',
    className: '',
    style: {},
    orientation: ORIENTATION.LANDSCAPE,
    stepsMetadata: [],
    buttonLabel: 'submit',
    onSubmit: function () { return null; },
};
