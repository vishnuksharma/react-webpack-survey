import React, { Fragment } from 'react';
import './survey.scss';
import Textbox from '../formfields/textbox';
import Numberinput from '../formfields/numberinput';
import Dropdown from '../formfields/dropdown';
import RadioBtn from '../formfields/radio';
import Checkbox from '../formfields/checkbox';

export default class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.renderQuestion = this.renderQuestion.bind(this);
    this.state = {
      questionData: [],
    };
  }

  componentDidMount() {
    const surveyData = new Promise((resolve, reject) => {
      fetch('/public/json/question.json').then((data) => {
        return data.json();
      }).then((data) => {
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });

    surveyData.then((data) => {
      this.setState({
        questionData: data.questions,
      });
    });
  }

  renderQuestion(questions) {
    console.log(questions);
    if (questions && questions.length>0){
        return(
        <div className="form-container">
          {questions.map((data) => {
            if (data.type === 'textbox'){
              return(
                <div key={data.id} className="row">
                    <div className="col-100">
                        <label htmlFor={data.name}>{data.title}</label>
                    </div>
                    <Textbox name={data.name} placeholder={data.placeholder} />
                </div>
              );
            } else if (data.type === 'checkbox'){
                return(
                  <div key={data.id} className="row">
                    <div className="col-100">
                        <label htmlFor={data.name}>{data.title}</label>
                    </div>
                    <Checkbox name={data.name} placeholder={data.placeholder} />
                  </div>
                );
              } else if (data.type === 'select'){
                return(
                  <div key={data.id} className="row">
                    <div className="col-100">
                        <label htmlFor={data.name}>{data.title}</label>
                    </div>
                    <Dropdown name={data.name} placeholder={data.placeholder} />
                  </div>
                );
              } else if (data.type === 'radio'){
                return(
                  <div key={data.id} className="row">
                    <div className="col-100">
                        <label htmlFor={data.name}>{data.title}</label>
                    </div>
                    <RadioBtn name={data.name} placeholder={data.placeholder} />
                  </div>
                );
              } else if (data.type === 'number'){
                return(
                  <div key={data.id} className="row">
                    <div className="col-100">
                        <label htmlFor={data.name}>{data.title}</label>
                    </div>
                    <Numberinput name={data.name} placeholder={data.placeholder} />
                  </div>
                );
              }
            
          })}
        </div>
        );
    }
  }

  render() {
    return (
      <section className="surveycomponent">
        {this.renderQuestion(this.state.questionData)}
      </section>
    );
  }
}
