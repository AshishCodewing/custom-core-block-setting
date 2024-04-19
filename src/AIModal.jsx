import {
    Modal,
    __experimentalInputControl as InputControl,
    __experimentalSpacer as Spacer,
    __experimentalText as Text,
    __experimentalView as View,
} from '@wordpress/components';

import { useState } from '@wordpress/element';


function AIModal({ onClose }) {
    const [value, setValue] = useState('');
    return (
        <Modal
            title="AI Modal"
            onRequestClose={() => onClose()}
        >
            <View>
                <Spacer>
                    <InputControl
                        value={value}
                        onChange={(nextValue) => setValue(nextValue ?? '')}
                    />
                </Spacer>
                <Text>{value}</Text>
            </View>
        </Modal>
    )
}

export default AIModal;