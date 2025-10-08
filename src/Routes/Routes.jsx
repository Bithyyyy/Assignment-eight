import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import CardDetails from "../pages/CardDetails/CardDetails";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
           {
            index: true,
            loader: () => fetch('/cardData.json'),
            element: <Home />,
           },
           {
            path: 'home',
            loader: () => fetch('/cardData.json'),
            element: <Home />,
           },
           {
            loader: () => fetch('/cardData.json'),
            path: 'details/:id',
            element: <CardDetails />
           },
           {
            path: '*',
            element: <NotFound />
           }
        ]
    }
]);