import { useRef } from "react";
import Input from "./Input";

export default function AddNewProject({onAdd}) {
    const Title = useRef();
    const Discritption = useRef();
    const DueDate = useRef();

    function handleSave() {
        const enteredTitle = Title.current.value;
        const enteredDiscritption = Discritption.current.value;
        const enteredDueDate = DueDate.current.value;


        onAdd({
            title: enteredTitle,
            discritption: enteredDiscritption,
            duedate: enteredDueDate
        });
    }
    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950">cancel</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>save</button></li>
        </menu>
        <div>
            <Input type="text" ref={Title} label="Title"/>
            <Input ref={Discritption} label="Description" isTextarea/>
            <Input type="date" ref={DueDate} label="Due Date"/>
        </div>
    </div>
}