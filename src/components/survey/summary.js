import React from 'react';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.anslist)
  }

  renderQuesAnswer(quesList, ansList) {
    return(
            
        quesList.map(ques => {
            return(
            <tr key={ques.id}>
                <td>{ques.title}</td>
                <td>{ansList[ques.name]}</td>
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
