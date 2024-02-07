import {useEffect, useState} from "react";
import {Edit, Selection, GanttComponent, Inject, Filter, Sort, Toolbar, ContextMenu} from "@syncfusion/ej2-react-gantt";
import {registerLicense} from '@syncfusion/ej2-base';
import Layout from "../layouts/Layout.jsx";
import {DialogComponent} from "@syncfusion/ej2-react-popups";
import '../assets/css/ganttchart.css'

registerLicense(import.meta.env.VITE_SYFUSION_LICENSE);

export function GanttChart() {
    useEffect(() => {
        getData()
    }, []);

    function getData() {
        console.log(import.meta.env.VITE_API_URL + '/gant-data')
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(import.meta.env.VITE_API_URL + '/gantt-data', requestOptions)
            .then(response => response.json())
            .then(result => {
                setGanttData(result)
            })
            .catch(error => console.log('error', error));
    }

    const [ganttData, setGanttData] = useState({});
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    };
    const EditSettings = {
        allowEditing: true, //แก้ไขชุดข้อมูลนั้น
        mode: 'Dialog',
        allowTaskbarEditing: false, //แก้ไข taskbar
        allowAdding: true,
        allowDeleting: true,
    }

    // const timelineSettings = {
    //     timelineUnitSize: 65,
    //     topTier: {
    //         unit: 'Day',
    //         format: 'dd/MM/yyyy'
    //     },
    //     bottomTier: {
    //         unit: 'Hour',
    //         format: 'hh:mm a'
    //     }
    // }

    const toolbarOptions = ['Add','Edit','Delete','Cancel','Update','PrevTimeSpan','NextTimeSpan','ExpandAll','CollapseAll','Search','Indent','Outdent']



    console.log(ganttData)

    return (
        <Layout HeadTitle_en={'Timeline'} HeadTitle_th={'ความคืบหน้า'}>
            {ganttData.length ? (
                <GanttComponent dataSource={ganttData} taskFields={taskFields} width={'100%'}
                                // allowSeclection={true}
                                editSettings={EditSettings}
                                allowFiltering={true}
                                allowSorting={true}
                                // timelineSettings={timelineSettings}
                                toolbar={toolbarOptions}
                                enableContextMenu={true}
                                // timezone={'UTC'}
                                // dataFormat={'hh:mm a'}
                >
                    <Inject services={[Edit, Selection,Filter,Sort,Toolbar,ContextMenu]}/>
                </GanttComponent>
            ) : (
                <p>No data available</p>
            )}

        </Layout>
    )
}