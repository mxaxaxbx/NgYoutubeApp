export interface YoutubeResponseI {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    items:         Item[];
    pageInfo:      PageInfo;
}

export interface Item {
    kind:    string;
    etag:    string;
    id:      string;
    snippet: VideoI;
}

export interface VideoI {
    publishedAt:  Date;
    channelId:    string;
    title:        string;
    description:  string;
    thumbnails:   Thumbnails;
    channelTitle: string;
    playlistId:   string;
    position:     number;
    resourceId:   ResourceID;
}

export interface ResourceID {
    kind:    string;
    videoId: string;
}

export interface Thumbnails {
    default:  Default;
    medium:   Default;
    high:     Default;
    standard: Default;
    maxres:   Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}
