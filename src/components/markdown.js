// Uses remarkable
import React from 'react';
import Remarkable from 'remarkable';

const remarkableStd = new Remarkable({
    html: true,
});

class Markdown extends React.Component {
    componentWillMount() {
        this.myRemarkable = remarkableStd;
        if (this.props.options) {
            // the developer passed custom options for remarkable
            this.myRemarkable = new Remarkable(this.props.options);
        }
    }

    render() {
        const {markdown, className, ...passThroughProps} = this.props;
        delete passThroughProps.options;
        const html = this.myRemarkable.render(markdown);
        return (
            <div className={className ? `${className} rich-text` : 'rich-text'}>
                <div
                    ref={(element) => {
                        this.element = element;
                    }}
                    {...passThroughProps}
                    dangerouslySetInnerHTML={{__html: html}}
                />
            </div>
        );
    }
}

export default Markdown;
