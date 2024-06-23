import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function AddNewProject({onAdd,onCancel}) {
    const modal = useRef();
    const Title = useRef();
    const Discritption = useRef();
    const DueDate = useRef();

    function handleSave() {
        const enteredTitle = Title.current.value;
        const enteredDiscritption = Discritption.current.value;
        const enteredDueDate = DueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDiscritption.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            discritption: enteredDiscritption,
            duedate: enteredDueDate
        });
    }
    return<>
        <Modal ref={modal}>
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Opps ... looks like you forgot to enter a value .</p>
            <p className="text-stone-600 mb-4">You need to enter a vlid input.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>cancel</button></li>
                <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>save</button></li>
            </menu>
            <div>
                <Input type="text" ref={Title} label="Title"/>
                <Input ref={Discritption} label="Description" isTextarea/>
                <Input type="date" ref={DueDate} label="Due Date"/>
            </div>
        </div>
    </>
}