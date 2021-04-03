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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx } from "react/jsx-runtime";
import { render, getByText, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';
describe('Dropdown', function () {
    var defaultProps = {
        options: ['option 1', 'option 2', 'option 3'],
        selectedOption: '',
        placeholder: 'select an option',
        onChooseOption: function () { return null; },
    };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Dropdown, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should display label if label prop is passed', function () {
        var container = render(_jsx(Dropdown, __assign({}, defaultProps, { label: 'Dropdown' }), void 0)).container;
        getByText(container, 'Dropdown');
    });
    test('should display the field of `optionKey` as option element label, if objects are passed in `options array', function () {
        var getByText = render(_jsx(Dropdown, __assign({}, defaultProps, { label: 'Dropdown', options: [
                { label: 'option 1' },
                { label: 'option 2' },
                { label: 'option 3' },
            ], optionKey: 'label' }), void 0)).getByText;
        getByText('option 1');
    });
    test('should return null on choose option if onChooseOption prop is not passed', function () {
        var _a;
        var result = ((_a = Dropdown.defaultProps) === null || _a === void 0 ? void 0 : _a.onChooseOption) &&
            Dropdown.defaultProps.onChooseOption();
        expect(result).toBeNull();
    });
    test('should handle change events and simulate selection', function () { return __awaiter(void 0, void 0, void 0, function () {
        var onChooseOptionMock, getByLabelText, select;
        return __generator(this, function (_a) {
            onChooseOptionMock = jest.fn();
            getByLabelText = render(_jsx(Dropdown, __assign({}, defaultProps, { onChooseOption: onChooseOptionMock }), void 0)).getByLabelText;
            select = getByLabelText(/select/i);
            fireEvent.change(select);
            expect(onChooseOptionMock).toBeCalled();
            return [2 /*return*/];
        });
    }); });
    test('should set isExpanded = true onclick', function () {
        var _a = render(_jsx(Dropdown, __assign({}, defaultProps), void 0)), getByLabelText = _a.getByLabelText, getByAltText = _a.getByAltText;
        var select = getByLabelText(/select/i);
        var chevron = getByAltText('chevron-icon');
        fireEvent.click(select);
        var style = window.getComputedStyle(chevron);
        expect(style.transform).toBe('rotate(180deg)');
    });
    test('should handle blur events and sets isExpanded = false', function () {
        var _a = render(_jsx(Dropdown, __assign({}, defaultProps), void 0)), getByLabelText = _a.getByLabelText, getByAltText = _a.getByAltText;
        var select = getByLabelText(/select/i);
        var chevron = getByAltText('chevron-icon');
        fireEvent.change(select);
        fireEvent.blur(select);
        var style = window.getComputedStyle(chevron);
        expect(style.transform).toBe('');
    });
    describe('Keyboard events handling', function () {
        var select;
        var chevron;
        beforeEach(function () {
            var _a = render(_jsx(Dropdown, __assign({}, defaultProps), void 0)), getByLabelText = _a.getByLabelText, getByAltText = _a.getByAltText;
            select = getByLabelText(/select/i);
            chevron = getByAltText('chevron-icon');
        });
        test('should set isExpanded = true on `enter`', function () {
            fireEvent.keyDown(select, { key: 'Enter' });
            var style = window.getComputedStyle(chevron);
            expect(style.transform).toBe('rotate(180deg)');
        });
        test('should set isExpanded = true on `space`', function () {
            fireEvent.keyUp(select, { key: ' ' });
            var style = window.getComputedStyle(chevron);
            expect(style.transform).toBe('rotate(180deg)');
        });
        test('should set isExpanded = true on `escape`', function () {
            fireEvent.keyUp(select, { key: 'Escape' });
            var style = window.getComputedStyle(chevron);
            expect(style.transform).toBe('');
        });
    });
    describe('Disabled Dropdown', function () {
        test('should be disabled', function () {
            var container = render(_jsx(Dropdown, __assign({}, defaultProps, { disabled: true }), void 0)).container;
            var dropdown = container.querySelector('select');
            expect(dropdown).toHaveAttribute('disabled');
        });
        test('should not handle change events', function () {
            var onChooseOptionMock = jest.fn();
            var firstChild = render(_jsx(Dropdown, __assign({}, defaultProps, { disabled: true, onChooseOption: onChooseOptionMock }), void 0)).container.firstChild;
            firstChild && fireEvent.click(firstChild);
            expect(onChooseOptionMock).not.toBeCalled();
        });
    });
});
