import React from 'react';
import Counter from '../Components/Counter';

class Proposal extends React.Component{


    render(){
        return(
            <div className="Page py-5" id="callofproposal">
                <div className="container py-3">
                    <h1>Call for Papers for GNOME.Asia Summit 2019 is now open!</h1>
                    <hr/>
                    <br/>
                    <div className="container">
                        <h4>Topics of Call for Papers (CFP)</h4>
                        <br/>
                        <h5>Contribute to GNOME</h5>
                        <ul>
                            <li>Latest 	developments</li>
                            <li>Writing applications for GNOME 3</li>
                            <li>UI design</li>
                            <li>QA and testing</li>
                            <li>Accessibility</li>
                            <li>Human Interface Engineering (Icons and Graphic Design) 	</li>
                            <li>Marketing/Engagement</li>
                            <li>Asia success stories / Local GNOME Projects</li>
                            <li>GNOME and Education 	</li>
                            <li>FOSS outreach programs, including Google Summer of Code</li>
                            <li>Developing GNOME on mobile devices (smart phones, tablets) 	</li>
                            <li>Developing GNOME on embedded systems or open hardware</li>
                        </ul>
                        <h5>Contributing to Linux and F/LOSS</h5>
                        <ul>
                            <li>Linux kernel and development </li>
                            <li>The development and promotion of open-source operating systems 	</li>
                            <li>About Debian, Fedora, openSUSE, Ubuntu, FreeBSD, and other distributions 	</li>
                            <li>The development and promotion of other open-source projects </li>
                        </ul>
                        <h5>Open Source Enlightenment and Related Story</h5>
                        <ul>
                            <li>The Knowledge and Spirit of Open Source </li>
                            <li>Open Source stories of your own </li>
                            <li>How to optimize the process and improve efficiency with the help of open-source tools</li>
                            <li>How to engage non-technical 	lightning talks contributors in Open Source Projects </li>
                            <li>How to engage more female contributors in Open Source Projects </li>
                        </ul>
                        <h5>Emerging Technologies</h5>
                        <ul>
                            <li>Artificial Intelligence</li>
                            <li>DevOps with AI</li>
                            <li>Deep Learning</li>
                            <li>AR & VR</li>
                            <li>Big Data</li>
                            <li>Distributed systems</li>
                            <li>Open Source DevOps</li>
                        </ul>
                        <br/> 
                        <h5>Type of Session</h5>
                       
                        <ol start="1">
                            <li>
                            Standard session. Standard session will be scheduled for 45 minutes (35 minutes talk + 10 minutes Q&A). The session could be a technical talk, panel discussion, or BOF. If you need more time or additional resources, feel free to get in touch with the organizing team.
                            </li>
                            <li>
                            Lightning talk session. This session is a 5 minutes presentation for demonstrating your work or promoting an interesting topic. 
                            </li>
                        </ol>
                        <h5>Submission Criteria</h5>
                        <p>
                        Please provide a short abstract of your paper (under 200 words). Include your name, biographical information, a title, and a description of your presentation.
                        
                        </p>
                        <div className="d-flex justify-content-center my-3">
                            <div className="d-flex flex-column align-items-center">
                                <span>Apply here</span>
                                <br/>
                                <a href="https://s.id/GNAS19-CfP" target="__blank" className="btn btn-lg btn-danger shadow-sm">Call for Papers for GNOME.Asia Summit 2019</a>
                                <br/>
                                <Counter/> 
                            </div>
                        </div>
                        <ul>
                            <li>Submission timeline: July 15th to August 15th 2019</li>
                            <li>Confirmation of paper acceptance: August, 20th 2019</li>
                        </ul>

                        <h5>Travel Support</h5>
                        <p>
                        There will be an opportunity for speakers and GNOME Foundation members to request travel support by the GNOME Foundation. Please submit your application to the GNOME Travel Committee. For further information please refer to this guides <a href="https://wiki.gnome.org/Travel" target="__blank">https://wiki.gnome.org/Travel</a>.
                        </p>
                        <p>
                        All interested contributors are highly encouraged to send in talks. More information about GNOME.Asia Summit 2019 is available at <a href="https://asiasummit.gnome.id" target="__blank">https://asiasummit.gnome.id</a>.
                        </p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Proposal;