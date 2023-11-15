const RouteList = [
    {
        routeName: "http://localhost:3000",
        routeMethodName: "GET"
    },
    {
        routeName: "http://localhost:3000/api",
        routeMethodName: "POST"
    },
];

const container = document.querySelector('.main__div_class');

RouteList.forEach((route, index) => {
    const divContent = container.cloneNode(true);
    const h2Element = divContent.querySelector('h2');
    h2Element.textContent = `${route.routeMethodName}: ${route.routeName}`;
    container.parentNode.appendChild(divContent);
});
