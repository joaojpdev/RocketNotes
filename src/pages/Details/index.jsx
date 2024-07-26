import {Container, Links, Content} from "./styles"
import {Button} from "../../components/Button"
import {Header} from "../../components/Header"
import {Section} from "../../components/Section"
import {Tag} from "../../components/Tag"
import {ButtonText} from "../../components/ButtonText"

export function Details() {
  return(
    <Container>
      <Header />
      <main>
        <Content>

        <ButtonText title="Excluir nota" />

        <h1>Introdução ao React</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, illo, magni libero ea totam dolorem adipisci maxime ab praesentium deserunt, exercitationem eius. Quibusdam maiores repudiandae modi itaque recusandae, expedita explicabo.</p>

        <Section title="Links úteis">
          <Links>
            <li><a href="#">Link 1</a></li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title="express" />
          <Tag title="nodejs" />
        </Section>

        <Button title="Voltar" />
      </Content>
      </main>
    </Container>
  );
};
