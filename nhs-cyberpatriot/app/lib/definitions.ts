import { userAgent } from "next/server"

export type Permissions = {
    "COMMENT": boolean,
    "MANAGE_COMMENTS": boolean,
    "MANAGE_ACCOUNT": boolean,
    "MANAGE_ACCOUNTS": boolean,
    "POST_GUIDES": boolean,
    "POST_CHECKLISTS": boolean,
    "MANAGE_WEBSITE": boolean,
    "DELETE_USERS": boolean,
    "ADMINISTRATOR": boolean,
    "USER": boolean
}

export const Permissions = [
    "COMMENT", "MANAGE_COMMENTS", "MANAGE_ACCOUNT", "MANAGE_ACCOUNTS", "POST_GUIDES", "POST_CHECKLISTS", "MANAGE_WEBSITE", "DELETE_USERS"
]

export type User = {
    id: string,
    username: string,
    name: string,
    email: string,
    password: string,
    permissions: Permissions[],
    title: string,
}


var a;