import React from 'react';

class Tags extends React.Component {

    removeTag =(i)=>{
                      const tags = this.state.tags.slice(0);
                      tags.splice(i, 1);
                      this.setState({ tags });
                    }
    render() {

        return <ul>
            {this.props.tags.map((t, i) => {
                return <li key={i}><input type="text" onInput={(event) => {
                    this.props.setTag(i, event.target.value)
                }} />
                    <a onClick={(event) => {
                        this.props.removeTag(i);
                    }}>  &#9003;</a>
                </li>
            })}
        </ul>
    }
}

export default Tags