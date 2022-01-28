import { Container } from "./styles";
// import { useTransactions } from '../../hooks/useTransactions';
import { useEffect } from "react";
import {api} from "../services/api"

export function TransactionTable() {
  // const { transactions } = useTransactions();

  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
         <tr>
          <td>Desenvolvimento</td>
          <td className="deposit">R$12.000,00</td>
          <td>Desenvolvimento</td>
          <td>20/10/1993</td>
         </tr>
         <tr>
          <td>Desenvolvimento</td>
          <td className="withdraw">-R$12.000,00</td>
          <td>Desenvolvimento</td>
          <td>20/10/1993</td>
         </tr>
        </tbody>
      </table>
    </Container>
  )
}