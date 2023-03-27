import React, { Component } from 'react';

import { Form } from '@/components/Form';
import { FormCards } from '@/components/FormCards';

import { IFormPageState } from './interface';

export class FormPage extends Component {
  state: IFormPageState = {
    formCardList: [],
  };

  handleAddCard = (card: IFormCard) => {
    this.setState(({ formCardList }: IFormPageState) => ({
      formCardList: [...formCardList, card],
    }));
  };

  render() {
    const { formCardList } = this.state;

    return (
      <>
        <Form onAddCard={this.handleAddCard} />
        <FormCards formCardList={formCardList} />
      </>
    );
  }
}
