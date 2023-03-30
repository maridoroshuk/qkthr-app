import React, { Component } from 'react';

import { Card } from '@/components/Card';
import { CardContent } from '@/components/Card/CardContent';
import { CardImage } from '@/components/Card/CardImage';
import { CardsContainer } from '@/components/Card/CardsContainer';

import { IFormCardsProps } from './interface';

import './style.css';

export class FormCards extends Component<IFormCardsProps> {
  render() {
    const { formCardList } = this.props;

    return (
      <CardsContainer>
        {formCardList.map(({ name, birthday, country, petList, gender, image }) => {
          return (
            <Card key={self.crypto.randomUUID()}>
              <CardImage image={image} alt={name} />
              <CardContent>
                <h3>{name}</h3>
                <h6 className="card-second-heading">{new Date(birthday).toLocaleDateString()}</h6>
                <p>{gender}</p>
                <p>{country}</p>
                {petList.length > 0 && (
                  <>
                    <p>Favorite pets</p>
                    <ul className="pet-list">
                      {petList.map(({ value, id }) => {
                        return <li key={id}>{value}</li>;
                      })}
                    </ul>
                  </>
                )}
              </CardContent>
            </Card>
          );
        })}
      </CardsContainer>
    );
  }
}
