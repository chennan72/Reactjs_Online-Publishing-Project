import React, {Component} from 'react';
import {Content, DetailWrapper, Header} from "./style";
import {connect} from "react-redux";

class Detail extends Component {
    render() {
        const {title, content} = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}}/>
            </DetailWrapper>
        )
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

export default connect(mapState, null)(Detail);
