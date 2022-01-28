import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionMoral: () => void;
}

export function Header({ onOpenNewTransactionMoral }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="at money" />
        <button onClick={onOpenNewTransactionMoral} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
