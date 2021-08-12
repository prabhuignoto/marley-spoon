"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locale = exports.PurpleType = exports.MarkType = exports.LinkTypeEnum = exports.NodeType = void 0;
var NodeType;
(function (NodeType) {
    NodeType["Hyperlink"] = "hyperlink";
    NodeType["ListItem"] = "list-item";
    NodeType["OrderedList"] = "ordered-list";
    NodeType["Paragraph"] = "paragraph";
    NodeType["Text"] = "text";
})(NodeType = exports.NodeType || (exports.NodeType = {}));
var LinkTypeEnum;
(function (LinkTypeEnum) {
    LinkTypeEnum["Asset"] = "Asset";
    LinkTypeEnum["ContentType"] = "ContentType";
    LinkTypeEnum["Entry"] = "Entry";
    LinkTypeEnum["Environment"] = "Environment";
    LinkTypeEnum["Space"] = "Space";
})(LinkTypeEnum = exports.LinkTypeEnum || (exports.LinkTypeEnum = {}));
var MarkType;
(function (MarkType) {
    MarkType["Array"] = "Array";
    MarkType["Underline"] = "underline";
})(MarkType = exports.MarkType || (exports.MarkType = {}));
var PurpleType;
(function (PurpleType) {
    PurpleType["Link"] = "Link";
})(PurpleType = exports.PurpleType || (exports.PurpleType = {}));
var Locale;
(function (Locale) {
    Locale["EnUS"] = "en-US";
})(Locale = exports.Locale || (exports.Locale = {}));
