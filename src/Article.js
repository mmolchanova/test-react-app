import React, {Component} from 'react'      //добавить Component для работы с компонентами класса

// export default function Article(props) {
//     const {article} = props;
//     return (
//         <div>
//             <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     )
// }

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
                                                    // this.toggleOpen = this.toggleOpen.bind(this) вместо этого исп-ть стрелочную ф-цию для toggleOpen
    }

    render() {
        const {isOpen} = this.state;
        const {article} = this.props; 
            return (
                <div>
                    <h3>{article.title}</h3>
                    <button onClick = {this.toggleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    {this.getBody()}
                </div>
            )
    }

    getBody() {        
        if (!this.state.isOpen) return null
        const {article} = this.props;               //this.props для работы с props в компонентах класса

        return <section>{article.text}</section>
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}