/**
 * Label data
 */
export interface LabelString {
    label: string;
}


/**
 * Feed. Object that return the podcasts service
 */
export interface Feed {
    author: Author;

}

/**
 * Author Data
 */
export interface Author {
    name: LabelString;
    uri: LabelString;
}

/**
 * Podcast data
 */
export interface Podcast {
    'im:name': LabelString;
    'im:image': PodcastImage[];
    sumary: LabelString;
    'im:price': PodcastPrice;
    'im:contentType': PodcastContentType;
    rights: LabelString;
    tittle: LabelString;
    link: PodcastLink;
    id: PodcastId;
    'im:artist': PodcastArtist;
    category: PodcastCategory;
    'im:releaseDate': PodcastReleaseDate;
}

/**
 * Podcast image data
 */
export interface PodcastImage {
    label: string;
    attributes: {
        height: string;
    };
}

/**
 * Podcast Link data
 */
export interface PodcastLink {
    attributes: {
        rel: string;
        type: string;
        href: string;
    }
}

/**
 * Podcast Price data
 */
export interface PodcastPrice {
    label: string;
    attributes: {
        amount: string;
        currency: string;
    };
};

/**
 * Podcast content type data
 */
export interface PodcastContentType {
    attributes: {
        term: string;
        label: string;
    };
};

/**
 * Podcast artist data
 */
export interface PodcastArtist {
    label: string;
    attributes: {
        href: string;
    };
}

/**
 * Podcast category data
 */
export interface PodcastCategory {
    attributes: {
        id: string;
        term: string;
        scheme: string;
        label: string;
    };
}

/**
 * Podcast release date data
 */
export interface PodcastReleaseDate{
    label: string
    attributes: LabelString;
}

/**
 * Servicio listado de podcasts
 */
export interface PodcastService {
    entry: Podcast[];
}

export interface PodcastId {
    label:string;
    attributes: {
        'im:id': string;
    }
}