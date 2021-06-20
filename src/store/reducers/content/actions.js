export function addContent(content) {
    return {
        type: 'ADD_CONTENT',
        content
    }
}

export function removeContent(contentId) {
    return {
        type: 'REMOVE_CONTENT',
        contentId
    }
}

export function updateContent(content, contentId) {
    return {
        type: 'UPDATE_CONTENT',
        content,
        contentId
    }
}