import React from 'react';
import './Rubric.css';
import RubricItem from './RubricItem';
import { Button } from './Button';
import { Link } from 'react-router-dom';



function RubricThree() {
  return (
    <div className='rubric'>
      <h2 className = 'title'> Overall Learner Evaluation</h2>
      <div className='rubric__container'>
        <div className='rubric__wrapper'>
          <h1>Your History Answer</h1>


          <ul className='rubric__items'>

            <RubricItem 
              text = "Patient is a 45y/o Caucasian male who presents with constant and worsening back pain that started 3 weeks ago after he moved his file cabinet around in his house. He states that he has had some back 'muscle twinges' in the past but nothing like this before. He describes the pain as sharp, knife-like, stabbing pain, localized to the lower back region that does not radiate elsewhere. The pain is worsened with movements and bending forward make is more painful. He rates the pain 6/10 when standing and 8/10 when bending. The patient has tried over-the-counter ibuprofen and acetaminophen, which provided minimal relief initially but are not not helping currently. Patient denies any fever, SOB, chest pain, muscle weakness, dysuria, urinary retention, fecal incontinence or constipation. "
            />
          </ul>

          <h1> History Evaluation </h1>
          <h4> Note: Any item marked with an * displays an item where the machine had high confidence                                                                                                                                         </h4>

          <ul className='credit'>
            <h3> Items Found in Note: </h3>
          <RubricItem 
              text='Back pain for 3 weeks described as dull ache exacerbated by any movement *'
          />
          <RubricItem 
              text='Began after moving furniture *'
          />

          <RubricItem 
              text='Trying Motrin and Tylenol with slight relief *'
          />
          <RubricItem 
              text=' Pain radiates laterally across the lower back'
          />
          <RubricItem 
              text=' Unable to perform usual exercise routine'
          />

          <RubricItem 
              text=' No fever *'
          />


          </ul>

          <ul className='nocredit'>
          <h3> Items NOT Found in Note: </h3>
          <RubricItem 
              text='Worse with flexion and rotation'
          />
          <RubricItem 
              text='Father with history of prostate cancer with spine mets'
            />
          <RubricItem 
              text='No radiation to the legs'
          />
          <RubricItem 
              text='No bowel symptoms'
          />

          <RubricItem
              text='No bladder symptoms'
          />
            
          <RubricItem 
              text='No LE weakness, numbness or tingling *'
          />
          <RubricItem 
              text='No past medical history of note'
          />
          <RubricItem 
              text='No IV drug use in the past'
          />
          <RubricItem 
              text=' No smoking in the past'
          />
          <RubricItem 
              text='No concerning alcohol use'
          />
          <RubricItem 
              text='No weight loss'
          />             
 
          </ul>
        </div>
      </div>









      <div className='rubric__container'>
        <div className='rubric__wrapper'>
        <h1>Your Physical Exam Answer</h1>
          <ul className='rubric__items'>
            <RubricItem
            text = 'Tenderness to percussion of the thoracolumbar region of the spine bilaterally, 2+ patellar and ankle reflexes bilaterally, normal gait'           
            />
          </ul>

          <h1> Physical Exam Evaluation </h1>
          <h4> Note: Any item marked with an * displays an item where the machine had high confidence                                                                                                                                         </h4>

          <ul className='credit'>
            <h3> Items Found in Note: </h3>

          <RubricItem 
              text=' Reflexes 2/4 in LE bilaterally'
          />
          <RubricItem 
              text=' Sensory intact in LE bilaterally'
          />

          <RubricItem 
              text=' No vertebral tenderness *'
          />
          <RubricItem 
              text='Babinski down going bilaterally'
          />

          </ul>

          <ul className='nocredit'>
          <h3> Items NOT Found in Note: </h3>
          <RubricItem 
              text='Vital signs mentioned - normal'
          />
          <RubricItem 
              text='Pain on paraspinal palpation *'
          />
          <RubricItem 
              text='Motor strength 5/5 in LE *'
          />
          <RubricItem 
              text=' Pulses 2/4 in DP/PT'
          />
          <RubricItem 
              text='Limited range of motion of the back'
          />  
                    <RubricItem
              text='Straight leg raise'
          />        
          </ul>
        </div>
      </div>





  

      <div className='rubric__container'>
        <div className='rubric__wrapper'>
        <h1>Your Differential Diagnosis Answer</h1>
        <h4 className = 'black'> Note: We are looking for the items faculty suggested to consider in the differential diagnosis, though diagnoses may be ruled out through history and physical examination sections only. </h4>


          <ul className='rubric__items'>
            <RubricItem
            text = 'Lumbosacral sprain'
            />
                        <RubricItem
            text = 'Degenerative joint disease'
            />
                                    <RubricItem
            text = 'Prostate Cancer'
            />
          </ul>

          <h1> Actual Patient Diagnosis </h1>
          <ul className='rubric__items'>
            <RubricItem
            text =  'Lumbar muscular strain'
            />
          </ul>


          <h1> Differential Diagnosis Evaluation </h1>
          <h4> Note: Any item marked with an * displays an item where the machine had high confidence </h4>

          <ul className='credit'>
            <h3> Items Found in Note: </h3>


            <RubricItem 
              text='Cancer with spinal mets'
            />

          </ul>

          <ul className='nocredit'>
          <h3> Items NOT Found in Note: </h3>
          <RubricItem
              text='Low back strain'
            />    

            <RubricItem
              text='Lumbar Disc Disease'
            />          


          </ul>
        </div>
      </div>







      <div className='rubric__container'>
        <div className='rubric__wrapper'>
        <h1> Your "Tests Ordered" Answer(s)</h1>
        <h4 className = 'black'> Note: For this section "tests ordered" there will not be an evaluation portion on the answer submitted, instead there is a display of your answer and the correct answer. 

        </h4>
        <ul className='rubric__items'>
          <RubricItem className = 'length'
              text='Can consider X-ray later on to see if there are any spinous changes if the pain persists. '
          />        
          </ul>


          <h1>Correct Tests Indicated for Case</h1>
          <ul className='rubric__items'>
            <RubricItem
                text = 'No Testing Indicated'
              />
          </ul>

          <ul className='credit'>

          </ul>
        </div>
      </div>







        {/* <div className='input-areas'>
          <Link to={{pathname: 'https://jumpsimulation.sjc1.qualtrics.com/jfe/form/SV_6Xcf6pMBNOLAEFU'}} target="_blank">
            <Button
              buttonStyle='btn--test'
              buttonSize = 'btn--large'
            >
              Finish & Take Survey
            </Button>
          </Link>
        </div> */}
    </div>



  );
}

export default RubricThree;