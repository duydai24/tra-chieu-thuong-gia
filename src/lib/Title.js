import React from 'react';

function Title({text, className}) {
    return (
        <p className={'text-blue-header text-4xl md:text-6xl font-bold ' + className}>{text}</p>
    );
}

export function BorderTitle({className}) {
    return <div className={'w-32 h-1 bg-blue-text  ' + className} />;
}

export default Title;