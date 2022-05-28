import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const usePageTitle = (title) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title> {title} | Certo Part's</title>
            </Helmet>
        </HelmetProvider>
    );
};

export default usePageTitle;