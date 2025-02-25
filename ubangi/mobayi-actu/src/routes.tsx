import { Children } from "react";
import App from "./App";
import AboutPage from "./pages/about/about-page";
import ArticlePage from "./pages/article/article-page";
import ContactPage from "./pages/contact/contact-page";
import CustomerPage from "./pages/customer-page/customer-page";
import NotFoundPage from "./pages/errors/not-found-page";
import HomePage from "./pages/home-page/home-page";
import LoginPage from "./pages/customer-page/login-page";
import LogoutPage from "./pages/customer-page/logout-page";
import RegisterPage from "./pages/customer-page/register-page";
import ArticleDetailPage from "./pages/article/pages/article-detail.page";
import ArticleTablePage from "./pages/article/pages/article-table.page";
import ArticleNotFoundPage from "./pages/errors/article-not-found";
import NewsPage from "./pages/news/news-page";
import PoliticPage from "./pages/politic/politic-page";
import SocietyPage from "./pages/society/society-page";
import CulturePage from "./pages/culture/culture-page";
import SciencePage from "./pages/science/science-page";
import EconomyPage from "./pages/economy/economy-page";
import DonatePage from "./pages/donate/donate-page";


export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'donate',
                element: <DonatePage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            },
            {
                path: 'news',
                element: <NewsPage />
                ,
                children: [
                    {
                        path: 'article/:articleId',
                        element: <ArticleDetailPage />
                    }
                ]
            },
            {
                path: 'politic',
                element: < PoliticPage />
            },
            {
                path: 'society',
                element: <SocietyPage />
            },
            {
                path: 'culture',
                element: <CulturePage />
            },
            {
                path: 'science',
                element: <SciencePage />
            },
            {
                path: 'economy',
                element: <EconomyPage />
            },
            {
                path: 'customer',
                element: <CustomerPage />,
            },
            {
                path: 'article',
                element: <ArticlePage />,
                children: [
                    {
                        index: true,
                        element: <ArticlePage />
                    },
                    {
                        path: ':articleId',
                        element: <ArticleDetailPage />
                    },
                    {
                        path: 'not-found',
                        element: <ArticleNotFoundPage />
                    }
                ]
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'logout',
                element: <LogoutPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
            
    }
]