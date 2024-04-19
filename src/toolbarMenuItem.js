import { registerPlugin } from '@wordpress/plugins';
import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import AIModal from './AIModal';

function ParagraphBlockToolbarMenuItem() {
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <PluginBlockSettingsMenuItem
                allowedBlocks={['core/paragraph']}
                icon="format-chat"
                label={__('Chat with AI')}
                onClick={openModal}
            />
            {
                isOpen && (
                    <AIModal onClose={closeModal} />
                )
            }
        </>
    )

};

registerPlugin('block-settings-menu-item', {
    render: ParagraphBlockToolbarMenuItem,
});