import React,{Component} from 'react';
import {SubjectList} from '../components/SubjectList'
import {SubjectImg}  from '../components/SubjectImg'



const listItems = SubjectList.map((subject,i) =>
<div className='question' key={i}>
  <span>{subject.SubjectName}</span>
  <SubjectImg src={subject.ImageSrc} />
  </div>
);



export class Subjects extends Component{
  constructor(props){
    super(props);

  }



  render(){
    return(
      <div className="SubjectsItems">{listItems}</div>
    )
  }


}
