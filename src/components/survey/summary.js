import React from 'react';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.anslist)
  }

  getAnswerMapping(ques, ansList) {
    if (ques.name.includes("language") ) {
        return (
            <td>
                {(ansList[ques.name+'hindi'])?ansList[ques.name+'hindi']+',':''}
                {(ansList[ques.name+'eng'])?ansList[ques.name+'eng']+',':''}
                {(ansList[ques.name+'french'])?ansList[ques.name+'french']+',':''}
                {(ansList[ques.name+'german'])?ansList[ques.name+'german']:''}
            </td>
        )
    } else {
        return (
            <td>{ansList[ques.name]}</td>
        )
    }
    
  }

  renderQuesAnswer(quesList, ansList) {
    return(
        
        quesList.map(ques => {
            return(
            <tr key={ques.id}>
                <td>{ques.title}</td>
                { this.getAnswerMapping(ques, ansList) }
            </tr>
            )
        })
            
    )
  }

  render() {
    // console.log(this.props.anslist, 'summary')
    return (
        <div className="survey-summary">
            <table id="customers">
                <tbody>
                <tr>
                    <th>Question's</th>
                    <th>Answer's</th>
                </tr>
                {this.renderQuesAnswer(this.props.queslist, this.props.anslist)}
                </tbody>
            </table>
        </div>
    );
  }
}
