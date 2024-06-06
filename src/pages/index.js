import { lazy } from 'react';

export const MainPage = lazy(() => import('./HomePage'));
export const BlogListPage = lazy(() => import('./FavoritePage'));
export const BlogPage = lazy(() => import('./Catalog'));
