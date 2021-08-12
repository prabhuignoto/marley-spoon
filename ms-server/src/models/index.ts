export interface Sys1 {
  type: string;
  linkType: string;
  id: string;
}

export interface SpaceOrEnvironmentOrContentTypeOrTagsEntityOrPhoto {
  sys: Sys1;
}

export interface Metadata {
  tags?: null[] | null;
}

export interface Sys {
  space: SpaceOrEnvironmentOrContentTypeOrTagsEntityOrPhoto;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: SpaceOrEnvironmentOrContentTypeOrTagsEntityOrPhoto;
  revision: number;
  contentType: SpaceOrEnvironmentOrContentTypeOrTagsEntityOrPhoto;
  locale: string;
}

export interface Fields {
  title: string;
  photo: SpaceOrEnvironmentOrContentTypeOrTagsEntityOrPhoto;
  calories: number;
  description: string;
  tags?: SpaceOrEnvironmentOrContentTypeOrTagsEntityOrPhoto[] | null;
  chef: {
    sys: {
      id: string;
    };
  };
}

export interface RecipeModel {
  metadata: Metadata;
  sys: Sys;
  fields: Fields;
}
