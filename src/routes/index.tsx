import { lazy } from 'react'
import { Routes } from './routes'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Layouts
const AppLayout = lazy(() => import('../components/layouts/AppLayout'))

// Pages
const Home = lazy(() => import('../pages/home'))
const Search = lazy(() => import('../pages/search'))
const Job = lazy(() => import('../pages/job'))
const Skill = lazy(() => import('../pages/skill'))

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path={Routes.home} element={<Home />} />
      <Route path={Routes.search} element={<Search />} />
      <Route path={Routes.job} element={<Job />} />
      <Route path={Routes.skill} element={<Skill />} />
    </Route>
  )
)
