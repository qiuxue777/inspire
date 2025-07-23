import React from "react";
import {ROuteObject} from "react-router-dom";
import lession from "./lession";

interface RouteSource{
    component: React.LazyExoticComponent<React.ComponentType<any>>;
}

const getRouteData = (): [RouteObject[], {key: string: RouteObject}] => {
    const data: Record<string, RouteSource> = {  //Record<Keys, Type> 一个对象类型，所有键必须是 Keys 里的值，所有值必须是 Type 类型
        "/": {
            component: React.lazy(() => import(/* webpackChunkName: "lession49" */"@/component/lession/Lession49")),
        },
        ...lession,
        "helloworld": {
            component: React.lazy(() => import(/* webpackChunkName:"helloword" */ "@/component/helloworld")),
        },
        "*": {
            component: React.lazy(() => Promise.resolve({default: () => <div>404 Not Found</div>})),
        },
    };

    const routes = [];
    const routeMap = { [key: string]: RouteObject };

    for(const [k, {component}] of Object.entries(data)){
        const item: RouteOBject = {
            path: k,
            element: React.createElement(component),
        };
        routes.push(item);
        routeMap[k] = item;
    }

    return [routes, routeMap];
};

export default getRouteData;