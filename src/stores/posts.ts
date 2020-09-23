import { listsPosts } from '../api'

let currentOffset = 0
const limit = 20

export const loadPosts = async () => {
    return listsPosts('', currentOffset * limit, limit)
}

export const loadMorePosts = async () => {
    currentOffset += 1;
    return listsPosts('', currentOffset * limit, limit)
}