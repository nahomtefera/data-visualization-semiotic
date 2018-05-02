import React, {Component} from 'react';
import {XYFrame} from 'semiotic';
import Textarea from 'react-textarea-autosize';
import './main.css';

class Main extends Component {
    constructor(props){
        super(props)

        this.state={
            data: ``,
            title: ``,
            input_json: []
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(e){
        let targetId = e.target.id;
        let targetValue = e.target.value;
        let prevState = this.state;

        for(var id in prevState) {
            if(targetId == id) {
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
        let obj = data.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g, '$1"$3":');
        
        // Once the object is compliant with 
        // JSON's requirements, we can parse it
        // We will create an array to store 
        // All the objects that will be returned
        let arr_obj = JSON.parse('[' + obj + ']');
   
        this.setState({
            input_json: arr_obj
        })
    }

    render() {
        
        return (
            <div className="main-container">
                I will visualize stuff here:    

                <div className="input-container">
                    <br/><br/><br/><br/>
                    <input id="title" value={this.state.title} onChange={this.handleInput} placeholder="title" />
                    <br/>
                    <Textarea id="data" className="textarea-field" value={this.state.data} onChange={this.handleInput}></Textarea>
                    <br/>
                    <div className="submit-button" onClick={this.handleSubmit}>visualize</div>
                </div>

                <div className="chart-container">

                    <XYFrame
                        title={this.state.title}
                        size={[700, 400]}
                        lines={this.state.input_json}
                        xAccessor={"week"}
                        yAccessor={"grossWeekly"}
                        lineStyle={{ stroke: "#00a2ce" }}
                        margin={{ left: 80, bottom: 50, right: 10, top: 40 }}
                        axes={[
                        {
                            orient: "left"
                        },
                        {
                            orient: "bottom"
                        }
                        ]}
                        hoverAnnotation={true}
                        customHoverBehavior={d => console.log("custom hover d", d)}
                        customClickBehavior={d => console.log("click on d", d)}
                        customDoubleClickBehavior={d =>
                        console.log("custom doubleclick d", d)
                        }
                    />
                </div>
            </div>
        )
    }
}

export default Main;