import React from 'react';
import './Cover.scss';

function Cover() {
    return (
        <div className="Cover">
            <div className="Cover__TitleBlock Cover__TitleBlock--Left"/>
            <div className="Cover__TitleBlock Cover__TitleBlock--Right">
                <div className="Cover__TitleBlock__Heading">Lars Hoffbeck</div>
                <div className="Cover__TitleBlock__SubHeading">he's a developer!</div>
            </div>
        </div>
    );
}

export default Cover;
