import React from 'react';
import TextInput from '../common/TextInput';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    const title = event.target.value;
    this.setState({title});
  }

  onSubmit = (event) => {
    if (event) event.preventDefault();
    const title = this.state.title;
    this.props.onSubmit(title);
  }

  render() {
    const title = this.state.title;

    return (
      <div id="search-section" className="center">
      <div className="row">
        <h5 className="blue-text col s12">Find A Book In Our Library</h5>
      </div>
      <div className="row center">
        <div className="input-field offset-s2 col s6">
          <TextInput 
            icon="local_library" 
            htmlId="search-form-title"
            name="title"
            onChange={this.onChange}
            label="Title"
            value={title}
            required />
        </div>
        <div className="input-field col s2">
            <button className="btn btn-block waves-effect" type="submit" onClick={this.onSubmit}>Search</button>
        </div>
     </div>
     </div>
    )
  }

}

export default Searchbar;