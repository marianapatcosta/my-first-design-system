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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import './App.css';
import { Button, Card, Checkbox, Dropdown, DropdownMultiselection, Image, RadioButton, ToggleSwitch, Upload, } from './components';
import { Search } from './components/Search/Search';
import { Toast } from './components/Toast/Toast';
import Test from '../src/assets/images/test.jpg';
import { TOAST_TYPE } from './constants';
function App() {
    var _a = useState(false), checked = _a[0], setChecked = _a[1];
    var _b = useState(''), option = _b[0], setOption = _b[1];
    var _c = useState([{ name: 'option 1', id: 1 }]), options = _c[0], setOptions = _c[1];
    var _d = useState('option 1'), option3 = _d[0], setOption3 = _d[1];
    var _e = useState(['option 1']), options2 = _e[0], setOptions2 = _e[1];
    var _f = useState('option 1'), option2 = _f[0], setOption2 = _f[1];
    var _g = useState('hello'), value = _g[0], setValue = _g[1];
    var todos = [
        { name: 'todo1', description: 'desc1' },
        { name: 'todo2', description: 'desc1' },
    ];
    var _h = useState([]), gameCardImages = _h[0], setGameCardImages = _h[1];
    var testRef = useRef(null);
    var handleDropdownMultiSelectionClick = function (clickedItem, selectedItemsCollection, setter, labelKey) {
        var isItemSelected = labelKey
            ? !!selectedItemsCollection.find(function (item) { return item[labelKey] === clickedItem[labelKey]; })
            : selectedItemsCollection.includes(clickedItem);
        isItemSelected
            ? setter(function (prevCollectionState) {
                return prevCollectionState.filter(function (item) {
                    return labelKey
                        ? item[labelKey] !== clickedItem[labelKey]
                        : item !== clickedItem;
                });
            })
            : setter(function (prevCollectionState) { return __spreadArray(__spreadArray([], prevCollectionState), [
                clickedItem,
            ]); });
    };
    var handleDropdownSelectionClick = function (option, setter) {
        return setter(option);
    };
    var handleFileUpload = function (e, maxNumberOfFiles, validator, setter) {
        var uploadedFiles = Array.from(e.target.files).slice(0, maxNumberOfFiles);
        uploadedFiles.forEach(function (file) {
            var reader = new FileReader();
            reader.onloadend = function () {
                return setter(function (prevState) {
                    return !!prevState && prevState.length < maxNumberOfFiles
                        ? __spreadArray(__spreadArray([], prevState), [{ name: file.name, src: reader.result }]) : [{ name: file.name, src: reader.result }];
                });
            };
            reader.readAsDataURL(file);
        });
    };
    var handleFileDelete = function (clickedItemIndex, setter) {
        setter(function (prevState) {
            return prevState.filter(function (item, index) { return index !== clickedItemIndex; });
        });
    };
    return (_jsxs("div", __assign({ className: 'App' }, { children: [_jsxs(Card, { children: [_jsxs("p", { children: ["Edit ", _jsx("code", { children: "src/App.tsx" }, void 0), " and save to reload."] }, void 0),
                    _jsx("a", __assign({ className: 'App-link', href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer' }, { children: "Learn React" }), void 0)] }, void 0),
            _jsx(Button, { label: 'Hello', onClick: function () { return console.log('clicked'); } }, void 0),
            _jsx(Checkbox, { label: 'checkbox', checked: checked, onChange: function (e) { return setChecked(e.target.checked); } }, void 0),
            _jsx(ToggleSwitch, { style: { color: 'red' }, label: 'toggle', checked: checked, onChange: function (e) { return setChecked(e.target.checked); } }, void 0),
            _jsx(Dropdown, { placeholder: 'select an option', 
                /*  options={['option 1', 'option 2', 'option 3']} */
                options: [
                    { name: 'option 1', id: 1 },
                    { name: 'option 2', id: 2 },
                ], optionKey: 'name', selectedOption: option, label: 'Example', onChooseOption: function (e) { return setOption(e.target.value); } }, void 0),
            _jsx(Search, { value: value, isExpandable: true, onChange: function (e) { return setValue(e.target.value); }, onClear: function (e) { return setValue(''); } }, void 0),
            value && (_jsx(Toast, { className: 'App-link', message: value, type: TOAST_TYPE.SUCCESS, onClear: function () { return setValue(''); } }, void 0)),
            _jsx(Card, __assign({ style: { width: '300px' } }, { children: _jsx(Image, { src: Test, 
                    /*isZoomable={true}*/ isClickable: true, onClick: function () { return console.log('clicked!'); } }, void 0) }), void 0),
            _jsx("div", __assign({ style: { width: '300px', marginTop: '20px' }, ref: testRef }, { children: _jsx(Image, { style: { transform: 'rotate(90deg)' }, src: Test, isZoomable: true }, void 0) }), void 0),
            _jsx(DropdownMultiselection, { options: [
                    { name: 'option 1', id: 1 },
                    { name: 'option 2', id: 2 },
                    { name: 'option 3', id: 3 },
                    { name: 'option 4', id: 4 },
                ], optionKey: 'name', selectedOptions: options, placeholder: 'Example', onOptionClick: function (option) {
                    return handleDropdownMultiSelectionClick(option, options, setOptions, 'name');
                } }, void 0),
            _jsx(DropdownMultiselection, { options: ['option 1', 'option 2', 'option 3'], selectedOptions: options2, placeholder: 'Example', onOptionClick: function (option) {
                    return handleDropdownMultiSelectionClick(option, options2, setOptions2, null);
                } }, void 0),
            _jsx(DropdownMultiselection, { options: [
                    'option 1',
                    'option 2',
                    'option 3',
                ] /* [
                  { name: 'option 1', id: 1 },
                  { name: 'option 2', id: 2 },
                  { name: 'option 3', id: 3 },
                  { name: 'option 4', id: 4 },
                ] */, isSingleSelection: true, selectedOption: option3, placeholder: 'single selection', onOptionClick: function (option) {
                    return handleDropdownSelectionClick(option, setOption3);
                } }, void 0),
            _jsx(Upload, { label: 'Upload', hasPreview: true, areMultipleFilesAllowed: true, filesToPreview: gameCardImages.map(function (_a) {
                    var src = _a.src;
                    return src;
                }), onUpload: function (e) { return handleFileUpload(e, 5, '', setGameCardImages); }, onDeletePreview: function (clickedItemIndex) {
                    return handleFileDelete(clickedItemIndex, setGameCardImages);
                } }, void 0),
            _jsx("div", { children: [
                    { label: 'option 1', name: 'name 1' },
                    { label: 'option 2', name: 'name 2' },
                    { label: 'option 3', name: 'name 3' },
                ].map(function (item) { return (_jsx(RadioButton, { checked: item.label === option2, value: item.label, label: item.label, onChange: function (e) { return e && setOption2(e.target.value); } }, "radio-button-" + (item.label || item))); }) }, void 0),
            _jsx("div", { style: { width: '800px', marginTop: '520px' } }, void 0),
            _jsx("button", { children: "hello" }, void 0)] }), void 0));
}
export default App;
