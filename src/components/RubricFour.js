import React from 'react';
import './Rubric.css';
import RubricItem from './RubricItem';
import { Button } from './Button';
import { Link } from 'react-router-dom';



function RubricFour() {
  return (
    <div className='rubric'>
      <h2 className = 'title'> Overall Learner Evaluation</h2>
      <div className='rubric__container'>
        <div className='rubric__wrapper'>
          <h1>Your History Answer</h1>


          <ul className='rubric__items'>

            <RubricItem 
              text = "Pt is a 45 yo male who presents to the ED for lower back that started 3 weeks ago. Prior to the onset of his pain, he reports bending over to catch a heavy cabinet while moving it. Since then, he has had lower back pain which he reports as 5/10 in severity. His pain is worsened with bending and has been mildly improved with Tylenol/Ibuprofen. Denies any loss of bowel or bladder control, as well as fever, chills, night sweats, or other additional symptoms currently. He has no active medical problems and does not take medications other than benadryl for seasonal allergies. Denies any tobacco or drug use, drinks 2-3 beers every weekend."
            />
          </ul>

          <h1> History Evaluation </h1>
          <h4> Note: Any item marked with an * displays an item where the machine had high confidence                                                                                                                                         </h4>

          <ul className='credit'>
            <h3> Items Found in Note: </h3>

          <RubricItem 
              text='Began after moving furniture *'
          />

          <RubricItem 
              text='Trying Motrin and Tylenol with slight relief *'
          />

          <RubricItem 
              text=' Unable to perform usual exercise routine'
          />

          <RubricItem 
              text='No bowel symptoms'
          />


          <RubricItem 
              text=' No fever *'
          />
          <RubricItem 
              text='No past medical history of note'
          />

          <RubricItem 
              text=' No smoking in the past'
          />
     

          </ul>

          <ul className='nocredit'>
          <h3> Items NOT Found in Note: </h3>
          <RubricItem 
              text='Back pain for 3 weeks described as dull ache exacerbated by any movement *'
          />
          <RubricItem 
              text='Worse with flexion and rotation'
          />
           <RubricItem 
              text=' Pain radiates laterally across the lower back'
          />
          <RubricItem 
              text='Father with history of prostate cancer with spine mets'
            />
          <RubricItem 
              text='No radiation to the legs'
          />
          <RubricItem
              text='No bladder symptoms'
          />
            
          <RubricItem 
              text='No LE weakness, numbness or tingling *'
          />
          <RubricItem 
              text='No IV drug use in the past'
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
            text = 'Back: TTP of the paravertebral muscles bilaterally; Neuro: Negative straight leg raise, LE reflexes 2+ bilaterally. UE and LE strength 5/5'           
            />
          </ul>

          <h1> Physical Exam Evaluation </h1>
          <h4> Note: Any item marked with an * displays an item where the machine had high confidence                                                                                                                                         </h4>

          <ul className='credit'>
            <h3> Items Found in Note: </h3>
 
          <RubricItem 
              text='Motor strength 5/5 in LE *'
          />
          <RubricItem 
              text=' Reflexes 2/4 in LE bilaterally'
          />
          <RubricItem 
              text=' Sensory intact in LE bilaterally'
          />
 
          <RubricItem 
              text='Limited range of motion of the back'
          />

          <RubricItem 
              text='Babinski down going bilaterally'
          />
          <RubricItem
              text='Straight leg raise'
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
              text=' Pulses 2/4 in DP/PT'
          />
          <RubricItem 
              text=' No vertebral tenderness *'
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
            text = 'Lumbar sprain'
            />
                        <RubricItem
            text = 'Disk herniation'
            />
                        <RubricItem
            text = 'prostate cancer'
            />
          </ul>

          <h1> Actual Patient Diagnosis </h1>
          <ul className='rubric__items'>
            <RubricItem
            text =  'Lumbar muscular strain'
            />
          </ul>


          <h1> Differential Diagnosis Evaluation </h1>
          <h4> Note: Any item marked with an * displays an item where the machine had high confidence                                                                                                                                         </h4>

          <ul className='credit'>
            <h3> Items Found in Note: </h3>
            <RubricItem
              text='None found'
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

            <RubricItem 
              text='Cancer with spinal mets'
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
              text='None'
          />
          <RubricItem 
              text='BMP'
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

export default RubricFour;