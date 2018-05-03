import React, {Component} from 'react';
import {XYFrame} from 'semiotic';
import AutosizeInput from 'react-input-autosize';
// import Textarea from 'react-textarea-autosize';
import './main.css';

class Main extends Component {
    constructor(props){
        super(props)

        this.state={
            data: ``,
            title: ``,
            x_values: ``,
            y_values: ``,
            input_json: []
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(e){
        // This method will be reusable 
        // In multiple input fields
        // Make sure that the the input fields
        // Have and id == to the state they connect

        let targetId = e.target.id;
        let targetValue = e.target.value;
        let prevState = this.state;

        // Iterate through the state
        // If the id of the current target
        // Matches any key in the state
        // It will update the state
        for(var id in prevState) {
            if(targetId === id) {
                this.setState({
                    [id]: e.target.value
                })
            }
        }

    }

    handleSubmit(){
        let data = this.state.data;
        if(data === ''){
            return
        }
        // This REGex will add quotes
        //  around every key in each object
        let obj = data.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g, '$1"$3":').replace(/'/g, '"');
        
        // Once the object is compliant with 
        // JSON's requirements, we can parse it
        // We will create an array to store 
        // All the objects that will be returned
        let arr_obj = JSON.parse('[' + obj + ']');
        console.log(arr_obj)
   
        this.setState({
            input_json: arr_obj
        })
    }

    render() {
        
        return (
            <div className="main-container">

                <div className="input-container">
                    <div className="input-inner-container">
                        <div className="input-name-and-field">
                            <div className="input-name">
                                Chart Title
                            </div>
                            <AutosizeInput id="title" className="chart-input" placeholder="Enter Value" value={this.state.title} onChange={this.handleInput}/>
                        </div> 
                        <br/>
                        <div className="input-name-and-field">
                            <div className="input-name">
                                Horizontal Axis
                            </div>
                            <AutosizeInput id="x_values" className="chart-input" placeholder="Enter Value" value={this.state.x_values} onChange={this.handleInput}/>
                        </div>
                        <br/>
                        <div className="input-name-and-field">
                            <div className="input-name">
                                Vertical Axis
                            </div>
                            <AutosizeInput id="y_values" className="chart-input" placeholder="Enter Value" value={this.state.y_values} onChange={this.handleInput}/>
                        </div>
                        <br/>
                        <textarea id="data" className="textarea-field" 
                            // We will try to clean up the textarea
                            // And format the object to be indented
                            // If we can't format the input we will just
                            // Let it be whatever the user inputs
                            value={((json)=>{
                                let parsed, format_input;
                                try{
                                    format_input = this.state.data.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g, '$1"$3":').replace(/'/g, '"');
                                    parsed = JSON.stringify(JSON.parse(format_input), null, 4);
                                } catch(e){
                                    return this.state.data
                                }

                                return parsed;
                            })()} 
                            onChange={this.handleInput}
                        >
                        </textarea>
                    </div>
                    <br/>
                    <div className="submit-button" onClick={this.handleSubmit}>visualize</div>
                </div>

                <div style={{"width":"700px"}} className="chart-container">

                    <XYFrame
                        title={this.state.title}
                        size={[700, 400]}
                        lines={this.state.input_json}
                        xAccessor={this.state.x_values}
                        yAccessor={this.state.y_values}
                        lineStyle={{ stroke: "#00a2ce" }}
                        margin={{ left: 80, bottom: 50, right: 10, top: 40 }}
                        axes={[{orient: "left"},{orient: "bottom"}]}
                        hoverAnnotation={true}
                    />
                </div>
            </div>
        )
    }
}

export default Main;