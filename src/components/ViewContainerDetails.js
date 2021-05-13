import '../App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function ViewContainerDetails() {
    return (
        <div className="dashboard">
            <Header />
            <div className="contain form-contain">
                <div className="col-2 left-menu"><Sidebar /></div>
                <div className="col-10 right-menu user-form">

                    <div className="add-container">
                        <hr></hr>
                        <h3 className="company-agent">Container Tracking Vehicle Details</h3>

                        <div className="agent-profile">

                            <div className="agent-profile-div">
                                <label>Tracking ID</label>    <hr></hr>
                                <div>
                                   <h5> 12WS575RRYUFY898</h5>
                            </div>
                            </div>
                            <div className="agent-profile-div">
                                <label>Vehicle Number</label>    <hr></hr>
                                <div>
                               <h5>LA-123-ABC</h5>
                            </div>
                            </div>

                            <div className="agent-profile-div">
                                <label>DRIVER</label>    <hr></hr>
                                <div>
                                   <h5>Samuel Jude</h5>
                </div>
                            </div>
                            <div className="agent-profile-div">
                                <label>ESCORT</label>    <hr></hr>
                                <div>
                                   <h5>Samuel Jude</h5>
                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
}

export default ViewContainerDetails