import Routes  from "./routes/Routes"

const renderAllRoutes = () => {
    return Routes.map((route)=>{
        return route;
    })
}

const UtilMethods = {renderAllRoutes}

export default UtilMethods;