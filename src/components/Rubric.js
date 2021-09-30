import React from 'react';
import './Rubric.css';
import RubricItem from './RubricItem';
import { Button } from './Button';
import { Link } from 'react-router-dom';



function Rubric() {
  return (
    <div className='rubric'>
      <h2 className = 'title'> Overall Learner Evaluation</h2>
      <div className='rubric__container'>
        <div className='rubric__wrapper'>
          <h1>Your History Answer</h1>


          <ul className='rubric__items'>

            <RubricItem 
              text = "45 y/o male with no significant PMH here for back pain. Was moving a heavy filing cabinet 3 weeks ago when it fell over and he tried to catch it. Was fine that day but the following day developed persistent bilateral lower back pain, described as a 'knife-like' sensation rated 6/10 in severity but increases to 9/10 with movement and in some positions. No radiation of any pain anywhere and no nausea, vomiting, abdominal pain, weakness, numbness/tingling, bowel/bladder incontinence, fevers, chills, ro sweats. Father did have prostate cancer with mets to spine. Has been taking Ibuprofen and tylenol which helped initially but not recently. Has tried ice with no relief but refueses to try heat. "
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
              text=' Unable to perform usual exercise routine'
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
              text='No LE weakness, numbness or tingling *'
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
              text=' Pain radiates laterally across the lower back'
          />
           <RubricItem
              text='No bladder symptoms'
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
            text = 'Tender over the lower paraspina,l muscles bilaterally. NOntender over the C, T , or L spine. Sensation and strength normal throughout. Negative SLR bilaterally. Normal heart and lungs. Reflezes 2+ and symmetric. '           
            />
          </ul>

          <h1> Physical Exam Evaluation </h1>
          <h4> Note: Any item marked with an * displays an item where the machine had high confidence                                                                                                                                         </h4>

          <ul className='credit'>
            <h3> Items Found in Note: </h3>
          <RubricItem 
              text='Vital signs mentioned - normal'
          />

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
              text=' No vertebral tenderness *'
          />
          <RubricItem 
              text='Babinski down going bilaterally'
          />

          </ul>

          <ul className='nocredit'>
          <h3> Items NOT Found in Note: </h3>
          <RubricItem 
              text='Pain on paraspinal palpation *'
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
            text = 'Musculoskeletal strain'
            />
                        <RubricItem
            text = 'Disk herniation'
            />
                        <RubricItem
            text = 'Compression fx (less likely)'
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
              text='Nonev at this time'
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







        <div className='input-areas'>
          <Link to={{pathname: 'https://jumpsimulation.sjc1.qualtrics.com/jfe/form/SV_6Xcf6pMBNOLAEFU'}} target="_blank">
            <Button
              buttonStyle='btn--test'
              buttonSize = 'btn--large'
            >
              Finish & Take Survey
            </Button>
          </Link>
        </div>
    </div>



  );
}

export default Rubric;