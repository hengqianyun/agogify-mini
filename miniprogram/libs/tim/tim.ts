import IMClient from "./tim_core";

export const logout = () => IMClient.getInstance().logout()

export const login = (userId: string) => IMClient.getInstance().login(userId)

export const sendCustomMessage = () => IMClient.getInstance()