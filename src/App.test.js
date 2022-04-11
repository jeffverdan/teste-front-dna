import React from 'react';
import { fireEvent, getAllByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('1 - Verifica se o Formulário foi renderizado na tela `', () => {
  it('Será validado se o campo Nome é renderizado', () => {
    render(<App />);
    const nome = screen.getByLabelText(/Nome/i);
    expect(nome).toBeInTheDocument();
    const nomeInput = screen.getByPlaceholderText(/Nome/i);
    expect(nomeInput).toBeInTheDocument();
  });
  it('Será validado se o campo CPF é renderizado', () => {
    render(<App />);
    const CPF = screen.getByLabelText(/CPF/i);
    expect(CPF).toBeInTheDocument();
    const cpfInput = screen.getByPlaceholderText(/000.000.000-00/i);
    expect(cpfInput).toBeInTheDocument();
  });
  it('Será validado se o campo Data de Nascimento é renderizado', () => {
    render(<App />);
    const date = screen.getByLabelText(/Data de Nascimento/i);
    expect(date).toBeInTheDocument();
    const dateInput = screen.getByPlaceholderText("dd/mm/aaaa");
    expect(dateInput).toBeInTheDocument();
  });
  it('Será validado se o campo Gênero é renderizado', () => {
    render(<App />);
    const gen = screen.getByLabelText(/Gênero/i);
    expect(gen).toBeInTheDocument();
    const genInput = screen.getByText(/Prefiro não informar/i);
    expect(genInput).toBeInTheDocument();
  });
  it('Será validado se o campo Estado Civil é renderizado', () => {
    render(<App />);
    const civil = screen.getByText(/Estado Civil/i);
    expect(civil).toBeInTheDocument();
    const marriedInput = screen.getByText(/Selecione um estado civil/i);
    expect(marriedInput).toBeInTheDocument();
  });
  it('Será validado se o campo Conjuge é renderizado se selecionado o Estado Civil: Casado', () => {
    render(<App />);
    userEvent.selectOptions(screen.getByLabelText('Estado Cívil'), screen.getByRole('option', { name: 'Casado' }));
    const married = screen.getByLabelText(/Cônjuge/i);
    expect(married).toBeInTheDocument();
    const marriedInput = screen.getByPlaceholderText(/Digite aqui o nome completo/i);
    expect(marriedInput).toBeInTheDocument();
  });
  it('Será validado se o campo Quantos filhos? é renderizado', () => {
    render(<App />);
    const sons = screen.getByLabelText(/Quantos filhos?/i);
    expect(sons).toBeInTheDocument();
    const sonsdInput = screen.getByText(/Selecione a quantidade de filhos/i);
    expect(sonsdInput).toBeInTheDocument();
  });
  it('Será validado se o Button é renderizado', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();   
  });
});