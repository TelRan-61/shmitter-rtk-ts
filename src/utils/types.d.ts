export interface Stats {
    followers: number,
    following: number,
}
// TODO Homework 2 instead of constants followers and following, use enum
export enum StatsType {
    FOLLOWERS = 'followers',
    FOLLOWING = 'following',
}