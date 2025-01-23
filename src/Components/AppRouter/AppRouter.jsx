import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Cookie from '../../Pages/Below/Cookie'
import Security from '../../Pages/Below/Security'
import Privacy from '../../Pages/Below/Privacy'
import Terms from '../../Pages/Below/Terms'
const Navbar = lazy(() => import ('../Navbar/Navbar'))
const Footer = lazy(() => import ('../Footer/Footer'))
{/*import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'*/}

const Layout = lazy(() => import ('../Layout'))
const Who = lazy(() => import ('../../Pages/Who/Who'))
const What = lazy(() => import ('../../Pages/What/What'))
const Consulting = lazy(() => import ('../../Pages/What/Consulting'))
const Tech = lazy(() => import ('../../Pages/What/Tech'))
const Branding = lazy(() => import ('../../Pages/What/Branding'))
const Design = lazy(() => import ('../../Pages/What/Design'))
const Compliance = lazy(() => import ('../../Pages/What/Compliance'))
const Training = lazy(() => import ('../../Pages/What/Training'))
const Plans = lazy(() => import ('../../Pages/Plans/Plans'))
const Basic = lazy(() => import ('../../Pages/Plans/Basic'))
const Standard = lazy(() => import ('../../Pages/Plans/Standard'))
const Platinum = lazy(() => import ('../../Pages/Plans/Platinum'))
const Loader = lazy(() => import ('../Loader'))

const routers = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar/><Outlet/><Footer/></>,
        children: [
        {
            index: true,
            element: <Layout/>
        },
        {
            path: "about",
            element: <Who/>
        },
        {
            path: "services",
            element: <What/>
        },
        {
            path: "strategic_consulting",
            element: <Consulting/>
        },
        {
            path: "tech_support_&_development",
            element: <Tech/>
        },
        {
            path: "digital_marketing_&_branding",
            element: <Branding/>
        },
        {
            path: "design_&_creative_strategy",
            element: <Design/>
        },
        {
            path: "business_compliance",
            element: <Compliance/>
        },
        {
            path: "training_&_development",
            element: <Training/>
        },
        {
            path: "pricing",
            element: <Plans/>
        },
        {
            path: "basic",
            element: <Basic/>
        },
        {
            path: "standard",
            element: <Standard/>
        },
        {
            path: "platinum",
            element: <Platinum/>
        },
        {
            path: "terms",
            element: <Terms/>
        },
        {
            path: "privacy",
            element: <Privacy/>
        },
        {
            path: "security",
            element: <Security/>
        },
        {
            path: "cookie",
            element: <Cookie/>
        }
    ]
    }
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader/>}>
    <RouterProvider router={routers} />
    </Suspense>
  )
}

export default AppRouter