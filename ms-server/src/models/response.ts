export enum NodeType {
  Hyperlink = "hyperlink",
  ListItem = "list-item",
  OrderedList = "ordered-list",
  Paragraph = "paragraph",
  Text = "text",
}

export enum LinkTypeEnum {
  Asset = "Asset",
  ContentType = "ContentType",
  Entry = "Entry",
  Environment = "Environment",
  Space = "Space",
}

export enum MarkType {
  Array = "Array",
  Underline = "underline",
}

export enum PurpleType {
  Link = "Link",
}

export enum Locale {
  EnUS = "en-US",
}

export interface Chef {
  sys: ChefSys;
}

export interface ChefSys {
  id: string;
  type: PurpleType;
  linkType: LinkTypeEnum;
}

export interface ResponseModel {
  sys: SysElement;
  total: number;
  skip: number;
  limit: number;
  items: Item[];
  includes: Includes;
}

export interface Includes {
  Asset: Asset[];
}

export interface Asset {
  metadata: Metadata;
  sys: AssetSys;
  fields: AssetFields;
}

export interface Image {
  width: number;
  height: number;
}

export interface Details {
  size: number;
  image: Image;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface AssetFields {
  title: string;
  file: File;
}

export interface Metadata {
  tags: any[];
}

export interface AssetSys {
  space: Chef;
  id: string;
  type: LinkTypeEnum;
  createdAt: string;
  updatedAt: string;
  environment: Chef;
  revision: number;
  locale: Locale;
  contentType?: Chef;
}

export interface ItemFields {
  title?: string;
  url?: string;
  question?: string;
  answer?: Answer;
  items?: Chef[];
  country?: string;
  brand?: string;
  slug?: string;
  footer?: Chef[];
  rich?: Rich;
  javascript?: string;
  css?: string;
  body?: string;
  name?: string;
  photo?: Chef;
  calories?: number;
  description?: string;
  tags?: Chef[];
  chef?: Chef;
}

export interface Item {
  metadata: Metadata;
  sys: AssetSys;
  fields: ItemFields;
}

export interface AnswerContent {
  nodeType: string;
  content: PurpleContent[];
  data: AnswerData;
}

export interface Answer {
  nodeType: string;
  data: AnswerData;
  content: AnswerContent[];
}

export interface PurpleData {
  uri?: string;
}

export interface SysElement {
  type: MarkType;
}

export interface AnswerData { }

export interface StickyContent {
  data: PurpleData;
  marks?: SysElement[];
  value?: string;
  nodeType: NodeType;
  content?: IndigoContent[];
}

export interface TentacledContent {
  nodeType: NodeType;
  value?: string;
  marks?: SysElement[];
  data: PurpleData;
  content?: StickyContent[];
}

export interface FluffyContent {
  nodeType: NodeType;
  content?: TentacledContent[];
  data: PurpleData;
  marks?: any[];
  value?: string;
}

export interface PurpleContent {
  nodeType: NodeType;
  value?: string;
  marks?: SysElement[];
  data: AnswerData;
  content?: FluffyContent[];
}

export interface IndecentContent {
  data: PurpleData;
  marks?: SysElement[];
  value?: string;
  nodeType: NodeType;
  content?: PurpleContent[];
}

export interface IndigoContent {
  data: PurpleData;
  marks?: SysElement[];
  value?: string;
  nodeType: NodeType;
  content?: IndecentContent[];
}

export interface RichContent {
  data: AnswerData;
  content: IndecentContent[];
  nodeType: string;
}

export interface Rich {
  data: AnswerData;
  content: RichContent[];
  nodeType: string;
}
