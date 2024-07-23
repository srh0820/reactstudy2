import { useForm } from "react-hook-form"


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)


  console.log(watch("DB필드명"))


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
            <li>
                <label>성함</label>
                <input defaultValue="기본값" {...register("wr_name")} />
            </li>
            <li>
                <label>아이디</label>
                <input {...register("exampleRequired", { required: true })} />
            </li>
            <li>
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value='회원가입'/> 
            </li>
        </ul>
    </form>
  )
}