import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import DownloadBrochure from './DownloadBrochure';

const ButtonGroup = () => {
    return (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
            <WhatsAppButton />
            <DownloadBrochure />
        </div>
    );
};

export default ButtonGroup;
