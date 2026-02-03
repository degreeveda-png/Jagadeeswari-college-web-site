import React from 'react'
import './course.css'

function Content() {
  return (
    <div>
      <div id="courses">
        <div class="heading">
          <span class="text">COURSES OFFERED</span>
          <span class="line"></span>
        </div>
        <div id="description">
          <div id="container1">
            <dl><dt id="B">B.Sc</dt>
              <dd>Undergraduate Bachelor of Science.<br />
                B.Sc course is a 3-year UG course that imparts knowledge on various scientific subjects.<br />
                B.Sc subjects include Physics, Chemistry, Mathematics, Biology, Computer Science, Environmental Science, etc.
              </dd>
            </dl>
          </div>
          <div id="container2">
            <dl><dt id="C">BCA</dt>
              <dd>Undergraduate Bachelor of Computer Applications.<br />
                BCA course is a 3-year UG course that imparts knowledge on the basics of computer application and software development.<br />
                BCA subjects include database management systems, software engineering, operating systems, web technology and computer languages such as HTML, C, C++, Java.
              </dd>
            </dl>
          </div>
          <div id="container3">
            <dl><dt id="D">B.Com</dt>
              <dd>Undergraduate Bachelor of Commerce.<br />
                B.Com course is a 3-year UG course that imparts knowledge on various commerce and finance-related subjects.<br />
                B.Com subjects include accounting, economics, business law, taxation, auditing, finance and marketing.
              </dd>
            </dl>
          </div>
          <div id="container4">
            <dl><dt id="E">B.Sc.</dt>
              <dd>Undergraduate Bachelor of Science in Computer Science.<br />
                B.Sc. Computer Science is a 3-year UG course that imparts knowledge on various computer science subjects.<br />
                B.Sc. Computer Science subjects include programming languages, data structures, algorithms, database management systems, operating systems and software engineering.
              </dd>
            </dl>
          </div>
          <div id="container5">
            <dl><dt id="F">B.Sc.</dt>
              <dd>Undergraduate Bachelor of Science in Data Science.<br />
                B.Sc. Data Science is a 3-year UG course that imparts knowledge on various data science subjects.<br />
                B.Sc. Data Science subjects include statistics, data analysis, machine learning, data visualization, big data technologies and programming languages such as Python and R.
              </dd>
            </dl>
          </div>
          <div id="container6">
            <dl><dt id="G">B.Sc.</dt>
              <dd>Undergraduate Bachelor of Science in Artificial Intelligence and Machine Learning.<br />
                B.sc. Artificial Intelligence and Machine Learning is a 3-year UG course that imparts knowledge on various AI and ML subjects.<br />
                B.sc. Artificial Intelligence and Machine Learning subjects include machine learning algorithms, deep learning, robotics and programming languages such as Python and R.
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Content
