import { Component } from "vue";

export type Size = "big" | "medium" | "small";

export type Level = "primary" | "secondary" | "critical";

export type Content = string | Component;

export type TextContent = Exclude<Content, Component>;

export type Callback<T> = (value:T) => void;

export type Actionable<F> = {
    action:Callback<F>
} 

export type CommonProps = {
    size:Size,
    content:Content,
    level:Level
};
