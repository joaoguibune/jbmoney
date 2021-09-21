import React from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Webapp development</td>
            <td className="deposit">R$12.000,00</td>
            <td>Development</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$2.000,00</td>
            <td>Home</td>
            <td>27/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
