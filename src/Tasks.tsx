import React from 'react';
import './App.css';

type PropsDataType = {
    title: string
    tasks: Array<Taskstype>
    students: Array<string>
}

type Taskstype = {
    title: string
    isDone: boolean
}

export const Tasks = (props: PropsDataType) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {props.tasks.map((t) =>
                    <li><input type="checkbox" checked={t.isDone}/><span>{t.title}</span></li>
                )}
            </ul>
            <ul>
                {
                    props.students.map((t) =>
                        <li>{t}</li>
                    )
                }
            </ul>
        </div>
    )
}