/**
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * @export
 * @class NotFoundError
 * @extends {Error}
 */
export class NotFoundError extends Error {
    name: "NotFoundError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface MediasResponse
 */
export interface MediasResponse {
    /**
     * 
     * @type {boolean}
     * @memberof MediasResponse
     */
    success: boolean;
    /**
     * 
     * @type {MediasResponseObj}
     * @memberof MediasResponse
     */
    response: MediasResponseObj;
}
/**
 * 
 * @export
 * @interface MediasResponseObj
 */
export interface MediasResponseObj {
    /**
     * 
     * @type {MediasResponseObjMedia}
     * @memberof MediasResponseObj
     */
    media: MediasResponseObjMedia;
}
/**
 * 
 * @export
 * @interface MediasResponseObjMedia
 */
export interface MediasResponseObjMedia {
    /**
     * 
     * @type {string}
     * @memberof MediasResponseObjMedia
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof MediasResponseObjMedia
     */
    type?: string;
    /**
     * 
     * @type {MediasResponseObjMediaStatistics}
     * @memberof MediasResponseObjMedia
     */
    statistics?: MediasResponseObjMediaStatistics;
    /**
     * 
     * @type {MediasResponseObjMediaUrls}
     * @memberof MediasResponseObjMedia
     */
    urls?: MediasResponseObjMediaUrls;
    /**
     * 
     * @type {SimpleUser}
     * @memberof MediasResponseObjMedia
     */
    owner?: SimpleUser;
}
/**
 * 
 * @export
 * @interface MediasResponseObjMediaStatistics
 */
export interface MediasResponseObjMediaStatistics {
    /**
     * 
     * @type {number}
     * @memberof MediasResponseObjMediaStatistics
     */
    views?: number;
    /**
     * 
     * @type {number}
     * @memberof MediasResponseObjMediaStatistics
     */
    downloads?: number;
    /**
     * 
     * @type {number}
     * @memberof MediasResponseObjMediaStatistics
     */
    likes?: number;
    /**
     * timestamp
     * @type {number}
     * @memberof MediasResponseObjMediaStatistics
     */
    created?: number;
}
/**
 * 
 * @export
 * @interface MediasResponseObjMediaUrls
 */
export interface MediasResponseObjMediaUrls {
    /**
     * 
     * @type {string}
     * @memberof MediasResponseObjMediaUrls
     */
    raw?: string;
    /**
     * 
     * @type {string}
     * @memberof MediasResponseObjMediaUrls
     */
    full?: string;
    /**
     * 
     * @type {string}
     * @memberof MediasResponseObjMediaUrls
     */
    regular?: string;
    /**
     * 
     * @type {string}
     * @memberof MediasResponseObjMediaUrls
     */
    small?: string;
}
/**
 * 
 * @export
 * @interface PostResponse
 */
export interface PostResponse {
    /**
     * 
     * @type {string}
     * @memberof PostResponse
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof PostResponse
     */
    created: Date;
    /**
     * 
     * @type {string}
     * @memberof PostResponse
     */
    mediaId: string;
    /**
     * 
     * @type {SimpleUser}
     * @memberof PostResponse
     */
    user: SimpleUser;
    /**
     * 
     * @type {number}
     * @memberof PostResponse
     */
    likes?: number;
    /**
     * nullable
     * @type {string}
     * @memberof PostResponse
     */
    title?: string;
    /**
     * nullable
     * @type {string}
     * @memberof PostResponse
     */
    description?: string;
}
/**
 * 
 * @export
 * @interface PostsResponse
 */
export interface PostsResponse {
    /**
     * 
     * @type {boolean}
     * @memberof PostsResponse
     */
    success: boolean;
    /**
     * 
     * @type {PostsResponseObj}
     * @memberof PostsResponse
     */
    response: PostsResponseObj;
}
/**
 * 
 * @export
 * @interface PostsResponseObj
 */
export interface PostsResponseObj {
    /**
     * 
     * @type {number}
     * @memberof PostsResponseObj
     */
    count: number;
    /**
     * 
     * @type {Array<PostResponse>}
     * @memberof PostsResponseObj
     */
    posts: Array<PostResponse>;
}
/**
 * 
 * @export
 * @interface SimpleUser
 */
export interface SimpleUser {
    /**
     * 
     * @type {string}
     * @memberof SimpleUser
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof SimpleUser
     */
    username?: string;
}
/**
 * 
 * @export
 * @interface UsersResponse
 */
export interface UsersResponse {
    /**
     * 
     * @type {boolean}
     * @memberof UsersResponse
     */
    success: boolean;
    /**
     * 
     * @type {UsersResponseObj}
     * @memberof UsersResponse
     */
    response: UsersResponseObj;
}
/**
 * 
 * @export
 * @interface UsersResponseObj
 */
export interface UsersResponseObj {
    /**
     * 
     * @type {UsersResponseObjUser}
     * @memberof UsersResponseObj
     */
    user: UsersResponseObjUser;
}
/**
 * 
 * @export
 * @interface UsersResponseObjUser
 */
export interface UsersResponseObjUser {
    /**
     * 
     * @type {string}
     * @memberof UsersResponseObjUser
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersResponseObjUser
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersResponseObjUser
     */
    first_name?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersResponseObjUser
     */
    last_name?: string;
    /**
     * 
     * @type {UsersResponseObjUserProfileImages}
     * @memberof UsersResponseObjUser
     */
    profile_images?: UsersResponseObjUserProfileImages;
}
/**
 * 
 * @export
 * @interface UsersResponseObjUserProfileImages
 */
export interface UsersResponseObjUserProfileImages {
    /**
     * Absolute URL
     * @type {string}
     * @memberof UsersResponseObjUserProfileImages
     */
    small?: string;
    /**
     * Absolute URL
     * @type {string}
     * @memberof UsersResponseObjUserProfileImages
     */
    medium?: string;
    /**
     * Absolute URL
     * @type {string}
     * @memberof UsersResponseObjUserProfileImages
     */
    large?: string;
}

/**
 * Retrieve a specific media 
 * @summary Retrieve details about a specific media
 * @param {string} mediaId the media id
 * @param {number} [offset] number of records to skip for pagination
 * @param {number} [limit] maximum number of records to return
 * @throws {RequiredError}
 */
export const detailMedia = async (mediaId: string, offset?: number, limit?: number): Promise<MediasResponseObjMedia> => {
    const offsetQueryParam = offset ? `&offset=${offset}` : ''
    const limitQueryParam = limit ? `&limit=${limit}` : ''
    const response = await fetch(`BASE_PATH/medias/${mediaId}?api_key=API_KEY${offsetQueryParam}${limitQueryParam}`)
    if (response.status >= 200 && response.status < 300) {
        const json: MediasResponse = await response.json();
        if (json.success) return json.response.media;
        else throw new NotFoundError("No media found for this mediaId");
    } else {
        throw response;
    }
};

/**
 * Retrieve a specific user 
 * @summary Retrieve details about a specific user
 * @param {string} userName the username
 * @throws {RequiredError}
 */
export const detailUser = async (userName: string): Promise<UsersResponseObjUser> => {
    const response = await fetch(`BASE_PATH/users/${userName}?api_key=API_KEY`)
    if (response.status >= 200 && response.status < 300) {
        const json: UsersResponse = await response.json();
        if (json.success) return json.response.user;
        else throw new NotFoundError("No user found for this username");
    } else {
        throw response;
    }
}
    
/**
 * Retrieve a list of posts. By passing in the appropriate options, you can specify a search query 
 * @summary Lists posts
 * @param {string} [query] pass an optional search string for looking up posts
 * @param {number} [offset] number of records to skip for pagination
 * @param {number} [limit] maximum number of records to return
 * @throws {RequiredError}
 */
export const listsPosts = async (query?: string, offset?: number, limit?: number): Promise<PostResponse[]> => {
    const queryQueryParam = query ? `&query=${query}` : ''
    const offsetQueryParam = offset ? `&offset=${offset}` : ''
    const limitQueryParam = limit ? `&limit=${limit}` : ''
    const response =  await fetch(`BASE_PATH/posts?api_key=API_KEY${queryQueryParam}${offsetQueryParam}${limitQueryParam}`)
    if (response.status >= 200 && response.status < 300) {
        const json: PostsResponse = await response.json();
        if (json.success) {
            const postsWithTitle = json.response.posts.filter(post => post.title)
            return postsWithTitle;
        }
        else throw new NotFoundError("No post found");
    } else {
        throw response;
    }
};