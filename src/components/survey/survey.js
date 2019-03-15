import React, { Fragment } from 'react';
import './survey.scss';
import Textbox from '../formfields/textbox';
import Numberinput from '../formfields/numberinput';
import Dropdown from '../formfields/dropdown';
import RadioBtn from '../formfields/radio';
import Checkbox from '../formfields/checkbox';
import Summary from './summary';

export default class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.renderQuestion = this.renderQuestion.bind(this);
    this.backHandleClick = this.backHandleClick.bind(this);
    this.nextHandleClick = this.nextHandleClick.bind(this);
    this.state = {
      questionData: [],
      numberOfQues:0,
      currentPage:0,
      quesAnsList: {},
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
    // console.log(questions);
    if (questions && questions.length>0){
        // this.displayQues();
        return(
        <form id="surveyForm">
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
        </form>
        );
    }
  }

  componentDidUpdate(){
    const rowEle = document.querySelectorAll('.surveycomponent .form-container .row')[this.state.currentPage];
    rowEle.classList.add('displayblock');
    const backEle = document.querySelector('.backBtn button');
    // const nextEle = document.querySelector('.nextBtn button');
    if (this.state.currentPage === 0 ) {
        backEle.disabled = true;
        backEle.classList.add("disabled");
        // nextEle.disabled = true;
        // nextEle.classList.add("disabled");
    }
    // divEle.querySelector('input').value

  }

  handleNextAndBackClick(buttonClass, clickType) {
    // console.log(buttonClass, clickType);
    const divEle = document.querySelector(buttonClass);
    if (this.state.currentPage === 0 && clickType === 'back') {
        divEle.disabled = true;
        divEle.classList.add("disabled");
    } 
    // else if (this.state.currentPage === (this.state.numberOfQues - 2) && clickType === 'next') {
    //     divEle.disabled = true;
    //     divEle.classList.add("disabled");
    // }
    else {
        divEle.disabled = false;
        divEle.classList.remove("disabled");
    }
  }

  backHandleClick() {
    // Enable Next Btn
    document.querySelector('.nextBtn button').disabled = false;
    document.querySelector('.nextBtn button').classList.remove("disabled");

    this.handleNextAndBackClick('.backBtn button', 'back');

    const pageNum = this.state.currentPage;
    // console.log(pageNum, '====')
    if (pageNum === (this.state.numberOfQues - 1) ) {
        document.querySelector('.surveycomponent .form-container').classList.remove('displaynone');
        document.querySelector('.surveycomponent .summary-container').classList.remove('displayblock');
    }


    document.querySelectorAll('.surveycomponent .form-container .row')[pageNum].classList.remove('displayblock');
    document.querySelectorAll('.surveycomponent .form-container .row')[pageNum-1].classList.add('displayblock');
    this.setState({
        currentPage: pageNum-1,
    });
  }

  nextHandleClick() {
    // Enable Back btn
    document.querySelector('.backBtn button').disabled = false;
    document.querySelector('.backBtn button').classList.remove("disabled");

    document.querySelector('.nextBtn button').disabled = true;
    document.querySelector('.nextBtn button').classList.add("disabled");
    // this.handleNextAndBackClick('.nextBtn button', 'next');

    const pageNum = this.state.currentPage;

    // const form1 = document.querySelector('#surveyForm');
    // var data = new FormData(form1);
    // var json = Array.from(data);

    
    if (pageNum !== (this.state.numberOfQues - 1) ) {
        document.querySelectorAll('.surveycomponent .form-container .row')[pageNum].classList.remove('displayblock');
        document.querySelectorAll('.surveycomponent .form-container .row')[pageNum+1].classList.add('displayblock');
        this.setState({
            currentPage: pageNum+1,
        });
    } else if (pageNum === (this.state.numberOfQues - 1) ) {
        const form = document.querySelector('#surveyForm');
        var data = new FormData(form);
        var json = Array.from(data).reduce((o,[k,v])=>(o[k]=v,o),{});
        this.setState({quesAnsList: json})
        document.querySelector('.surveycomponent .form-container').classList.add('displaynone');
        document.querySelector('.surveycomponent .summary-container').classList.add('displayblock');
    }
    
    
  }

  render() {
    return (
      <section className="surveycomponent">
        {this.renderQuestion(this.state.questionData)}
        <div className="summary-container">
            <Summary queslist={this.state.questionData} anslist={this.state.quesAnsList} />
        </div>
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
