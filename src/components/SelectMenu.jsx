import { useState, useEffect } from '@wordpress/element';
import { Button, Popover } from '@wordpress/components';

function SelectMenu() {

    const [selection, setSelection] = useState('');

    const iframe = window.parent.document.querySelector('.editor-canvas__iframe');

    if (!iframe) {
        return;
    }

    const iframeWindow = iframe.contentWindow;
    const iframeDocument = iframeWindow.document;

    const handleSelectionChange = () => {
        setSelection(iframeDocument.getSelection()?.toString());
    };

    iframeDocument.addEventListener('selectionchange', handleSelectionChange);


    return (
        <>
            {selection.length > 0 && <Popover>{selection}</Popover>}
        </>
    );
}

export default SelectMenu;
