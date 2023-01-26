import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from './Modal';
import Modal2 from './Modal2';
import { usePrompt } from "./usePrompt";


interface FormInput {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}

interface EmailErrors {
    [required: string]: string; //Arreglar warning-Sin respuesta
    pattern: string;
}

const InitialValues:FormInput = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
}

// @ts-ignore
function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

const Form = () => {
    
    const [ modalStateForm, setModalStateForm ] = useState<boolean>(false)
    const [ confirmStateForm, setConfirmStateForm ] = useState<boolean>(false)

    const [loading, setLoading] = useState<boolean>(false)
    const [response, setResponse] = useState<boolean>(false)
    const [errorResponse, setErrorResponse] = useState<boolean>(false)

    const { register, formState: { errors }, reset, handleSubmit, watch } = useForm<FormInput>();
    // @ts-ignore
    const onSubmit: SubmitHandler<FormInput> = (data:React.FormEvent) => {
        setModalStateForm(!modalStateForm)
        if ( confirmStateForm === true ) {
            setLoading(true)
            fetch("https://formsubmit.co/ajax/jhonatanjcca@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    setLoading(false)
                    console.log(data)
                    reset()
                    if (data.success === "true"){
                        setResponse(true)
                        setTimeout(()=> setResponse(false), 5000) 
                    } else {
                        setErrorResponse(true)
                        setTimeout(()=> setErrorResponse(false), 5000) 
                    }
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)
                    setErrorResponse(true)
                    setTimeout(()=> setErrorResponse(false), 5000) 
                });
            setConfirmStateForm(false)
        }
    }
    
    const EmailErrorsList: EmailErrors = {
        required: "El campo nombre es requerido",
        pattern: "El formato del email es incorrecto"
    }

    //To the alert when leave to page without send form
    usePrompt( "¿Está seguro de salir sin enviar el formulario?",JSON.stringify(watch()) !== JSON.stringify(InitialValues) && Object.keys(watch()).length !== 0)

    return (

        <div className="w-full flex items-center justify-center my-12 px-0">
            <div className="w-5/6 md:w-4/6 lg:w-1/2 border bg-white shadow-xl rounded-md py-12 px-4 xs:px-8 ss:px-8 sm:px-8 md:px-20 lg:px-10 xl:px-20">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                Let’s chat and get a quote!
            </p>
            <form 
                onSubmit={
                    handleSubmit(onSubmit)
                }>
            <div className="items-center mt-12 sm:flex sm:justify-between">
                <div className="sm:w-5/6 flex flex-col">
                    <label className="text-base font-semibold leading-none text-gray-800">
                        Full Name
                    </label>
                    <input type="text" className={`${typeof errors.fullName?.type !== 'string' ? 'border-gray-200':'border border-red-400'} text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded placeholder-gray-100`}  
                        {...register("fullName", { required: true })} 
                    />
                    <p className={`${errors.fullName?.type === 'required' ? '': 'invisible'} text-red-400`}>
                        El campo nombre es requerido
                    </p>
                    {/* {errors.fullName?.type === 'required' && <p className="text-red-400">El campo nombre es requerido</p>} */}
                </div>
                <div className="sm:w-5/6 flex flex-col sm:ml-6 sm:mt-0 mt-4">
                    <label className="text-base font-semibold leading-none text-gray-800">
                        Email
                    </label>
                    <input type="text" className={`${typeof errors.email?.type !==  'string' ? 'border-gray-200 ':'border border-red-400'} text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded placeholder-gray-100`}  
                        {...register('email', {
                            required: true,
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                        })}
                    />
                    {/* {console.log(EmailErrorsList[errors.email?.type])} */}
                    <p className={`${typeof errors.email?.type !== 'string' ? 'invisible': ''} text-red-400`}>
                        {errors.email?.type ?
                            EmailErrorsList[errors.email?.type]
                            // EmailErrorsList[errors.email?.type]
                        :
                            "Espacio que completar"
                        }
                    </p>
                    {/* {errors.email?.type !== null && <p className="text-red-400">{EmailErrorsList[errors.email?.type]}</p>} */}
                    {/* {errors.email?.type === 'pattern' && <p className="text-red-400">El formato del email es incorrecto</p>} */}
                </div>
            </div>
            <div>
                <div className="w-full flex flex-col mt-8">
                {/* <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4"> */}
                    <label className="text-base font-semibold leading-none text-gray-800">
                        Subject
                    </label>
                    <input className={`${typeof errors.subject?.type !== 'string' ? 'border-gray-200 ':'border border-red-400'} text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded placeholder-gray-100`}  
                        {...register("subject", { required: true })} 
                    />
                    
                    <p className={`${errors.subject?.type === 'required' ? '': 'invisible'} text-red-400`}>
                        El campo subject es requerido
                    </p>
                    {/* {errors.subject?.type === 'required' && <p className="text-red-400">El campo subject es requerido</p>} */}
                </div>
                <div className="w-full flex flex-col mt-8">
                    <div className="flex flex-row justify-between">
                        <label className="text-base font-semibold leading-none text-gray-800">
                            Message
                        </label>
                        <label className="text-base leading-none text-gray-600 font-light font-xs">
                            Max. 500 characters
                        </label>
                    </div>
                    <textarea 
                        className={`${typeof errors.message?.type !== 'string' ? 'border-gray-200 ':'border border-red-400'} h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded placeholder-gray-100 resize-none`} 
                        {...register("message", { required: true, maxLength: 500 })} 
                    />
                    {errors.message?.type === 'required' && <p className="text-red-400">El campo message es requerido</p>}
                    {errors.message?.type === 'maxLength' && <p className="text-red-400">Número máximo de caracteres es 500</p>}
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <button type="submit" className={`flex mt-7 mb-5 text-base font-semibold leading-none text-white py-4 px-10 ${loading ? 'bg-indigo-500': 'bg-indigo-700 hover:bg-indigo-600 focus:ring-indigo-700'}  rounded  focus:ring-2 focus:ring-offset-2 focus:outline-none`} disabled={loading}>
                    {loading &&
                        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                    {loading ?
                        "Enviando ..."
                        :
                        "Enviar"
                    }
                </button>
                <Modal
                    modalStateForm={modalStateForm} 
                    setModalStateForm={setModalStateForm}
                    confirmStateForm={confirmStateForm}
                    setConfirmStateForm={setConfirmStateForm}
                />
            </div>
            {response &&

                <div className="bg-green-100 rounded-lg py-5 mb-3 text-base text-green-700 px-3 flex flex-col gap-3 text-center sm:flex-row justify-center items-center w-full" role="alert">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>
                    A simple success alert - check it out!
                </div>
            }
            {errorResponse &&
                <div className="bg-red-100 rounded-lg py-5 mb-3 text-base text-red-700 px-3 flex flex-col gap-3 text-center sm:flex-row justify-center items-center w-full" role="alert">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                    </svg>
                    A simple danger alert - check it out!
                </div>
            }
            </form>
        </div>
        </div>

    )
}

export default Form
