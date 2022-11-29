import { collection, addDoc, getDocs, getFirestore, doc, deleteDoc } from "firebase/firestore"
import { Container, WrapInput, ContainerButton, BesideInputContainer } from './styles'
import firebaseConfig from "../../db/config/firebase"
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { schema, maskPhone } from "../../../utils/validaitionsForm";
// https://www.youtube.com/watch?v=gqbXnYhvB5E&t=264s


const EditUsers = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  console.log(watch("name"));

  const [users, setUsers] = useState([])
  const db = getFirestore(firebaseConfig)
  const usersCollectionRef = collection(db, "users")

  // trás todos os dados que estão cadastrados no banco
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      const usersCadastrados = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setUsers(usersCadastrados)
    }
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Deleta aniversriantes
  async function deleteUser(id) {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc)
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [fone, setFone] = useState("")


  //Add novos usuários no  banco de dados
  async function onSubmit() {
    const user = await addDoc(usersCollectionRef, {
      name, email, birthDate, fone
    })
    console.log(user)
  }

  //https://youtu.be/1uPS8M3U7Nk

  return (

    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> Editar dados do aniversariante </h1>
        <WrapInput>
          <label>
            <input className={name !== "" ? 'has-val input' : 'input'}
              {...register("name", { required: true })}
              value={name}
              onChange={e => setName(e.target.value)} />
            <span className='FocusInput' data-placeholder='Digite o nome completo do aniversariante'></span>
            <span className="MessageError">{errors.name?.message}</span>
          </label>
        </WrapInput>

        <WrapInput>
          <label>
            <input className={email !== "" ? 'has-val input' : 'input'}
              type="text" {...register("email")}
              value={email}
              onChange={e => setEmail(e.target.value)} />
            <span className='FocusInput' data-placeholder='e-mail'></span>
            <span className="MessageError">{errors.email?.message}</span>
          </label>
        </WrapInput>

        <BesideInputContainer>
          <WrapInput>
            <label>
              <input className={birthDate !== "" ? 'has-val input' : 'input'}
                {...register("birthDate")}
                value={birthDate}
                onChange={e => setBirthDate(e.target.value)} />
              <span className='FocusInput' data-placeholder='Data de Nascimento.'></span>
              <span className="MessageError">{errors.birthdate?.message}</span>
            </label>
          </WrapInput>

          <WrapInput>
            <label>
              <input className={fone !== "" ? 'has-val input' : 'input'}
                {...register("fone")}
                value={maskPhone.fone}
                onChange={e => setFone(e.target.value)} />
              <span className='FocusInput' data-placeholder='Fone / Wahts.'></span>
              <span className="MessageError">{errors.fone?.message}</span>
            </label>
          </WrapInput>
        </BesideInputContainer>

        <ContainerButton>
          <button className="login-form-btn" onClick={onSubmit}>Salvar </button>
          <button className="login-form-btn" onClick={() => deleteUser(users.id)}>Deletar </button>
        </ContainerButton>
      </form>
    </Container>
  )
}
export default EditUsers

