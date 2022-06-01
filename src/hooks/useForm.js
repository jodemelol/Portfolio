import { useState } from "react";
import {helpHttp} from "../helper/helpHttp.js";
export function useForm(initialForm) {
    const [form, setForm] = useState(initialForm);
    const [response, setResponse] = useState(null);
    
    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        helpHttp().post("https://formsubmit.co/ajax/jchivata97@gmail.com",{
            body:form,
            headers: {
                "Content-Type":"application/json",
                Accept:"application/json"
            }
        })
        .then(resp => {
            setResponse(true);
            setForm(initialForm);
            setTimeout(() => setResponse(false),3000)
        })
    }

    return {
        form, response, handleChange, handleSubmit
    }
}
