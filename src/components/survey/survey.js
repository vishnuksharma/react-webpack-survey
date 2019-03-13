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
    this.backHandleClick = this.backHandleClick.bind(this);
    this.nextHandleClick = this.nextHandleClick.bind(this);
    this.state = {
      questionData: [],
      numberOfQues:0,
      currentPage:1,
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
        numberOfQues: data.questions.length
      });
    });
  }

  renderQuestion(questions) {
    console.log(questions);
    if (questions && questions.length>0){
        // this.displayQues();
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

  componentDidUpdate(){
    document.querySelectorAll('.surveycomponent .form-container .row')[0].style.display = 'block';
    if (this.state.currentPage === 1 ) {
        const divEle = document.querySelector('.backBtn button');
        divEle.disabled = true;
        divEle.classList.add("disabled");
    }
      console.log('here', document.querySelectorAll('.surveycomponent .form-container .row').length );

  }

  backHandleClick() {
    console.log('back hang=dle')
  }

  nextHandleClick() {
    console.log('next hang=dle')
  }

  render() {
    return (
      <section className="surveycomponent">
        {this.renderQuestion(this.state.questionData)}
        <div className="buttons-container">
            <div className="backBtn">
                <button onClick={this.backHandleClick} type="button" className="button-warning pure-button">Back</button>
            </div>
            <div className="nextBtn">
                <button onClick={this.nextHandleClick} type="button" className="button-secondary pure-button">Next</button>
            </div>
        </div>
      </section>
    );
  }
}
