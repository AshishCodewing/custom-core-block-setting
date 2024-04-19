import { useState, useRef } from '@wordpress/element';
import { TextareaControl, Button, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function ChatForm() {
    const [prompt, setPrompt] = useState('');
    const textareaRef = useRef(null);

    return (
        <form className='chat-modal__form'>
            <TextareaControl
                placeholder={__("Enter your prompt here")}
                hideLabelFromVision={true}
                label={__("Enter your prompt here")}
                value={prompt}
                onChange={(value) => setPrompt(value)}
                className='chat-modal__textarea'
                ref={textareaRef}
            />
            <Button
                className='chat-modal__submit'
                icon={<Icon icon="arrow-right-alt" />}
                label={__("Submit")}
                disabled={prompt === ''}
            />
        </form>
    );
}

export default ChatForm;