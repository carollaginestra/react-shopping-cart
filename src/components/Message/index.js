import React from 'react';

const style = {
    margin: '20px 0',
    padding: '20px',
    backgroundColor: '#eee',
    borderRadius: '5px',
    fontSize: '18px',
    textAlign: 'center',
}

const Message = ({ children }) => <div style={style}>{children}</div>;

export default Message;
