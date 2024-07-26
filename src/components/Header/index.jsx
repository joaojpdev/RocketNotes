import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth';
import { Container, Profile, Logout } from "./styles";

export function Header() {
  const { signOut } = useAuth();

  return(
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/joaojpdev.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-Vindo</span>
          <strong>João Pedro</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}