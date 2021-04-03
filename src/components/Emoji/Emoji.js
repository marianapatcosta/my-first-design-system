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
import { jsx as _jsx } from "react/jsx-runtime";
import { StyledEmoji } from './Emoji.style';
export var Emoji = function (_a) {
    var label = _a.label, emoji = _a.emoji;
    return (_jsx(StyledEmoji, __assign({ role: 'img', "aria-label": label ? label : '', "aria-hidden": label ? 'false' : 'true' }, { children: emoji }), void 0));
};
Emoji.defaultProps = {
    id: '',
    className: '',
    style: {},
    label: '',
    emoji: null,
};
