import { useForm } from "react-hook-form";

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

const Form = () => {
    
    const { register, formState: { errors }, handleSubmit } = useForm<FormInput>();
    const onSubmit: SubmitHandler<FormInput> = (data:React.FormEvent) => {
        console.log(data);
    }

    const EmailErrorsList: EmailErrors = {
        required: "El campo nombre es requerido",
        pattern: "El formato del email es incorrecto"
    } 

    return (
        <div className="border border-blue-700 w-full flex items-center justify-center my-12 px-0">
            <div className="w-5/6 md:w-4/6 lg:w-1/2 border border-red-400 bg-white shadow rounded py-12 px-4 xs:px-8 ss:px-8 sm:px-8 md:px-20 lg:px-10 xl:px-20">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                Let’s chat and get a quote!
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border border-purple-400 items-center mt-12 sm:flex sm:justify-between">
                <div className="sm:w-5/6 flex flex-col">
                    <label className="text-base font-semibold leading-none text-gray-800">
                        Full Name
                    </label>
                    <input type="text" className={`${typeof errors.fullName?.type !== 'string' ? '':'border border-red-400'} text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100`}  
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
                    <input type="text" className={`${typeof errors.email?.type !==  'string' ? '':'border border-red-400'} text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100`}  
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
                    <input className={`${typeof errors.subject?.type !== 'string' ? '':'border border-red-400'} text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100`}  
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
                        className={`${typeof errors.message?.type !== 'string' ? '':'border border-red-400'} h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none`} 
                        {...register("message", { required: true, maxLength: 500 })} 
                    />
                    {errors.message?.type === 'required' && <p className="text-red-400">El campo message es requerido</p>}
                    {errors.message?.type === 'maxLength' && <p className="text-red-400">Número máximo de caracteres es 500</p>}
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <button type="submit" className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                    SUBMIT
                </button>
            </div>
            </form>
            </div>
        </div>
    )
}

export default Form
