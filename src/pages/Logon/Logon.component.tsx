import { useNavigate } from 'react-router-dom';
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './Logon.style';
import { useForm } from 'react-hook-form';
import { Header } from '../../components/Header/Header.component';
import { Input } from '../../components/Input/Input.component';
import { Button } from '../../components/Button/Button.component';
import { MdEmail, MdLock } from 'react-icons/md';
import { UsersController } from '../../services/Api/Auth/Users/Users.controller';
import { zodResolver } from '@hookform/resolvers/zod';
import _z from 'zod';
import { toast } from 'react-toastify';

const schema = _z.object({
    fullname: _z.string({ required_error: 'Campo obrigatório.' }),
    email: _z.string({ required_error: 'Campo obrigatório.' }).email('Email inválido'),
    senha: _z.string({ required_error: 'Campo obrigatório.' }),
});
export default function Logon() {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const data = await UsersController.login(formData);

            if (data.length && data[0].id) {
                navigate('/feed');
                return;
            }

            alert('Usuário ou senha inválido');
        } catch (e) {
            toast.error('Ocorreu um erro');
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder='fullname' leftIcon={<MdEmail />} name='fullname' control={control} />
                            {errors.fullname && <span>E-mail é obrigatório</span>}
                            <Input placeholder='E-mail' leftIcon={<MdEmail />} name='email' control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}
                            <Input type='password' placeholder='Senha' leftIcon={<MdLock />} name='senha' control={control} />
                            {errors.senha && <span>Senha é obrigatório</span>}
                            <Button title='Criar minha conta' variant='secondary' type='submit' />
                        </form>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}
