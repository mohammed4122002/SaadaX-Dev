import React from "react";

export interface InavLink {
    href: string, label: string ,icon: React.ReactNode , className? : string
}
export interface ISocialLink {
    href: string, icon: React.ReactNode ,  className? : string
}
export interface ISkill {
    name : string ,
    img : string
}
