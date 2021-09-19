import Routes  from "./routes/Routes"
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const renderAllRoutes = () => {
    return Routes.map((route)=>{
        return route;
    })
}

const setCookies = (name:string, value:string, options?: CookieSetOptions) => {
    cookies.set(name, value, options);
    console.log(cookies.get(name));
}

const getCookies = (name: string) => {
    return cookies.get((name));
}

const removeCookies = (name:string) => {
    cookies.remove(name);
}

export interface CookieSetOptions {
    path?: string;
    expires?: Date;
    maxAge?: number;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: boolean | 'none' | 'lax' | 'strict';
    encode?: (value: string) => string;
}



const UtilMethods = {renderAllRoutes, setCookies, getCookies, removeCookies}

export default UtilMethods;