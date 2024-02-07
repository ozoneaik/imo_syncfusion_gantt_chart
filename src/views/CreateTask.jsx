import React, {useState} from 'react';
import Layout from "../layouts/Layout.jsx";

const CreateTask = () => {

    const [taskName, setTaskName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [duration, setDuration] = useState('')
    const [progress, setProgress] = useState('')

    function handleSubmit() {
        const data = {
            taskName,
            startDate,
            endDate,
            duration,
            progress
        };

        // Serialize data to JSON
        const jsonData = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Specify content type as JSON
            },
            body: jsonData
        };

        fetch("http://localhost:8000/api/store", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }




    return (
        <Layout HeadTitle_en={'create task'} HeadTitle_th={'สร้าง task'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'card'}>
                        <div className={'card-header'}>
                            <h6 className={'card-title m-0'}>create_task</h6>
                        </div>
                        <div className={'card-body'}>
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <div className={'form-group mb-2'}>
                                        <label htmlFor={'name'}>Task Name</label>
                                        <input type="text" name={'name'} className={'form-control'} onChange={(e) => setTaskName(e.target.value)}/>
                                    </div>
                                    <div className={'form-group mb-2'}>
                                        <label htmlFor={'start_date'}>Start Date</label>
                                        <input type="datetime-local" name={'start_date'} className={'form-control'} onChange={(e) => setStartDate(e.target.value)}/>
                                    </div>
                                    <div className={'form-group mb-2'}>
                                        <label htmlFor={'end_date'}>End Date</label>
                                        <input type="datetime-local" name={'end_date'} className={'form-control'} onChange={(e) => setEndDate(e.target.value)}/>
                                    </div>
                                    <div className={'form-group mb-2'}>
                                        <label htmlFor={'duration'}>Duration</label>
                                        <input type="number" name={'duration'} className={'form-control'} onChange={(e) => setDuration(e.target.value)}/>
                                    </div>
                                    <div className={'form-group mb-2'}>
                                        <label htmlFor={'progress'}>Progress</label>
                                        <input type="number" name={'progress'} className={'form-control'} onChange={(e) => setProgress(e.target.value)}/>
                                    </div>
                                    <button className={'btn btn-primary'} onClick={handleSubmit}>submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateTask;