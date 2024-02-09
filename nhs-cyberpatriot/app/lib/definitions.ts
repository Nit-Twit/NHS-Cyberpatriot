export type Permissions = {
    "COMMENT": boolean,
    "MANAGE_COMMENTS": boolean,
    "MANAGE_ACCOUNT": boolean,
    "MANAGE_ACCOUNTS": boolean,
    "POST_GUIDES": boolean,
    "POST_CHECKLISTS": boolean,
    "MANAGE_WEBSITE": boolean,
    "DELETE_USERS": boolean
}

export type User = {
    id: string,
    username: string,
    name: string,
    email: string,
    password: string,
    permissions: Permissions[],
    title: string,

}