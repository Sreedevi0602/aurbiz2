import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
        element: <Layout/>,
        children: [
        {
            path: "/about",
            element: <Who/>
        },
        {
            path: "/services",
            element: <What/>
        },
        {
            path: "/services/strategic_consulting",
            element: <Consulting/>
        },
        {
            path: "/services/tech_support_&_development",
            element: <Tech/>
        },
        {
            path: "/services/digital_marketing_&_branding",
            element: <Branding/>
        },
        {
            path: "/services/design_&_creative_strategy",
            element: <Design/>
        },
        {
            path: "/services/business_compliance",
            element: <Compliance/>
        },
        {
            path: "/services/training_&_development",
            element: <Training/>
        },
        {
            path: "/pricing",
            element: <Plans/>
        },
        {
            path: "/pricing/basic",
            element: <Basic/>
        },
        {
            path: "/pricing/standard",
            element: <Standard/>
        },
        {
            path: "/pricing/platinum",
            element: <Platinum/>
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