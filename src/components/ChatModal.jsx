import {
    Modal
} from '@wordpress/components';

import ChatForm from './ChatForm';


function ChatModal({ onClose }) {

    return (
        <Modal
            onRequestClose={() => onClose()}
            isFullScreen={true}
            className='chat-modal'
        >
            <>
                <div className='chat-modal__wrapper'>
                    <div className="chat-modal__answer">
                        <div className="chat-modal__height-full">
                            <div className="chat-modal__scroll">
                                
                            </div>
                        </div>
                    </div>
                    <ChatForm />
                </div>
            </>

        </Modal>
    )
}

export default ChatModal;