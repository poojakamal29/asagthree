import React from 'react';
import '../../App.css';
import RubricItem from '../RubricItem';
import './FacultyCardOne.css'


export default function FacultyCardOne() {
    return (
        <>
        <h4> Note: Items highlighted in blue are the ones with high machine confidence</h4>
        <h3> Numbers shown below: number of students who received credit for the checklist item / total number of students </h3>        
        <h1> History Checklist Item Feedback</h1> 
        <ul className = 'confident'>
        <RubricItem 
              text='Back pain for 3 weeks described as dull ache exacerbated by any movement: 4/6'
            />

        <RubricItem 
              text='Began after moving furniture: 5/6'
            />
        
        </ul>
        <RubricItem 
              text='Worse with flexion and rotation: 2/6'
            />        
        <ul className = 'confident'>
        <RubricItem 
              text='Trying Motrin and Tylenol with slight relief: 5/6'
            />       
        </ul>
        <RubricItem 
              text='Pain radiates laterally across the lower back: 2/6'
            />       

        <RubricItem 
              text='Unable to perform usual exercise routine: 6/6'
            />
        <RubricItem 
              text='Father with history of prostate cancer with spine mets: 2/6'
            />
        <RubricItem 
              text='No radiation to the legs: 2/6'
            />   
        <RubricItem 
              text='No bowel symptoms: 2/6'
            />   
        <RubricItem 
              text='No bladder symptoms: 0/6'
            />   
        <ul className = 'confident'>
        <RubricItem 
              text='No LE weakness, numbness or tingling: 3/6'
            />  
        <RubricItem 
              text='No fever: 4/6'
            />  
        </ul> 

        <RubricItem 
              text='No past medical history of note: 1/6'
            />
        <RubricItem 
              text='No IV drug use in the past: 0/6'
            />
        <RubricItem 
              text='No smoking in the past: 2/6'
            />
        <RubricItem 
              text='No concerning alcohol use: 0/6'
            />
        <RubricItem 
              text='No weight loss: 0/6'
            />
        <h1> Physical Exam Checklist Item Feedback</h1> 
        <RubricItem 
              text='Vital signs mentioned - normal: 2/6'
            />        
        <ul className = 'confident'> 
        <RubricItem 
              text='Pain on paraspinal palpation: 3/6'
            />
        <RubricItem 
              text='Motor strength 5/5 in LE: 4/6'
            />
        </ul>
        <RubricItem 
              text='Reflexes 2/4 in LE bilaterally: 5/6'
            />
        <RubricItem 
              text=' Sensory intact in LE bilaterally: 4/6'
            />
        <RubricItem 
              text='Pulses 2/4 in DP/PT: 0/6'
            />
        <RubricItem 
              text='Limited range of motion of the back: 1/6'
            />
        <ul className = 'confident'> 
        <RubricItem 
              text='No vertebral tenderness: 4/6'
            />
        </ul>
        <RubricItem 
              text='Babinski down going bilaterally: 6/6'
            />
        <RubricItem 
              text='Straight leg raise: 1/6'
            />
        <h1> Diagnosis Item Checklist Item Feedback</h1>
        <RubricItem 
              text='Low back strain: 0/6'
            />
        <RubricItem 
              text='Lumbar Disc Disease: 0/6'
            />
        <RubricItem 
              text='Cancer with spinal mets: 3/6'
            />
   
        </>

    )
}