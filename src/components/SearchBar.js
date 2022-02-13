import React from 'react'

class SearchBar extends React.Component {
    state = {
        term: '',
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.setTerm(this.state.term)
    }
    render() {
        return (
            <div className="ui segemnt   ">
                <form
                    onSubmit={this.onFormSubmit}
                    className="ui form segemnt  t"
                >
                    <div className="field">
                        {' '}
                        <input
                            className="prompt"
                            type="text"
                            placeholder="Search..."
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
