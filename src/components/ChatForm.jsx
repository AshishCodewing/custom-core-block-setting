import { useState, useRef, useEffect } from '@wordpress/element';
import { TextareaControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function ChatForm() {
    const [prompt, setPrompt] = useState('');
    const textAreaRef = useRef(null);
    const submitBtnRef = useRef(null);

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = '0px';
            const scrollHeight = textAreaRef.current.scrollHeight;

            textAreaRef.current.style.height = `${scrollHeight}px`;
        }

        if (textAreaRef.current.scrollHeight > 90 && submitBtnRef.current) {
            submitBtnRef.current.style.bottom = '12px';
        } else if (textAreaRef.current.scrollHeight < 90) {
            submitBtnRef.current.style.bottom = 'auto';
        }
    }, [textAreaRef, prompt, submitBtnRef])

    return (
        <form className='chat-modal__form'>
            <TextareaControl
                placeholder={__("Enter your prompt here")}
                hideLabelFromVision={true}
                label={__("Enter your prompt here")}
                value={prompt}
                onChange={(value) => setPrompt(value)}
                className='chat-modal__textarea'
                ref={textAreaRef}
                rows={1}
            />
            <Button
                className='chat-modal__submit'
                icon="arrow-right-alt"
                label={__("Submit")}
                disabled={prompt === ''}
                ref={submitBtnRef}
            />
        </form>
    );
}

export default ChatForm;